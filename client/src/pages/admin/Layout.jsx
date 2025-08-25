import React from "react";
import { assets } from "../../assets/assets";
import { Outlet } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Sidebar from "../../components/admin/Sidebar";
import { useAppContext } from "../../context/AppContext";

const Layout = () => {
  const { axios, setToken, navigate } = useAppContext();
  const logout = () => {
    localStorage.removeItem("token");
    axios.defaults.headers.common["Authorizaion"] = null;
    setToken(null);
    navigate("/");
  };
  return (
    <>
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
          onClick={logout}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
        >
          Logout
          <ArrowRight size={20} />
        </button>
      </div>
      <div className="flex h=[calc(100vh-70px)]">
        <Sidebar />
        <Outlet /> {/*usign these we import the child element */}
      </div>
    </>
  );
};

export default Layout;
