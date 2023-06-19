import React from 'react'
import { useFetchData } from '../../hooks/useFetchData'
import { Link } from 'react-router-dom'
import EachOrderItem from './EachOrderItem';

const OrdersPage = () => {
  const { value: orders } = useFetchData('/user-orders')

  if (orders) {
    return (
      <div className='container'>
        <div>
          <h4 className='mt-3'>My Orders</h4>
        </div>

        <div className='mt-4'>
          {
            orders.map(order => {
              return (
                <div
                  key={order._id}
                  className='mb-4 border border-secondary shadow p-3'
                >
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
                    Placed on {order.createdAt}
                  </span>

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

export default OrdersPage