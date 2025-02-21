import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupPicture from "../assets/SignupPicture.png";
import { Icon } from "@iconify/react";
import BackgroundDot from "../components/BackgroundDot";

function Signup() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/login");
  };

  const handleSignInClick = () => {
    navigate("/login");
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      <BackgroundDot />
      <div className="flex absolute z-20 justify-center items-center">
        <div className="relative w-[32vw] h-[78vh]">
          <img
            src={SignupPicture}
            className="w-full h-full object-cover rounded-l-[30px]"
            alt="Signup Illustration"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#BBC1CF]/30 via-[#95A8C9]/30 to-[#95A8C9]/70 rounded-l-[30px]">
            <p className="absolute top-[2%] right-[5%] text-4xl font-extrabold tracking-widest">F 4</p>
            <p className="absolute top-[9%] right-[4.5%] text-4xl font-extrabold tracking-widest">C 3</p>
          </div>
        </div>
        <div className="w-[25vw] h-[78vh] bg-[#2E313C]/80 p-[1vw] pr-[4vw] pl-[2vw] rounded-tr-[30px] rounded-br-[30px] flex flex-col gap-[3vh]">
          <h1 className="text-5xl font-bold bg-gradient-to-b from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text leading-normal">Sign Up</h1>
          <div className="flex flex-col gap-[6vh]">
            <div>
              <div>
                <p className="font-medium bg-gradient-to-b from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text">Full Name</p>
                <input
                  type="text"
                  placeholder="Name..."
                  className="w-full pt-[0.2vh] pb-[0.5vh] mb-3 text-[#BBC1CF] border-b-[1px] border-[#BBC1CF]/50 placeholder-[#BBC1CF]/58 focus:outline-none focus:text-[#BBC1CF]"
                />
              </div>
              <div>
                <p className="font-medium bg-gradient-to-b from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text">Email</p>
                <input
                  type="text"
                  placeholder="Email Address..."
                  className="w-full pt-[0.2vh] pb-[0.5vh] mb-3 text-[#BBC1CF] border-b-[1px] border-[#BBC1CF]/50 placeholder-[#BBC1CF]/58 focus:outline-none focus:text-[#BBC1CF]"
                />
              </div>
              <div>
                <p className="font-medium bg-gradient-to-b from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text">Username</p>
                <input
                  type="text"
                  placeholder="Username..."
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
              <div>
                <p className="font-medium bg-gradient-to-b from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text">Repeat Password</p>
                <input
                  type="password"
                  placeholder="*********"
                  className="w-full pt-[0.2vh] pb-[0.5vh] mb-3 text-[#BBC1CF] border-b-[1px] border-[#BBC1CF]/50 placeholder-[#BBC1CF]/58 focus:outline-none focus:text-[#BBC1CF]"
                />
              </div>
            </div>
            <div className="flex gap-[3vw]">
              <button
                onClick={handleSignUp}
                className="w-[10vw] h-[5vh] bg-[#6366F1] hover:bg-[#5254C7] border-1 border-[#BBC1CF] text-white font-bold rounded-xl transition cursor-pointer"
              >
                Sign Up
              </button>
              <div 
                className="flex justify-center items-center gap-[0.5vw] cursor-pointer"
                onClick={handleSignInClick}
              >
                <p className="text-white font-bold py-2 rounded-xl transition">Sign In</p>
                <Icon icon="tabler:arrow-right" className="w-[3.5vh] h-[3.5vh] text-white mt-[0.3vh]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
