import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaCalendarAlt,  FaRegCircle} from 'react-icons/fa'

const CarAvability = () => {
  return (
    <>
    <div className="max-w-4xl  my-8 ">
        <h2 className="text-2xl font-bold mb-4">Availability</h2>
        <div className="flex  rounded-lg overflow-hidden border border-red-500 text-[8px] md:text-lg">
          {/* Date Picker Section */}
          <div className="flex items-center px-4 py-3  flex-grow ">
            <FaCalendarAlt className="text-gray-400 mr-2" />
            <span className="text-gray-400 text-sm">Tue 17 Sept — Fri 20 Sept</span>
          </div>

          {/* Guests Section */}
          <div className="flex items-center justify-between px-4 py-3 flex-grow border border-l-red-600 ">
            <div className='flex'> <CiLocationOn className="text-gray-500 mr-2 mt-1" />
              <span className="text-gray-400 ">Location</span></div>

            <span className=" text-gray-400"></span>
          </div>

          {/* Search Button */}
          <button className="bg-red-500 text-white font-semibold px-6 py-3  hover:bg-red-600 rounded-md rounded-l-none">
            Search Availability
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
     {/* First Card */}
<div className="bg-white shadow-lg rounded-lg p-6 space-y-4 border border-black">
  {/* Pick-up & Drop-off Info */}
  <div className="flex flex-col items-start space-y-4">
    <h3 className="font-semibold text-lg">Pick-up & Drop-off</h3>
    <div className="relative pl-4 space-y-3">
      {/* Vertical Border */}
      <div className="absolute left-5 top-7 h-[calc(100%-42px)] border-l-2 border-gray-400"></div>

      {/* Top Section */}
      <span className="flex items-center space-x-2">
        <FaRegCircle className="text-gray-500 text-xs mr-2" />
        <p className="text-sm text-gray-500">Sun, 17 Sep - 10:00 AM</p>
      </span>

      {/* Pick-up Instructions */}
      <p className="text-red-500 text-sm pl-8">View pick-up instructions</p>

      {/* Bottom Section */}
      <span className="flex items-center space-x-2">
        <FaRegCircle className="text-gray-500 text-xs mr-2" />
        <p className="text-sm text-gray-500">Sun, 20 Sep - 10:00 PM</p>
      </span>
    </div>
  </div>

  {/* Drop-off Instructions */}
  <div className="text-red-500 text-sm pl-10">
    View Drop-off instructions
  </div>
</div>


      {/* Second Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 border border-black">
        {/* Car Price Details */}
        <h3 className="font-semibold text-lg">Car Price</h3>

        <div className="flex justify-between items-center text-sm text-gray-500">
          <p>Car hire charges</p>
          <p className="font-medium">$600.00</p>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <p>GST tax</p>
          <p className="font-medium">$1600.00</p>
        </div>
        <h3 className="text-sm text-gray-500">
          You'll pay in USD, because that's your local currency.
        </h3>
        <hr className='text-gray-400'/>

        <div className="flex justify-between items-center text-sm text-black font-semibold">
          <p>Price of 3 days:</p>
          <p className="font-medium">$700.00</p>
        </div>
      </div>
    </div>
    <div className=' flex flex-col sm:flex-row  justify-between p-6'>
        <div >
        <input type="checkbox" className="mr-2 accent-red-500" />
        <span>  I read at all  <span className="text-red-500"> terms and conditions</span> </span>
        </div>
        <div className='flex items-center'>
            <button className='bg-red-500 rounded-md text-white py-2 px-3'>Book Now</button>
        </div>
    
    </div>
      </>
  )
}

export default CarAvability
