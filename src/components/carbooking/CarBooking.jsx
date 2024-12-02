import React from "react";
import { CiLock } from "react-icons/ci";
import { FaRegSnowflake } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { PiSeat, PiVectorThreeLight } from "react-icons/pi";

const CarBooking = () => {
  return (
    <>
      <div className="w-full md:w-1/2">
        <div className="sm:grid sm:grid-cols-1 px-4 flex flex-col gap-2 rounded-lg p-6 border border-gray-300">
          <div>
            <h3 className="text-xl font-semibold">Business class </h3>
            <p className="text-gray-600 flex items-center mt-1">Audi A4 2022</p>
            <p className="text-gray-500 mt-1">Lahore pakistan</p>
            <p className="text-red-500 items-start  text-xs"> Great Choice</p>
          </div>
          {/* Icons with Titles */}
          <div className="flex items-center text-gray-700 mt-2">
            <button className=" rounded-tr-md rounded-bl-md w-6  h-6 bg-red-500 text-white text-xs flex items-center justify-center mb-4 ">
              4.2
            </button>

            <span className="text-xs ml-2 mb-4 ">good review (2043) </span>
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 ">
            <div className="flex items-center text-gray-700 ">
              <FaRegSnowflake className="bg-red-500 rounded text-white  flex items-center justify-center w-6 h-6" />
              <p className="text-xs ml-2">Ac</p>
            </div>
            <div className="flex items-center text-gray-700">
              <IoPersonOutline className="bg-red-500 rounded text-white  flex items-center justify-center w-6 h-6" />
              <p className="text-xs ml-1 ">4 Person </p>
            </div>
            <div className="flex items-center text-gray-700">
              <PiVectorThreeLight className="bg-red-500 rounded text-white  flex items-center justify-center w-6 h-6" />
              <p className="text-xs ml-2">Auto</p>
            </div>
            <div className="flex items-center text-gray-700">
              <PiSeat className="bg-red-500 rounded text-white  flex items-center justify-center w-6 h-6" />
              <p className="text-xs ml-1">4 Seat</p>
            </div>
            <div className="flex items-center text-gray-700">
              <CiLock className="bg-red-500 rounded text-white  flex items-center justify-center w-6 h-6" />
              <p className="text-xs ml-1">2 Lugage</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 mt-2 border border-gray-300">
          {/* First Row: Title */}
          <div className="text-lg font-semibold text-gray-800 mb-4">
            Your Booking Detail
          </div>

          {/* Second Row: Dates */}
          <div className="flex justify-between items-start pt-4">
            {/* Start Date Section */}
            <div className="pr-4">
              <h3 className="font-medium text-gray-600 text-xs">Start Date</h3>
              <p className="text-gray-800 mt-1 text-sm">Tue 17 Sept 2024</p>
              <p className="text-gray-600 mt-1 text-sm">From 12:00 AM</p>
            </div>

            {/* Vertical Border */}
            <div className="border-l border-gray-500 h-auto self-stretch mx-4"></div>

            {/* End Date Section */}
            <div className="pl-4">
              <h3 className="font-medium text-gray-600 text-xs">End Date</h3>
              <p className="text-gray-800 mt-1 text-sm">Fri 20 Sept 2024</p>
              <p className="text-gray-600 mt-1 text-sm">From 11:00 PM</p>
            </div>
          </div>

          {/* Fifth Row: Total Length of Stay */}
          <div className="mt-4 pt-4">
            <h3 className="font-medium text-gray-600">Total Length of Stay:</h3>
            <p className="text-gray-800 mt-1">3 Days, 2 Nights</p>
          </div>
        </div>

        <div className="bg-white  rounded-lg p-6  mt-2 border border-gray-300">
          {/* First Row: Title */}
          <div className="text-lg font-semibold text-gray-800 mb-4">
            Price Detail
          </div>

          {/* Second Row: Dates */}
          <div className="flex justify-between items-start border-t border-gray-200 pt-4">
            {/* Start Date Section */}
            <div className=" pr-4">
              <h3 className="font-medium text-gray-600">Car charges</h3>
              <p className="text-gray-800 mt-1">Service charges</p>
              <p className="text-gray-600 mt-1">Gsx tax</p>
            </div>

            {/* Vertical Border */}
            <div className=" border-l border-gray-500 "></div>

            {/* End Date Section */}
            <div className=" pl-4">
              <h3 className="font-medium text-gray-600">$600</h3>
              <p className="text-gray-800 mt-1">$100</p>
              <p className="text-gray-600 mt-1">$100</p>
            </div>
          </div>

          {/* Fifth Row: Total Length of Stay */}
          <div className="mt-4 border-t border-gray-200 pt-4 flex justify-between">
            <h3 className="font-medium text-gray-600">Total Price</h3>
            <p className="text-gray-800 ">$800</p>
          </div>
        </div>

        <div className="bg-white  rounded-lg  p-6 border border-gray-300 mt-2">
          {/* First Row: Title */}
          <div className="text-lg font-semibold text-gray-800 mb-4">
            <h1>Do you have a promo code ?</h1>
            <p className="text-sm my-1 ">Enter prome code</p>
            <input
              type="text"
              className=" w-full md:w-11/12 lg:w-full py-1 px-2 rounded-md text-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className=" block bg-red-500 text-white px-3 py-2 rounded-md mt-2">
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarBooking;
