import { apiSlice } from '../../App.apiSlice'
import * as I from './fitting.interface'

export const fittingApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // 사용 안할 api
    getAllFitting: build.query<any, void>({
      query: () => ({
        url: `/fitting-service/fittings/`,
      }),
      providesTags: ['fitting'],
    }),

    getProductFitting: build.query<Array<I.Res_FittingDetail>, { productId: number }>({
      query: ({ productId }) => ({
        url: `/fitting-service/fittings/filter/${productId}/`,
      }),
      providesTags: ['fitting'],
    }),

    getFittingDetail: build.query<I.Res_FittingDetail, I.Req_FittingDetail>({
      query: ({ id }) => ({
        url: `/fitting-service/fittings/${id}/`,
      }),
      providesTags: ['fitting'],
    }),

    postFitting: build.mutation<I.Res_PostFitting, I.Req_PostFitting>({
      query: (params) => ({
        url: `/fitting-service/fittings/`,
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['fitting'],
    }),

    deleteFitting: build.mutation<any, I.Req_FittingDetail>({
      query: ({ id }) => ({
        url: `/fitting-service/fittings/${id}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['fitting'],
    }),
  }),
})

export const {
  useGetAllFittingQuery,
  usePostFittingMutation,
  useGetProductFittingQuery,
  useGetFittingDetailQuery,
  useDeleteFittingMutation,
} = fittingApi
