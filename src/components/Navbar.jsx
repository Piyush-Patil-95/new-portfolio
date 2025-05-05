import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";


const Navbar = () => {
  const email = "piyushpatil0009@gmail.com";

  const handleClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <nav className='mb-20 flex items-center justify-between ppy-6'>
      <div className='flex flex-shrink-0 items-center '>
        <p className='text-lg'>Portfolio.</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a target="_blank"  href="https://www.linkedin.com/in/piyush-patil-66338b252"><FaLinkedin /></a>
        <a target="_blank" href="https://github.com/Piyush-Patil-95"><FaGithub /></a>
        <a target="_blank" href="https://leetcode.com/u/piyushpatil0009/"><SiLeetcode/></a>
        <a onClick={handleClick} href="#"><AiOutlineMail /></a>
      </div>
    </nav>
  )
}

export default Navbar
