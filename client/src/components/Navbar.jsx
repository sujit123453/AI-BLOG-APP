import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { navigate, token } = useAppContext();

  return (
    <div>
      <div className="flex items-center  justify-between py-5 mx-8 sm:mx-20 lg:mx-32">
        <div
          onClick={() => navigate("/")}
          className="flex gap-3 items-center cursor-pointer justify-center"
        >
          <img
            className="h-10 aspect-square "
            src={assets.favicon}
            alt="logo"
          />
          <h1 className="text-2xl font-bold text-gray-800">BLOGIFY</h1>
        </div>
        <button
          onClick={() => navigate("/admin")}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
        >
          {token ? "Dashboard" : "Login"}

          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
