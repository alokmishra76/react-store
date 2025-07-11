import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import Loader from '../loader/Loader'

const Body = () => {
  return (
    <>
    <Loader />
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Body