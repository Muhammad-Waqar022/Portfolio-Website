import React from 'react'

const HeroContent = () => {
  return (
    <div className='mt-20'>
        <div className='flex justify-center mb-4'>
        <img className='w-56 rounded-full' src="/download.jpeg" alt="" />
        </div>
        <div className='space-y-3 flex flex-col justify-center items-center'  >
            <h1 className='text-5xl text-center'>Hi, I'm <span className='font-bold text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 from-20% via-purple-500 via-80% to-pink-500 to-100%'>Muhammad Waqar</span></h1>
            <h2 className=' text-2xl mt-1 text-center font-semibold'>Frontend & Wordpress Developer</h2>
            <p className='text-lg  text-gray-300 w-xl text-center'>I design and build clean, modern, and high-performing websites that help brands stand out.</p>
        </div>
        <div className='flex justify-center space-x-3'>
        <button className='mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300'>View my Projects</button>
        <button className='mt-6 px-6 py-3 bg-transparent border-2 border-indigo-600 text-white rounded-full hover:bg-indigo-600 transition duration-300'>Hire Me</button>
        </div>
    </div>
  )
}

export default HeroContent