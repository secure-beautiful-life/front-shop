import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { getToken } from '../core/util/user'
import { BASE_URL } from './constant'

export const defaultBaseQuery = () =>
  fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    prepareHeaders: (headers, { endpoint }) => {
      if (endpoint === 'requestSignup' || endpoint === 'requestLogin') return headers
      if (getToken('access_token')) headers.set('Authorization', `Bearer ${getToken('access_token')}`)

      return headers
    },
    credentials: 'omit',
  })
