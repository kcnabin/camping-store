import React from 'react'
import DashboardLayout from '../../../components/DashboardLayout'
import AdminMenu from '../AdminMenu'
import AllOrdersPage from './AllOrdersPage'

const OrdersDashboard = () => {
  return (
    <DashboardLayout
      left={<AdminMenu />}
      right={<AllOrdersPage />}
    />
  )
}

export default OrdersDashboard