import React from 'react'
import { Link } from 'react-router-dom'

import MenuIcon from '../../svgIcons/MenuIcon'
import ProfileIcon from '../../svgIcons/ProfileIcon'
import { useAuth } from '../../context/UserContext'
import UserDropdown from './UserDropdown'
import LoginDropdown from './LoginDropdown'

const Header = () => {
  const { auth } = useAuth()
  console.log('auth :', auth);

  return (
    <div className='bg-title text-white py-3 px-4 d-flex justify-content-between align-items-center'>
      <Link to='/' className='d-flex align-items-center'>
        <div style={{ width: "28px" }}>
          <img src="/icons/camp.png" alt="store logo" className='w-100' />
        </div>
        <div className='ms-3 d-none d-sm-block h6 mb-0'>
          Camping Store
        </div>
      </Link>

      {auth?.user?.name}

      <div className='dropdown'>
        <div
          className='d-flex align-items-center border py-1 px-2 border-2 rounded-pill btn'
          data-bs-toggle='dropdown'
        >
          <div className='text-white me-2'>
            <MenuIcon />
          </div>

          <div className='text-white'>
            <ProfileIcon />
          </div>

        </div>

        <div className="dropdown-menu px-2">
          {auth?.user
            ? (<UserDropdown />)
            : <LoginDropdown />}
        </div>
      </div>
    </div>
  )
}

export default Header