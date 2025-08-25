import React, { useState } from "react";
import { blog_data, blogCategories } from "../assets/assets";
import BlogLists from "./BlogLists";
import { useAppContext } from "../context/AppContext";

const BlogSection = () => {
  const [menu, setMenu] = useState("All");
  const { blogs, input } = useAppContext();

  const searchFilteredBlogs = () => {
    if (input == "") {
      return blogs;
    }
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(input.toLowerCase()) ||
        blog.category.toLowerCase().includes(input.toLowerCase())
    );
  };

  const filteredBlogs = searchFilteredBlogs().filter((blog) =>
    menu === "All" ? true : blog.category === menu
  );

  return (
    <section className="mt-24 max-w-5xl mx-auto">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 my-10">
        {blogCategories.map((item) => (
          <button
            onClick={() => setMenu(item)}
            key={item}
            className={`rounded-2xl p-3 hover:scale-105 transition-transform duration-300 cursor-pointer ${
              menu === item
                ? "text-white bg-primary"
                : "bg-primary/10 text-gray-800 hover:bg-primary/40"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Blog list */}
      <BlogLists blogs={filteredBlogs} />
    </section>
  );
};

export default BlogSection;
