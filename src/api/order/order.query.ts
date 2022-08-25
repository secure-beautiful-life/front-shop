import { apiSlice } from '../../App.apiSlice'
import * as I from './order.interface'

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getOrderCart: build.query<I.Res_Order, void>({
      query: () => ({
        url: `/order-service/orders`,
      }),
      providesTags: ['order'],
    }),

    postOrder: build.mutation<any, I.Req_PostOrder>({
      query: (params) => ({
        url: `/order-service/orders`,
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['order'],
    }),
  }),
})

export const { usePostOrderMutation, useGetOrderCartQuery } = orderApi
