import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { defaultBaseQuery } from './api'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: defaultBaseQuery(),
  endpoints: (builder) => ({}),
  tagTypes: ['user', 'cart', 'order', 'product', 'like', 'review', 'fitting'],
})
