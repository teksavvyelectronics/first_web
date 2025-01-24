import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className=' text-center'>
      <p className='text-2xl font-medium text-gray-800'>Be the first ones to know about a sale!</p>
      <p className='text-gray-400 mt-3'>
      Subscribe now and get insider information about our latest products, special offers and exclusive discounts!
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="tel" pattern="[0-9]{10}" placeholder='Enter your Whatsapp number' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>JOIN WHATSAPP GROUP</button>
      </form>
    </div>
  )
}

export default NewsletterBox
