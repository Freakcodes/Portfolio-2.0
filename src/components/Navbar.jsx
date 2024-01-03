import React from 'react'
import Nav from './Nav'
import {motion as m } from "framer-motion"
const Navbar = () => {
  return (
    <m.div 
    initial={{y:"100%"}}
    animate={{y:"0%"}}
    transition={{duration:0.75,ease:"easeOut"}}
    exit={{opacity:0}}
    className=' md:flex md:justify-between md:items-center  '>
      <m.h1 
      initial={{fontSize:"1.5rem"}}
      animate={{fontSize:"2.5rem"}}
      transition={{duration:0.50}}
      className=' hidden md:block text-white font-semibold text-4xl mt-4 ml-[9rem] '>
        Abhay Gupta
      </m.h1>
      <Nav/>
    </m.div>
  )
}

export default Navbar