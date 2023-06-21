import React, { useState } from 'react'
import LeftArrowIcon from '../../../svgIcons/LeftArrowIcon'
import { Link } from 'react-router-dom'
import OrderDateAndNumber from './components/OrderDateAndId'
import { handleError } from '../../../helper/handleError'
import axios from 'axios'
import { getTokenHeader } from '../../../helper/getTokenHeader'
import { toast } from 'react-toastify'
import PaymentInfo from './components/PaymentInfo'
import ShippingAndProductInfo from './components/ShippingAndProductInfo'

const OrderDetails = ({ order, orders, setOrders }) => {
  const [status, setStatus] = useState(order.status)

  const allStatus = ["processing", "accepted", "shipped", "delivered", "declined"]

  const changeOrderStatus = async () => {
    const url = `/order/${order._id}`

    try {
      await axios.put(url, { status }, getTokenHeader())
      toast.success('Order status changed!')
      setOrders(orders.map(eachOrder => {
        if (eachOrder._id.toString() !== order._id.toString()) {
          return eachOrder
        }
        return ({
          ...order,
          status
        })
      }))

    } catch (error) {
      return handleError(error)
    }
  }

  return (
    <div>
      <div className='align-center mb-2'>
        <Link to='/dashboard/admin/orders' className='btn m-0 p-1 ps-0 me-1'>
          <LeftArrowIcon />
        </Link>
        <p className="h5 m-0">
          Order Details
        </p>
      </div>

      <div className='d-flex flex-column flex-sm-row justify-content-between border rounded-3 p-3 '>
        <div>
          <OrderDateAndNumber date={order.createdAt} id={order._id} />
        </div>

        <div className='align-center ms-sm-2 mt-3 mt-sm-0'>
          <div>
            <select
              className='form-select'
              value={status}
              onChange={e => setStatus(e.target.value)}
            >
              <option>
                {order.status}
              </option>
              {
                allStatus.map((s, i) => (
                  <option value={s} key={i}>
                    {s}
                  </option>
                ))
              }
            </select>
          </div>

          <div className='ms-3'>
            <button
              className='btn btn-outline-success'
              onClick={() => changeOrderStatus()}
            >
              Save
            </button>
          </div>
        </div>

      </div>

      <ShippingAndProductInfo order={order} />

      <div className='text-muted border p-3 mt-2'>
        <PaymentInfo />
      </div>
    </div >
  )
}

export default OrderDetails