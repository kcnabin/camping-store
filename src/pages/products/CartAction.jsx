import React, { useState } from 'react'

const CartAction = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const increaseQuantity = () => setQuantity(quantity + 1)
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const [cart, setCart] = useState([])

  const handleAddToCart = () => {
    const newCart = [
      ...cart,
      {
        quantity,
        product
      }
    ]

    console.log('newCart :', newCart);
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