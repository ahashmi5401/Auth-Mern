import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/features/auth/authSlice'

const Dashboard = () => {
    let dispatch = useDispatch()
  return (
    <div className='flex justify-between'>
      Dashboard
      <button className='cursor-pointer bg-black text-white' onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Dashboard
