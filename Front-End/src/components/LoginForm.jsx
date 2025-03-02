// LoginForm.jsx

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import supabase from "../config/supabaseClient";

function LoginForm({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const scanIntervalRef = useRef(null);

  const [formData, setFormData] = useState({ id: "", password: "" });
  const [error, setError] = useState("");
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [scanStatus, setScanStatus] = useState("");

  // Handle regular login (by ID and password)
  const handleLogin = async () => {
    const { id, password } = formData;
    if (!id || !password) {
      setError("ID and password are required.");
      return;
    }
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .eq("password", password)
      .single();

    if (error || !data) {
      setError("Invalid ID or password.");
    } else {
      setIsAuthenticated(true);
      navigate("/built-with");
    }
  };

  // Helper: Compute Euclidean distance between two embedding arrays
  const euclideanDistance = (a, b) => {
    if (a.length !== b.length) return Infinity;
    const sumSq = a.reduce(
      (sum, aVal, idx) => sum + Math.pow(aVal - b[idx], 2),
      0
    );
    return Math.sqrt(sumSq);
  };

  const cleanupCamera = () => {
    if (scanIntervalRef.current) {
      clearInterval(scanIntervalRef.current);
      scanIntervalRef.current = null;
    }
    
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    
    setIsCameraOpen(false);
    setScanStatus("");
  };

  // Face Login: Open camera, capture face, then compare embedding with stored ones
  const handleFaceLogin = async () => {
    setError(""); // clear previous error
    setIsCameraOpen(true);
    setScanStatus("Initializing camera...");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;

        videoRef.current.onloadedmetadata = () => {
          setScanStatus("Looking for your face...");
          startFaceScan();
        };
      }
    } catch (err) {
      setError("Failed to access camera.");
      cleanupCamera();
    }
  };

  const startFaceScan = () => {
    // Scan every 1.5 seconds to avoid overwhelming the API
    scanIntervalRef.current = setInterval(async () => {
      try {
        await handleCaptureFace();
      } catch (err) {
        console.error("Error during face scan:", err);
        // Don't stop scanning on error, just continue
        setScanStatus("Error during scan. Retrying...");
      }
    }, 3000);
  };

  // Capture face image, get embedding from backend, and compare with DB records
  const handleCaptureFace = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas){
      return;
    } 

    setScanStatus("Capturing face...");

    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const faceImage = canvas.toDataURL("image/png");
    const base64Image = faceImage.split(",")[1];

    try {
      // Get embedding from your Python API
      setScanStatus("Processing face...");
      const response = await fetch("http://127.0.0.1:5000/get-embedding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64Image }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.error === "No face detected") {
          setScanStatus("No face detected. Please position your face in the frame.");
          return; // Continue scanning
        } else {
          throw new Error(errorData.error || "API request failed");
        }
      }

      const result = await response.json();
      if (!result.embedding) {
        setScanStatus("No face detected. Please position your face in the frame.");
        return;
      }
      const capturedEmbedding = result.embedding; // This is an array
      setScanStatus("Matching face...");
      // Retrieve all users with stored face embeddings
      const { data: users, error: supabaseError } = await supabase
        .from("users")
        .select("id, face_embed");
      if (supabaseError || !users) {
        setError("Error retrieving user data.");
        cleanupCamera();
        return;
      }

      // Iterate through users and compare embeddings
      const threshold = 0.9; // adjust based on testing
      let matchedUser = null;
      for (const user of users) {
        if (user.face_embed) {
          // user.face_embed should be stored as an array in Supabase
          const distance = euclideanDistance(
            capturedEmbedding,
            user.face_embed
          );
          if (distance < threshold) {
            matchedUser = user;
            break;
          }
        }
      }

      if (matchedUser) {
        // If a matching user is found, log them in (you might also set session/token)
        setScanStatus("Face recognized! Logging in...");
        // Brief delay to show the success message
        setTimeout(() => {
          cleanupCamera();
          setIsAuthenticated(true);
          navigate("/built-with");
        }, 800);
      } else {
        setScanStatus("Face not recognized. Still scanning...");
      }
    } catch (error) {
      console.error(error);
      setScanStatus("Error processing face. Retrying...");
    }
  };

  useEffect(() => {
    return () => {
      cleanupCamera();
    };
  }, []);

  const handleSignUpClick = () => navigate("/signup");

  return (
    <div className="w-[60vw] md:w-[50vw] lg:w-[35vw] h-[78vh] bg-[#2E313C]/80 p-[6vw] md:p-[4vw] lg:p-[2vw] rounded-3xl flex flex-col justify-center items-center gap-4 max-w-lg z-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold tracking-[15px] bg-gradient-to-r from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text">
          F4C3
        </h1>
        <p className="bg-gradient-to-r from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text mt-2 text-base">
          Face Recognition AI
        </p>
      </div>

      <div className="w-full">
        {/* ID Input */}
        <div className="mb-4">
          <p className="font-medium bg-gradient-to-b from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text">
            ID
          </p>
          <input
            type="text"
            name="id"
            placeholder="Enter Your ID..."
            value={formData.id}
            onChange={(e) => setFormData({ ...formData, id: e.target.value })}
            className="w-full pt-1 pb-2 text-[#BBC1CF] border-b border-[#BBC1CF]/50 placeholder-[#BBC1CF]/58 focus:outline-none bg-transparent"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <p className="font-medium bg-gradient-to-b from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text">
            Password
          </p>
          <input
            type="password"
            name="password"
            placeholder="*********"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full pt-1 pb-2 text-[#BBC1CF] border-b border-[#BBC1CF]/50 placeholder-[#BBC1CF]/58 focus:outline-none bg-transparent"
          />
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Regular Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-[#6366F1] hover:bg-[#5254C7] text-white font-bold py-2 rounded-xl transition cursor-pointer"
        >
          Continue
        </button>

        {/* OR Face Login Section */}
        <div className="flex flex-col items-center mt-4">
          <div className="flex items-center w-full mt-4">
            <span className="flex-grow h-[1px] bg-[#BBC1CF]/40"></span>
            <span className="mx-3 text-sm font-bold bg-gradient-to-b from-[#BBC1CF]/40 to-[#95A8C9] text-transparent bg-clip-text">
              or continue with
            </span>
            <span className="flex-grow h-[1px] bg-[#BBC1CF]/40"></span>
          </div>
          <button className="mt-2 p-3" onClick={handleFaceLogin}>
            <Icon
              icon="mdi:face-recognition"
              className="w-16 h-16 text-[#BBC1CF] cursor-pointer"
            />
          </button>
        </div>
      </div>

      {/* Hidden Video & Canvas for Face Capture */}
      {isCameraOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[90%] md:w-[60%] lg:w-[40%]">
            <h2 className="text-xl font-bold mb-4">Scan Your Face</h2>
            {scanStatus && <p className="text-gray-600 mb-4">{scanStatus}</p>}
            <video ref={videoRef} autoPlay className="w-full h-full rounded-lg" />
            <canvas
              ref={canvasRef}
              width="640"
              height="480"
              className="hidden"
            />
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={cleanupCamera}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Link */}
      <div className="flex flex-col md:flex-row items-center gap-2">
        <p className="text-sm text-white">Don't have an account?</p>
        <p
          className="text-sm font-bold text-white cursor-pointer hover:text-[#6366F1] transition-colors"
          onClick={handleSignUpClick}
        >
          Sign Up Now
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
