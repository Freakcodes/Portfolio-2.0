import React from 'react'
import {FaFacebook,FaGithub,FaInstagram,FaLinkedin} from "react-icons/fa";
import { Link } from 'react-router-dom';
const Icons = () => {
  return (
    <div className='icons md:mx-[100px] mx-10 text-white text-2xl flex gap-10 mt-[40px]'>
        
        <a href="https://www.linkedin.com/in/abhay-gupta-119025257/" ><FaLinkedin className='hover:text-[#0077b5] text-[30px]   '/></a>
          
        <a href="https://github.com/Freakcodes" ><FaGithub className='hover:text-[#333] text-[30px] ' /></a>
        <a href="https://www.facebook.com/profile.php?id=100013315298109"><FaFacebook className='hover:text-[#0077b5] text-[30px]   '/></a>
        <a href="https://www.instagram.com/abhayyyyyyyyy_19/"><FaInstagram className=' hover:text-[#d6249f] text-[30px]'/></a>
    </div>
  )
}

export default Icons