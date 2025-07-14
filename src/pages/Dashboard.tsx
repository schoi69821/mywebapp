import { useAuthStore } from '../stores/authStore'
import { Navigate } from 'react-router-dom'

const Dashboard = () => {
  const { user, isAuthenticated } = useAuthStore()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600">Welcome, {user?.name}!</p>
    </div>
  )
}

export default Dashboard