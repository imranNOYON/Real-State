"use client"
import React, { useState } from 'react'
import Nav from './Nav'
import MobNav from './MobNav'

const Responsive = () => {
  
  const [showNav,setShowNav]=useState(false)
  const openNavHandler=()=>setShowNav(true)
  const closeNavHandler=()=>setShowNav(false)

  return (
    <div>
        <Nav openNav={openNavHandler}/>
        <MobNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  )
}

export default Responsive