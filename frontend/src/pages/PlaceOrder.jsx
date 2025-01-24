import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const gtaCities = [
  { name: 'Scarborough', fee: 50},
  { name: 'Peterborough', fee: 130 },
  { name: 'Brampton', fee: 100 },
  { name: 'Old Toronto (Downtown)', fee: 75 },
  { name: 'Ajax', fee: 75 },
  { name: 'Mississauga', fee: 100 },
  { name: 'Oakville', fee: 75 },
  { name: 'Whitby', fee: 75 },
  { name: 'Bowmanville', fee: 75 },
]

const PlaceOrder = () => {
    const [method, setMethod] = useState('cod')
    const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, products } = useContext(ShopContext)
    const [deliveryFee, setDeliveryFee] = useState(0)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        gtaCity: '',
        province: '',
        postalCode: '',
        country: 'Canada',
        phone: ''
    })

    // Postal Code Validation Function
    const validatePostalCode = (postalCode) => {
        const canadianPostalRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
        return canadianPostalRegex.test(postalCode);
    };

    // Phone Number Validation Function
    const validatePhone = (phone) => {
        const canadianPhoneRegex = /^(\+?1-?)?\d{3}-?\d{3}-?\d{4}$/
        return canadianPhoneRegex.test(phone)
    }

    // Comprehensive Form Validation
    const validateForm = () => {
        const errors = {};

        // Postal Code Validation
        if (!validatePostalCode(formData.postalCode)) {
            errors.postalCode = 'Invalid postal code format';
        }

        // Phone Number Validation
        if (!validatePhone(formData.phone)) {
            errors.phone = 'Invalid phone number';
        }

        // Required Fields Validation
        const requiredFields = [
            'firstName', 'lastName', 'email', 
            'street', 'gtaCity', 'postalCode', 'phone'
        ];

        requiredFields.forEach(field => {
            if (!formData[field]) {
                errors[field] = `${field} is required`;
            }
        });

        return errors;
    };

    const handleRegionChange = (event) => {
        const selectedCity = gtaCities.find(city => city.name === event.target.value)
        setDeliveryFee(selectedCity ? selectedCity.fee : 0)
        onChangeHandler(event)
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setFormData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        // Validate the entire form
        const validationErrors = validateForm();
        
        // If there are validation errors, show toast messages
        if (Object.keys(validationErrors).length > 0) {
            Object.values(validationErrors).forEach(error => {
                toast.error(error);
            });
            return;
        }

        try {
            let orderItems = []
            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id === items))
                        if (itemInfo) {
                            itemInfo.size = item
                            itemInfo.quantity = cartItems[items][item]
                            orderItems.push(itemInfo)
                        }
                    }
                }
            }

            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + deliveryFee
            }

            switch (method) {
                case 'cod':
                    const response = await axios.post(backendUrl + '/api/order/place', orderData, {headers:{token}})
                    if (response.data.success) {
                        setCartItems({})
                        navigate('/orders')
                    }
                    break

                case 'stripe':
                    const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, {headers:{token}})
                    if (responseStripe.data.success) {
                        window.location.replace(responseStripe.data.session_url)
                    }
                    break
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                <div className='text-xl sm:text-2xl my-3'>
                    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                </div>
               
                <div className='flex gap-3'>
                    <input 
                        required 
                        onChange={onChangeHandler} 
                        name='firstName' 
                        value={formData.firstName} 
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                        type="text" 
                        placeholder='First name' 
                    />
                    <input 
                        required 
                        onChange={onChangeHandler} 
                        name='lastName' 
                        value={formData.lastName} 
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                        type="text" 
                        placeholder='Last name' 
                    />
                </div>
               
                <input 
                    required 
                    onChange={onChangeHandler} 
                    name='email' 
                    value={formData.email} 
                    className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                    type="email" 
                    placeholder='Email address' 
                />
                <input 
                    required 
                    onChange={onChangeHandler} 
                    name='street' 
                    value={formData.street} 
                    className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                    type="text" 
                    placeholder='Street address' 
                />
               
                <select
                    required
                    name="gtaCity"
                    value={formData.gtaCity}
                    onChange={handleRegionChange}
                    className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                >
                    <option value="">Select GTA City</option>
                    {gtaCities.map((city) => (
                        <option key={city.name} value={city.name}>
                            {city.name}
                        </option>
                    ))}
                </select>

                <div className='flex gap-3'>
                    <input 
                        required 
                        onChange={onChangeHandler} 
                        name='postalCode' 
                        value={formData.postalCode} 
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                        type="text" 
                        placeholder='Postal Code (A1A 1A1)' 
                        pattern="[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]"
                        title="Please enter a valid postal code format (e.g., A1A 1A1)"
                    />
                    <input 
                        readOnly 
                        value="Canada" 
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full bg-gray-50' 
                        type="text" 
                    />
                </div>
               
                <input 
                    required 
                    onChange={onChangeHandler} 
                    name='phone' 
                    value={formData.phone} 
                    className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                    type="tel" 
                    placeholder='Phone (123-456-7890)' 
                />
            </div>

            <div className='mt-8'>
                <div className='mt-8 min-w-80'>
                    <CartTotal deliveryFee={deliveryFee} />
                </div>
                <div className='mt-12'>
                    <Title text1={'PAYMENT'} text2={'METHOD'} />
                    <div className='flex gap-3 flex-col lg:flex-row'>
                        <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                            <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                        </div>
                        <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                            <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                        </div>
                    </div>
                    <div className='w-full text-end mt-8'>
                        <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
