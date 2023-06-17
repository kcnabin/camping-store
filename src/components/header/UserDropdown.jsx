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
    setTimeout(() => {
      navigate('/login')
    }, 1000)
  }

  return (
    <div className='d-flex flex-column'>
      <div>
        <Link
          to={auth?.user?.isAdmin ? '/dashboard/admin' : '/dashboard/user'}
          className='dropdown-options'
        >
          Dashboard
        </Link>
      </div>

      {
        auth?.user?.isAdmin ? (
          <div className='d-block d-sm-none'>
            <div>
              <Link
                to={'/dashboard/admin/create-category'}
                className='dropdown-options'
              >
                Create Category
              </Link>
            </div>
            <div>
              <Link
                to={'/dashboard/admin/create-products'}
                className='dropdown-options'
              >
                Create Products
              </Link>
            </div>

            <div>
              <Link
                to={'/dashboard/admin/Products'}
                className='dropdown-options'
              >
                All Products
              </Link>
            </div>

            <div>
              <Link
                to={'/dashboard/admin/users'}
                className='dropdown-options'
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