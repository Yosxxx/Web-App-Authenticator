import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SignupPicture from "../assets/SignupPicture.png";
import { Icon } from "@iconify/react";
import supabase from "../config/supabaseClient";

function SignupForm() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    password: "",
    faceEmbed: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Open Camera for Face Scan
  const handleOpenCamera = async () => {
    setIsCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      setError("Failed to access camera.");
    }
  };

  // Capture Face from Camera
  const handleCaptureFace = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Simulating face embedding as base64 image for now
      const faceEmbed = canvas.toDataURL("image/png");
      setFormData({ ...formData, faceEmbed });
      setIsCameraOpen(false);

      // Stop the camera stream
      video.srcObject.getTracks().forEach((track) => track.stop());
    }
  };

  // Stop Camera Stream
  const handleCloseCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop()); // Stop each track
    }
    setIsCameraOpen(false);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id, username, password, faceEmbed } = formData;

    if (!id || !username || !password) {
      setError("ID, Username, and Password are required.");
      return;
    }

    const { error } = await supabase
      .from("users")
      .insert([{ id, username, password, face_embed: faceEmbed || null }]);

    if (error) {
      setError(error.message);
    } else {
      setSuccess("Signup successful! You can now log in.");
      setFormData({ id: "", username: "", password: "", faceEmbed: "" });
    }
  };

  const handleSignInClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center items-center w-full max-w-6xl z-20 px-4 md:px-8">
      {/* Image section */}
      <div className="hidden lg:block relative w-full lg:w-[40%] h-[50vh] lg:h-[78vh]">
        <img
          src={SignupPicture}
          className="w-full h-full object-cover rounded-t-lg lg:rounded-l-[30px] lg:rounded-tr-none"
          alt="Signup Illustration"
        />
      </div>

      {/* Form section */}
      <div className="w-[75vw] md:w-[60vw] lg:w-[30vw] h-[85vh] bg-[#2E313C]/80 p-8 rounded-[30px] flex flex-col gap-6 justify-center">
        <h1 className="text-4xl font-bold bg-gradient-to-b from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text text-center">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {["id", "username", "password"].map((field) => (
            <div key={field}>
              <label className="font-medium text-[#BBC1CF]">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`${field}...`}
                required
                className="w-full pt-1 pb-2 text-[#BBC1CF] border-b border-[#BBC1CF]/50 placeholder-[#BBC1CF]/58 focus:outline-none bg-transparent"
              />
            </div>
          ))}

          {/* Face Embedding Section */}
          <div>
            <label className="font-medium text-[#BBC1CF]">
              Face Embedding (Optional)
            </label>
            {formData.faceEmbed ? (
              <div className="flex items-center gap-4">
                <img
                  src={formData.faceEmbed}
                  alt="Face Preview"
                  className="w-16 h-16 rounded-lg border border-gray-300"
                />
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, faceEmbed: "" })}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Remove
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleOpenCamera}
                className="w-full py-2 bg-[#6366F1] text-white rounded-xl"
              >
                Scan Face
              </button>
            )}
          </div>

          {/* Camera Modal */}
          {isCameraOpen && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-xl w-[90%] md:w-[60%] lg:w-[40%]">
                <h2 className="text-xl font-bold mb-4">Scan Your Face</h2>
                <video ref={videoRef} autoPlay className="w-full rounded-lg" />
                <canvas
                  ref={canvasRef}
                  width="640"
                  height="480"
                  className="hidden"
                />
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={handleCaptureFace}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg"
                  >
                    Capture Face
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseCamera}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Error & Success Messages */}
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          {/* Submit & Sign In */}
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <button
              type="submit"
              className="w-full lg:w-[40%] h-12 bg-[#6366F1] hover:bg-[#5254C7] text-white font-bold rounded-xl"
            >
              Sign Up
            </button>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleSignInClick}
            >
              <p className="text-white font-bold">Sign In</p>
              <Icon icon="tabler:arrow-right" className="w-6 h-6 text-white" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
