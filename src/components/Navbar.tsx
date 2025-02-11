import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-purple-600 h-16 flex justify-between items-center  w-full top-0 z-50'>
        <div className='text-white ml-4 font-bold text-2xl'>
          Tufan Awon
        </div>
        <div>
          <ul className='flex'>
            <li>
            <Link className='text-white font-semibold p-2 hover:text-yellow-300' to="/home">Home</Link>
            </li>
            <li>
            <Link className='text-white font-semibold p-2 hover:text-yellow-300' to="/about">About</Link>
            </li>
            <li>
            <Link className='text-white font-semibold p-2 hover:text-yellow-300' to="/skill">Skill</Link>
            </li>
            <li>
            <Link className='text-white font-semibold p-2 hover:text-yellow-300' to="/projects">Projects</Link>
            </li>
            <li>
            <Link className='text-white font-semibold p-2 hover:text-yellow-300' to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar
