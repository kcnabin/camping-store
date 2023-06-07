import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import AdminMenu from './components/AdminMenu'
import AdminInfo from './components/AdminInfo'

const AdminPage = () => {
  return (
    <DashboardLayout
      left={<AdminMenu />}
      right={<AdminInfo />}
    />
  )
}

export default AdminPage