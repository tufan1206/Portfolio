import React from 'react'
import { FcCheckmark } from "react-icons/fc";

const Skill = () => {
  return (
    <main className='min-h-screen pt-14 pl-12 pr-12 pb-12'>
        <div>
            <h1 className='text-purple-800 text-4xl font-bold text-center mb-8'>My Skills</h1>
        </div>
        <div className='flex justify-between flex-row space-x-8'>
            <div className='container1 bg-white p-4 rounded-lg shadow-lg w-1/3'>
                <h1 className='text-purple-600 text-2xl font-semibold mb-4'>
                    Front-End
                </h1>
                <p className='flex flex-row'><FcCheckmark className='mr-2'/> HTML & CSS</p>
                <p className='flex flex-row'><FcCheckmark className='mr-2'/>JavaScript</p>
                <p className='flex flex-row'><FcCheckmark className='mr-2'/>React Js</p>
                <p className='flex flex-row'><FcCheckmark className='mr-2'/>Next Js</p>
                <p className='flex flex-row'><FcCheckmark className='mr-2'/>Tailwind CSS</p>
            </div>
            <div className='container2 bg-white p-4 rounded-lg shadow-lg w-1/3'>
                <h1 className='text-purple-600 text-2xl font-semibold mb-4'>
                    Back-End
                </h1>

                <p className='flex flex-row'><FcCheckmark className='mr-2'/> Node js</p>
                <p className='flex flex-row'><FcCheckmark className='mr-2'/>Express js</p>
            </div>
            <div className='container3 bg-white p-4 rounded-lg shadow-lg w-1/3'>
                <h1 className='text-purple-600 text-2xl font-semibold mb-4'>
                    Tools & Others
                </h1>

                <p className='flex flex-row'><FcCheckmark className='mr-2'/>Git</p>
                <p className='flex flex-row'><FcCheckmark className='mr-2'/>GitHub</p>
                <p className='flex flex-row'><FcCheckmark className='mr-2'/>VS Code</p>
                <p className='flex flex-row'><FcCheckmark className='mr-2'/> Figma</p>
                <p className='flex flex-row'><FcCheckmark className='mr-2'/>Responsive Design</p>
            </div>
        </div>
    </main>
  )
}

export default Skill
