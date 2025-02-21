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
function AnimatedIcon({ IconComponent, size = 40 }) {
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
    <div className="w-[] container mx-auto my-15 flex flex-col gap-y-40">
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
          className="lg:mr-40"
        ></Lottie>
      </div>

      {/* React Icons Section */}
      <div className="flex flex-col-reverse lg:flex-row gap-x-50">
        <Content
          title={ReactIconsTitle}
          description={ReactIconsDescription}
          install={ReactIconInstall}
          titleColor={ReactIconsTitleColor}
        />
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-4 p-4 w-full place-items-center text-zinc-600">
          {/* react-icons/di */}
          <AnimatedIcon IconComponent={DiReact} size={40} />
          <AnimatedIcon IconComponent={DiJavascript1} size={40} />
          <AnimatedIcon IconComponent={DiNodejsSmall} size={40} />
          <AnimatedIcon IconComponent={DiCss3} size={40} />

          {/* react-icons/fa */}
          <AnimatedIcon IconComponent={FaRobot} size={40} />
          <AnimatedIcon IconComponent={FaCoffee} size={40} />
          <AnimatedIcon IconComponent={FaAppleAlt} size={40} />
          <AnimatedIcon IconComponent={FaStar} size={40} />
          <AnimatedIcon IconComponent={FaRocket} size={40} />
          <AnimatedIcon IconComponent={FaBeer} size={40} />
          <AnimatedIcon IconComponent={FaHeart} size={40} />
          <AnimatedIcon IconComponent={FaCloud} size={40} />
          <AnimatedIcon IconComponent={FaMusic} size={40} />
          <AnimatedIcon IconComponent={FaSmile} size={40} />

          {/* react-icons/ai */}
          <AnimatedIcon IconComponent={AiFillGithub} size={40} />
          <AnimatedIcon IconComponent={AiFillTwitterCircle} size={40} />
          <AnimatedIcon IconComponent={AiFillAndroid} size={40} />
          <AnimatedIcon IconComponent={AiFillApple} size={40} />
          <AnimatedIcon IconComponent={AiFillLinkedin} size={40} />
          <AnimatedIcon IconComponent={AiFillFacebook} size={40} />

          {/* react-icons/bs */}
          <AnimatedIcon IconComponent={BsFillAlarmFill} size={40} />
          <AnimatedIcon IconComponent={BsFillCalendarFill} size={40} />
          <AnimatedIcon IconComponent={BsFillCameraFill} size={40} />
          <AnimatedIcon IconComponent={BsFillChatFill} size={40} />
          <AnimatedIcon IconComponent={BsFillEmojiSmileFill} size={40} />
          <AnimatedIcon IconComponent={BsFillLightningFill} size={40} />

          {/* react-icons/md */}
          <AnimatedIcon IconComponent={MdFavorite} size={40} />
          <AnimatedIcon IconComponent={MdHome} size={40} />
          <AnimatedIcon IconComponent={MdSettings} size={40} />
          <AnimatedIcon IconComponent={MdEmail} size={40} />
          <AnimatedIcon IconComponent={MdPhone} size={40} />
          <AnimatedIcon IconComponent={MdInfo} size={40} />
          <AnimatedIcon IconComponent={MdBuild} size={40} />
          <AnimatedIcon IconComponent={MdCloudQueue} size={40} />
          <AnimatedIcon IconComponent={MdLock} size={40} />
          <AnimatedIcon IconComponent={MdVisibility} size={40} />
          <AnimatedIcon IconComponent={MdOutlineAccessibility} size={40} />
          <AnimatedIcon IconComponent={MdWifi} size={40} />
          <AnimatedIcon IconComponent={MdSecurity} size={40} />
          <AnimatedIcon IconComponent={MdFingerprint} size={40} />
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
