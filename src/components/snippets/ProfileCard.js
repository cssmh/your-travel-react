import React from "react";
import { CiHeart } from "react-icons/ci";
import RatingStar from "./RatingStar";

const ProfileCard = ({ image, name, rating, reviews, price,location }) => {
  return (
    <div className="relative w-full max-w-xl rounded-lg  overflow-hidden bg-white shadow-md">
      <img
        src={image}
        alt={name}
        className="w-full h-[300px] sm:h-[260px] xl:h-[325px] object-cover"
      />
      <button className="absolute top-2 right-2 bg-red-500 rounded-full p-1 shadow-md">
        <CiHeart className="text-xl text-white" />
      </button>
      <div className="p-4  xl:mt-3">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
         <div className="flex items-center mb-2" > 
        <span className="ml-1 text-gray-800">{location}</span>
        <RatingStar rating={rating} />
         </div>
        <div className="flex items-center mb-2">
          
        <button className=" rounded-lg w-6  h-6 bg-red-500 text-white text-xs  justify-center  ">
              {rating}
            </button>
          <span className="ml-1 text-gray-500"> {reviews}</span>
        </div>

          <div className="flex justify-between">
          <p className="text-gray-700">
           From{" "}
          <span className="text-black font-semibold">${price}</span> / Night
        </p>
        <button className=" rounded-lg w-16  h-8  bg-red-500 text-white text-xs  justify-center  ">
              See details
            </button>
          </div>
        
      </div>
    </div>
  );
};

export default ProfileCard;