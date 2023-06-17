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
import SideNav from './SideNav'

const Header = () => {
  const { auth } = useAuth()
  const { cart } = useCart()

  return (
    <div className='bg-title text-white py-3 px-4 d-flex justify-content-between align-items-center'>
      <div
        className='align-center text-white d-block d-md-none btn p-0'
        data-bs-toggle="offcanvas"
        data-bs-target="#sideNav"
      >
        <MenuIcon />
        <SideNav />
      </div>



      <Link to='/' className='d-flex align-items-center store'>
        <div style={{ width: "28px" }}>
          <img src="/icons/camp.png" alt="store logo" className='w-100' />
        </div>
        <div className='ms-3 h6 fw-semibold mb-0 store-title'>
          Camping Store
        </div>
      </Link>

      <div className='align-center '>
        <Link to='/cart' className='position-relative'>
          <CartIcon />
          {/* <span className='ms-2 d-none d-md-block'>Cart</span> */}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
            {(cart?.length > 0) ? getTotalCartQuantity(cart) : 0}
          </span>
        </Link>

        <div className='dropdown ms-3'>
          <div
            className='btn p-0 m-0'
            data-bs-toggle='dropdown'
          >
            <div className='text-white'>
              <ProfileIcon />
            </div>
          </div>

          <div className="dropdown-menu w-auto p-0 m-0 g-0">
            {auth?.user
              ? (<UserDropdown />)
              : (<LoginDropdown />)}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header