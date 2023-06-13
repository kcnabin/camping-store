import React from 'react'

const ProductPriceAndDiscount = ({ product }) => {
  return (
    <div className='py-2'>
      <h5 className="text-danger fw-bolder">
        NRs. {((1 - product.discount / 100) * product.price).toLocaleString()}
      </h5>

      <h6 className="text-muted text-decoration-line-through">
        NRs. {product.price.toLocaleString()}
        <span className="ms-2 text-decoration-none">
          -{product.discount}%
        </span>
      </h6>
    </div>
  )
}

export default ProductPriceAndDiscount