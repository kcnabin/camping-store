import React from 'react'
import { Link } from 'react-router-dom'

const OrderSummary = ({ order }) => {
  return (
    <div className='border'>
      <h5 className='gray px-3 py-2'>
        Order Summary
      </h5>

      <div className='px-3 py-2'>
        <div className='align-center justify-content-between'>
          <div className='h6 p-0 m-0'>
            Grand Total
          </div>
          <div className='ms-2 fw-bolder text-muted'>
            NRs. {(order.grandTotal).toLocaleString()}
          </div>
        </div>

        <Link to="/cart" className='btn btn-outline-primary mt-3'>
          View Cart
        </Link>
      </div>
    </div>
  )
}

export default OrderSummary