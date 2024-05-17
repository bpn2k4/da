import axios from 'axios'
import queryString from 'query-string'

import { API_URL } from '@configs'

const base = axios.create({
  baseURL: `${API_URL}/api/v1`,
  paramsSerializer: params => queryString.stringify(params),
  headers: {
    'Content-Type': 'application/json',
  },
})

base.interceptors.request.use((config) => {
  // Debug axios call API
  if (config.method == 'get') {
    console.log(
      '[AXIOS]-[SEND]', '\n',
      'Method:', config.method.toUpperCase(), '\n',
      `URL: ${config.baseURL}/${config.url}`, '\n',
      `Params:`, config.params
    )
  }
  if (config.method == 'post' || config.method == 'patch') {
    console.log('[AXIOS]-[SEND]', '\n',
      'Method:', config.method.toUpperCase(), '\n',
      `URL: ${config.baseURL}${config.url}`, '\n',
      `Params:`, config.params, '\n',
      'Body:', config.data
    )
  }
  return config
})

base.interceptors.response.use(
  // Success
  response => {
    const config = response.config
    if (config.method == 'get') {
      console.log(
        '[AXIOS]-[RESPONSE]', '\n',
        'Method:', config.method.toUpperCase(), '\n',
        `URL: ${config.baseURL}${response.config.url}`, '\n',
        `Params:`, config.params, '\n',
        'Response:', response.data, '\n',
      )
    }
    if (config.method == 'post' || config.method == 'patch') {
      console.log(
        '[AXIOS]-[RESPONSE]', '\n',
        'Method:', config.method.toUpperCase(), '\n',
        `URL: ${config.baseURL}${response.config.url}`, '\n',
        'Params:', config.params, '\n',
        'Body:', config.data, '\n',
        'Response:', response.data, '\n',
      )
    }
    if (response.data) return response.data
    return response
  },

  async error => {
    if (!error.response) { }
    if (error.response) {
      return error.response.data
    }
    return Promise.reject(error)
  }
)

export type status = { status: 'success' | 'fail' }

export default base