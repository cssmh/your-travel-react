import React from 'react'
import CarBooking from '../components/carbooking/CarBooking'
import BookingForm from '../components/carbooking/BookingForm'
const CarBook = () => {
  return (
    <div className='  xl:mx-24 px-2 mx-4 md:mx-8 lg:mx:20 mt-12 md:flex gap-6'>
      <CarBooking/>
      <BookingForm/>
      </div>
  )
}

export default CarBook