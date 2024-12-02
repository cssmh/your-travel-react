import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ImStarHalf } from "react-icons/im";

const RatingStar = ({ rating }) => {
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 >= 0.5; // Check if there's a half star
  const totalStars = 5; // Maximum stars

  return (
    <div className="flex">
      {/* Render full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <AiFillStar key={`full-${index}`} className="text-yellow-500 text-lg" />
      ))}

      {/* Render half star if applicable */}
      {hasHalfStar && <ImStarHalf className="text-yellow-500 text-lg" />}

      {/* Render remaining empty stars */}
      {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
        <AiOutlineStar key={`empty-${index}`} className="text-gray-300 text-lg" />
      ))}
    </div>
  );
};

export default RatingStar;
