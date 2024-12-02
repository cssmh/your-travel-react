import React from "react";
import GalleryCard from "./GalleryCard";
import { IoIosArrowRoundForward } from "react-icons/io";

const Gallery = () => {
  const cardData = [
    {
      image: " /gall1.png",
      heading: "Summer Vacations",
      paragraph: "99,058 Properties",
    },
    {
      image: "/gall2.png",
      heading: "Winter Vacations",
      paragraph: "99,058 Properties",
    },
    {
      image: "/gall3.png",
      heading: "Spring Vacations",
      paragraph: "99,058 Properties",
    },
  ];
  return (
    <>
      <div className="mx-8 md:mx-20 mt-8">
        <h2 className="text-2xl sm:text-5xl font-bold text-black text-start">
          Destination <span className="underlined underline-mask">Gallery</span>
        </h2>
       
        {/* Paragraph and View All Button */}
        <div className="flex flex-col lg:flex-row items-start  justify-between mt-8 space-y-2 lg:space-y-0">
          <p className="text-xs sm:text-sm text-gray-600">
            Destination can describe where you are going, like a traveler whose
            destination in Switzerland, or a place that is known for a
            particular purpose.
          </p>
          <button className="text-xs sm:text-sm text-red-500 font-semibold border border-red-500 rounded-full px-3 py-1  flex items-center hover:bg-red-500 hover:text-white transition">
            View All
            <IoIosArrowRoundForward className="ml-1 sm:ml-2" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 mx-8 md:mx-20 py-6 ">
        {cardData.map((card, index) => (
          <GalleryCard
            key={index}
            image={card.image}
            heading={card.heading}
            paragraph={card.paragraph}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;

