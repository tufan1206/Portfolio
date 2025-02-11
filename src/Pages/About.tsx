"use client"
import React from 'react'
import profileImg from '../assets/profile.jpg'
import  { useState } from "react";
 


const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <main className='min-h-screen pt-14 pl-12 pr-12 pb-12'>
      <div>
        <h1 className='text-purple-800 text-4xl font-bold text-center mb-8'>About Me</h1>
      </div>
      <div className='flex flex-row space-x-8'>
      <img alt="Tufan Awon" width={300}  className="rounded-lg shadow-lg" src={profileImg} style={{color: "transparent",height:"300px"}}/>

      <div className='bg-white w-screen rounded-lg shadow-lg p-6'>
        <h1 className='text-3xl text-purple-600 font-semibold mb-4'>
        Hi, I'm Tufan Awon
        </h1>
        <p className='text-black mb-2 '>
        I'm a Front-End Developer who loves building websites that are easy to use and look great. I have a good understanding of React.js and modern web tools, and I focus on creating fast and responsive websites that offer a great experience for users.
        </p>
        <p className='text-black mb-2'>
        I am currently studying B.Tech in Computer Science and Engineering at Supreme Knowledge Foundation Group of Institutions under MAKAUT University. During my studies, I have developed skills in C, Java, JavaScript, HTML & CSS, React.js, and Next.js. I also worked on projects during my internship that helped me improve my creativity and technical skills.
        </p>

        <p className='text-black mb-2'>
        My goal is to become a proficient and innovative Web Developer, where I can build user-centric, responsive, and scalable web applications. 
        I am passionate about creating digital experiences that are both functional and visually appealing, and I strive to contribute to projects that make a positive impact.
        </p>

        <h1 className='text-purple-600 text-2xl font-medium mb-2'>
          Education
        </h1>

        <p className='text-black mb-2'>
          Btech in Computer Science and Engineering at Supreme Knowledge Foundation Group of Institutions ,Mankundu, Hooghly (2021-2025)<br/>
          Higher Secondary from Chatra Nandalal Institution ,Serampore ,Hooghly (2019-2021) <br/>
          Madhyamik from Chatra Nandalal Institution ,Serampore ,Hooghly (2013-2019)
        </p>

        <h1 className='text-purple-600 text-2xl font-medium mb-2'>
          Certifications
        </h1>

        <p className="text-black">
        HTML & CSS certification from Supreme Knowledge Foundation Group Of Institutions at 2022.{" "}
        <span
          className="text-blue-500 underline cursor-pointer"
          onClick={handleOpen}
        >
          click here
        </span>
      </p>
      {isOpen && (
        <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="p-8 rounded-lg  relative">
            {/* Certificate Image */}
            <img
              src={profileImg} // Replace with the path to your certificate image
              alt="Certificate"
              className="max-w-full max-h-[80vh]"
            />
            {/* Close Button */}
            <button
              className="absolute top-0 right-2 text-black text-4xl font-bold cursor-pointer"
              onClick={handleClose}
            >
              X
            </button>
          </div>
        </div>
      )}

      </div>
    </div>
    </main>
  )
}

export default About
