import React from 'react'
import Name from '../components/Name'
import Descrip from '../components/Descrip'
import Nav from '../components/Nav'
import {motion as m} from "framer-motion"
import Icons from '../components/Icons'
import Image from '../components/Image'
const Home = () => {
  return (
    <m.div
    initial={{y:"100%"}}
    animate={{y:"0%"}}
    transition={{duration:0.75,ease:"easeOut"}}
    exit={{opacity:1}}
    className=' items-center justify-around h-[100vh]'
    
    >
      
        <Name/>
        <Descrip/>
        <Nav/>
        <Icons/>
      
    
        <Image />
      
        
    </m.div>
    
  )
}

export default Home