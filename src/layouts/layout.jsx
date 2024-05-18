import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/navbar'
import Footer from '../components/footer'
const Layout = () => {
  return (
    <>
        <Nav/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout