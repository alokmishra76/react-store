import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import Loader from '../loader/Loader'
import ToastContainer from '../toast/ToastContainer'

const Body = () => {
  return (
    <>
    <Loader />
    <Header />
    <Outlet />
    <ToastContainer />
    <Footer />
    </>
  )
}

export default Body