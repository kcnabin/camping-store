import React from 'react'

const ProductIntroduction = ({ product }) => {
  return (
    <>
      <h4>
        {product.name}
      </h4>

      <p className='text-muted'>
        Brand: {product.brand}
      </p>

      {/* product rating will be added later */}
    </>
  )
}

export default ProductIntroduction