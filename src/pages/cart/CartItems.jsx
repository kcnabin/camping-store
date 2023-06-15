import React from 'react'
import { useCart } from '../../context/CartContext'
import EachCartItem from './EachCartItem';

const CartItems = () => {
  const { cart } = useCart()

  return (
    <div>
      <table className="table">
        <thead className='fw-light'>
          <tr className='table-secondary'>
            <th scope="col">Item</th>
            <th scope="col" className='d-none d-sm-block'>Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>

          {
            cart.map((item, i) => <EachCartItem item={item} key={item.product._id + i} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default CartItems