import React from 'react'
import { useCart } from '../../context/CartContext'
import { getTotalCartQuantity } from '../../helper/getTotalCartQuantity'
import CartItems from './CartItems'
import CartSummary from './CartSummary'

const CartPage = () => {
  const { cart } = useCart()

  if (cart?.length >= 0) {
    return (
      <div className='mx-4 my-2'>
        <div className='align-center flex-wrap my-2'>
          <h4 className='me-2'>
            Your shopping cart
          </h4>
          <span className='text-muted'>
            {`(${(cart?.length > 0) ? getTotalCartQuantity(cart) : 0} products)`}
          </span>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-8 px-0">
              <CartItems />
            </div>
            <div className="ps-0 ps-md-3 col-12 col-md-4 pe-0">
              <CartSummary />
            </div>
          </div>
        </div>

      </div>
    )
  }

  return (<p>Loading Cart Items</p>)
}

export default CartPage