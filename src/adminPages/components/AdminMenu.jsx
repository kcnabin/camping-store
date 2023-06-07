import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { getPath } from '../../helper/getPath'

const AdminMenu = () => {
  const linkStyle = `h6 text-decoration-none`

  const location = useLocation()
  const path = getPath(location.pathname)

  const getStyle = (sentPath) => {
    let style = `px-3 py-2 mb-2 text-center border rounded-4`
    if (sentPath.toLowerCase() === path.toLowerCase()) {
      style += ' text-white bg-success'
    }
    return style
  }

  return (
    <div className='d-flex gap-2 flex-wrap justify-content-center d-md-block'
      style={{ minWidth: '175px' }}
    >
      <div className={getStyle('create-category')}>
        <NavLink
          to='/dashboard/admin/create-category'
          className={linkStyle}
        >
          Create Category
        </NavLink>
      </div>

      <div className={getStyle('create-products')}>
        <NavLink
          to='/dashboard/admin/create-products'
          className={linkStyle}
        >
          Create Products
        </NavLink>
      </div>

      <div className={getStyle('products')}>
        <NavLink
          to='/dashboard/admin/products'
          className={linkStyle}
        >
          All Products
        </NavLink>
      </div>

      <div className={getStyle('users')}>
        <NavLink
          to='/dashboard/admin/users'
          className={linkStyle}
        >
          Users
        </NavLink>
      </div>


    </div>
  )
}

export default AdminMenu