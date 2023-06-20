import React from 'react'
import { Link } from 'react-router-dom'
import { useFetchData } from '../../../hooks/useFetchData'

const AllOrdersPage = () => {
  const { value: allOrders } = useFetchData('/order')

  console.log('allOrders :', allOrders);

  if (allOrders) {
    return (
      <div>
        <div>
          <p className="h4">All Orders</p>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered align-middle table-hover">
            <thead>
              <tr className='table-secondary'>
                <th scope="col">Order No.</th>
                <th scope="col">Order By</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {
                allOrders && allOrders.map(order => {
                  return (
                    <tr key={order._id} className=''>
                      <th scope="row">
                        <Link to={`/dashboard/admin/orders/${order._id}`}>
                          ...{order._id.substring(10)}
                        </Link>
                      </th>
                      <td>{order.shippingInfo.fullName}</td>
                      <td>{order.grandTotal.toLocaleString()}</td>
                      <td className='rounded-3 borderr-dark'>{order.status}</td>
                      <td>
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
}

export default AllOrdersPage