import React from 'react'
import { useCheckAuth } from '../hooks/useCheckAuth'
import LoadingPage from '../components/loading/LoadingPage'
import { Outlet } from 'react-router-dom'

const AdminCheck = () => {
  const isAdmin = useCheckAuth('/admin-auth')
  console.log('isAdmin :', isAdmin);

  return isAdmin ? <Outlet /> : <LoadingPage />
}

export default AdminCheck