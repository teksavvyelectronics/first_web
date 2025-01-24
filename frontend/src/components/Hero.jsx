import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
      <div className='-mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw] w-screen relative'>
        <img className='w-full h-[90vh] object-cover' src={assets.headbanner} alt="" />
        <div className='absolute top-1/2 left-20 transform -translate-y-1/2'>
        <h1 className='text-[3rem] font-bold mb-4 text-white tracking-wider' style={{fontFamily: 'monospace'}}>
          TEKSAVVY ELECTR0NICS
        </h1>
          <p className='text-2xl text-white font-light tracking-widest' style={{fontFamily: 'monospace'}}>
          Found it cheaper at another store? <br/> We’ll match it! At Teksavvy Electronics, <br/> unbeatable prices are guaranteed!
          </p>
        </div>
      </div>
    )
}

export default Hero
