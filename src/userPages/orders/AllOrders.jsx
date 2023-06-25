import React from 'react'
import { useFetchData } from '../../hooks/useFetchData'
import { Link } from 'react-router-dom'
import EachOrderItem from './EachOrderItem';
import { getDateAndTime } from '../../helper/dateHelper';

const AllOrders = () => {
  const { value: orders } = useFetchData('/user-orders')

  const cancelOrder = async (orderId) => {
    console.log('orderId :', orderId);

  }

  if (orders) {
    return (
      <div>
        <div>
          <h5 className='m-0 text-center'>My Orders</h5>
        </div>

        <div className='mt-4'>
          {
            orders.map(order => {
              return (
                <div
                  key={order._id}
                  className='mb-4 border rounded-3 shadow p-3'
                >
                  <div className='d-flex flex-column flex-sm-row align-items-center justify-content-sm-between mb-2'>
                    <div>
                      <div className="align-center fw-light">
                        <div className=''>Order</div>
                        <Link
                          className='ms-2 text-primary'
                          to={`/dashboard/user/orders/${order._id}`}
                        >
                          #{order._id}
                        </Link>
                      </div>

                      <span className='text-muted'>
                        Placed on {getDateAndTime(order.createdAt)}
                      </span>
                    </div>

                    <div className='py-2 px-3 border border-dark rounded-pill my-2 mt-sm-0'>
                      {order.status}
                    </div>
                  </div>

                  {
                    order.orderItems.map((item, i) => {
                      return (
                        <div
                          key={item._id || i}
                          className='border-top border-2 py-3 px-2 d-flex'
                        >
                          <EachOrderItem
                            order={order}
                            item={item}
                          />

                        </div>
                      )
                    })
                  }

                  {
                    (order.status === 'processing')
                      ? (
                        <div className='d-flex justify-content-end'>
                          <button className="btn btn-outline-danger" onClick={() => cancelOrder(order._id)}>
                            Cancel Order
                          </button>
                        </div>
                      ) : ''
                  }

                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

  return (<p>Loading Orders...</p>)
}


export default AllOrders