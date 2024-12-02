import React from "react";

const GuestReviews = () => {
  const reviews = [
    {
    image: '/avatardriver.png',
      name: "Muneeb ur Rehman",
      location: "Pakistan",
      rating: 5,
      review:
        "Was looked after by hotel staff they where amazing. My room was great comfortable and very clean. My luggage was not on my flight from dubai when I arrived at home airport. It came 3 days later. When I arrived at airport hotel staff went and collected my luggage for me they went above and beyond there duties. I used to stay at the pearl continental but",
    },
    {
        image: '/prifilephoto.png',
      name: "James Thomas",
      location: "USA",
      rating: 4,
      review:
        "Was looked after by hotel staff they where amazing. My room was great comfortable and very clean. My luggage was not on my flight from dubai when I arrived at home airport. It came 3 days later. When I arrived at airport hotel staff went and collected my luggage for me they went above and beyond there duties. I used to stay at the pearl continental but",
    },
    {
        image: '/testimonial2.jpg',
      name: "Muhammad Aadil",
      location: "Switzerland",
      rating: 5,
      review:
        "Was looked after by hotel staff they where amazing. My room was great comfortable and very clean. My luggage was not on my flight from dubai when I arrived at home airport. It came 3 days later. When I arrived at airport hotel staff went and collected my luggage for me they went above and beyond there duties. I used to stay at the pearl continental but",
    },
  ];

  const ratings = [
    { name: "Performance", value: 4.6 },
    { name: "Conditions", value: 4.7 },
    { name: "Cleanliness", value: 4.5 },
    { name: "Value for money", value: 3.8 },
    { name: "Management", value: 4.2 },
    { name: "Fuel", value: 4.3 },
  ];

  return (
    <section className=" p-6">
      <h2 className="text-2xl font-bold mb-4">Guest Review</h2>
      <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-bold bg-red-500 text-white px-1  rounded-md">
              4.2
            </span>
            <span className="text-sm font-medium text-gray-600">Good (2365 reviews)</span>
          </div>
      <div className="md:flex items-start gap-10">
        <div className="md:w-1/6">
          
          {ratings.map((rating, index) => (
            <div key={index} className="mb-4">
                <div className="flex justify-between"> <p className="text-sm font-semibold">{rating.name}</p>
                <p className="text-sm text-gray-500">{rating.value}</p></div>
             
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-red-500 h-2 rounded"
                  style={{ width: `${rating.value * 20}%` }}
                ></div>
              </div>
             
            </div>
          ))}
        </div>
        <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 border-gray-500 "
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"><img
  src={review.image}
  alt={review.name}
  className="w-10 h-10 rounded-full object-cover"
/></div>
                <div className="text-[12px]">
                    <div className="flex gap-1"><p className="font-semibold ">{review.name}</p>
                    <span className="text-yellow-500 ">
                    {'★'.repeat(review.rating)}</span></div>
                    
                  <p className="text-[12px] text-gray-500">{review.location}</p>
                </div>
              </div>
              <div className="p-4">
              <p className="text-[12px] text-gray-600 ">
                {review.review.substring(0, 150)}...
              </p>
              <a href="#" className=" text-red-500 font-medium text-[12px] ">
                Read More
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestReviews;
