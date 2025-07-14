// src/services/api.ts
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  }
})

export const githubAPI = {
  getUser: (username: string) => api.get(`/users/${username}`),
  getUserRepos: (username: string) => api.get(`/users/${username}/repos`),
}