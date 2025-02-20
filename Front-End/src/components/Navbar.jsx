import { NavLink } from "react-router-dom";
import { DiReact } from "react-icons/di";
import { FaRobot, FaHandsHelping } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex flex-col items-center gap-5 font-secondary text-customNormalHover lg:flex-row justify-center">
      <NavLink
        to="/built-with"
        className={({ isActive }) =>
          "flex gap-2 items-center transition-all duration-300 ease-in-out " +
          (isActive
            ? "text-customHover scale-105"
            : "hover:text-customHover hover:scale-105")
        }
      >
        <DiReact size={30} />
        Build-With
      </NavLink>
      <span className="hidden lg:block">/</span>
      <NavLink
        to="/our-ai"
        className={({ isActive }) =>
          "flex gap-2 items-center transition-all duration-300 ease-in-out " +
          (isActive
            ? "text-customHover scale-105"
            : "hover:text-customHover hover:scale-105")
        }
      >
        <FaRobot size={30} />
        Our AI
      </NavLink>
      <span className="hidden lg:block">/</span>
      <NavLink
        to="/contribution"
        className={({ isActive }) =>
          "flex gap-2 items-center transition-all duration-300 ease-in-out " +
          (isActive
            ? "text-customHover scale-105"
            : "hover:text-customHover hover:scale-105")
        }
      >
        <FaHandsHelping size={30} />
        Contribution Statement
      </NavLink>
    </div>
  );
}

export default Navbar;
