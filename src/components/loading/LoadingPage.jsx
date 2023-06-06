import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const LoadingPage = () => {
  const location = useLocation()
  const navigate = useNavigate()

  console.log('Loading page rendered')

  return (
    <div>LoadingPage</div>
  )
}

export default LoadingPage