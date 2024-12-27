import React from 'react'

import { appartmentTypeData } from '@/data/data'
import AppartmentTypeCard from './ApartmentTypeCard'
import SectionHeading from './SectionHeading'



const ApartmentType = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto'>
       <SectionHeading heading='Apartment Types'/>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6
       mt-10 md:mt-20 gap-8 items-center">
        {
          appartmentTypeData.map((type,i)=>{
            return (
            <div key={type.id} data-aos="zoom-in" data-aos-delay={`{i*150}`}>
              <AppartmentTypeCard type={type}/>
            </div>
            )
          })
        }
       </div>
      </div>
    </div>
  )
}

export default ApartmentType