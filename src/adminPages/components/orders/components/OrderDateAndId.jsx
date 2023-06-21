import React from 'react'
import CalendarIcon from '../../../../svgIcons/CalendarIcon'
import { getDateAndTime } from '../../../../helper/dateHelper'

const OrderDateAndId = ({ date, id }) => {
  return (
    <>
      <div className='align-center'>
        <div className='me-3 text-primary'>
          <CalendarIcon />
        </div>
        <span className="fw-bold">
          {getDateAndTime(date)}
        </span>
      </div>
      <p className="mt-2 mb-0 text-muted">
        #Id {id}
      </p>
    </>

  )
}

export default OrderDateAndId