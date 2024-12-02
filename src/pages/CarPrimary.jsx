import React from 'react'
import CarCatogory from '../components/car/CarCategory'
import CarBanner from '../components/car/CarBanner'
import CarTab from '../components/car/CarTab'
const CarPrimary = () => {
  return (
    <>
      <CarBanner />
      <div className='flex flex-col lg:flex-row justify-between mx-16 '>
        <div className='hidden lg:block w-1/4 mt-24'>
          <CarCatogory />
        </div>
        <div className='w-3/4 mt-24'>
          <CarTab heading="32 Cars Available" />
        </div>
      </div>
    </>
  )
}

export default CarPrimary