import React from 'react'
import DashboardLayout from '../../../components/DashboardLayout'
import AdminMenu from '../AdminMenu'
import CreateProductsForm from './CreateProductsForm'

const CreateProducts = () => {
  return (
    <DashboardLayout
      left={<AdminMenu />}
      right={<CreateProductsForm />}
    />
  )
}

export default CreateProducts