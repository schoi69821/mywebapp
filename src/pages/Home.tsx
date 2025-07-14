import { Link } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'

const Home = () => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
            Welcome to MyWebApp
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A modern React application with TypeScript and Tailwind CSS
          </p>
          
          {!isAuthenticated ? (
            <Link 
              to="/login"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
          ) : (
            <Link 
              to="/dashboard"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Go to Dashboard
            </Link>
          )}
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">⚛️</div>
            <h3 className="text-xl font-semibold mb-2">React 19</h3>
            <p className="text-gray-600">
              Built with the latest React version for optimal performance
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
            <p className="text-gray-600">
              Rapid UI development with utility-first CSS framework
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">GitHub Actions</h3>
            <p className="text-gray-600">
              Automated deployment pipeline for continuous delivery
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'React Router', 'Axios'].map((tech) => (
              <span 
                key={tech}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home