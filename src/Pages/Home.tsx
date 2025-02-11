import React from 'react'
import profileImg from '../assets/profile.jpg'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <main className='min-h-screen pt-14 pl-12 pr-12 pb-12'>
      <div className='container mx-auto'>
        <section className='text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg'>
        <div className="transform transition-all duration-500 hover:rotate-y-180">
        <img alt="Tufan Awon" loading="lazy" width="200" height="200" className="rounded-full mx-auto mb-8 w-48 h-48 object-cover" src={profileImg} style={{color: "transparent"}}/>
        </div>

        <h1 className='text-white text-4xl font-bold mb-4'>Tufan Awon</h1>
        <p className='text-while text-2xl font-semibold mb-8'>Front-End Developer</p>

        <Link to="/contact" className='bg-yellow-400 text-purple-800 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition duration-300'>Get in Touch</Link>  
        </section>
      </div>
      </main>
  )
}

export default Home
