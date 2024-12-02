import React from 'react';

const GalleryCard = ({ image, heading, paragraph }) => {
  return (
    <div className="relative w-full max-w-xl rounded-lg overflow-hidden mx-auto h-auto bg-[#F4F4F4]">
      {/* Image */}
      <img
        src={image}
        alt={heading}
        className="w-full h-auto object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 w-full  text-white p-4">
        <h2 className="font-semibold text-lg mb-1">{heading}</h2>
        <p className="text-sm">{paragraph}</p>
      </div>
    </div>
  );
};

export default GalleryCard;