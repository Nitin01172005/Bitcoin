import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-18 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full pt-5 text-3xl  font-bold text-[#00df9a]'>REACT.</h1>
        <p className='py-4'>Encrypt sensitive data both at rest (stored data) and in transit (data being transmitted) to protect it from unauthorized access.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
        <FaDribbbleSquare size={30} />
        <FaFacebookSquare size={30} />
        <FaGithubSquare size={30} />
        <FaInstagram size={30} />
        <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 mt-6 flex justify-between'>
        <div>
          <h6 className='font-medium text-gray-400'>Solutions</h6>
          <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-gray-400'>Support</h6>
          <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blogs</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
          </ul>
        </div>


        <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default footer
