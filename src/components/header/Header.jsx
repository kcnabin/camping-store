import React, { useState } from 'react'
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
import SearchIcon from '../../svgIcons/SearchIcon'
import SmallSearchBar from './SmallSearchBar'

const Header = () => {
  const [showSearch, setShowSearch] = useState(false)
  const { auth } = useAuth()
  const { cart } = useCart()

  return (
    <div className='position-sticky top-0 z-100'>
      <div className='bg-title text-white py-3 px-4 align-center justify-content-between'>
        <div
          className='align-center text-white d-block d-md-none btn p-0'
          data-bs-toggle="offcanvas"
          data-bs-target="#sideNav"
        >
          <MenuIcon />
          <SideNav />
        </div>

        <Link to='/' className='d-flex align-items-center store'>
          <div style={{ width: "28px" }} className='store-icon'>
            <img src="/icons/camp.png" alt="store logo" className='w-100' />
          </div>
          <div className='ms-3 h6 fw-semibold mb-0 store-title'>
            Camping Store
          </div>
        </Link>

        <div className='align-center'>
          <div className='me-3 d-none d-md-flex'>
            <div className="input-group">
              <input
                type='text'
                className='form-control py-1 px-2'
                placeholder='Search'
              />

              <button
                className=" input-group-text text-white p-0 px-2 m-0 btn align-center border-top border-end border-bottom border-2"
                type='button'
              >
                <SearchIcon />
              </button>

            </div>
          </div>

          <div
            className='me-3 d-block d-md-none btn text-white p-0 m-0'
            onClick={() => setShowSearch(!showSearch)}
          >
            <SearchIcon size={"24px"} />
          </div>

          <Link to='/cart' className='position-relative'>
            <CartIcon />
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

      {
        showSearch ? (
          <SmallSearchBar setShowSearch={setShowSearch} />
        ) : ''
      }
    </div>
  )
}

export default Header