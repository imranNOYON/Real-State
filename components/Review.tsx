import React from 'react'
import SectionHeading from './SectionHeading'
import ReviewSlider from './ReviewSlider'

const Review = () => {
  return (
    <div className='pt-16 pb-16 bg-[#fef7f6] '>
        <div className="mx-auto w-[80%]">
       <SectionHeading heading='Our Clients Reviews'/>
       <div className="mt-14 ">
        <ReviewSlider/>
       </div>
        </div>
    </div>
  )
}

export default Review