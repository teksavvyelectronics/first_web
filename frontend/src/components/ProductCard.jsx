import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const ProductCard = ({ data }) => {
  const { currency } = useContext(ShopContext)
  
  return (
    <Link to={`/product/${data._id}`}>
      <div className="border p-4 hover:shadow-lg transition-shadow">
        <img src={data.image[0]} alt={data.name} className="w-full h-auto" />
        <div className="mt-4">
          <h3 className="font-medium">{data.name}</h3>
          <p className="text-lg mt-2">{currency}{data.price}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
