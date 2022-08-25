import { apiSlice } from '../../App.apiSlice'
import { RootState } from '../../App.store'
import * as I from './cart.interface'

export const cartApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getCartList: build.query<I.Res_CartList, void>({
      query: () => ({
        url: `/cart-service/carts`,
      }),
      providesTags: ['cart'],
    }),

    postAddCart: build.mutation<any, I.Req_AddCart>({
      query: (params) => ({
        url: `/cart-service/carts/detail`,
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['cart'],
    }),

    updateCartList: build.mutation<any, I.Req_UpdateCartList>({
      query: (params) => ({
        url: `/cart-service/carts/detail/${params.cartDetailId}`,
        method: 'PUT',
        body: params.body,
      }),
      invalidatesTags: ['cart'],
    }),

    deleteCartList: build.mutation<any, { cartDetailId: number }>({
      query: (params) => ({
        url: `/cart-service/carts/detail/${params.cartDetailId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cart'],
    }),
  }),
})

export const selectCartList = (state: RootState) => state.api.queries['getCartList(undefined)']?.data

export const { usePostAddCartMutation, useGetCartListQuery, useUpdateCartListMutation, useDeleteCartListMutation } =
  cartApi
