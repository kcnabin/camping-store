import React from 'react'
import { useCart } from '../../context/CartContext'
import { getTotalCartQuantity } from '../../helper/getTotalCartQuantity'
import CartItems from './CartItems'
import CartSummary from './CartSummary'

const CartPage = () => {
  const { cart, setCart } = useCart()

  if (cart?.length >= 0) {
    return (
      <div className='mx-4'>
        <div className='align-center my-2'>
          <h4 className=''>
            Your shopping cart
          </h4>
          <span className='ms-2 text-muted'>
            {`(${(cart?.length > 0) ? getTotalCartQuantity(cart) : 0} products)`}
          </span>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-8 ps-0">
              <CartItems />
            </div>
            <div className="col-12 col-md-4">
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