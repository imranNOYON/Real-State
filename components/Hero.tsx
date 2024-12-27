"use client"
import React, { useEffect } from 'react'
import Front from './Front'
import ApartmentType from './ApartmentType'
import CityProperties from './CityProperties'
import Property from './Property'
import Review from './Review'
import Blog from './Blog'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  useEffect(()=>{
    const initAos=async()=>{
      await import('aos')
      AOS.init({
        duration:1000,
        easing:"ease",
        once:true,
        anchorPlacement:"top-bottom"
      })
    }
    initAos()
  },[])

  return (
    <div className='overflow-hidden'>
      <Front/>
      <ApartmentType/>
      <Property/>
      <CityProperties/>
      <Review/>
      <Blog/>
    </div>
  )
}

export default Hero