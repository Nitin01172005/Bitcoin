import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-black py-16 text-white'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <h1 className='font-bold md:text-4xl sm:text-3xl text-xl py-2'>Want tips and tricks to Optimize your flow?
          </h1>
       
        <p>
          Sign up to our newsletter and stay up to date.
        </p>
        </div>
      
      <div className='my-4'>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
          <input type="email" placeholder='Enter Email' className='p-3 flex w-full rounded-md font-medium text-black'/>
          <button className='bg-[#00df9a] font-medium rounded-md text-black mx-auto  my-6 px-6 py-3 w-[200px]'>Notify me</button>
 
          </div>
           <p>
             We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span> 
           </p>
        </div>
       
      </div>
    </div>
  )
}

export default Newsletter
