import React from 'react'
import { Link } from 'react-router-dom'

const LoginDropdown = () => {
  return (
    <div>
      <div className='dropdown-options'>
        <Link to='/login' className='w-100 d-block'>
          Login
        </Link>
      </div>

      <div className='dropdown-options'>
        <Link to='/register' className='d-block'>
          Register
        </Link>
      </div>


    </div>
  )
}

export default LoginDropdown