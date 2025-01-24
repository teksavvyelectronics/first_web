import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>At Teksavvy Electronics, we are driven by a simple yet powerful belief: quality should never be compromised for affordability. In a world where technology connects us, entertains us, and simplifies our lives, we believe everyone deserves access to high-quality electronics—no matter their budget or status.</p>
              <p>From stunning TVs to immersive speakers and versatile tablets, we offer unbeatable deals on a wide range of electronics. But we’re just getting started! With plans to expand our inventory, we aim to become your one-stop destination for all your tech needs.</p>
              <p>Your satisfaction is at the heart of everything we do. That’s why we back our products with a comprehensive store warranty and offer 24/7 customer support to ensure your peace of mind, every step of the way.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At Teksavvy Electronics, innovation meets affordability, and your trust drives our mission. Thank you for choosing us as your partner in tech—we look forward to serving you better every day!</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Affordabitliy:</b>
            <p className=' text-gray-600'>Our unbeatable never seen before prices with top quality to follow it.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
