import React from 'react'
import myAvatar from '../assets/myAvatar.svg'
const Image = () => {
  return (
    <div className=' md:absolute md:right-0 md:top-10 md:mr-[150px] absolute top-0 ml-[120px] w-[300px]  md:flex md:items-center md:h-[calc(100vh-80px)] hidden' >
        <img src={myAvatar} alt="an Avaatar" className='rounded-full' />
    </div>
  )
}

export default Image