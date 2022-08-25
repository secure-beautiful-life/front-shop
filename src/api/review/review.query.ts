import * as I from './review.interface'
import { apiSlice } from '../../App.apiSlice'

export const reviewApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getReview: build.query<I.Res_Review, I.Req_Review>({
      query: ({ productId }) => ({
        url: `/review-service/reviews?productId=${productId}`,
      }),
      providesTags: ['review'],
    }),

    postReview: build.mutation<any, I.Req_PostReview>({
      query: (params) => ({
        url: `/review-service/reviews`,
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['review'],
    }),

    deleteReview: build.mutation<any, I.Req_DeleteReview>({
      query: ({ reviewId }) => ({
        url: `/review-service/reviews?reviewId=${reviewId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['review'],
    }),
  }),
})

export const { useGetReviewQuery, usePostReviewMutation } = reviewApi
