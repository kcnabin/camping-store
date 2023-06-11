import React from 'react'
import { useAuth } from '../../context/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UserDropdown = () => {
  const { auth, setAuth } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    setAuth('')
    localStorage.removeItem('camping-store-user')
    toast.success('user logged out')
    navigate('/login')
  }

  return (
    <div className='d-flex flex-column'>
      <div className='dropdown-options'>
        <Link
          to={auth?.user?.isAdmin ? '/dashboard/admin' : '/dashboard/user'}
        >
          Dashboard
        </Link>
      </div>

      {
        auth?.user?.isAdmin ? (
          <div className='d-blocl d-sm-none'>
            <div className='dropdown-options'>
              <Link
                to={'/dashboard/admin/create-category'}
              >
                Create Category
              </Link>
            </div>
            <div className='dropdown-options'>
              <Link
                to={'/dashboard/admin/create-products'}
              >
                Create Products
              </Link>
            </div>

            <div className='dropdown-options'>
              <Link
                to={'/dashboard/admin/Products'}
              >
                All Products
              </Link>
            </div>

            <div className='dropdown-options'>
              <Link
                to={'/dashboard/admin/users'}
              >
                Users
              </Link>
            </div>
          </div>
        ) : ''
      }

      <Link
        className='text-start dropdown-options'
        onClick={handleLogout}
      >
        Logout
      </Link>
    </div>
  )
}

export default UserDropdown