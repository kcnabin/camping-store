import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import GridIcon from '../svgIcons/GridIcon'
import OrderIcon from '../svgIcons/OrderIcon'
import { useAuth } from '../context/UserContext'

const UserMenu = () => {
  const { auth } = useAuth()
  const location = useLocation()

  if (location.pathname.includes('/dashboard/user/orders')) {
    location.pathname = '/dashboard/user/orders'
  }

  const getStyle = (sentPath) => {
    let style = 'align-center shadow rounded-3 py-2 px-3 my-4 hover-zoom'

    if (location.pathname === sentPath) {
      style += ' bg-success text-white'
    }
    return style
  }

  return (
    <div>
      <div className='py-2 px-4 admin-menu border-md-end' style={{ width: "220px" }}>
        <h6 className='ps-3 mt-2 d-none d-md-block'>
          Hello, {auth?.user?.name}!
        </h6>

        <Link to='/dashboard/user' className={getStyle('/dashboard/user')}>
          <GridIcon />
          <p className='m-0 ms-2 fs-6'>
            Dashboard
          </p>
        </Link>

        <Link to='/dashboard/user/orders' className={getStyle('/dashboard/user/orders')}>
          <OrderIcon />
          <p className='m-0 ms-2 fs-6'>
            My Orders
          </p>
        </Link>
      </div>

    </div>
  )
}

export default UserMenu