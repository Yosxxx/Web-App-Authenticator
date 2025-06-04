import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Transition({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("slideIn");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("slideOut");
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === "slideOut") {
      setDisplayLocation(location);
      setTransitionStage("slideIn");
    }
  };

  return (
    <div className="transition-wrapper">
      {/* Render only the `displayLocation`'s children during animation */}
      <div
        className={`transition-stage-${transitionStage}`}
        onAnimationEnd={handleAnimationEnd}
      >
        {React.cloneElement(children, {
          location: displayLocation,
        })}
      </div>
    </div>
  );
}

export default Transition;
