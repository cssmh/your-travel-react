import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const BlogCard = ({ imageSrc, title, description, onReadMore }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg overflow-hidden max-w-3xl  mt-8 lg:mt-4 ">
      <div className="w-full  lg:w-[30%] h-48 sm:h-auto">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full lg:w-[180px] h-[160px] md:h-[200px] rounded-lg mb-2 sm:mb-0"
        />
      </div>

      <div className="w-full  lg:w-[70%] lg:p-2 mt-2 lg:mt-0 flex flex-col justify-between">
        <h2 className="text-lg sm:text-xl font-semibold mb-1 text-gray-900">
          {title}
        </h2>

        <p className="text-gray-600 text-sm sm:mb-3 mb-2">{description}</p>

        <button
          onClick={onReadMore}
          className="text-red-500 font-semibold flex items-center space-x-1 hover:underline mt-3 lg:mt-6 text-sm"
        >
          <span>Read more</span>
          <IoIosArrowRoundForward className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;