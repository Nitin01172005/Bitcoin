/* eslint-disable no-unused-vars */
import React from 'react';
import {ReactTyped} from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt[-96px] h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='md:text-2xl sm:text-xl  text-[#42b08d] font-bold p-3'>GROW WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
        <div className='flex items-center justify-center'>
            <p className='md:text-4xl sm:text-3xl text-xl pt-2 font-bold'>Fast, flexible financing for</p>
            <ReactTyped 
            className='md:text-4xl sm:text-3xl text-xl pt-2 font-bold pl-2  md:pl-4 text-gray-400'
            strings ={['BTB', 'BTC', 'SASS']} typeSpeed={90} backspeed={140} loop />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 py-3'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
        <button className='bg-[#00df9a] font-medium rounded-md text-black my-6 mx-auto pt-2 pb-2 w-[200px]'>Get Started</button>
      </div>
      
    </div>
  )
}

export default Hero
