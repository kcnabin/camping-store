import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetchData } from '../../../hooks/useFetchData'

import OrderDetails from './OrderDetails'
import LoadingIcon from '../../../svgIcons/LoadingIcon'

const AllOrdersPage = () => {
  const { value: allOrders, setValue: setAllOrders } = useFetchData('/order')
  const [showSingleOrder, setShowSingleOrder] = useState(false)
  const { orderId } = useParams()

  if (showSingleOrder && orderId && allOrders) {
    const singleOrder = allOrders.filter(order => order._id.toString() === orderId)[0]

    return (
      <OrderDetails order={singleOrder} orders={allOrders} setOrders={setAllOrders} />
    )
  }

  if (allOrders) {
    return (
      <div>
        <div>
          <p className="h4 mb-3">All Orders</p>
        </div>

        <div className="table-responsive overflow-auto order-table">
          <table className="table table-bordered align-middle table-hover">
            <thead>
              <tr className='table-secondary'>
                <th scope="col">Order No.</th>
                <th scope="col" className='d-none d-md-table-cell'>Order By</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
                <th scope="col" className='d-none d-sm-table-cell'>Date</th>
              </tr>
            </thead>
            <tbody>
              {
                allOrders && allOrders.map(order => {
                  return (
                    <tr key={order._id} className=''>
                      <th scope="row">
                        <Link to={`/dashboard/admin/orders/${order._id}`} onClick={() => setShowSingleOrder(true)}>
                          ...{order._id.substring(15)}
                        </Link>
                      </th>

                      <td className='d-none d-md-table-cell'>{order.shippingInfo.fullName}</td>

                      <td>{order.grandTotal.toLocaleString()}</td>

                      <td className='w-auto fw-bold'>
                        <span>
                          {order.status}
                        </span>
                      </td>

                      <td className='d-none d-sm-table-cell'>
                        <div>
                          {(new Date(order.createdAt)).toLocaleDateString()}
                        </div>
                        <div>
                          {(new Date(order.createdAt)).toLocaleTimeString()}
                        </div>
                      </td>

                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>
      </div>
    )
  }

  return <LoadingIcon />
}

export default AllOrdersPage