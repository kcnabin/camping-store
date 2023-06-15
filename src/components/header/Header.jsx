import React from 'react'
import { Link } from 'react-router-dom'

import MenuIcon from '../../svgIcons/MenuIcon'
import ProfileIcon from '../../svgIcons/ProfileIcon'
import { useAuth } from '../../context/UserContext'
import UserDropdown from './UserDropdown'
import LoginDropdown from './LoginDropdown'
import CartIcon from '../../svgIcons/CartIcon'
import { useCart } from '../../context/CartContext'
import { getTotalCartQuantity } from '../../helper/getTotalCartQuantity'

const Header = () => {
  const { auth } = useAuth()
  const { cart } = useCart()

  return (
    <div className='bg-title text-white py-3 px-4 d-flex justify-content-between align-items-center'>
      <Link to='/' className='d-flex align-items-center store'>
        <div style={{ width: "28px" }}>
          <img src="/icons/camp.png" alt="store logo" className='w-100' />
        </div>
        <div className='ms-3 h6 mb-0 store-title'>
          Camping Store
        </div>
      </Link>

      <div className='align-center '>
        {
          (auth?.user?.name) ? "" : (
            <Link className='align-center d-none d-md-block me-3' to='/login'>
              <ProfileIcon />
              <span className='ms-2 '>
                Sign In
              </span>
            </Link>
          )
        }

        <Link to='/cart' className='position-relative'>
          <CartIcon />
          {/* <span className='ms-2 d-none d-md-block'>Cart</span> */}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
            {(cart?.length > 0) ? getTotalCartQuantity(cart) : 0}
          </span>
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