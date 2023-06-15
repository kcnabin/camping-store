import React from 'react'
import { useLocation } from 'react-router-dom'

const CheckOutPage = () => {
  const location = useLocation()
  console.log('state :', location.state);

  return (
    <div>CheckOutPage</div>
  )
}

export default CheckOutPage