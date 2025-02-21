import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupPicture from "../assets/SignupPicture.png";
import { Icon } from "@iconify/react";

function SignupForm() {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate("/login");
    };

    const handleSignInClick = () => {
        navigate("/login");
    };

    return (
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center w-full max-w-6xl z-20 px-4 md:px-8">
            {/* Image section - hidden on mobile */}
            <div className="hidden lg:block relative w-full lg:w-[40%] h-[50vh] lg:h-[78vh]">
                <img
                    src={SignupPicture}
                    className="w-full h-full object-cover rounded-t-lg lg:rounded-l-[30px] lg:rounded-tr-none"
                    alt="Signup Illustration"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#BBC1CF]/30 via-[#95A8C9]/30 to-[#95A8C9]/70 rounded-t-lg lg:rounded-l-[30px] lg:rounded-tr-none">
                    <p className="absolute top-[2%] right-[5%] text-3xl lg:text-4xl font-extrabold tracking-widest">F 4</p>
                    <p className="absolute top-[9%] right-[4.5%] text-3xl lg:text-4xl font-extrabold tracking-widest">C 3</p>
                </div>
            </div>

            {/* Form section */}
            <div className="w-[75vw] md:w-[60vw] lg:w-[30vw] h-[85vh] md:h-[85vh] lg:h-[78vh] bg-[#2E313C]/80 p-8 md:p-8 lg:p-10 rounded-[30px] md:rounded-tr-[30px] md:rounded-[30px] lg:rounded-br-[30px] lg:rounded-tr-[30px] lg:rounded-tl-none lg:rounded-bl-none flex flex-col gap-6 md:gap-8 lg:gap-2 justify-center">
                <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text leading-normal text-center lg:text-left">
                    Sign Up
                </h1>

                <div className="flex flex-col gap-6 md:gap-8">
                    {/* Input Fields */}
                    <div className="space-y-4">
                        {["Full Name", "Email", "Username", "Password", "Repeat Password"].map((label, index) => (
                            <div key={index}>
                                <p className="font-medium bg-gradient-to-b from-[#BBC1CF] to-[#95A8C9] text-transparent bg-clip-text">
                                    {label}
                                </p>
                                <input
                                    type={label.includes("Password") ? "password" : "text"}
                                    placeholder={`${label}...`}
                                    className="w-full pt-1 pb-2 text-[#BBC1CF] border-b-[1px] border-[#BBC1CF]/50 placeholder-[#BBC1CF]/58 focus:outline-none focus:text-[#BBC1CF] bg-transparent"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-[5vw]">
                        <button
                            onClick={handleSignUp}
                            className="w-full lg:w-[40%] h-12 bg-[#6366F1] hover:bg-[#5254C7] border-1 border-[#BBC1CF] text-white font-bold rounded-xl transition cursor-pointer"
                        >
                            Sign Up
                        </button>
                        <div
                            className="flex justify-center items-center gap-2 cursor-pointer"
                            onClick={handleSignInClick}
                        >
                            <p className="text-white font-bold py-2 rounded-xl transition">Sign In</p>
                            <Icon
                                icon="tabler:arrow-right"
                                className="w-6 h-6 md:w-8 md:h-8 lg:w-6 lg:h-6 text-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupForm;
