import React, { useState } from 'react'
import LeftArrowIcon from '../../../svgIcons/LeftArrowIcon'
import CalendarIcon from '../../../svgIcons/CalendarIcon'
import { Link } from 'react-router-dom'
import ProfileIcon from '../../../svgIcons/ProfileIcon'
import LocationIcon from '../../../svgIcons/LocationIcon'

const OrderDetails = ({ order }) => {
  const [status, setStatus] = useState(order.status)
  const { shippingInfo } = order

  const allStatus = ["processing", "accepted", "shipped", "delivered", "cancelled", "declined"]


  return (
    <div>
      <div className='align-center mb-2'>
        <Link to='/dashboard/admin/orders' className='btn m-0 p-1 me-1'>
          <LeftArrowIcon />
        </Link>
        <p className="h5 m-0">Order Details</p>
      </div>

      <div className='d-flex flex-column flex-sm-row justify-content-between border rounded-3 p-3 '>
        <div className=''>
          <div className='align-center'>
            <div className='me-3'>
              <CalendarIcon />
            </div>
            <span className="fw-bold">
              {(new Date(order.createdAt)).toLocaleDateString()}
            </span>
          </div>
          <p className="mt-2 mb-0 text-muted">
            #Id   {order._id}
          </p>
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
            <button className='btn btn-outline-success' disabled={order.status === 'delivered'}>
              Save
            </button>
          </div>
        </div>

      </div>

      <div className="container-fluid my-3">
        <div className="row">
          <div className='col-12 col-sm-6 d-flex border px-3 py-2 rounded-3'>
            <div>
              <ProfileIcon />
            </div>
            <div className='ms-3 text-muted'>
              <div className='fw-bold'>Customer</div>
              <div>
                {shippingInfo.fullName}
              </div>
              <div>
                {shippingInfo.email}
              </div>
              <div>
                {shippingInfo.phoneNum}
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-6 px-0 ps-sm-3 pt-3 pt-sm-0'>
            <div className="d-flex border rounded-3 px-3 py-2">
              <div className='text-primary'>
                <LocationIcon />
              </div>
              <div className='ms-3 text-muted'>
                <div className='fw-bold'>Deliver To</div>
                <div>
                  Street: {shippingInfo.address.street}
                </div>
                <div>
                  City: {shippingInfo.address.city}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex justify-content-between my-3'>

      </div>
    </div>
  )
}

export default OrderDetails