import pfp from "../assets/pfp.png";
import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

function ProfileComponent() {
  const [id, setId] = useState("");

  useEffect(() => {
    // Fetch from local storage (if stored during login)
    const storedId = localStorage.getItem("id");
    setId(storedId);
  }, []);

  return (
    <div className="container px-5 flex flex-col-reverse lg:flex-row py-20 md:px-40 justify-center mx-auto gap-20 items-center font-primary text-primary text-primary-gradient">
      <div className="flex-1 text-center">
        <h1 className="text-center text-4xl md:text-6xl pb-8 text-oran ge">
          Welcome {id}
        </h1>
        <p className="text-sm md:text-lg">
          City Lights is a suite of beautiful dark theme goodies for Atom,
          Sublime Text 3 & Visual Studio Code
        </p>
      </div>
      <div>
        <img src={pfp} className="w-full h-full object-cover" alt="Profile" />
      </div>
    </div>
  );
}

export default ProfileComponent;
