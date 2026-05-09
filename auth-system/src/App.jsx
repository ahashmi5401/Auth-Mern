import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import VerifyOtp from './pages/auth/VerifyOtp'
import Dashboard from './pages/dashboard/Dashboard'
import ProtectedRoute from './route/ProtectedRoute'
import PublicRoute from './route/PublicRoute'
import MainLayout from './layout/MainLayout'
import AuthLayout from './layout/AuthLayout'

export default function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
      <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
          <Route path="/verifyOtp" element={<VerifyOtp />} />
      </Route>
        </Route>
      <Route element={<ProtectedRoute />}>
      <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
      </Route>
        </Route>
    </Routes>
  )
}