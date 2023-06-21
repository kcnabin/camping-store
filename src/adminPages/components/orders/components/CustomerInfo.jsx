import React from 'react'
import ProfileIcon from '../../../../svgIcons/ProfileIcon'

const CustomerInfo = ({ shippingInfo }) => {
  return (
    <>
      <div className='text-primary'>
        <ProfileIcon />
      </div>
      <div className='ms-3 text-muted'>
        <div className='fw-bold'>
          Customer
        </div>
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
    </>
  )
}

export default CustomerInfo