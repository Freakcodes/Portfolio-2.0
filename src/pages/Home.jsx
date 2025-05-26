import React from 'react'
import Name from '../components/Name'
import Descrip from '../components/Descrip'
import Nav from '../components/Nav'
import {motion as m} from "framer-motion"
import Icons from '../components/Icons'
import Image from '../components/Image'

import SmoothFollower from '../components/SmoothFollower'

const Home = () => {
  return (
    
    <m.div
    initial={{y:"100%"}}
    animate={{y:"0%"}}
    transition={{duration:0.75,ease:"easeOut"}}
    exit={{opacity:1}}
    className=' items-center justify-around  content-center' 
    >
    
     <SmoothFollower/>
        <Name/>
        <Descrip/>
        
        <div className="onlyhome mt-4">
        <Nav/>
        </div>
        
        <Icons/>
      
      <div className=''>
          <Image />
      </div>
        
      
       
    </m.div>
    
  )
}

export default Home