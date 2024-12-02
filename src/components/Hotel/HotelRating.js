import React, { useState } from 'react';
import { FiFilter, FiX } from 'react-icons/fi';

const FilterSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-200 rounded-lg shadow-lg focus:outline-none"
        onClick={toggleFilter}
      >
        {isOpen ? <FiX size={24} /> : <FiFilter size={24} />}
      </button>
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-40 md:static md:translate-x-0 md:block`}
      >
        <div className="h-full overflow-y-auto p-4">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="h-32 relative bg-gray-300 mb-4 rounded-md overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-md"
              style={{ backgroundImage: `url('/map.jpg')` }}
            >
              <span className="absolute inset-0 flex items-center justify-center text-white">
                <div className="py-1 px-2 bg-gray-500 opacity-50 text-xs md:text-base rounded-xl">Show on map</div>
              </span>
            </div>
          </div>
          <div className="mb-4 border rounded-md border-gray-400 p-4 ">
            <h3 className="font-semibold text-xs md:text-base">Price<span className='font-light'>(per night)</span></h3>
            <p className="text-gray-500 text-xs md:text-sm">$1000</p>
            <input
              type="range"
              min="700"
              max="1000"
              className="w-full mt-2 custom-red-input"

            />
            <button className="mt-2 bg-red-500 rounded-md hover:bg-red-600 text-white py-1 px-4 text-sm md:text-base">
              Apply
            </button>
          </div>
          <div className='border border-gray-400 rounded-md'>
            <div className=" border border-b-gray-400 p-1 md:p-4 ">
              <h3 className="font-semibold">Hotel Star</h3>
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center">
                  <input type="checkbox" className="mr-2 Red custom-red-input" />
                  <span className="text-yellow-500">
                    {'★'.repeat(star)}
                    {'☆'.repeat(5 - star)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border border-b-gray-400 p-1 md:p-2 lg:p-4">
              <h3 className="font-semibold text-sm sm:text-lg">Hotel Rating</h3>
              {[
                { rating: '5 Star', count: '(15)' },
                { rating: '4 Star', count: '(10)' },
                { rating: '3 Star', count: '(08)' },
                { rating: '2 Star', count: '(05)' },
                { rating: '1 Star', count: '(03)' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2 mb-1 custom-red-input" />
                    <span className="text-gray-500 text-[8px] md:text-sm">{item.rating}</span>
                  </div>
                  <span className="text-gray-500 text-[8px] md:text-sm">{item.count}</span>
                </div>
              ))}
            </div>
            <div className=" border border-b-gray-400 p-1 md:p-2 lg:p-4 ">
              <h3 className="font-semibold">Top Filters</h3>
              {['Free WiFi', 'Parking', 'Book without Credit Card'].map((filter, index) => (
                <div key={index} className="flex items-center">
                  <input type="checkbox" className="mr-2 mb-1 custom-red-input" />
                  <span className='text-gray-500 text-[8px] md:text-sm'>{filter}</span>
                </div>
              ))}
            </div>
            <div className=" border border-b-gray-400 p-1 md:p-2 lg:p-4">
              <h3 className="font-semibold">Features</h3>
              {[
                'Free WiFi',
                'Parking',
                'Family rooms',
                'Non-smoking rooms',
                'Pets allowed',
                'Airport shuttle',
                'Spa and wellness center',
                'Room service',
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <input type="checkbox" className="mr-2 mb-1 custom-red-input" />
                  <span className='text-gray-500 text-[8px] md:text-sm'>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleFilter}
        ></div>
      )}
    </div>
  );
};

export default FilterSidebar;
