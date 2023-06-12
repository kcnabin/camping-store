import { useEffect, useState } from "react"
import Page100Vh from "../Page100Vh"
import { useLocation, useNavigate } from 'react-router-dom'

const LoadingPage = ({ path = "login" }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [count, setCount] = useState(3)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count - 1)
    }, 1000)

    if (count <= 0) {
      navigate(`/${path}`, {
        state: { redirectTo: location.pathname }
      })
    }

    return () => clearInterval(interval)
  }, [navigate, location, path, count])

  return (
    <Page100Vh className='justify-center align-center'>
      <div className="d-flex">
        <div className="me-4 h3">
          Redirecting
        </div>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>

      </div>
    </Page100Vh>
  )
}

export default LoadingPage