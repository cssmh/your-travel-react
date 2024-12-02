import React from "react";
import { FaWifi, FaUtensils, FaCocktail, FaTv, FaSwimmer, FaDumbbell } from "react-icons/fa";
import { RiCheckDoubleLine } from "react-icons/ri";
import { LiaShuttleVanSolid } from "react-icons/lia";
import { GiCoffeeCup } from "react-icons/gi";
import { LuSailboat } from "react-icons/lu";
import { LuParkingCircle } from "react-icons/lu";
import { PiClockClockwiseFill } from "react-icons/pi";
import { IoLogoNoSmoking } from "react-icons/io";
import { GiClothes } from "react-icons/gi";
import { MdEmojiFoodBeverage } from "react-icons/md";


const RoomSummary = () => {
  const facilities = [
    { name: "Free Wifi", icon: <FaWifi /> },
    { name: "Restaurant", icon: <FaUtensils /> },
    { name: "Bar", icon: <FaCocktail /> },
    { name: "TV", icon: <FaTv /> },
    { name: "Swimming Pool", icon: <FaSwimmer /> },
    { name: "Fitness Center", icon: <FaDumbbell /> },
    { name: "Shuttle", icon: <LiaShuttleVanSolid /> },
    { name: "Coffee & Tea", icon: <GiCoffeeCup /> },
    { name: "Salon & Spa", icon: <LuSailboat /> },
    { name: "Parking", icon: <LuParkingCircle /> },
    { name: "WakeUp Call", icon: <PiClockClockwiseFill /> },
    { name: "No Smoking", icon: <IoLogoNoSmoking /> },
    { name: "Laundary", icon: <GiClothes /> },
    { name: "Good Breakfast", icon: <MdEmojiFoodBeverage /> },

  ];

  return (
    <div className="my-8">
      <div>
        <h2 className="text-xl font-semibold mb-1">Summary</h2>
        <p className="text-sm">
          Avari Hotels was founded in 1944 by Dinshaw Avari. Avari Hotels first
          location was the Beach Luxury Hotel in Karachi which opened in 1948.
          Later, the company established the 17-story Avari Tower Hotel with 120
          suites in Karachi In May 2012, Avari Hotels partnered with Etihad to
          join the Etihad Guest loyalty program In 2013, the group announced the
          launch of a major expansion phase. In 2017, Avari Hotels announced the
          opening of two 4-star hotels in Multan. The hotel chain is owned by the
          Parsi Avari family and which was led by Byram D. Avari, who was the
          Chairman of the group. The hotel chain offers a dedicated toll-free
          round-the-clock reservations number in Pakistan, 0800-AVARI. For callers
          from overseas, the number is +92 333 0602743.
        </p>
      </div>
      <div className="my-12">
      <h2 className="text-xl font-semibold mb-4">Types</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   text-sm">
          {[
            "Hotels",
            "Resorts",
            "Villas",
            "Motel",
            "Suite",
            "Apartment",
            "Luxury Rooms",
            "Deluxe Rooms",
            "Lodge",
            "Conclusion",
            "Boutique",
          ].map((type, index) => (
            <div key={index} className="text-gray-800 flex mb-4">
<span className="text-xl text-red-500 mr-2" ><RiCheckDoubleLine />
</span>
              {type}
            </div>
          ))}
        </div>
      </div>
      <div className="my-12">
      <h2 className="text-xl font-semibold mb-4">Facilities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   text-sm">
          {facilities.map((items, index) => (
            <div key={index} className="text-gray-800 flex mb-4">
<span className="text-xl text-red-500 mr-2" >{items.icon}
</span>
              {items.name}
            </div>
          ))}
        </div>
      </div>
      <hr className="border-gray-500 mt-6  " />
    </div>
  );
};

export default RoomSummary;
