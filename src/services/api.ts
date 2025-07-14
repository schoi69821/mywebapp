import axios from 'axios'

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  }
})

export interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  name: string | null
  company: string | null
  blog: string
  location: string | null
  email: string | null
  bio: string | null
  public_repos: number
  followers: number
  following: number
  created_at: string
}

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  homepage: string | null
}

export const githubAPI = {
  // 사용자 정보 가져오기
  getUser: async (username: string): Promise<GitHubUser> => {
    const response = await githubApi.get<GitHubUser>(`/users/${username}`)
    return response.data
  },

  // 사용자 저장소 목록 가져오기
  getUserRepos: async (username: string, page = 1, perPage = 10): Promise<GitHubRepo[]> => {
    const response = await githubApi.get<GitHubRepo[]>(`/users/${username}/repos`, {
      params: {
        sort: 'updated',
        direction: 'desc',
        per_page: perPage,
        page: page
      }
    })
    return response.data
  },

  // 저장소 검색
  searchRepos: async (query: string, page = 1): Promise<{items: GitHubRepo[], total_count: number}> => {
    const response = await githubApi.get(`/search/repositories`, {
      params: {
        q: query,
        sort: 'stars',
        order: 'desc',
        per_page: 10,
        page: page
      }
    })
    return response.data
  }
}

// 에러 처리 인터셉터
githubApi.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 404) {
      throw new Error('User or repository not found')
    } else if (error.response?.status === 403) {
      throw new Error('API rate limit exceeded. Please try again later.')
    }
    throw error
  }
)