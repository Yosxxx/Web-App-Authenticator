import React, { useState, useEffect } from "react";
import Content from "./Content";
import Lottie from "lottie-react";

// Logos
import ReactLogo from "../assets/react-logo-animation.json";
import SupabaseLogo from "../assets/Supabase.json";

// React
const ReactTitle = "REACT.JS + VITE.JS";
const ReactDescription =
  "Vite.js is a JavaScript tool created to speed up the web development process and provide developers with a more efficient experience. Although this tool, developed by Evan You, was originally created for Vue.js projects, it can also be used for JavaScript and TypeScript projects in general.";
const ReactInstall = '$ npm create vite@latest "project-name"';
const ReactTitleColor = "#33ced8"; // from --color-bluish

// React Icons
const ReactIconsTitle = "REACT ICONS";
const ReactIconsDescription =
  "Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports so you only include the icons you actually use.";
const ReactIconInstall = "npm install react-icons --save";
const ReactIconsTitleColor = "#f0be72"; // from --color-orange

// Supabase
const SupabaseTitle = "SUPABASE";
const SupabaseDescription =
  "Supabase is an open source Firebase alternative. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.";
const SupabaseInstall =
  "npm install --save react-supabase @supabase/supabase-js";
const SupabaseTitleColor = "#00684a"; // from --color-greenish

// Import icons from react-icons
import { DiReact, DiJavascript1, DiNodejsSmall, DiCss3 } from "react-icons/di";
import {
  FaRobot,
  FaCoffee,
  FaAppleAlt,
  FaStar,
  FaRocket,
  FaBeer,
  FaHeart,
  FaCloud,
  FaMusic,
  FaSmile,
} from "react-icons/fa";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillAndroid,
  AiFillApple,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import {
  BsFillAlarmFill,
  BsFillCalendarFill,
  BsFillCameraFill,
  BsFillChatFill,
  BsFillEmojiSmileFill,
  BsFillLightningFill,
} from "react-icons/bs";
import {
  MdFavorite,
  MdHome,
  MdSettings,
  MdEmail,
  MdPhone,
  MdInfo,
  MdBuild,
  MdCloudQueue,
  MdLock,
  MdVisibility,
  MdOutlineAccessibility,
  MdWifi,
  MdSecurity,
  MdFingerprint,
} from "react-icons/md";

// AnimatedIcon Component: randomly highlights (turns red) for 500ms at random intervals
function AnimatedIcon({ IconComponent, size = 20 }) {
  const [lit, setLit] = useState(false);

  useEffect(() => {
    const triggerHighlight = () => {
      setLit(true);
      setTimeout(() => setLit(false), 500); // Highlight lasts 500ms
    };

    // Every 2 seconds, with a 30% chance, trigger the highlight
    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        triggerHighlight();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`transition-colors duration-300 ${
        lit ? "text-red-500" : "text-current"
      }`}
    >
      <IconComponent size={size} />
    </div>
  );
}

function BuiltWith() {
  return (
    <div className="w-[80vw] container mx-auto my-15 flex flex-col gap-y-20">
      {/* React Section */}
      <div className="flex flex-col-reverse lg:flex-row gap-x-50 items-center">
        <Content
          title={ReactTitle}
          description={ReactDescription}
          install={ReactInstall}
          titleColor={ReactTitleColor}
        />
        <Lottie
          animationData={ReactLogo}
          style={{ width: "100%", height: "100%" }}
        ></Lottie>
      </div>

      {/* React Icons Section */}
      <div className="flex flex-col-reverse lg:flex-row gap-x-50 lg:gap-x-10 xl:gap-x-50">
        <Content
          title={ReactIconsTitle}
          description={ReactIconsDescription}
          install={ReactIconInstall}
          titleColor={ReactIconsTitleColor}
        />
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-4 p-4 w-full place-items-center text-zinc-600">
          {/* react-icons/di */}
          <AnimatedIcon IconComponent={DiReact} size={20} />
          <AnimatedIcon IconComponent={DiJavascript1} size={20} />
          <AnimatedIcon IconComponent={DiNodejsSmall} size={20} />
          <AnimatedIcon IconComponent={DiCss3} size={20} />

          {/* react-icons/fa */}
          <AnimatedIcon IconComponent={FaRobot} size={20} />
          <AnimatedIcon IconComponent={FaCoffee} size={20} />
          <AnimatedIcon IconComponent={FaAppleAlt} size={20} />
          <AnimatedIcon IconComponent={FaStar} size={20} />
          <AnimatedIcon IconComponent={FaRocket} size={20} />
          <AnimatedIcon IconComponent={FaBeer} size={20} />
          <AnimatedIcon IconComponent={FaHeart} size={20} />
          <AnimatedIcon IconComponent={FaCloud} size={20} />
          <AnimatedIcon IconComponent={FaMusic} size={20} />
          <AnimatedIcon IconComponent={FaSmile} size={20} />

          {/* react-icons/ai */}
          <AnimatedIcon IconComponent={AiFillGithub} size={20} />
          <AnimatedIcon IconComponent={AiFillTwitterCircle} size={20} />
          <AnimatedIcon IconComponent={AiFillAndroid} size={20} />
          <AnimatedIcon IconComponent={AiFillApple} size={20} />
          <AnimatedIcon IconComponent={AiFillLinkedin} size={20} />
          <AnimatedIcon IconComponent={AiFillFacebook} size={20} />

          {/* react-icons/bs */}
          <AnimatedIcon IconComponent={BsFillAlarmFill} size={20} />
          <AnimatedIcon IconComponent={BsFillCalendarFill} size={20} />
          <AnimatedIcon IconComponent={BsFillCameraFill} size={20} />
          <AnimatedIcon IconComponent={BsFillChatFill} size={20} />
          <AnimatedIcon IconComponent={BsFillEmojiSmileFill} size={20} />
          <AnimatedIcon IconComponent={BsFillLightningFill} size={20} />

          {/* react-icons/md */}
          <AnimatedIcon IconComponent={MdFavorite} size={20} />
          <AnimatedIcon IconComponent={MdHome} size={20} />
          <AnimatedIcon IconComponent={MdSettings} size={20} />
          <AnimatedIcon IconComponent={MdEmail} size={20} />
          <AnimatedIcon IconComponent={MdPhone} size={20} />
          <AnimatedIcon IconComponent={MdInfo} size={20} />
          <AnimatedIcon IconComponent={MdBuild} size={20} />
          <AnimatedIcon IconComponent={MdCloudQueue} size={20} />
          <AnimatedIcon IconComponent={MdLock} size={20} />
          <AnimatedIcon IconComponent={MdVisibility} size={20} />
          <AnimatedIcon IconComponent={MdOutlineAccessibility} size={20} />
          <AnimatedIcon IconComponent={MdWifi} size={20} />
          <AnimatedIcon IconComponent={MdSecurity} size={20} />
          <AnimatedIcon IconComponent={MdFingerprint} size={20} />
        </div>
      </div>

      {/* Supabase Section */}
      <div className="flex flex-col-reverse lg:flex-row gap-x-50 items-center">
        <Content
          title={SupabaseTitle}
          description={SupabaseDescription}
          install={SupabaseInstall}
          titleColor={SupabaseTitleColor}
        />
        <Lottie
          animationData={SupabaseLogo}
          style={{ width: "100%", height: "100%" }}
          className="lg:mr-20"
        ></Lottie>
      </div>
    </div>
  );
}

export default BuiltWith;
