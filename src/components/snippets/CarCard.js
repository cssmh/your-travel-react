import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineDoorBack } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaRegSnowflake } from "react-icons/fa";
import { PiSeat, PiVectorThreeLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const CarCard = ({ image, title, location, carClass, price, doors, luggage, person }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full grid md:grid-cols-[1fr,2fr,1fr] p-4">

      <div className="relative w-full md:w-56 md:h-56">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
        <div className="absolute top-2 right-2 bg-red-500 rounded-full p-1 cursor-pointer">
          <AiOutlineHeart className="text-white text-xl" />
        </div>
      </div>

      {/* Car Title, Location, and Class */}
      <div className="sm:grid sm:grid-cols-1 px-4 flex flex-col gap-2">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600 flex items-center mt-1">{location}</p>
          <p className="text-gray-500 mt-1">{carClass}</p>
        </div>
        {/* Icons with Titles */}
        <div className="flex items-center text-gray-700">
          <button className=" rounded w-6  h-6 bg-red-500 text-white text-xs flex items-center justify-center mb-4 ">
            4.2
          </button>
          <span className="text-xs ml-2 mb-4">good review (2043) </span>
        </div>
        <div className="grid sm:grid-cols-3 gap-2 ">

          <div className="flex items-center text-gray-700">
            <span class="bg-red-500 text-white px-1 py-1 rounded-md">
              <FaRegSnowflake />
            </span>
            <p className="text-xs ml-2">Ac</p>
          </div>
          <div className="flex items-center text-gray-700">
            <span class="bg-red-500 text-white px-1 py-1 rounded-md">
              <MdOutlineDoorBack />
            </span>
            <p className="text-xs ml-2">{doors}</p>
          </div>
          <div className="flex items-center text-gray-700">
            <span class="bg-red-500 text-white px-1 py-1 rounded-md">
              <CiLock />
            </span>
            <p className="text-xs ml-2">{luggage}</p>
          </div>
          <div className="flex items-center text-gray-700">
            <span class="bg-red-500 text-white px-1 py-1 rounded-md">
              <PiVectorThreeLight />
            </span>
            <p className="text-xs ml-2">Auto</p>
          </div>
          <div className="flex items-center text-gray-700">
            <span class="bg-red-500 text-white px-1 py-1 rounded-md">
              <PiSeat />
            </span>
            <p className="text-xs ml-2">{person}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className=" sm:border-dotted sm:border-gray-300 p-4">
        <div>
          <div className="grid grid-cols-2 gap-3">
            <button className="w-full sm:w-[100px] justify-center h-8 text-[10px] text-red-500 border border-red-500 rounded-[50px] px-2 py-[2px] flex items-center hover:bg-red-500 hover:text-white transition">
              Sedan
            </button>
            <button className="w-full sm:w-[100px] justify-center h-8 text-[10px] text-red-500 border border-red-500 rounded-[50px] px-2 py-[2px] flex items-center hover:bg-red-500 hover:text-white transition">
              Hatchback
            </button>
            <button className="w-full sm:w-[100px] justify-center h-8 text-[10px] text-red-500 border border-red-500 rounded-[50px] px-2 py-[2px] flex items-center hover:bg-red-500 hover:text-white transition">
              Minivan
            </button>
          </div>
          <div className="flex flex-col gap-6 mt-5 ">
            <p className="text-xl font-bold text-gray-800 text-right">
              <span className="text-gray-700 text-xs ">from</span>${price}
            </p>
            <Link to='/car-detail'>
              <button className="w-32 h-10  bg-red-500 text-white rounded-[50px]">
                See Details
              </button>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CarCard;
