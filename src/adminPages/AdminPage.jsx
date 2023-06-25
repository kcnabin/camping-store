import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import AdminMenu from './components/AdminMenu'
import UserInformation from './components/UserInformation'

const AdminPage = () => {
  return (
    <DashboardLayout
      left={<AdminMenu />}
      right={<UserInformation />}
    />
  )
}

export default AdminPage