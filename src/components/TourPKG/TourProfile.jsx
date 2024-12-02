import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { LuParkingCircle } from "react-icons/lu";

import { MdLocationPin } from "react-icons/md";
import { FaMapMarkerAlt, FaCity} from 'react-icons/fa';
import ImageGallery from '../snippets/ImageGallery';
const TourProfile = () => {
  const images = [
    "/tour5.jpg",
    "/tour.jpeg",
    "/tour1.jpeg",
    "/tour2.jpeg",
    "/tour3.jpeg",
    "/tour4.jpeg"
  ];

  const tourData = [
    { label: "Duration", value: "6 Days" },
    { label: "Location", value: "Zurich" },
    { label: "Food", value: "2 times a day" },
    { label: "Tour type", value: "Family Tour" },
    { label: "Persons", value: "3 persons" },
    { label: "Price", value: "$200" },
  ];
  return (
    <div className="">
      {/* Breadcrumb */}
      <nav className="text-sm text-red-500 mb-4">
        <a href="#" className="hover:text-red-800">Home</a> &gt; 
        <a href="#" className="hover:text-red-800"> Hotels</a> &gt;
        <a href="#" className="hover:text-red-800"> Pakistan</a> &gt;
        <a href="#" className="hover:text-red-800"> Lahore</a> &gt; 
        <span className="text-red-400"> Avari Hotel Lahore</span>
      </nav>

      {/* Title and Rating */}
      <div className="md:flex items-center justify-between my-12">
        <div>
          <h1 className="text-3xl font-semibold">Lake Lucerne: Bodies Of Water </h1>
          <div className="flex items-center space-x-2 mb-1">
           
            <span className=" bg-red-500 text-white text-sm px-2  rounded-lg">4.2</span>
            <span className='text-gray-600'>Good</span>
            <span className="text-gray-500 text-sm">(2365 reviews)</span>
          </div>
          <div className='flex '><span className='text-red-500 text-xl '><MdLocationPin/></span><p className="text-gray-500">Zurich</p></div>
          
        </div>
        <div className="flex items-center space-x-6">
            <span className='text-4xl text-red-500 mt-4'><CiHeart/></span>
            <div><p className='text-sm text-gray-500 text-right'>from</p> <p className="text-2xl font-semibold text-gray-800">$200</p></div>
         
          <button className="px-6 py-2 bg-red-500 text-white rounded-full">Book Now</button>
        </div>
      </div>

 <div className='flex gap-4 md:gap-8'>
   <div className='w-3/4'>
   <ImageGallery images={images} />
   </div>
<div className='w-1/4'>
<div className="h-20 lg:h-44 relative bg-gray-300 mb-4 rounded-md overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center rounded-md"
    style={{ backgroundImage: `url('/map.jpg')` }}
  >
    <span className="absolute inset-0 flex items-center justify-center text-white">
      <div className="py-1 px-2 bg-gray-500 opacity-50 rounded-xl text-[8px] md:text-lg">Show on map</div>
    </span>
  </div>
</div>
<div className='text-[8px] lg:text-sm' >
<h2 className="text-sm lg:text-lg font-semibold my-8">Details</h2>
      
       
          {tourData.map((item, index) => (
            <div key={index} className="flex justify-between text-black">
              <div className="py-2 font-medium ">{item.label}</div>
              <div className="py-2">{item.value}</div>
            </div>
          ))}
       
      
</div>
</div>
</div>
    </div>
  );
};

export default TourProfile;
