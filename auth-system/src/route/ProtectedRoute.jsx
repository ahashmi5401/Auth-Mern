import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.auth);
    if(!token) {
        navigate('/login');
    }
  return (
    <Outlet />
  )

}

export default ProtectedRoute
