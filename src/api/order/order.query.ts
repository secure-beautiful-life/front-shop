import { apiSlice } from '../../App.apiSlice'
import * as I from './order.interface'

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getOrderCart: build.query<any, void>({
      query: () => ({
        url: `/orders/me?offset=0&limit=20`,
      }),
      providesTags: ['order'],
    }),

    postOrder: build.mutation<any, I.Req_PostOrder>({
      query: (params) => ({
        url: `/orders/me`,
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['order'],
    }),
  }),
})

export const { usePostOrderMutation, useGetOrderCartQuery } = orderApi
