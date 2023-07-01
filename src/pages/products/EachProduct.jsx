import React from 'react'
import { getImgSrc } from '../../helper/getImgSrc'
import { Link } from 'react-router-dom'

const EachProduct = ({ product }) => {
  return (
    <Link className='p-2'
      to={`/products/${product._id}`}
      className="overflow-hidden"
    >
      <div className='justify-center ratio ratio-4x3'>
        <img
          src={getImgSrc(product.photos[0])}
          alt={product.name}
          className='h-100 w-max-100 object-fit-contain p-3'
        />
      </div>

      <div className='pt-2 ps-1'>
        <div className='fw-lighter'>
          {product.brand}
        </div>
        <div>
          {(product.name.length > 14)
            ? `${product.name.substring(0, 14)}...`
            : product.name
          }
        </div>
        <div className='fw-light'>

          <span className='text-decoration-line-through'>
            NRs.{product.price.toLocaleString()}
          </span>
          <span className='ms-2 text-danger fw-bold'>
            {((1 - product.discount / 100) * product.price).toLocaleString()}
          </span>
        </div>

      </div>
    </Link>
  )
}

export default EachProduct