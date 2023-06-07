import React from 'react'
import DashboardLayout from '../../../components/DashboardLayout'
import AdminMenu from '../AdminMenu'
import CreateCategoryForm from './CreateCategoryForm'

const CreateCategory = () => {
  return (
    <DashboardLayout
      left={<AdminMenu />}
      right={<CreateCategoryForm />}
    />
  )
}

export default CreateCategory