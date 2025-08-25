import { Home, List, MessageCircleCode } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r border-gray-200 min-h-full pt-6 max-sm:px-2 max-md:px-3">
      <NavLink
        end={true}
        to="/admin"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer ${
            isActive && "bg-primary/10 border-r-4 border-primary"
          }`
        }
      >
        <Home className="min-w-4 w-5" />
        <p className="hidden md:inline-block">Dashboard</p>
      </NavLink>
      <NavLink
        end={true}
        to="/admin/addBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer ${
            isActive && "bg-primary/10 border-r-4 border-primary"
          }`
        }
      >
        <img src={assets.add_icon} className="min-w-4 w-5" />
        <p className="hidden md:inline-block">Add blogs</p>
      </NavLink>
      <NavLink
        end={true}
        to="/admin/listBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer ${
            isActive && "bg-primary/10 border-r-4 border-primary"
          }`
        }
      >
        <List className="min-w-4 w-5" />
        <p className="hidden md:inline-block">List blogs</p>
      </NavLink>
      <NavLink
        end={true}
        to="/admin/comments"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer ${
            isActive && "bg-primary/10 border-r-4 border-primary"
          }`
        }
      >
        <MessageCircleCode className="min-w-4 w-5" />
        <p className="hidden md:inline-block">All comments</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
