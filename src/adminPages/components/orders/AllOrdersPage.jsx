import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useFetchData } from '../../../hooks/useFetchData'

import OrderDetails from './OrderDetails'
import LoadingIcon from '../../../svgIcons/LoadingIcon'
import { sortByLatest } from '../../../helper/orderSorter'
import { handleError } from '../../../helper/handleError'
import { getTokenHeader } from '../../../helper/getTokenHeader'

const AllOrdersPage = () => {
  const { value: allOrders } = useFetchData('/order')
  const [sortedOrders, setSortedOrders] = useState('')

  const [showSingleOrder, setShowSingleOrder] = useState(false)
  const { orderId } = useParams()

  const allStatus = [
    "processing",
    "accepted",
    "shipped",
    "delivered",
    "cancelled",
    "declined",
  ]

  useEffect(() => {
    if (allOrders) {
      const sorted = sortByLatest(allOrders)
      setSortedOrders(sorted)
    }
  }, [allOrders])

  const changeOrdersDisplay = async (e) => {
    const statusName = e.target.value
    const url = `/order/status/${statusName}`

    try {
      const { data } = await axios.get(url, getTokenHeader())
      setSortedOrders(sortByLatest(data))

    } catch (error) {
      return handleError(error)
    }

  }

  if (showSingleOrder && orderId && sortedOrders) {
    const singleOrder = sortedOrders.filter(order => order._id.toString() === orderId)[0]

    return (
      <OrderDetails order={singleOrder} orders={sortedOrders} setOrders={setSortedOrders} />
    )
  }

  if (sortedOrders) {
    return (
      <div>
        <div className='align-center justify-content-between mb-3'>
          <p className="h4 mb-0 flex-grow-1">
            All Orders
          </p>

          <div>
            <select className="form-select" onChange={changeOrdersDisplay}>
              <option>Show By Status</option>

              {allStatus.map((status, i) => (
                <option value={status} key={i}>
                  {status}
                </option>
              ))}
            </select>
          </div>

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
                sortedOrders && sortedOrders.map(order => {
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