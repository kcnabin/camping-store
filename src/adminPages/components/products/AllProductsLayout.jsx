import React from 'react'
import DashboardLayout from '../../../components/DashboardLayout'
import AdminMenu from '../AdminMenu'
import Products from './components/Products'

const AllProducts = () => {
  return (
    <DashboardLayout
      left={<AdminMenu />}
      right={<Products />}
    />
  )
}

export default AllProducts