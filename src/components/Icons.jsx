import React from 'react'
import {FaFacebook,FaGithub,FaInstagram,FaLinkedin} from "react-icons/fa";
import { Link } from 'react-router-dom';
const Icons = () => {
  return (
    <div className='icons mx-[100px] text-white text-2xl flex gap-6 mt-[40px]'>
        
        <a href="https://www.linkedin.com/in/abhay-gupta-119025257/"><FaLinkedin/></a>
          
        <a href="https://github.com/Freakcodes"><FaGithub /></a>
        <a href="https://www.facebook.com/profile.php?id=100013315298109"><FaFacebook/></a>
        <a href="https://www.instagram.com/abhayyyyyyyyy_19/"><FaInstagram/></a>
    </div>
  )
}

export default Icons