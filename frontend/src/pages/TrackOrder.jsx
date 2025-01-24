import React, { useState } from 'react'
import Title from '../components/Title'

const statusOptions = [
  'Order Placed',
  'Processing',
  'Shipped',
  'Out for Delivery',
  'Delivered'
]

const TrackOrder = () => {
  const [orderStatus, setOrderStatus] = useState('')

  return (
    <div className='px-4 sm:px-8 lg:px-16 py-8'>
      <div className='mb-8'>
        <Title text1={'TRACK ORDER'} />
      </div>
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="w-full max-w-2xl p-6 border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Order Status</h2>
          <div className="max-w-3xl mx-auto mt-8">
            <div className="flex justify-between items-center">
              {statusOptions.map((status, index) => (
                <div key={status} className={`flex-1 text-center ${
                  index <= statusOptions.indexOf(orderStatus) ? 'text-green-500' : ''
                }`}>
                  <div className="w-4 h-4 rounded-full bg-current mx-auto" />
                  <p className="mt-2">{status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackOrder
