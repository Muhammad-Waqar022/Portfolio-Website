import React from 'react'

const HeroContent = () => {
  return (
    <div className='mt-20'>
        <div className='flex justify-center mb-4'>
        <img className='w-56 sm:w-56 h-56  rounded-full object-cover ' src="../public/project/picture1.png" alt="" />
        </div>
        <div className='space-y-3 flex flex-col justify-center items-center'  >
            <h1 className='text-3xl mx-auto sm:text-5xl text-center'>Hi, I'm <span className='font-bold text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 from-20% via-purple-500 via-80% to-pink-500 to-100%'>Muhammad Waqar</span></h1>
            <h2 className='text-xl mx-auto sm:text-2xl mt-1 text-center font-semibold'>Frontend & Wordpress Developer</h2>
            <p className='text-sm px-1 mx-auto sm:text-xl text-gray-300 sm:w-xl text-center'>I design and build clean, modern, and high-performing websites that help brands stand out.</p>
        </div>
        <div className='flex justify-center space-x-3'>
        <a href="#project" className='mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300'>View my Projects</a>
        <a href='#contact' className='mt-6 px-6 py-3 bg-transparent border-2 border-indigo-600 text-white rounded-full hover:bg-indigo-600 transition duration-300'>Hire Me</a>
        </div>
    </div>
  )
}

export default HeroContent