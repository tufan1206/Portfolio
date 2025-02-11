import React from 'react'

const Contact = () => {
  return (
    <main className='min-h-screen pt-14 pl-12 pr-12 pb-12'>
        <div>
            <h1 className='text-purple-800 text-4xl font-bold text-center mb-8'>Contact Me</h1>
        </div>
        <div className='container mx-auto w-2xl rounded-lg shadow-lg bg-white p-6' >
          <form className='space-y-6'>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Enter your Name'
              //value={formData.name}
              //onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder='Enter your Email'
              //value={formData.name}
              //onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="Message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder='Enter your Message......'
              rows={4}
              //value={formData.name}
              //onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div className=''>
            <button className='w-full bg-purple-600 text-white font-semibold rounded-lg shadow-lg p-2'>
              Send a Message
            </button>
          </div>
          </form>
        </div>

        <div className='text-center mt-8'>
          <h1 className='text-purple-800 text-2xl font-semibold mb-4'>
            Other Ways to Connect 
          </h1>

          <p className='text-black'>
            Email : tufanawon@gmail.com
          </p>

          <p className='text-black'>
            Phone : 6291781894
          </p>

          <a href='https://www.linkedin.com/in/tufan-awon-340793234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='text-blue-600'>Linkedin</a>
        </div>
    </main>
  )
}

export default Contact
