import React from "react";
import { AiFillStar } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

const FeatureCard = ({ image, name, rating, reviews, price }) => {
  return (
    <div className="relative w-full max-w-xl rounded-lg  overflow-hidden bg-[#F4F4F4] mx-auto shadow-md">
      <img
        src={image}
        alt={name}
        className="w-full h-[300px] sm:h-[260px] xl:h-[325px] object-cover"
      />
      <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
        <CiHeart className="text-xl text-gray-500" />
      </button>
      <div className="p-4  xl:mt-3">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>

        <div className="flex items-center text-yellow-500 mb-2">
          <AiFillStar className="text-lg" />
          <span className="ml-1 text-gray-800">{rating}</span>
          <span className="ml-1 text-gray-500">| {reviews} Reviews</span>
        </div>

        <p className="text-gray-700">
          Starting From{" "}
          <span className="text-red-500 font-semibold">${price}</span> / Night
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;