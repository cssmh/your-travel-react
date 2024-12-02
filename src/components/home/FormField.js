// src/components/FormField.js
import React from "react";
import { TbArrowsLeftRight } from "react-icons/tb";

const FormField = ({ icon: Icon, label, description, isLast, showCenterIcon }) => (
  <div className="relative flex text-gray-700 flex-grow space-x-2 mb-4 md:mb-0">
    <Icon className="text-red-600 text-sm md:text-2xl mt-1 md:mt-0 ml-2 md:ml-0" />
    <div className="flex-col place-items-start ">
      <h3 className="text-sm md:text-base font-semibold">{label}</h3>
      <p className="text-xs md:text-sm mt-1 text-[#7d7d7d]">{description}</p>
    </div>
    {!isLast && (
      <div className="relative hidden lg:block">
        <div className="border-l border-gray-400 ml-4 h-14"></div>
        {showCenterIcon && (
          <div className="absolute top-1/2 transform -translate-y-1/2 left-[0.3rem] bg-red-300 rounded-full p-1">
            <TbArrowsLeftRight className="text-white text-lg" />
          </div>
        )}
      </div>
    )}
  </div>
);

export default FormField;
