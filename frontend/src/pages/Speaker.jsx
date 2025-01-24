import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductCard from '../components/ProductCard'
import Title from '../components/Title'

const Speaker = () => {
  const { products } = useContext(ShopContext)
  const speakerProducts = products.filter(item => item.category === 'Speaker')
  
  return (
    <div className='px-4 sm:px-8 lg:px-16 py-8'>
      <div className='mb-8'>
        <Title text1={'SPEAKERS'} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakerProducts.map(product => (
          <ProductCard key={product._id} data={product} />
        ))}
      </div>
    </div>
  )
}

export default Speaker
