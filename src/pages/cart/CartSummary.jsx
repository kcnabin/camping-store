import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/UserContext'
import { getShippingCost } from '../../helper/getShippingCost'
// import { useCart } from '../../context/CartContext'
import { getCartTotal } from '../../helper/getCartTotal'
import { useSelector } from 'react-redux'

const CartSummary = () => {
  const { auth } = useAuth()
  // const { cart } = useCart()
  const cart = useSelector(state => state.cart)

  const subTotal = getCartTotal(cart)
  const shippingCost = getShippingCost()
  const grandTotal = subTotal + shippingCost

  const checkOutState = {
    grandTotal,
    orderItems: cart
  }

  return (
    <div className='border mb-2 mb-md-0'>
      <h5 className='bg-gray p-2'>Order Summary</h5>

      <div className='p-2 pb-0 align-center justify-content-between'>
        <div>
          Sub Total
        </div>
        <div className='ms-2'>
          NRs. {subTotal.toLocaleString()}
        </div>
      </div>

      <div className='p-2 align-center justify-content-between'>
        <div>
          Standard Shipping
        </div>
        <div className='ms-2'>
          {((shippingCost === 0) || (subTotal === 0)) ? 'Free' : (`NRs. ${shippingCost}`)}
        </div>
      </div>

      <div className='p-2 align-center justify-content-between'>
        <div className='h6 p-0 m-0'>
          Order Total
        </div>
        <div className='ms-2 fw-bolder text-muted'>
          NRs. {(subTotal + (subTotal === 0 ? 0 : shippingCost)).toLocaleString()}
        </div>
      </div>

      <div className="mt-3">
        {auth?.token ? (
          <button className="btn btn-success w-100" disabled={subTotal === 0}>
            <Link to='/checkout' state={checkOutState}>
              {subTotal === 0 ? 'Add items to Cart' : 'Proceed to Checkout'}
            </Link>
          </button>
        ) : (
          <Link to='/login' className="btn btn-primary w-100" state={{ redirectTo: `/cart` }}>
            Login
          </Link>
        )}
      </div>


    </div>
  )
}

export default CartSummary