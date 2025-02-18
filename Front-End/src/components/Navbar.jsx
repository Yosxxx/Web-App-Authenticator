import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center items-center gap-5 text-2xl h-16">
      <Link to="/built-with">Build-With</Link>
      <p>/</p>
      <Link to="/our-ai">Our AI</Link>
      <p>/</p>
      <Link to="/contribution">Contribution Statement</Link>
    </div>
  );
}

export default Navbar;
