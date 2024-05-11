import axios from 'axios'

import { API_URL } from '@configs'

const base = axios.create({
  baseURL: `${API_URL}/api/v1`
})

export default base