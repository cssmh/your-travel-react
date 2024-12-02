import React from "react";
import ProfileCard from "../snippets/ProfileCard";
function FeaturedProfile() {
  const cardData = [
    {
      image: " /hotel.png",
      name: "Avari Hotel Lahore",
      rating: 4.2,
      reviews: "Good (2365 reviews)",
      price: "    717.94",
      location: "gulberg",
    },
    {
      image: " /hotel4.png",
      name: "Belvedere Hotel",
      rating: 4.8,
      reviews: "Good (2365 reviews)",
      price: "402.37",
      location: "gulberg",
    },
    {
      image: " /hotel.png",
      name: "Dolder Grand Hotel",
      rating: 4,
      reviews: "Good (2365 reviews)",
      price: "    1085.57",
      location: "gulberg",
    },
    {
      image: " /hotel4.png",
      name: "Des Alpes Hotel",
      rating: 4.5,
      reviews: "Good (2365 reviews)",
      price: "550.15",
      location: "gulberg",
    },
  ];

  return (
    <>
      <div className="bg-red-600 mx-4 rounded-lg sm:mx-20 mt-12">
        <div className="flex flex-col sm:grid sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 items-center py-4 text-center">
          {/* Headings */}
          <h1 className="text-white text-lg font-semibold">Time Line</h1>
          <h1 className="text-white  text-lg font-semibold">
            Booking History (2)
          </h1>
          <h1 className="text-white text-lg font-semibold">New Booking (1)</h1>

          {/* Button */}
          <button className="bg-white text-red-600  py-2 px-4 lg:px-2   rounded-lg  font-medium hover:bg-gray-100">
            My Favourites (7)
          </button>

          <h1 className="text-white text-lg font-semibold">Account Setting</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4 sm:p-20 ">
        {cardData.map((card, index) => (
          <ProfileCard
            key={index}
            image={card.image}
            name={card.name}
            location={card.location}
            rating={card.rating}
            reviews={card.reviews}
            price={card.price}
          />
        ))}
      </div> 
    </>
  );
}

export default FeaturedProfile;
