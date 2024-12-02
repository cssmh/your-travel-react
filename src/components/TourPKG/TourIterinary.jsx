import React from 'react';

const TourItinerary = () => {
  const itinerary = [
    {
      day: 'Day 01',
      title: 'Arrival – Lake Lucerne',
      description: `Upon arrival at Karachi’s Quaid-e-Azam Airport, we will be transferred to a carefully chosen hotel. After settling in, we embark on a short panoramic tour of the city, taking in its vibrant atmosphere. Our first stop is the iconic Mausoleum of Muhammad Ali Jinnah, a tribute to the founder of Pakistan. We then visit the Masjid-i-Tooba Mosque, Empress Market, The Mohatta Palace, and the National Museum. Immersing ourselves in Karachi’s rich history and culture. Exploring the Bohri Bazaar, reminiscent of renowned covered markets, we indulge in the local shopping experience. To complete the day, we unwind at the popular Clifton Beach, enjoying the sight of colorful camels. A comfortable stay awaits us at Hotel Mehran.`,
      overnight: 'Overnight Karachi',
      image: '/tour.jpeg',
    },
    {
      day: 'Day 02',
      title: 'Lake Lucerne - Zurich',
      description: `After breakfast, we set out from the hotel to explore the fascinating Chaukundi Necropolis, renowned for its intricately carved sandstone tombs. This ancient burial ground offers a glimpse into the rich craftsmanship of the region. Next, we visit the historical Makli Necropolis, a UNESCO World Heritage Site. Its vast expanse is adorned with ornate tombs and mausoleums, reflecting the architectural splendor of the past. Continuing our journey, we arrive at Thatta Mosque, an impressive masterpiece commissioned by Emperor Shah Jahan. The mosque's remarkable blue glazed tile work is a sight to behold and a testament to its preservation over the years.`,
      overnight: 'Overnight Hyderabad',
      image: '/tour1.jpeg',
    },
    {
      day: 'Day 03',
      title: 'Weggis',
      description: `Departing from Hyderabad, our journey takes us to Bhit Shah, where we encounter the awe-inspiring shrine of the renowned Sufi saint, Shah Abdul Latif Bhattai. This architectural marvel pays homage to the beloved poet and musician, drawing visitors from far and wide. Continuing our expedition, we proceed to Sehwan to witness the captivating shrine of Lal Shahbaz Qalandar. The mausoleum of this revered saint is a sight to behold, bustling with devotees from various backgrounds, creating a vibrant and spiritually charged atmosphere.`,
      overnight: 'Overnight Larkana',
      image: '/tour2.jpeg',
    },
    {
      day: 'Day 04',
      title: 'Vitznau',
      description: `Our journey takes us to the ancient city of Mohenjo-Daro, a UNESCO World Heritage site and a significant center of the Indus Civilization. We delve into the mysteries of this historical marvel, uncovering the remains of a once-thriving civilization. Continuing our exploration, we make our way to Sukkur, stopping en route to visit the magnificent Kot Diji Fort. This grand fortress, built by the Talpurs in the 18th century, stands proudly atop a hill, commanding panoramic views of the surrounding area.`,
      overnight: 'Overnight Sukkur',
      image: '/tour3.jpeg',
    },
    {
      day: 'Day 05',
      title: 'Ruti',
      description: `Our journey takes us to the historic city of Bahawalpur, formerly a princely state renowned for its rich cultural heritage. En route, we visit Uch Sharif, an ancient city believed to have been established by Alexander the Great. Over the centuries, Uch Sharif flourished as an Islamic center, attracting Muslim scholars seeking refuge and becoming a hub of spirituality and tradition.`,
      overnight: 'Overnight Bahawalpur',
      image: '/tour4.jpeg',
    },
    {
      day: 'Day 06',
      title: 'Beckenried',
      description: `Our journey takes us to the historic city of Bahawalpur, formerly a princely state renowned for its rich cultural heritage. En route, we visit Uch Sharif, an ancient city believed to have been established by Alexander the Great. Over the centuries, Uch Sharif flourished as an Islamic center, attracting Muslim scholars seeking refuge and becoming a hub of spirituality and tradition.`,
      overnight: 'Overnight Bahawalpur',
      image: '/tour5.jpg',
    },
  ];

  return (
    <div className="mt-12">
      <h1 className="text-xl font-bold mb-6 ">Tour Itinerary</h1>
      {itinerary.map((day, index) => (
        <div
          key={index}
          className="md:flex gap-6 mb-8"
        >
          <div className='w-full md:w-7/12 lg:w-10/12'><p className='text-lg font-semibold'>{day.day}</p>
            <p className='text-lg font-semibold mb-4'>{day.title}</p>
            <p className="text-sm text-gray-800">{day.description}<span className='ml-1'>{day.overnight}</span> </p>
          </div>
          <div className='w-full md:w-5/12 lg:w-2/12 mt-2 md:mt-0'>
            <img
              src={day.image}
              alt={day.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourItinerary;
