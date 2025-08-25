import React from "react";
import { Link } from "react-router-dom";

const BlogLists = ({ blogs }) => {
  if (!blogs || blogs.length === 0) return null;

  return (
    <section className="mt-20 px-4 max-w-5xl mx-auto space-y-16">
      {blogs.map((blog, index) => {
        const { title, description, category, image, _id } = blog;

        const isEven = index % 2 === 0;

        return (
          <Link to={`/blog/${_id}`} key={_id}>
            <div
              key={_id}
              className={`flex flex-col mt-20 md:flex-row ${
                !isEven ? "md:flex-row-reverse" : ""
              } items-center gap-20 py-20 hover:scale-105 transition-transform duration- `}
            >
              {/* Image */}
              <img
                src={image}
                alt={title}
                className="w-full md:w-1/2 rounded-xl object-cover"
              />

              {/* Text Content */}
              <div className="md:w-1/2 space-y-4">
                <span className="text-2xl text-primary font-bold uppercase ">
                  {category}
                </span>
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: description.slice(0, 80),
                  }}
                ></p>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default BlogLists;
