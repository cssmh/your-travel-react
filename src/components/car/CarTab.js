import React from 'react';
import CarCard from '../snippets/CarCard';
import { FaChevronDown } from 'react-icons/fa';
const carData = [
  {
    id: 1,
    image: '/carp1.png',
    title: 'Audi A4 2022',
    location: 'Lahore',
    carClass: 'Economy',
    price: 99,
    doors:'door 2',
    luggage:"2",
    person:'person4'
  },
  {
    id: 2,
    image: '/carp2.png',
    title: ' Ford Raptor',
    location: 'Lahore',
    carClass: 'Economy',
    price: 120,
    doors:'door 2',
    luggage:"2",
    person:'person4'
  },
  {
    id: 3,
    image: '/carp3.png',
    title: 'BMW AMG',
    location: 'Lahore',
    carClass: 'Economy',
    price: 120,
    doors:'door 2',
    luggage:"2",
    person:'person4'
  },
  {
    id: 4,
    image: '/carp4.png',
    title: 'Lexus LX570',
    location: 'Lahore',
    carClass: 'Economy',
    price: 120,
    doors:'door 2',
    luggage:"2",
    person:'person4'
  },
  {
    id: 4,
    image: '/carp5.png',
    title: 'Nissan G-TR AWD',
    location: 'Lahore',
    carClass: 'Economy',
    price: 120,
    doors:'door 2',
    luggage:"2",
    person:'person4'
  },

  {
    id: 4,
    image: '/carp6.png',
    title: 'Nissan',
    location: 'Lahore',
    carClass: 'Economy',
    price: 120,
    doors:'door 2',
    luggage:"2",
    person:'person4'
  },
];

const CarTab = ({heading}) => {
  return (
    <div className='md:px-6 lg:px:20'>
  <div className="flex justify-between items-center p-4 ">
      <h2 className="text-xl font-semibold">{heading}</h2>
      <div className="flex items-center space-x-1 text-gray-700 text-sm cursor-pointer">
        <span>Sort By:</span>
        <span className="font-semibold">Best Matches</span>
        <FaChevronDown className="text-gray-700" />
      </div>
      </div>

    <div className="grid grid-cols-1 gap-6 px-4 py-8">
      {carData.map((car) => (
        <CarCard
          key={car.id}
          image={car.image}
          title={car.title}
          location={car.location}
          carClass={car.carClass}
          price={car.price}
          doors={car.doors}
          luggage={car.luggage}
          person={car.person}
        />
      ))}
    </div>
    </div>
  );
};

export default CarTab;
