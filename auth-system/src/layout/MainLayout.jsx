import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <p className='text-2xl'>Navbar</p>
      <div>
      <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
