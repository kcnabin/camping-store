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
      <Link
        to={auth?.user?.isAdmin ? '/dashboard/admin' : '/dashboard/user'}
      >
        Dashboard
      </Link>

      <div
        className='btn p-0 text-start'
        onClick={handleLogout}
      >
        Logout
      </div>
    </div>
  )
}

export default UserDropdown