import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import supabase from "../config/supabaseClient";

function LoginForm({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ id: "", password: "" });
  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Login
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
            onChange={handleChange}
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
            onChange={handleChange}
            className="w-full pt-1 pb-2 text-[#BBC1CF] border-b border-[#BBC1CF]/50 placeholder-[#BBC1CF]/58 focus:outline-none bg-transparent"
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-[#6366F1] hover:bg-[#5254C7] text-white font-bold py-2 rounded-xl transition cursor-pointer"
        >
          Continue
        </button>

        {/* Optional Face Icon */}
        <div className="flex flex-col items-center mt-4">
          <div className="flex items-center w-full mt-4">
            <span className="flex-grow h-[1px] bg-[#BBC1CF]/40"></span>
            <span className="mx-3 text-sm font-bold bg-gradient-to-b from-[#BBC1CF]/40 to-[#95A8C9] text-transparent bg-clip-text">
              or continue with
            </span>
            <span className="flex-grow h-[1px] bg-[#BBC1CF]/40"></span>
          </div>
          <button className="mt-2 p-3">
            <Icon
              icon="mdi:face-recognition"
              className="w-16 h-16 text-[#BBC1CF] cursor-pointer"
            />
          </button>
        </div>
      </div>

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
