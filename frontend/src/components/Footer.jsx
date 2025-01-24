import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            At Teksavvy Electronics, we believe that quality should never be sacrificed for affordability. Everyone deserves access to high-quality technology, regardless of their budget or status. That's why we offer the best deals on a wide range of electronics, including TVs, speakers, and tablets, with plans to expand our stock soon. Our 24/7 customer support and comprehensive store warranty ensure that your satisfaction and peace of mind are always our top priorities.
            </p>
        </div>

        

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <Link to='/' onClick={() => { window.scrollTo({top: 0, behavior:'smooth'}); }} 
                    className='hover:text-black transition-colors duration-200 cursor-pointer'>
                    <li>Home</li>
                </Link>
                <Link to='/about' onClick={() => window.scrollTo(0, 0)} className='hover:text-black transition-colors duration-200 cursor-pointer'>
                    <li>About us</li>
                </Link>
                <Link to='/delivery' onClick={() => window.scrollTo(0, 0)} className='hover:text-black transition-colors duration-200 cursor-pointer'>
                    <li>Delivery</li>
                </Link>
                <Link to='/privacy' onClick={() => window.scrollTo(0, 0)} className='hover:text-black transition-colors duration-200 cursor-pointer'>
                    <li>Privacy policy</li>
                </Link>
            </ul>
        </div>


        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1 647-564-7695</li>
                <li>Teksavvyelectronics@gmail.com</li>
            </ul>
        </div>

      </div>

    </div>
  )
}

export default Footer
