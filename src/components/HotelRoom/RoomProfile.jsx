import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { LuParkingCircle } from "react-icons/lu";

import { MdLocationPin } from "react-icons/md";
import { FaMapMarkerAlt, FaCity} from 'react-icons/fa';
import ImageGallery from '../snippets/ImageGallery';
const RoomProfile = () => {
  const images = [
    "/hotel0.jpg",
    "/hotel2.jpg",
    "/hotels3.png",
    "/hotel4.png",
    "/hotel8.jpg",
    "/hotel7.jpg"
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
          <h1 className="text-3xl font-bold">Avari Hotel Lahore  <span className="text-xl text-yellow-500 ml-4">{'★'.repeat(5)}</span></h1>
          <div className="items-center space-x-2 mb-1">
           
            <span className=" bg-red-500 text-white text-sm px-2  rounded-lg">4.2</span>
            <span className='text-gray-600'>Good</span>
            <span className="text-gray-500 text-sm">(2365 reviews) | #02 of 102 hotels in Lahore</span>
          </div>
          <div className="items-center space-x-2 mb-1">
            <span className='text-red-500 text-xl inline-block'><MdLocationPin/></span>
            <span className="text-gray-500"> 87 - Shahrah-e-Quaid-e-Azam, 54000 Lahore, Pakistan</span>
          </div>
          
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
<h2 className="text-sm lg:text-lg font-semibold my-8">Property highlights</h2>
      
      {/* Perfect for stay */}
      <div className="mb-8 text-gray-700">
        <h3 className="font-semibold">Perfect for stay</h3>
        <p className="flex items-start text-[8px] lg:text-sm mt-2">
          <FaMapMarkerAlt className="mr-2 mt-1" />
          Excellent location: Ranked well by recent visitors (4.2) Rooms with:
        </p>
      </div>

      {/* Faithful Clients */}
      <div className="mb-8 text-gray-700">
        <h3 className="font-semibold">Faithful Clients</h3>
        <p className="flex items-start text-[8px] lg:text-sm mt-2">
          <FaMapMarkerAlt className="mr-2 mt-1" />
          Excellent location: Ranked well by recent visitors (4.2) Rooms with:
        </p>
      </div>

      {/* Rooms with */}
      <div className='text-gray-700'> 
        <h3 className="font-semibold">Rooms with</h3>
        <ul className="mt-2 space-y-2 text-[8px] lg:text-sm">
          <li className="flex items-start">
            <FaCity className="mr-2 mt-1" />
            View of the city
          </li>
          <li className="flex items-start">
          <LuParkingCircle className="mr-2 mt-1 " />
            Free Parking in the Hotel
          </li>
        </ul>
      </div>
</div>
</div>
</div>
    </div>
  );
};

export default RoomProfile;
