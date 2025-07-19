import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <div className='bg-main header-giapha' >
        <nav className='text-center'>
        <h1 className='text-6xl'>GIA PHẢ ĐỖ GIA</h1>
        <Header/>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout