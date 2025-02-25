import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

function LoginForm({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/built-with");
  };

  return (
    <div className="w-[60vw] md:w-[50vw] lg:w-[35vw] h-[78vh] md:h-[78vh] lg:h-[78vh] bg-[#2E313C]/80 p-[6vw] md:p-[4vw] lg:p-[2vw] lg:pr-[4vw] lg:pl-[4vw] rounded-3xl md:rounded-3xl lg:rounded-3xl flex flex-col justify-center items-center gap-4 md:gap-[2vh] max-w-lg z-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold tracking-[15px] bg-gradient-to-r from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text">
          F4
        </h1>
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold tracking-[15px] bg-gradient-to-r from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text">
          C3
        </h1>
        <p className="bg-gradient-to-r from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text mt-2 md:mt-[1vh] text-sm md:text-base">
          Face Recognition AI
        </p>
      </div>

      <div className="w-full">
        <div className="mb-4">
          <p className="font-medium bg-gradient-to-b from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text">
            Email
          </p>
          <input
            type="text"
            placeholder="Email Address..."
            className="w-full pt-1 pb-2 text-[#BBC1CF] border-b-[1px] border-[#BBC1CF]/50 placeholder-[#BBC1CF]/58 focus:outline-none focus:text-[#BBC1CF] bg-transparent"
          />
        </div>

        <div className="mb-4">
          <p className="font-medium bg-gradient-to-b from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text">
            Password
          </p>
          <input
            type="password"
            placeholder="*********"
            className="w-full pt-1 pb-2 text-[#BBC1CF] border-b-[1px] border-[#BBC1CF]/50 placeholder-[#BBC1CF]/58 focus:outline-none focus:text-[#BBC1CF] bg-transparent"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-[#6366F1] hover:bg-[#5254C7] border-1 border-[#BBC1CF] text-white font-bold py-2 rounded-xl transition cursor-pointer"
        >
          Continue
        </button>

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
              className="w-16 h-16 md:w-[8vh] lg:w-[10vh] md:h-[8vh] lg:h-[10vh] text-[#BBC1CF] cursor-pointer"
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-[3vw] lg:gap-[4.9vw]">
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
