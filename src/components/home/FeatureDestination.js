import React from 'react'
import DestinationCard from '../snippets/DestinationCard';

const FeatureDestination = () => {
    const cardData = [
        {
          image: " /dest1.png",
          heading: "Lake Lucrene",
        },
        {
          image: "/dest2.png",
          heading: "Zurich",
        },
        {
          image: "/dest3.png",
          heading: "Chapel Bridge",
        },
        {
          image: " /dest4.png",
          heading: "Zermatt",
        },
      ];
  return (
<>
    <div className="mx-8 md:mx-20 mt-4">
    <h2 className="text-2xl sm:text-5xl font-bold text-black text-start"><span className="underlined underline-mask">Popular</span> Destination</h2>
    <p className="text-xs md:text-sm text-gray-600 text-start mt-8">
    From historical cities to natural splendors come see the best of world!
    </p>
  </div>
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 mx-8 md:mx-20 py-6 ">
    {cardData.map((card, index) => (
      <DestinationCard
        key={index}
        image={card.image}
        heading={card.heading}
      />
    ))}
  </div>
  </>
 
    )}
export default FeatureDestination;