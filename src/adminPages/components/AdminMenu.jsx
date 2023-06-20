import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import GridIcon from '../../svgIcons/GridIcon'
import ProductIcon from '../../svgIcons/ProductIcon'
import OrderIcon from '../../svgIcons/OrderIcon'
import PeopleIcon from '../../svgIcons/PeopleIcon'
import CircleAddIcon from '../../svgIcons/CircleAddIcon'

const AdminMenu = () => {
  const location = useLocation()

  const getStyle = (sentPath) => {
    let style = 'align-center shadow rounded-3 py-2 px-3 my-4 hover-zoom'

    if (location.pathname === sentPath) {
      style += ' bg-success text-white'
    }
    return style
  }

  return (
    <div className='py-2 px-4 admin-menu border-md-end' style={{ width: "220px" }}>
      <h5 className='ps-3 mt-2 d-none d-md-block'>
        Hello Admin!
      </h5>


      <Link to='/dashboard/admin' className={getStyle('/dashboard/admin')}>
        <GridIcon />
        <p className='m-0 ms-2 fs-6'>
          Dashboard
        </p>
      </Link>

      <Link to='/dashboard/admin/orders' className={getStyle('/dashboard/admin/orders')}>
        <OrderIcon />
        <p className='m-0 ms-2 fs-6'>
          Orders
        </p>
      </Link>

      <Link to='/dashboard/admin/products' className={getStyle('/dashboard/admin/products')}>
        <ProductIcon />
        <p className='m-0 ms-2 fs-6'>
          Products
        </p>
      </Link>

      <Link to='/dashboard/admin/create-products' className={getStyle('/dashboard/admin/create-products')}>
        <CircleAddIcon />
        <p className='m-0 ms-2 fs-6'>
          Add Products
        </p>
      </Link>

      <Link to='/dashboard/admin/create-category' className={getStyle('/dashboard/admin/create-category')}>
        <CircleAddIcon />
        <p className='m-0 ms-2 fs-6'>
          Add Category
        </p>
      </Link>

      <Link to='/dashboard/admin/customers' className={getStyle('/dashboard/admin/customers')}>
        <PeopleIcon />
        <p className='m-0 ms-2 fs-6'>
          Customers
        </p>
      </Link>


    </div>
  )
}

export default AdminMenu