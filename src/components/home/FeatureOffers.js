import React from "react";
import FeatureCard from "../snippets/FeatureCard";
import {ALT_TAGS} from '../../Constants/Global'
function FeatureOffers() {
  const cardData = [
    {
      image: " /hotel.png",
      name: "Avari Hotel Lahore",
      rating: "4.7",
      reviews: "13 rating",
      price: "    717.94",
    },
    {
      image: " /hotel2.jpg",
      name: "Belvedere Hotel",
      rating: "4.5",
      reviews: "4 rating",
      price: "    402.37",
    },
    {
      image: " /hotel6.jpg",
      name: "Dolder Grand Hotel",
      rating: "4.9",
      reviews: "15 rating",
      price: "    1085.57",
    },
    {
      image: " /hotel4.png",
      name: "Des Alpes Hotel",
      rating: "4.8",
      reviews: " 8 rating",
      price: "    550.15",
    },
  ];

  return (
    <>
      <div className="mx-8 sm:mx-20 mt-8">
        <h2 className="text-2xl md:text-5xl font-bold text-black text-center">
          Special <span className="underlined underline-mask">Offers</span>
        </h2>
        
        <p className="text-xs md:text-sm text-gray-600 text-center mt-8 ">
          Destination can describe where you are going, like a traveler whose
          destination
          is Switzerland, or a place that is known for a particular purpose,
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  gap-6 py-10 mx-8 sm:mx-20 ">
        {cardData.map((card, index) => (
          <FeatureCard
            key={index}
            image={card.image}
            name={card.name}
            rating={card.rating}
            reviews={card.reviews}
            price={card.price}
          />
        ))}
      </div>
    </>
  );
}

export default FeatureOffers;
