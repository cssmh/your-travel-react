import React from 'react'
import TourProfile from '../components/TourPKG/TourProfile'
import TourSummary from '../components/TourPKG/TourSummary'
import TouristReview from '../components/TourPKG/TouristReview'
import TourItinerary from '../components/TourPKG/TourIterinary'

const TourPKG = () => {
  return (
    <div className='p-4 md:p-8 mx-4 md:mx-16'>
      <TourProfile/>
      <TourSummary/>
      <TourItinerary/>
      <TouristReview/>
    </div>
  )
}

export default TourPKG
