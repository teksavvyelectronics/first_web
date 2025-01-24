import React from 'react'

const statusOptions = [
  'Order Placed',
  'Processing',
  'Shipped',
  'Out for Delivery',
  'Delivered'
]

const OrderStatus = ({ orderId, currentStatus }) => {
  const handleStatusChange = async (newStatus) => {
    const response = await axios.post('/api/order/update-status', {
      orderId,
      status: newStatus
    })
    if(response.data.success) {
      // Refresh order list
    }
  }

  return (
    <select 
      value={currentStatus}
      onChange={(e) => handleStatusChange(e.target.value)}
      className="border p-2 rounded"
    >
      {statusOptions.map(status => (
        <option key={status} value={status}>{status}</option>
      ))}
    </select>
  )
}
export default OrderStatus
