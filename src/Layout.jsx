import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
      <ToastContainer
        position='top-center'
        hideProgressBar
      />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout