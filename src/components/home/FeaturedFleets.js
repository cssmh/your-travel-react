import React from "react";
import FleetCard from "../snippets/FleetCard";
import {ALT_TAGS} from '../../Constants/Global'
const FeaturedFleets = () => {
  const cardData = [
    {
      imageSrc: " /car1.png",
      heading: "Business Class",
      description: "Mercedes Benz E Class, BMW 9 Series,Audi A7 or Similar",
    },
    {
      imageSrc: "/car2.png",
      heading: "Elecric Class",
      description: "Mercedes Benz E Class, BMW 9 Series,Audi A7 or Similar",
    },
    {
      imageSrc: "/car2.png",
      heading: "Business Van/SUV",
      description: "Mercedes Benz E Class, BMW 9 Series,Audi A7 or Similar",
    },
    {
      imageSrc: " /car1.png",
      heading: "First Class",
      description: "Mercedes Benz E Class, BMW 9 Series,Audi A7 or Similar",
    },
  ];

  return (
    <>
      <div className="mx-8 sm:mx-20 mt-16 ">
        <h2 className="text-2xl md:text-5xl font-bold text-black text-start">Our <span className="underlined underline-mask">Fleet</span></h2>
        <p className="text-xs md:text-sm text-gray-600 text-start mt-8">
          Select from Our Range of Elite Vehicles for a First-Class Driving
          Experience.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 mx-8 sm:mx-20 sm:py-5 mt-5 ">
        {cardData.map((card, index) => (
          <FleetCard
            key={index}
            imageSrc={card.imageSrc}
            heading={card.heading}
            description={card.description}
          />
        ))}
      </div>
    </>
  );
};

export default FeaturedFleets;
