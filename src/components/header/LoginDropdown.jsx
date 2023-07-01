import React from 'react'
import { Link } from 'react-router-dom'
import ProfileIcon from '../../svgIcons/ProfileIcon'
import PenIcon from '../../svgIcons/PenIcon'
import IconText from '../iconText/IconText'

const LoginDropdown = () => {

  return (
    <div>
      <Link to='/login' className='dropdown-options align-center hover-zoom'>
        <IconText text='Login'>
          <ProfileIcon size='20px' />
        </IconText>
      </Link>

      <Link to='/register' className='dropdown-options align-center hover-zoom'>
        <IconText text='Register'>
          <PenIcon size="20px" />
        </IconText>
      </Link>

    </div>
  )
}

export default LoginDropdown