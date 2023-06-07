import React from 'react'
import DashboardLayout from '../../../components/DashboardLayout'
import AdminMenu from '../AdminMenu'
import Users from './Users'

const AllUsers = () => {
  return (
    <DashboardLayout
      left={<AdminMenu />}
      right={<Users />}
    />
  )
}

export default AllUsers