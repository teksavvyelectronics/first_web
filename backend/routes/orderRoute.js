import express from 'express'
import {
    placeOrder,
    placeOrderStripe,
    userOrders,
    updateStatus,
    verifyStripe,
    allOrders
} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)
orderRouter.post('/update-status', adminAuth, async (req, res) => {
    try {
        const { orderId, status } = req.body
        await orderModel.findByIdAndUpdate(orderId, { status })
        res.json({ success: true, message: 'Status updated successfully' })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
})

// Payment Features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe) // Updated to use the correct function
orderRouter.get('/user-orders', authUser, userOrders)

// For admin
orderRouter.post('/admin-list', adminAuth, allOrders)

// Or for users
orderRouter.get('/user-orders', authUser, userOrders)

orderRouter.post('/verifyStripe',authUser, verifyStripe)

export default orderRouter
