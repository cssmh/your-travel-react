import React from "react";
import { RiDoorLine } from "react-icons/ri";
import { BsSpeedometer2 } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";
import { PiSeat } from "react-icons/pi";
import { MdOutlineTv } from "react-icons/md";
import { GoStack } from "react-icons/go";

const Summary = () => {
  return (
    <div className=" mt-10">
      <h1 className="text-3xl">Summary</h1>
      {/* First Div */}
      <div>
        <p className="text-gray-700 leading-tight mt-3">
          The Audi A4 is a premium compact executive car renowned for its
          stylish design, advanced technology, and balanced performance. It
          offers a range of engines, including efficient four-cylinders and
          more powerful options, often with Quattro all-wheel drive for enhanced
          handling. The interior is luxurious, featuring high-quality materials
          and a modern infotainment system, while its comfortable ride and
          advanced driver-assistance features enhance overall driving pleasure.
          With a well-designed cabin and practical cargo space, the A4 stands
          out in its class for delivering a refined and enjoyable driving
          experience.
        </p>
      </div>

      {/* Second Div */}
      <div className="mt-4">
      <h1 className="text-3xl">We offer</h1>

        {[
          "100% Luxurious Feel",
          "A Safe & Secure Journey",
          "Clean, Polite & Knowledgeable",
          "All Our Fleet Are Fully Valeted & Serviced",
        ].map((item, index) => (
          <div key={index} className="flex items-center space-x-2 mt-2 text-gray-700">
            <IoMdCheckmark className="text-red-500" />
            <h3>{item}</h3>
          </div>
        ))}
      </div>

      {/* Third Div */}
      <h1 className="text-3xl mt-4">Features</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3 ">
        <div className="flex items-center space-x-2 sm:pl-16 text-gray-700">
          <RiDoorLine className="text-red-500 text-xl" />
          <h3 >4 Doors</h3>
        </div>
        <div className="flex items-center space-x-2 text-gray-700">
          <PiSeat className="text-red-500 text-xl" />
          <h3 >Airbags</h3>
        </div>
        <div className="flex items-center space-x-2 text-gray-700">
          <MdOutlineTv className="text-red-500 text-xl" />
          <h3 >LED</h3>
        </div>
        <div className="flex items-center space-x-2 text-gray-700">
          <BsSpeedometer2 className="text-red-500 text-xl" />
          <h3 >Speed Meter</h3>
        </div>
        <div className="flex items-center space-x-2 text-gray-700">
          <GoStack className="text-red-500 text-xl" />
          <h3 >ABS</h3>
        </div>
      </div>
      <hr className="border-gray-300 mt-3" />
    </div>
  );
};

export default Summary;
