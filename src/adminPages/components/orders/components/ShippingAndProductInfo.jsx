import React from 'react'
import CustomerInfo from './CustomerInfo'
import ShippingAddress from './ShippingAddress'
import OrderTable from './OrderTable'

const ShippingAndProductInfo = ({ order }) => {
  const { shippingInfo } = order

  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          <div className='col-12 col-sm-6 d-flex border px-3 py-2 rounded-3'>
            <CustomerInfo shippingInfo={shippingInfo} />
          </div>

          <div className='col-12 col-sm-6 px-0 ps-sm-3 pt-3 pt-sm-0'>
            <div className="d-flex border rounded-3 px-3 py-2">
              <ShippingAddress shippingInfo={shippingInfo} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <OrderTable orderItems={order.orderItems} />

        <div className=' d-flex justify-content-end'>
          <div className='text-muted'>
            Grand Total (with Shipping): <span className='text-danger fs-5 fw-bold'>NRs. {order.grandTotal.toLocaleString()}</span>
          </div>
        </div>

      </div>
    </>
  )
}

export default ShippingAndProductInfo