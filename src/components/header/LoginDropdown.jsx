import React from 'react'
import { Link } from 'react-router-dom'

const LoginDropdown = () => {
  return (
    <div>
      <div>
        <Link to='/register'>
          Register
        </Link>
      </div>

      <div>
        <Link to='/login'>
          Login
        </Link>
      </div>
    </div>
  )
}

export default LoginDropdown