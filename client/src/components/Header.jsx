import { WandSparkles, Search } from "lucide-react";
import React, { useRef } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };
  const onClear = () => {
    setInput("");
    inputRef.current.value = "";
  };
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <div
          className="inline-flex items-center justify-center gap-4 px-6 py-1.5
        mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm cursor-pointer hover:text-primary"
        >
          <p>New: AI feature integrated</p>
          {/* <img src={assets.star_icon} className="w-2.5" alt="" /> */}
          <WandSparkles className="text-primary" size={20} />
        </div>
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700 items-center mx-auto">
          The Future is Intelligent – <br />
          <span className=" text-primary text-3xl sm:text-6xl font-semibold sm:leading-16  items-center ">
            blogging platform...
          </span>
        </h1>
        <p className="my-6 max-w-2xl m-auto sm:my-8 max-sm:text-xs text-gray-800">
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it's one word or a thousand, yout story
          starts right here.
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-lg mx-auto max-sm:scale-75 border border-gray-300 bg-white rounded overflow-hidden p-3"
        >
          <div className="flex gap-2 ">
            <Search
              size={40}
              className="opacity-80 text-primary pt-1 cursor-pointer"
            />
            <input
              ref={inputRef}
              className="outline-none w-full pl-2"
              type="text"
              placeholder="Search for blogs..."
            />
          </div>
          <button
            className="bg-primary text-white py-2 px-8 rounded hover:scale-105 cursor-pointer transition-all   "
            type="submit"
          >
            Apply
          </button>
        </form>
      </div>
      <div className="text-center">
        {input && (
          <button
            onClick={onClear}
            className="border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm bg-primary/5 text-primary transition hover:scale-110 duration-200 cursor-pointer"
          >
            Clear Search
          </button>
        )}
      </div>
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-80"
      />
    </div>
  );
};

export default Header;
