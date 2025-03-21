import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div>
      <div className='flex flex-col h-screen'>
        <Navbar />
        <main className='flex-1 mt-14 md:mt-16'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
