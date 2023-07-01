import React from 'react'
import { useAuth } from '../../context/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import GridIcon from '../../svgIcons/GridIcon'
import BoxArrowRightIcon from '../../svgIcons/BoxArrowRightIcon'
import IconText from '../iconText/IconText'
import CustomerDropdown from './CustomerDropdown'
import AdminDropdown from './AdminDropdown'
import { useSearch } from '../../context/SearchContext'

const UserDropdown = () => {
  const { auth, setAuth } = useAuth()
  const { setSearch } = useSearch()
  const navigate = useNavigate()

  const handleLogout = () => {
    setAuth('')
    setSearch('')
    localStorage.removeItem('camping-store-user')
    localStorage.removeItem('camping-store-search')
    toast.success('user logged out')
    setTimeout(() => {
      navigate('/login')
    }, 1000)
  }

  return (
    <div className='d-flex flex-column'>
      <Link
        to={auth?.user?.isAdmin ? '/dashboard/admin' : '/dashboard/user'}
        className='dropdown-options align-center hover-zoom'
      >
        <IconText text="Dashboard">
          <GridIcon size='20px' />
        </IconText >
      </Link>

      {
        auth?.user?.isAdmin
          ? (<AdminDropdown />)
          : (<CustomerDropdown />)
      }

      <Link
        className='dropdown-options align-center hover-zoom'
        onClick={handleLogout}
      >
        <IconText text='Logout'>
          <BoxArrowRightIcon size='20px' />
        </IconText>
      </Link>
    </div>
  )
}

export default UserDropdown