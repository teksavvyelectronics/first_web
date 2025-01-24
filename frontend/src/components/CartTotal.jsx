import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = ({ deliveryFee }) => {
    const { currency, getCartAmount } = useContext(ShopContext)
    
    const subtotal = getCartAmount()
    const ecoFee = 18.25
    const hst = subtotal * 0.13
    const total = subtotal + deliveryFee + ecoFee + hst

    return (
        <div className='flex flex-col gap-3'>
            <div className='flex justify-between text-sm'>
                <p>Subtotal</p>
                <p>{currency}{subtotal.toFixed(2)}</p>
            </div>
            <div className='flex justify-between text-sm'>
                <p>Delivery Fee</p>
                <p>{currency}{deliveryFee.toFixed(2)}</p>
            </div>
            <div className='flex justify-between text-sm'>
                <p>Eco Fee</p>
                <p>{currency}{ecoFee.toFixed(2)}</p>
            </div>
            <div className='flex justify-between text-sm'>
                <p>HST (13%)</p>
                <p>{currency}{hst.toFixed(2)}</p>
            </div>
            <div className='flex justify-between font-medium'>
                <p>Total</p>
                <p>{currency}{total.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default CartTotal
