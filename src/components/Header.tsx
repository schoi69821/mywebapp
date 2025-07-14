import { Link, useLocation } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'

const Header = () => {
  const location = useLocation()
  const { isAuthenticated, user, logout } = useAuthStore()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold hover:text-blue-200 transition-colors">
            MyWebApp
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className={`hover:text-blue-200 transition-colors ${
                isActive('/') ? 'text-blue-200 font-semibold' : ''
              }`}
            >
              Home
            </Link>
            
            {!isAuthenticated ? (
              <Link 
                to="/login" 
                className={`hover:text-blue-200 transition-colors ${
                  isActive('/login') ? 'text-blue-200 font-semibold' : ''
                }`}
              >
                Login
              </Link>
            ) : (
              <>
                <Link 
                  to="/dashboard" 
                  className={`hover:text-blue-200 transition-colors ${
                    isActive('/dashboard') ? 'text-blue-200 font-semibold' : ''
                  }`}
                >
                  Dashboard
                </Link>
                <span className="text-blue-200">Welcome, {user?.name}!</span>
                <button 
                  onClick={handleLogout}
                  className="bg-blue-700 hover:bg-blue-900 px-4 py-2 rounded-md transition-colors"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header