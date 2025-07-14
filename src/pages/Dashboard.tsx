import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'
import { githubAPI } from '../services/api'

// GitHub API 응답 타입 정의
interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  name: string | null
  bio: string | null
  public_repos: number
  followers: number
  following: number
}

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
}

const Dashboard = () => {
  const { user, isAuthenticated } = useAuthStore()
  const [githubUsername, setGithubUsername] = useState('')
  const [githubUser, setGithubUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  const fetchGitHubData = async () => {
    if (!githubUsername.trim()) return

    setLoading(true)
    setError('')
    
    try {
      const userData = await githubAPI.getUser(githubUsername)
      setGithubUser(userData)
      
      const reposData = await githubAPI.getUserRepos(githubUsername)
      setRepos(reposData)
    } catch (err) {
      const error = err as Error
      setError(error.message || 'Failed to fetch GitHub data')
      setGithubUser(null)
      setRepos([])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetchGitHubData()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome to your Dashboard, {user?.name}!
          </h1>
          <p className="text-gray-600">
            Connect your GitHub account to see your repositories and profile information.
          </p>
        </div>

        {/* GitHub Username Input */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Connect GitHub Account</h2>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="text"
              value={githubUsername}
              onChange={(e) => setGithubUsername(e.target.value)}
              placeholder="Enter GitHub username"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !githubUsername.trim()}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Loading...' : 'Fetch Data'}
            </button>
          </form>
          {error && (
            <p className="mt-2 text-red-600 text-sm">{error}</p>
          )}
        </div>

        {/* GitHub Profile */}
        {githubUser && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">GitHub Profile</h2>
            <div className="flex items-start gap-6">
              <img 
                src={githubUser.avatar_url} 
                alt={githubUser.login}
                className="w-24 h-24 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{githubUser.name || githubUser.login}</h3>
                {githubUser.bio && (
                  <p className="text-gray-600 mt-1">{githubUser.bio}</p>
                )}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <div className="text-2xl font-bold text-blue-600">{githubUser.public_repos}</div>
                    <div className="text-sm text-gray-600">Repositories</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <div className="text-2xl font-bold text-green-600">{githubUser.followers}</div>
                    <div className="text-sm text-gray-600">Followers</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <div className="text-2xl font-bold text-purple-600">{githubUser.following}</div>
                    <div className="text-sm text-gray-600">Following</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Repositories */}
        {repos.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Repositories</h2>
            <div className="space-y-4">
              {repos.map((repo) => (
                <div key={repo.id} className="border-b last:border-0 pb-4 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-blue-600 hover:text-blue-800">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                          {repo.name}
                        </a>
                      </h3>
                      {repo.description && (
                        <p className="text-gray-600 text-sm mt-1">{repo.description}</p>
                      )}
                      <div className="flex gap-4 mt-2 text-sm text-gray-500">
                        {repo.language && (
                          <span className="flex items-center gap-1">
                            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                            {repo.language}
                          </span>
                        )}
                        <span>⭐ {repo.stargazers_count}</span>
                        <span>🍴 {repo.forks_count}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard