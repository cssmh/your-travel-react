import React, { useState } from "react";

const TourRating = () => {
  const [price, setPrice] = useState(700);
  return (
    <div className="bg-white p-4 rounded-lg ">
      {/* Map Section */}
      <div className="h-32 relative bg-gray-300 mb-4 rounded-md overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-md"
          style={{ backgroundImage: `url('/map.jpg')` }}
        >
          <span className="absolute inset-0 flex items-center justify-center text-white">
            <div className="py-1 px-2 bg-gray-500 opacity-50 rounded-xl">
              Show on map
            </div>
          </span>
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-4 border rounded-md border-gray-400 p-4 ">
        <h3 className="font-semibold">Price </h3>
        <p className="text-sm text-gray-500">${price} - $1000</p>
        <input
          type="range"
          min="700"
          max="1000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full mt-2 custom-red-input"
        />
        <button className="mt-2 bg-red-500 rounded-md hover:bg-red-600 text-white py-1 px-4 ">
          Apply
        </button>
      </div>
      <div className="border border-gray-400 rounded-md ">
        {/* Tour Rating */}
        <div className=" border border-b-gray-400 p-4 ">
          <h3 className="font-semibold">Rating</h3>
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center mb-1">
              <input type="checkbox" className="mr-2 Red custom-red-input" />
              <span className="text-yellow-500">
                {"★".repeat(star)}
                {"☆".repeat(5 - star)}
              </span>
            </div>
          ))}
        </div>

        {/* Tour Rating */}
        <div className="border border-b-gray-400 p-4">
          <h3 className="font-semibold">Tour Types</h3>
          {[
            "Forest Tour",
            "Wildlife Tour",
            "Northern Tour",
            "Beeches Tour",
            "City Tour",
            "Musem Tour",
          ].map((item, index) => (
            <div key={index} className="flex items-center mb-1">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 custom-red-input" />
                <span className="text-gray-500 text-sm">{item}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Top Filters */}
        <div className=" border border-b-gray-400 p-4 ">
          <h3 className="font-semibold">Journel Style</h3>
          {[
            "Business Tour",
            "Family Tour",
            "Adventure Tour",
            "Luxury Tour",
            "Budget Tour",
          ].map((filter, index) => (
            <div key={index} className="flex items-center mb-1">
              <input type="checkbox" className="mr-2 custom-red-input" />
              <span className="text-gray-500 text-sm">{filter}</span>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className=" border border-b-gray-400 p-4">
          <h3 className="font-semibold">Facilities</h3>
          {[
            "WiFi",
            "HiTea",
            "Luxury Rooms",
            "Villa",
            "Guide Instructor",
            "Hybrid",
          ].map((feature, index) => (
            <div key={index} className="flex items-center mb-1">
              <input type="checkbox" className="mr-2 custom-red-input" />
              <span className="text-gray-500 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourRating;
