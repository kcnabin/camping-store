import React from 'react'
import { Link } from 'react-router-dom'
import IconText from '../iconText/IconText'
import PenIcon from '../../svgIcons/PenIcon'
import ProductIcon from '../../svgIcons/ProductIcon'
import OrderIcon from '../../svgIcons/OrderIcon'

const AdminDropdown = () => {

  return (
    <div className='d-block d-md-none'>
      <Link
        to={'/dashboard/admin/orders'}
        className='dropdown-options hover-zoom'
      >
        <IconText text='Orders'>
          <OrderIcon size='20px' />
        </IconText>
      </Link>

      <Link
        to={'/dashboard/admin/Products'}
        className='dropdown-options hover-zoom'
      >
        <IconText text='All Products'>
          <ProductIcon size='20px' />
        </IconText>
      </Link>

      <Link
        to={'/dashboard/admin/create-category'}
        className='dropdown-options hover-zoom'
      >
        <IconText text='Create Category'>
          <PenIcon />
        </IconText>
      </Link>

      <Link
        to={'/dashboard/admin/create-products'}
        className='dropdown-options hover-zoom'
      >
        <IconText text='Add Products'>
          <ProductIcon size='20px' />
        </IconText>
      </Link>

    </div>
  )
}

export default AdminDropdown