import React from 'react'
import RoomProfile from '../components/HotelRoom/RoomProfile'
import RoomSummary from '../components/HotelRoom/RoomSummary'
import AvailableRoom from '../components/HotelRoom/AvailableRoom'
import GuestReview from '../components/HotelRoom/GuestReview'
import RulesPolicy from '../components/HotelRoom/RulesPolicy'

const HotelRoom = () => {
  return (
    <div className='p-4 md:p-8 mx-4 md:mx-16'>
      <RoomProfile/>
      <RoomSummary/>
      <AvailableRoom/>
      <GuestReview/>
      <RulesPolicy/>
    </div>
  )
}

export default HotelRoom
