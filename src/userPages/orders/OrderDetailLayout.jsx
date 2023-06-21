import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import UserMenu from '../UserMenu'
import OrderDetails from './OrderDetails'

const OrderDetailLayout = () => {
  return (
    <DashboardLayout
      left={<UserMenu />}
      right={<OrderDetails />}
    />
  )
}

export default OrderDetailLayout