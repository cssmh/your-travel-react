import React from "react";
import { FaCamera,  FaPlus, FaRegEdit } from "react-icons/fa";

const ProfileTab = () => {
  return (
    <>
      {/* Profile Cover Section */}
      <div className="relative  w-full">
        {/* Cover Photo */}
        <img
          src="/profilecover.png"
          alt="Cover Photo"
          className="w-full  h-full object-cover  shadow-lg"
        />

        {/* Upload Photo Button */}
        <div className="absolute right-4 bottom-4 flex items-center space-x-2">
          <FaCamera className="text-white text-lg" />
          <button className="bg-red-600 text-white text-xs px-4 py-1 rounded-md shadow-md hover:bg-red-700">
            Upload Cover Photo
          </button>
        </div>

        {/* Profile Photo */}
        <div className="absolute left-8 bottom-[-62px]">
          <div className="relative">
            <img
              src="/prifilephoto.png"
              alt="Profile Photo"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="sm:mt-3 mt-16 flex flex-col sm:pl-56 pl-6 items-start ">
        {/* Profile Name and Edit Icon */}
        <div>
          <div className="flex items-center space-y-2 space-x-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Username
            </h2>
            <FaRegEdit className="text-red-600 cursor-pointer hover:text-gray-800" />
          </div>
                  </div>

        {/* Add Button */}
        <div className="flex items-center space-x-2 py-2">
          <button className="w-8 h-4 bg-red-600 text-white flex items-center justify-center  shadow-md hover:bg-red-700">
            <FaPlus />
          </button>
          <h4 className="text-gray-700 font-medium text-sm">Lausanne city of Switzerland</h4>
        </div>
      </div>
    </>
  );
};

export default ProfileTab;
