import React, { useState } from "react";
import Banner from "../components/Hotel/Banner";
import HotelCards from "../components/Hotel/HotelCards";
import HotelRating from "../components/Hotel/HotelRating";

const Hotel = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Banner />
      <div className="flex px-4 lg:gap-7 md:my-12 sm:px-4 mx-auto max-w-[1400px]">
        <div className="lg:w-1/4">
          <HotelRating isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className="w-full lg:w-3/4">
          <HotelCards isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </>
  );
};

export default Hotel;