import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
const Descrip = () => {
  return (
    <div className='md:mx-[100px] md:mt-[20px] mx-10'>
        <p className='text-white text-2xl'>I'm a passionate <span> </span>
            <div className='inline font-bold border-b-2 border-green-500 '>
            <Typewriter
            
            words={["Student","Web Developer","Learner"]}
         
            loop={10
            }

            cursor

            cursorStyle='|'

            typeSpeed={70}

            deleteSpeed={50}

            delaySpeed={1000}

            cursorColor='white'
            
            
         />
            </div>
            
        </p>
    </div>
  )
}

export default Descrip