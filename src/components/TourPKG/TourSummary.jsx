import React from "react";
import { FaWifi, FaUtensils, FaTv } from "react-icons/fa";
import { LiaShuttleVanSolid } from "react-icons/lia";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";


const TourSummary = () => {
  const includedItems = [
    "Specialized bilingual guide",
    "Entrance fees (Cable and car and Moon Valley)",
    "Private Transport",
    "Box lunch water, banana apple and chocolate",
  ];

  const excludedItems = [
    "Additional Services",
    "Drink",
    "Insurance",
    "Tickets",
  ];

  const facilities = [
    { name: "Free Wifi", icon: <FaWifi /> },
    { name: "Restaurant", icon: <FaUtensils /> },

    { name: "TV", icon: <FaTv /> },

    { name: "Shuttle", icon: <LiaShuttleVanSolid /> },

    { name: "Good Breakfast", icon: <MdEmojiFoodBeverage /> },

  ];

  return (
    <div className="my-8">
      <div>
        <h2 className="text-xl font-semibold mb-1">Summary</h2>
        <p className="text-sm">
          Start and end in San Francisco! With the in-depth cultural tour Northern California Summer 2024, you have a 6 day tour package taking you through San Francisco, USA and 9 other destinations in USA. Northern California Summer 2024 includes accommodation as well as an expert guide, meals, transport and more.
        </p>
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

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Included/Excluded</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {/* Included List */}
          <div>
            <ul className="space-y-3">
              {includedItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-red-500 text-xl font-bold mr-2"><IoMdCheckmark /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Excluded List */}
          <div>
            <ul className="space-y-3">
              {excludedItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-red-500 text-xl font-bold mr-2"><RxCross1 /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Condition Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Condition</h2>
        <div className="text-sm">
          <p className="">
            Booking possible 48 hours prior departure.
          </p>
          <p className="">
            Cancellation up to 48 hours before (9 AM – 2 days prior): Free of charge. Afterwards: No refund. With medical
            certificate / flight proof: CHF 10.00 cancellation fee.
          </p>
          <p className="">Rebooking: Free of charge.</p>
          <p>
            If there are fewer than 15 registrations 48 hours before departure, the excursion will be cancelled, and a
            full refund will be issued.
          </p>
        </div></div>
    </div>
  );
};

export default TourSummary;
