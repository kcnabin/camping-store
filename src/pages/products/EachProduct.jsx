import React from 'react'
import { getImgSrc } from '../../helper/getImgSrc'
import { Link } from 'react-router-dom'

const EachProduct = ({ product }) => {
  return (
    <Link
      to={`/products/${product._id}`}
      className="p-2 overflow-hidden"
      style={{ height: "100%" }}
    >
      <div className='justify-center ratio ratio-4x3'>
        <img
          src={getImgSrc(product.photos[0])}
          alt={product.name}
          className='h-100 w-max-100 object-fit-contain p-2'
        />
      </div>

      <div className='pt-2 ps-1'>
        <div className='fw-lighter font-sm'>
          {product.brand}
        </div>

        <div className='font-sm'>
          {product.name}
          {/* {(product.name.length > 14)
            ? `${product.name.substring(0, 14)}...`
            : product.name
          } */}
        </div>

        <div className='fw-light align-center flex-wrap mt-2'>
          <span className='text-decoration-line-through me-2 font-sm'>
            NRs.{product.price.toLocaleString()}
          </span>

          <span className='text-danger fw-bold font-sm'>
            {((1 - product.discount / 100) * product.price).toLocaleString()}
          </span>
        </div>

      </div>
    </Link>
  )
}

export default EachProduct