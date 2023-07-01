import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
import { useSearch } from '../../context/SearchContext'


const Header = () => {
  const [showSearch, setShowSearch] = useState(false)
  const { auth } = useAuth()
  const { cart } = useCart()
  const { search, setSearch } = useSearch()
  const navigate = useNavigate()

  const handleSearch = e => {
    e.preventDefault()
    // search is already a string. so no need to convert to string using JSON.stringify
    localStorage.setItem('camping-store-search', search)
    navigate('/search')
  }

  return (
    <div className='position-sticky top-0 z-100'>
      <div className='bg-title text-white py-3 px-4 align-center justify-content-between'>
        <div
          className='align-center text-white d-block d-md-none btn p-0'
          data-bs-toggle="offcanvas"
          data-bs-target="#sideNav"
        >
          <div className="align-center">
            <MenuIcon size='20px' />
          </div>
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
            <form
              className="input-group"
              onSubmit={handleSearch}
            >
              <input
                type='text'
                value={search}
                onChange={e => setSearch(e.target.value)}
                className='form-control py-1 px-2'
                placeholder='Search'
              />

              <button
                className=" input-group-text text-white p-0 px-2 m-0 btn align-center border-top border-end border-bottom border-2"
                type='submit'
              >
                <div className="align-center">
                  <SearchIcon size='16px' />
                </div>
              </button>

            </form>
          </div>

          <div
            className='me-3 d-block d-md-none btn text-white p-0 m-0'
            onClick={() => setShowSearch(!showSearch)}
          >
            <div className="align-center">
              <SearchIcon size={"20px"} />
            </div>
          </div>

          <Link to='/cart' className='position-relative'>
            <div className="align-center">
              <CartIcon />
            </div>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
              {(cart?.length > 0) ? getTotalCartQuantity(cart) : 0}
            </span>
          </Link>

          <div className='dropdown ms-3'>
            <div
              className='btn p-0 m-0'
              data-bs-toggle='dropdown'
            >
              <div className='align-center text-white'>
                <ProfileIcon size='20px' />
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