import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import BillingInfo from './BillingInfo';
import OrderSummary from './OrderSummary';
import { useState } from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { toast } from 'react-toastify';
import { handleError } from '../../helper/handleError';
import { getTokenHeader } from '../../helper/getTokenHeader';
import axios from 'axios';
import { useCart } from '../../context/CartContext';

const CheckOutPage = () => {
  const [email, setEmail] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [fullName, setFullName] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [city, setCity] = useState('')
  const [payment, setPayment] = useState('')

  const { setCart } = useCart()
  const navigate = useNavigate()
  const location = useLocation()
  const order = location.state
  const { value: userInfo } = useFetchData('/user-info')

  const actions = {
    email, setEmail, phoneNum, setPhoneNum, fullName, setFullName, streetAddress, setStreetAddress, city, setCity
  }

  const clearCheckOutForm = () => {
    setEmail('')
    setPhoneNum('')
    setFullName('')
    setStreetAddress('')
    setCity('')
    setPayment('')
  }
  const clearCart = () => {
    localStorage.removeItem("camping-store-cart")
    setCart([])
  }

  const handlePayment = e => {
    setPayment(e.target.value)
  }

  const handleOrder = async () => {
    if (!fullName || !email || !phoneNum || !city || !streetAddress || !payment || !order || !userInfo) {
      return toast.error('All Fields are necessary!')
    }

    const shippingInfo = {
      fullName,
      email,
      phoneNum,
      address: {
        street: streetAddress,
        city
      }
    }
    const orderItems = order?.orderItems?.map(item => {
      return {
        product: item.product._id,
        quantity: item.quantity
      }
    })

    const orderObject = {
      grandTotal: order.grandTotal,
      orderBy: userInfo._id,
      shippingInfo,
      orderItems,
      payment
    }

    try {
      const { data } = await axios.post('/order', orderObject, getTokenHeader())
      console.log('data :', data);

      toast.success('Order placed successfully!')
      clearCart()
      clearCheckOutForm()
      order.grandTotal = 0

      setTimeout(() => {
        navigate('/dashboard/user/orders')
      }, 2000)
    } catch (error) {
      return handleError(error)
    }
  }

  if (!order) {
    return <Navigate to="/cart" />
  }

  return (
    <div className='mx-2 mx-sm-3 mx-lg-5 my-3'>
      <h5 className='text-center p-0 m-0'>Contact & Billing</h5>

      <div className='container-fluid my-3'>
        <div className="row">
          <div className='col-12 col-md-7 px-0'>
            <BillingInfo
              actions={actions}
            />
          </div>


          <div className='col-12 col-md-5 px-0'>
            <div className="ms-0 ms-md-4 mt-3 mt-md-0">
              <OrderSummary order={order} />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-4 border'>
        <div className="px-3 py-2 h5 gray">
          Payment Options
        </div>

        <div className="p-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name='paymentOption'
              value="cashOnDelivery"
              id="cashOnDelivery"
              onChange={handlePayment}
            />

            <label
              className="form-check-label ms-2"
              htmlFor="cashOnDelivery"
            >
              Cash On Delivery
            </label>
          </div>

        </div>
      </div>

      <div className='mt-3'>
        <button className="btn btn-success" onClick={() => handleOrder()}>
          Order Items
        </button>
      </div>
    </div>
  )
}

export default CheckOutPage