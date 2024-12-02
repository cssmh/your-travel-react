import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { CiHeart } from 'react-icons/ci';
import { FiWifi, FiTv, FiCoffee } from 'react-icons/fi';
import { IoIosSnow } from "react-icons/io";
import { BiFridge } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FiFilter, FiX } from 'react-icons/fi';


function HotelCards({ isOpen, setIsOpen }) {
  const hotels = [
    {
      id: 1,
      name: "Avari Hotel Lahore",
      location: "Gulberg",
      rating: 4.2,
      stars: 5,
      distance: "5.65 km to city center",
      reviews: 2365,
      price: 700,
      amenities: ["Good amenities", "Delicious food", "Clean Rooms", "Great Location", "Friendly Staff"],
      types: ["Room", "Villa", "Resort", "Apartment"],
      image: "/hotel.jpg",
    },
    {
      id: 2,
      name: "Avari Hotel Lahore",
      location: "Gulberg",
      rating: 4.2,
      stars: 5,
      distance: "5.65 km to city center",
      reviews: 2365,
      price: 700,
      amenities: ["Good amenities", "Delicious food", "Clean Rooms", "Great Location", "Friendly Staff"],
      types: ["Room", "Villa", "Resort", "Apartment"],
      image: "/hotel.jpg",
    },
    {
      id: 3,
      name: "Avari Hotel Lahore",
      location: "Gulberg",
      rating: 4.2,
      stars: 5,
      distance: "5.65 km to city center",
      reviews: 2365,
      price: 700,
      amenities: ["Good amenities", "Delicious food", "Clean Rooms", "Great Location", "Friendly Staff"],
      types: ["Room", "Villa", "Resort", "Apartment"],
      image: "/hotel.jpg",
    },
    {
      id: 4,
      name: "Avari Hotel Lahore",
      location: "Gulberg",
      rating: 4.2,
      stars: 5,
      distance: "5.65 km to city center",
      reviews: 2365,
      price: 700,
      amenities: ["Good amenities", "Delicious food", "Clean Rooms", "Great Location", "Friendly Staff"],
      types: ["Room", "Villa", "Resort", "Apartment"],
      image: "/hotel.jpg",
    },
    {
      id: 5,
      name: "Avari Hotel Lahore",
      location: "Gulberg",
      rating: 4.2,
      stars: 5,
      distance: "5.65 km to city center",
      reviews: 2365,
      price: 700,
      amenities: ["Good amenities", "Delicious food", "Clean Rooms", "Great Location", "Friendly Staff"],
      types: ["Room", "Villa", "Resort", "Apartment"],
      image: "/hotel.jpg",
    },

  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-between py-6">
        <div className='flex items-center gap-1'>
          <button onClick={toggleFilter}>
            {isOpen ? <FiX size={18} /> : <FiFilter size={18} />}
            </button>
          <h2 className="text-[10px] sm:text-xl font-semibold text-black">32 Hotel available</h2>
          </div>
        <div className="relative flex gap-2 text-gray-900 text-[8px] md:text-sm">
          <span className="font-semibold">Sort by:</span>
          <button
            onClick={toggleDropdown}
            className="flex text-gray-900 focus:outline-none"
          >
            Services <IoIosArrowDown className="mt-1" />
          </button>
          {isDropdownOpen && (
            <ul className="absolute top-4 bg-white text-black mt-2 rounded-md shadow-lg w-[4.5rem] md:w-32 z-10">
              <li>
                <a
                  href="/hotel"
                  className="block px-2 py-2 hover:bg-red-500 hover:text-white text-left"
                >
                  Low to High
                </a>
              </li>
              <li>
                <a
                  href="#service2"
                  className="block px-2 py-2 hover:bg-red-500 hover:text-white text-left"
                >
                  High to Low
                </a>
              </li>
              <li>
                <a
                  href="#service3"
                  className="block px-2 py-2 hover:bg-red-500 hover:text-white text-left"
                >
                  Top Rated
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div>
        {hotels.map((hotel) => (
          <div key={hotel.id} className="flex flex-col lg:flex-row gap-6 bg-white shadow-md rounded-lg p-2 border md:border-gray-200 mt-6">
            <div className="object-cover relative md:block">
              <img src={hotel.image} alt='' className="w-full md:h-full rounded-lg" />
              <div className="absolute top-2 right-2 bg-red-500 md:p-2 rounded-full shadow-md">
                <CiHeart className="text-[8px] md:text-2xl text-white" />
              </div>
            </div>
            <div className='block md:flex md:gap-5 md:py-4'>
              <div className="flex flex-col w-full md:w-6/12 lg:w-8/12">
                <h2 className="text-xl font-semibold text-gray-900">{hotel.name}</h2>
                <p className="text-gray-600">
                  {hotel.location}{" "}
                  <span className="text-yellow-500">
                    {"★".repeat(hotel.stars)}
                  </span>
                </p>
                <p className="text-gray-500 text-sm mt-1">{hotel.distance}</p>
                <div className="flex items-center mt-2">
                  <span className="bg-red-500 text-white font-semibold px-2 md:py-1 rounded-xl ">{hotel.rating}</span>
                  <p className="ml-2 text-gray-600 text-sm">{hotel.rating >= 4 ? "Good" : "Average"}</p>
                  <p className="ml-2 text-gray-500 text-[10px] md:text-sm">({hotel.reviews} reviews)</p>
                </div>
                <div className="flex flex-wrap md:flex-nowrap gap-2 mt-4 text-red-500  md:text-xl">
                  <span className="bg-red-500 text-white px-1 py-1 rounded-md"><IoIosSnow /></span>
                  <span className="bg-red-500 text-white px-1 py-1 rounded-md"><FiWifi /></span>
                  <span className="bg-red-500 text-white px-1 py-1 rounded-md"><FiTv /></span>
                  <span className="bg-red-500 text-white px-1 py-1 rounded-md"><BiFridge /></span>
                  <span className="bg-red-500 text-white px-1 py-1 rounded-md"><FiCoffee /></span>
                </div>
                <div className="flex flex-wrap gap-4 text-[10px] md:text-sm mt-4 text-gray-500">
                  {hotel.amenities.map((amenity, index) => (
                    <p key={index}>&#10003; {amenity}</p>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 border border-dotted md:border-l-gray-500 w-full md:w-6/12 lg:w-4/12 p-2">
                <div className="mt-4 grid grid-cols-4 md:grid-cols-2 gap-4 text-red-500">
                  {hotel.types.map((type, index) => (
                    <button
                      key={index}
                      className="px-1 py-1 border border-red-500 rounded-full text-[10px] md:text-sm w-16 md:w-24 hover:bg-red-500 hover:text-white"
                    >
                      {type}
                    </button>
                  ))}
                </div>
                <p className="text-lg md:text-2xl font-bold text-gray-900">
                  ${hotel.price} <span className="text-lg font-normal md:text-sm">/ Night</span>
                </p>
                <Link to="/room" className="mt-4 px-4 py-3 md:px-8 md:py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 text-sm md:text-lg">
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelCards;