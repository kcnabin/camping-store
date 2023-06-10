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