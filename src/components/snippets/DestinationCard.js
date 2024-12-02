import React from "react";

const DestinationCard = ({ image, heading }) => {
  return (
    <div className="relative w-full max-w-xl rounded-lg overflow-hidden mx-auto bg-[#F4F4F4] ">
      
      <img
        src={image}
        alt={image}
        className="w-full h-[200px] sm:h-[260px] md:h-[330px] object-cover"
      />

      <div className="py-4 md:px-4">
        <h2 className="font-semibold text-lg mb-1">{heading}</h2>
      </div>
    </div>
  );
};

export default DestinationCard;