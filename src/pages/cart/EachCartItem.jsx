import React from 'react'
import { getDiscountedPrice } from '../../helper/getDiscountedPrice'
import { Link } from 'react-router-dom'
import { getImgSrc } from '../../helper/getImgSrc'

const EachCartItem = ({ item }) => {
  const { quantity, product } = item

  return (
    <tr>
      <td className='d-flex'>
        <div style={{ width: "100px", height: "100px" }} className='me-3 p-1'>
          <img src={getImgSrc(product.photos[0])} alt={product.name} className='w-100 h-100 object-fit-scale' />
        </div>
        <div>
          <Link to={`/products/${product._id}`}>
            <div className='h6'>{product.name}</div>
          </Link>

          <div className='fw-lighter'>{product.category}</div>
        </div>
      </td>
      <td>{quantity}</td>
      <td>{getDiscountedPrice(product.price, product.discount).toLocaleString()}</td>
      <td>{(getDiscountedPrice(product.price, product.discount) * quantity).toLocaleString()}</td>
    </tr>
  )
}

export default EachCartItem