import React from 'react'
import { Link } from 'react-router-dom'

import MenuIcon from '../../svgIcons/MenuIcon'
import ProfileIcon from '../../svgIcons/ProfileIcon'
import { useAuth } from '../../context/UserContext'
import UserDropdown from './UserDropdown'
import LoginDropdown from './LoginDropdown'
import CartIcon from '../../svgIcons/CartIcon'

const Header = () => {
  const { auth } = useAuth()
  console.log('auth :', auth);

  return (
    <div className='bg-title text-white py-3 px-4 d-flex justify-content-between align-items-center'>
      <Link to='/' className='d-flex align-items-center'>
        <div style={{ width: "28px" }}>
          <img src="/icons/camp.png" alt="store logo" className='w-100' />
        </div>
        <div className='ms-3 h6 mb-0'>
          Camping Store
        </div>
      </Link>

      <div className='align-center '>
        {
          (auth?.user?.name) ? "" : (
            <Link className='align-center d-none d-md-block' to='/login'>
              <ProfileIcon />
              <span className='ms-2 '>
                Sign In
              </span>
            </Link>
          )
        }

        <Link className='align-center ms-4' to='/cart'>
          <CartIcon />
          <span className='ms-2 d-none d-md-block'>Cart</span>
        </Link>

        <div className='dropdown ms-4'>
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

          <div className="dropdown-menu p-0 m-0 g-0">
            {auth?.user
              ? (<UserDropdown />)
              : <LoginDropdown />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header