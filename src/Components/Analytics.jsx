import React from 'react'
import Laptop from "../assets/laptop.jpg"
const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className='w-[500px] mx-auto m-4' src={Laptop} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py-2'>Manage Data Analytics Centrally</h1>
          <p >
              Data analytics involves examining and interpreting data to uncover patterns, trends, and insights. It helps businesses make informed decisions, optimize processes, and improve performance. Techniques include statistical analysis, machine learning, and data visualization to transform raw data into actionable knowledge.
          </p>
          <button className='bg-black rounded m-5 py-2 font-bold text-[#00df9a] px-5 mx-auto w-[200px] md:mx-0'>Get Started</button>
        </div>
      </div>
   
    </div>
  )
}

export default Analytics
