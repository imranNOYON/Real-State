import React from 'react'
import SectionHeading from './SectionHeading'
import CitySlider from './CitySlider'

const CityProperties = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className="mx-auto w-[80%]">
        <SectionHeading heading='Explore City Properties'/>
        <div className="mt-10 md:mt-16">
            <CitySlider/>
        </div>
        </div>
    </div>
  )
}

export default CityProperties