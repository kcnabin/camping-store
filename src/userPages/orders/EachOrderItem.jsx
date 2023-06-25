import React from 'react'
import { getImgSrc } from '../../helper/getImgSrc'

const EachOrderItem = ({ item, order }) => {
  return (
    <>
      <div style={{ width: "100px" }} className='ratio ratio-1x1  '>
        <img
          src={getImgSrc(item.product.photos[0])}
          alt={"product"}
          className='w-100 object-fit-contain'
        />
      </div>

      <div className='align-center ms-3'>
        <div className='text-muted'>
          <p className='h6'>{item.product.name}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      </div>
    </>
  )
}

export default EachOrderItem