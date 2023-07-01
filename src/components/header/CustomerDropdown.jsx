import React from 'react'
import { Link } from 'react-router-dom'
import IconText from '../iconText/IconText'
import BoxIcon from '../../svgIcons/BoxIcon'

const CustomerDropdown = () => {
  return (
    <div>
      <Link
        to={'/dashboard/user/orders'}
        className='dropdown-options align-center hover-zoom'
      >
        <IconText text='Orders'>
          <BoxIcon size='20px' />
        </IconText>
      </Link>
    </div>
  )
}

export default CustomerDropdown