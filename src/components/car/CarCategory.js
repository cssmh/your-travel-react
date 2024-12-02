import React, { useState } from "react";
import CheckboxList from "./CheckboxList";

const CarCategory = () => {
  const [price, setPrice] = useState(600);

  const data = {
    topCars: ["Audi A3 2019", "Toyota Prius Plus", "Mercedes Benz", "Lexus LX570", "BMW i5"],
    types: ["Economy", "Standard", "Luxury", "Commercial"],
    categories: [
      "Hatchback",
      "SUV",
      "Coupe",
      "Convertible",
      "Sedan",
      "Hybrid",
      "Luxury",
      "Sports",
      "Crossover",
      "Mini Van",
    ],
    ratings: [5, 4, 3, 2, 1],
  };

  return (
    <div className="bg-white p-4 rounded-lg">
      {/* Map Section */}
      <div className="h-32 relative bg-gray-300 mb-4 rounded-md overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center rounded-md" style={{ backgroundImage: `url('/map.jpg')` }}>
          <span className="absolute inset-0 flex items-center justify-center text-white">
            <div className="py-1 px-2 bg-gray-500 opacity-50 rounded-xl">Show on map</div>
          </span>
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-4 border rounded-md border-gray-400 p-4">
        <h3 className="font-semibold">Price</h3>
        <p className="text-sm text-gray-500">${price} - $1000</p>
        <input
          type="range"
          min="150"
          max="1000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full mt-2 accent-red-500"
        />
        <button className="mt-2 bg-red-500 rounded-md hover:bg-red-600 text-white py-1 px-4">
          Apply
        </button>
      </div>

      <div className="border border-gray-400 rounded-md">
        {/* Ratings Section */}
        <div className="border-b border-gray-400 p-4">
          <h3 className="font-semibold">Rating</h3>
          {data.ratings.map((star) => (
            <div key={star} className="flex items-center mb-1">
              <input type="checkbox" className="mr-2 accent-red-500" />
              <span className="text-yellow-500">
                {"★".repeat(star)}
                {"☆".repeat(5 - star)}
              </span>
            </div>
          ))}
        </div>

        {/* Top Cars */}
        <CheckboxList title="Top Cars" items={data.topCars} />

        {/* Types */}
        <CheckboxList title="Types" items={data.types} />

        {/* Categories */}
        <CheckboxList title="Category" items={data.categories} />
      </div>
    </div>
  );
};

export default CarCategory;
