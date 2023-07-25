import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
// import { useFetchData } from '../../../hooks/useFetchData'

import OrderDetails from './OrderDetails'
import LoadingIcon from '../../../svgIcons/LoadingIcon'
// import { sortByLatest } from '../../../helper/orderSorter'
// import { handleError } from '../../../helper/handleError'
// import { getTokenHeader } from '../../../helper/getTokenHeader'
import { loadAllOrders, loadOrdersByStatus } from '../../../features/admin/allOrders/allOrdersSlice'

const AllOrdersPage = () => {
  const [showSingleOrder, setShowSingleOrder] = useState(false)
  const { orderId } = useParams()
  const [orderStatus, setOrderStatus] = useState('all')

  // const { value: allOrders } = useFetchData('/order')
  // const [sortedOrders, setSortedOrders] = useState('')

  const { data: allOrders, loading, error } = useSelector(state => state.allOrders)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadAllOrders())
  }, [dispatch])

  const allStatus = [
    "processing",
    "accepted",
    "shipped",
    "delivered",
    "cancelled",
    "declined",
  ]

  // useEffect(() => {
  //   if (allOrders) {
  //     const sorted = sortByLatest(allOrders)
  //     setSortedOrders(sorted)
  //   }
  // }, [allOrders])

  const changeOrdersDisplay = async (e) => {
    // const statusName = e.target.value
    // const url = `/order/status/${statusName}`

    // try {
    //   const { data } = await axios.get(url, getTokenHeader())
    //   setSortedOrders(sortByLatest(data))

    // } catch (error) {
    //   return handleError(error)
    // }
    e.preventDefault()

    let url = ''
    const status = e.target.value
    setOrderStatus(status)

    if (status === 'all') {
      url = '/order'
    } else {
      url = `/order/status/${status}`
    }

    dispatch(loadOrdersByStatus(url))

  }

  if (loading) {
    return <LoadingIcon />
  }

  if (showSingleOrder && orderId && (allOrders.length > 0)) {
    const singleOrder = allOrders.filter(order => order._id.toString() === orderId)[0]

    return (
      <OrderDetails order={singleOrder} orders={allOrders} setOrders={() => console.log('hi')} />
    )
  }

  if (!error && !loading) {
    return (
      <div>
        <div className='align-center justify-content-between mb-3'>
          <p className="h4 mb-0 flex-grow-1">
            All Orders
          </p>

          <div>
            <select className="form-select" onChange={changeOrdersDisplay}>
              <option selected={orderStatus === 'all'} value="all">all orders</option>

              {allStatus.map((status, i) => (
                <option selected={orderStatus === status} value={status} key={i}>
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
                (allOrders.length > 0) && allOrders.map(order => {
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

  return ''


}

export default AllOrdersPage