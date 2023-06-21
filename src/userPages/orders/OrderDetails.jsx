import React from 'react'
import { Link, useParams } from 'react-router-dom'
import LeftArrowIcon from '../../svgIcons/LeftArrowIcon'
import { useFetchData } from '../../hooks/useFetchData'
import OrderDateAndId from '../../adminPages/components/orders/components/OrderDateAndId'
import ShippingAndProductInfo from '../../adminPages/components/orders/components/ShippingAndProductInfo'

const OrderDetails = () => {
  const { orderId } = useParams()
  const { value: order } = useFetchData(`/order/${orderId}`, orderId)

  if (order) {
    return (
      <div>
        <div className='align-center mb-2'>
          <Link to='/dashboard/user/orders' className='btn m-0 p-1 ps-0 me-1'>
            <LeftArrowIcon />
          </Link>
          <p className="h5 m-0">
            Order Details
          </p>
        </div>

        <div className='d-flex flex-column flex-sm-row justify-content-between border rounded-3 p-3 '>
          <div>
            <OrderDateAndId date={order.createdAt} id={order._id} />
          </div>

          <div className='align-center ms-sm-2 mt-3 mt-sm-0'>
            <div className='py-2 px-3 border border-primary rounded-pill'>
              Status: {order.status}
            </div>
          </div>
        </div>

        <ShippingAndProductInfo order={order} />
      </div>
    )
  }

  return (<p>Loading Order Details</p>)
}

export default OrderDetails