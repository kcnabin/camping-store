import React from 'react'
import LocationIcon from '../../../../svgIcons/LocationIcon'

const ShippingAddress = ({ shippingInfo }) => {
  const mapAddress = "https://www.google.com/maps/search/?api=1&query="
    + shippingInfo.address.street + ", " + shippingInfo.address.city

  return (
    <>
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
        <div>
          <a
            href={mapAddress}
            className="text-secondary text-muted text-decoration-underline"
            target="_blank"
            rel="noreferrer"
          >
            View on map
          </a>
        </div>

      </div>
    </>
  )
}

export default ShippingAddress