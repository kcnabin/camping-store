import React from 'react'
import { getDiscountedPrice } from '../../helper/getDiscountedPrice'
import { Link } from 'react-router-dom'
import { getImgSrc } from '../../helper/getImgSrc'
import { useCart } from '../../context/CartContext'
import { deleteItemFromCart } from '../../helper/deleteItemFromCart'

const EachCartItem = ({ item }) => {
  const { quantity, product } = item
  const { cart, setCart } = useCart()

  const handleDeleteItem = () => {
    const newCart = deleteItemFromCart(cart, product._id)
    setCart(newCart)
    localStorage.setItem('camping-store-cart', JSON.stringify(newCart))
  }

  return (
    <tr className='border'>
      <td className='d-flex flex-column flex-sm-row '>
        <div style={{ width: "100px", height: "100px" }} className='me-3 p-1'>
          <img
            src={getImgSrc(product.photos[0])}
            alt={product.name}
            className='w-100 h-100 object-fit-contain'
          />
        </div>
        <div>
          <div className="align-center mt-2 mt-sm-0">
            <Link to={`/products/${product._id}`}>
              <div className='h6 mb-0 mt-1'>{product.name}</div>
            </Link>
            <span className='ms-2 d-block d-sm-none'>
              {`(x${quantity})`}
            </span>
          </div>

          <div className='fw-lighter'>{product.category}</div>
          <div
            className='btn font-12 p-0 m-0 mt-1 py-1 text-danger'
            onClick={() => handleDeleteItem()}
          >
            Delete
          </div>
        </div>
      </td>
      <td className='d-none d-sm-table-cell'>{quantity}</td>
      <td>{getDiscountedPrice(product.price, product.discount).toLocaleString()}</td>
      <td className='fw-semibold'>{(getDiscountedPrice(product.price, product.discount) * quantity).toLocaleString()}</td>
    </tr>
  )
}

export default EachCartItem