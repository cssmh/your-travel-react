import React from 'react'
import CarBanner from '../components/car/CarBanner'
import CarTab from '../components/car/CarTab'
const Car = () => {
  return (
    <div>
      <CarBanner/>
      <CarTab heading="Our Fleet"/>
    </div>
  )
}

export default Car