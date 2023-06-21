import React from 'react'
import { getImgSrc } from '../../../../helper/getImgSrc';
import { Link } from 'react-router-dom';
import { getDiscountedPrice } from '../../../../helper/getDiscountedPrice';

const EachOrderedItem = ({ item }) => {
  const { price, discount } = item.product

  return (
    <tr className='border rounded-3'>
      <td className='d-flex flex-column flex-sm-row '>
        <div style={{ width: "100px", height: "100px" }} className='me-3 p-1'>
          <img
            src={getImgSrc(item.product.photos[0])}
            alt={item.product.name}
            className='w-100 h-100 object-fit-contain'
          />
        </div>

        <div>
          <div className="align-center mt-2 mt-sm-0">
            <Link to={`/products/${item.product._id}`}>
              <div className='h6 mb-0 mt-1'>
                {item.product.name}
              </div>
            </Link>
            <span className='ms-2 d-block d-sm-none'>
              {`(x${item.quantity})`}
            </span>
          </div>

          <div className='fw-lighter'>
            {item.product.category}
          </div>

        </div>
      </td>

      <td className='d-none d-sm-table-cell'>
        {item.quantity}
      </td>

      <td>
        {getDiscountedPrice(price, discount).toLocaleString()}
      </td>

      <td className='fw-semibold'>
        {(getDiscountedPrice(price, discount) * item.quantity).toLocaleString()}
      </td>
    </tr>
  )
}

export default EachOrderedItem