import React from "react";
import Banner from "../components/Hotel/Banner";
import HotelCards from "../components/Hotel/HotelCards";
import HotelRating from "../components/Hotel/HotelRating";

const Hotel = () => {
  return (
    <>
      <Banner />
      <div className="flex px-4 lg:gap-7 md:my-12 sm:px-4 mx-auto max-w-[1400px]">
        <div className="lg:w-1/4">
          <HotelRating />
        </div>
        <div className="w-full lg:w-3/4">
          <HotelCards />
        </div>
      </div>
    </>
  );
};

export default Hotel;