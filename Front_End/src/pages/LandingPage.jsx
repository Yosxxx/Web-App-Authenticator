import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProfileComponent from "../components/ProfileComponent";
import BuiltWith from "../components/BuiltWith";
import OurAI from "../components/OurAI";
import ContributionStatement from "../components/ContributionStatement";
import Card from "../components/Card";
function LandingPage() {
  return (
    <>
      <div className="min-h-screen">
        <ProfileComponent />

        <Navbar />

        <Routes>
          <Route path="/built-with" element={<BuiltWith />} />
          <Route path="/our-ai" element={<OurAI />} />
          <Route path="/contribution" element={<ContributionStatement />} />
        </Routes>
      </div>
    </>
  );
}

export default LandingPage;
