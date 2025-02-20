import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center">

      <div className="w-[28vw] h-[78vh] absolute z-20 bg-[#2E313C]/80 p-[2vw] pr-[4vw] pl-[4vw] rounded-[50px] flex flex-col justify-center items-center gap-[2vh]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold tracking-[15px] bg-gradient-to-r from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text">F4</h1>
          <h1 className="text-4xl font-bold tracking-[15px] bg-gradient-to-r from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text">C3</h1>
          <p className="bg-gradient-to-r from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text mt-[1vh]">Face Recognition AI</p>
        </div>
        
        <div className="w-full">
          <div>
            <p className="font-medium bg-gradient-to-b from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text">Email</p>
            <input
              type="text"
              placeholder="Email Address..."
              className="w-full pt-[0.2vh] pb-[0.5vh] mb-3 text-[#BBC1CF] border-b-[1px] border-[#BBC1CF]/50 placeholder-[#BBC1CF]/58 focus:outline-none focus:text-[#BBC1CF]"
            />
          </div>
          <div>
            <p className="font-medium bg-gradient-to-b from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text">Password</p>
            <input
              type="password"
              placeholder="*********"
              className="w-full pt-[0.2vh] pb-[0.5vh] mb-3 text-[#BBC1CF] border-b-[1px] border-[#BBC1CF]/50 placeholder-[#BBC1CF]/58 focus:outline-none focus:text-[#BBC1CF]"
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
              <span className="mx-3 font-bold bg-gradient-to-b from-[#BBC1CF]/40 to-[#95A8C9] text-transparent bg-clip-text">
                or continue with
              </span>
              <span className="flex-grow h-[1px] bg-[#BBC1CF]/40"></span>
            </div>
            <button className="mt-2 p-3">
              <Icon icon="mdi:face-recognition" className="w-[10vh] h-[10vh] text-[#BBC1CF] cursor-pointer" />
            </button>
          </div>
        </div>
        
        <div className="flex gap-[4.9vw]">
          <p className="text-sm text-white mt-6">Don't have an account?</p>
          <p
            className="text-sm font-bold text-white mt-6 cursor-pointer"
            onClick={handleSignUpClick}
          >
            Sign Up Now
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
