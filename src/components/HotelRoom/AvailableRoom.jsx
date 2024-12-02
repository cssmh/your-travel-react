import React from 'react'
import { FaCalendarAlt, FaUser, FaWifi, FaTv, FaSwimmer } from 'react-icons/fa';
import { FaCheck } from "react-icons/fa6";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { IoIosSnow } from "react-icons/io";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GiCoffeeCup } from "react-icons/gi";
import { PiBathtub } from "react-icons/pi";
import { GiPineTree } from "react-icons/gi";
import { BiFridge } from "react-icons/bi";
import { PiCity } from "react-icons/pi";


const AvailableRoom = () => {
  const rooms = [
    {
      id: 1,
      name: 'Double Luxury Bedroom',
      amenities: [
        { name: 'Room', icon: <MdOutlineMeetingRoom /> },
        { name: 'Free Wifi', icon: <FaWifi /> },
        { name: 'Air Condition', icon: <IoIosSnow /> },
        { name: 'Ultra HD TV', icon: <FaTv /> },
        { name: '30 m', icon: <HiOutlineBuildingOffice2 /> },
        { name: 'Tea/Coffee', icon: <GiCoffeeCup /> },
        { name: 'Excite Bathroom', icon: <PiBathtub /> },
        { name: 'Garden View', icon: <GiPineTree /> },
        { name: 'Fridge', icon: <BiFridge /> },
        { name: 'Pool View', icon: <FaSwimmer /> },
        { name: 'City View', icon: <PiCity /> },


      ],
      price: 400,
      total: 850,
      image: '/hotel.jpg',
    },
    {
      id: 2,
      name: 'Luxury Villa',
      amenities: [
        { name: 'Room', icon: <MdOutlineMeetingRoom /> },
        { name: 'Free Wifi', icon: <FaWifi /> },
        { name: 'Air Condition', icon: <IoIosSnow /> },
        { name: 'Ultra HD TV', icon: <FaTv /> },
        { name: '30 m', icon: <HiOutlineBuildingOffice2 /> },
        { name: 'Tea/Coffee', icon: <GiCoffeeCup /> },
        { name: 'Excite Bathroom', icon: <PiBathtub /> },
        { name: 'Garden View', icon: <GiPineTree /> },
        { name: 'Fridge', icon: <BiFridge /> },
        { name: 'Pool View', icon: <FaSwimmer /> },
        { name: 'City View', icon: <PiCity /> },


      ],
      price: 600,
      total: 950,
      image: '/hotel.jpg',
    },
    {
      id: 3,
      name: 'Simple Double Bed',
      amenities: [
        { name: 'Room', icon: <MdOutlineMeetingRoom /> },
        { name: 'Free Wifi', icon: <FaWifi /> },
        { name: 'Air Condition', icon: <IoIosSnow /> },
        { name: 'Ultra HD TV', icon: <FaTv /> },
        { name: '30 m', icon: <HiOutlineBuildingOffice2 /> },
        { name: 'Tea/Coffee', icon: <GiCoffeeCup /> },
        { name: 'Excite Bathroom', icon: <PiBathtub /> },
        { name: 'Garden View', icon: <GiPineTree /> },
        { name: 'Fridge', icon: <BiFridge /> },
        { name: 'Pool View', icon: <FaSwimmer /> },
        { name: 'City View', icon: <PiCity /> },


      ],
      price: 200,
      total: 450,
      image: '/hotel.jpg',
    },
    {
      id: 4,
      name: 'King Luxury Bedroom',
      amenities: [
        { name: 'Room', icon: <MdOutlineMeetingRoom /> },
        { name: 'Free Wifi', icon: <FaWifi /> },
        { name: 'Air Condition', icon: <IoIosSnow /> },
        { name: 'Ultra HD TV', icon: <FaTv /> },
        { name: '30 m', icon: <HiOutlineBuildingOffice2 /> },
        { name: 'Tea/Coffee', icon: <GiCoffeeCup /> },
        { name: 'Excite Bathroom', icon: <PiBathtub /> },
        { name: 'Garden View', icon: <GiPineTree /> },
        { name: 'Fridge', icon: <BiFridge /> },
        { name: 'Pool View', icon: <FaSwimmer /> },
        { name: 'City View', icon: <PiCity /> },


      ],
      price: 550,
      total: 950,
      image: '/hotel.jpg',
    },
  ];


  return (
    <div>
      <div className="max-w-4xl  my-8 ">
        <h2 className="text-2xl font-bold mb-4">Availability</h2>
        <div className="flex  rounded-lg overflow-hidden border border-red-500 text-[8px] md:text-lg">
          {/* Date Picker Section */}
          <div className="flex items-center px-4 py-3  flex-grow ">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <span className="text-gray-600">Tue 17 Sept — Fri 20 Sept</span>
          </div>

          {/* Guests Section */}
          <div className="flex items-center justify-between px-4 py-3 flex-grow border border-l-red-600 ">
            <div className='flex'> <FaUser className="text-gray-500 mr-2 mt-1" />
              <span className="text-gray-600 ">02 adult . 01 children . 01 room</span></div>

            <span className=" text-gray-500">&#9662;</span>
          </div>

          {/* Search Button */}
          <button className="bg-red-500 text-white font-semibold px-6 py-3  hover:bg-red-600 rounded-md">
            Search Availability
          </button>
        </div>
      </div>


      {/* Available Rooms */}
      <div className="">

        {rooms.map((room) => (
          <div key={room.id} className="md:flex p-4 gap-4  border border-gray-400 rounded-lg shadow-sm my-4 ">

            <div className="w-2/8 ">
              <img src={room.image} alt={room.name} className="rounded-lg w-full h-full object-cover" />
            </div>

            <div className=' w-4/8 mt-4 md:mt-0 flex flex-col justify-between  '>
              <h3 className="text-xl font-semibold flex gap-4">{room.name} <spn className="text-red-500 flex text-lg mt-1"><FaUser /><FaUser /></spn></h3>
              <p className="text-gray-500 mt-1 text-sm flex gap-2"><span className='text-red-500 mt-1'><FaCheck />
              </span> Free cancellation before 15 September 2024</p>
              <ul className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 text-sm gap-4 mt-4">
                {room.amenities.map((items, index) => (
                  <li key={index} className="text-gray-800 flex mb-4 opacity-60">
                    <span className="text-white bg-red-500 p-1 rounded-md text-lg mr-2" >{items.icon}
                    </span>
                    <span className='text-sm'>{items.name}</span>
                  </li>
                ))}
              </ul>


            </div>

            <div className="w-3/8">
              <div className='flex gap-4 justify-center md:flex-col md:gap-2  text-end'>
                <p className="text-gray-500 text-sm">From</p>
                <p className="text-2sm font-bold ">${room.price}</p>
                <p className="text-gray-500 text-sm">/night</p>
                <p className="text-red-500 text-sm">Total: ${room.total}</p>
              </div>
              <div className="flex flex-col">
                <button className="md:mt-32  bg-red-500 text-sm text-white font-semibold px-4 py-1 rounded-full hover:bg-red-600 ">
                  Book Now
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AvailableRoom