import React from 'react'
import { Link } from 'react-router-dom'

const LoginDropdown = () => {
  return (
    <div>
      <div className='dropdown-options'>
        <Link to='/login' >
          Login
        </Link>
      </div>

      <div className='dropdown-options'>
        <Link to='/register' >
          Register
        </Link>
      </div>


    </div>
  )
}

export default LoginDropdown