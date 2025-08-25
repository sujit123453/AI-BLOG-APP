import React from "react";
import { Copyright } from "lucide-react";
import { assets, footer_data } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col md:flex-row items-start justify-between gap-10 py-10 border border-gray-500/30 text-gray-500 bg-primary/3">
        <div>
          <div className="flex gap-3 text-lg w-32 sm:w-44">
            <img src={assets.favicon} className="h-10 " alt="logo" />
            <h2 className="py-1 text-2xl font-semibold">BLOGIFY</h2>
          </div>
          <p className="mt-6 max-w-[410px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            error doloremque quam vero sint sapiente, totam enim distinctio
            dignissimos rerum?
          </p>
        </div>
        <div className="flex flex-wrap  justify-between w-full md:w-[45%] gap-5">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-gray-400 " />
      <div className="flex py-2 text-sm  items-center gap-2 justify-center text-gray-400">
        Copyright 2025{" "}
        <span>
          <Copyright size={20} />
        </span>
        BLOGIFY - All right reserved.
      </div>
    </div>
  );
};

export default Footer;
