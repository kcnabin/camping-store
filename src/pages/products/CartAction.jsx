import React, { useState } from 'react'
// import { useCart } from '../../context/CartContext'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'

const CartAction = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const increaseQuantity = () => setQuantity(quantity + 1)
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  // const { cart, setCart } = useCart()
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    // const newCart = [
    //   ...cart,
    //   {
    //     quantity,
    //     product
    //   }
    // ]

    // setCart(newCart)
    const newProduct = {
      quantity,
      product
    }

    dispatch(addToCart(newProduct))

    // localStorage.setItem('camping-store-cart', JSON.stringify(newCart))
    localStorage.setItem('camping-store-cart', JSON.stringify([...cart, newProduct]))
    toast.success('Item added to Cart!')
  }

  return (
    <>
      <div className='d-flex'>
        <p className="text-muted fw-lighter">
          Availability:
        </p>
        <span className='ms-2 text-success'>
          In Stock
        </span>
      </div>

      <div>
        <span className='text-uppercase'>
          Quantity
        </span>

        <div className='d-flex mt-2 mb-4'>
          <span
            className='border py-2 px-3 btn rounded-0'
            onClick={() => decreaseQuantity()}
          >
            <h6 className='p-0 m-0'>-</h6>
          </span>

          <span className='border py-2 px-3'>
            <h6 className='p-0 m-0'>
              {quantity}
            </h6>
          </span>

          <span
            className='border py-2 px-3 btn rounded-0'
            onClick={() => increaseQuantity()}
          >
            <h6 className='p-0 m-0'>+</h6>
          </span>
        </div>

      </div>

      <div className='d-flex'>
        <button className="btn-success btn">
          Buy Now
        </button>

        <button
          className="btn-secondary btn ms-2"
          onClick={() => handleAddToCart()}
        >
          Add to Cart
        </button>
      </div>
    </>
  )
}

export default CartAction