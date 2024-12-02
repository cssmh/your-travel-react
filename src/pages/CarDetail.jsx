import React from 'react'
import CarProfile from '../components/cardetails/CarProfile'
import Summary from '../components/cardetails/Summary'
import CarAvability from '../components/cardetails/CarAvability'
import GuestReviews from '../components/cardetails/GuestReviews'
const CarDetail = () => {
  return (
    <div className='  mx-4 md:mx-12 lg:mx-16 xl:mx-20'>
      <CarProfile/>
      <Summary/>
      <CarAvability/>
      <GuestReviews/>
      </div>
  )
}

export default CarDetail