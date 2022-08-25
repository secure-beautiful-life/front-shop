import { Req_IsUser, Req_Login, Req_Signup, Res_IsUser, Res_Login, Res_Signup } from './auth.interface'
import { setToken } from '../../core/util/user'
import { RootState } from '../../App.store'
import { apiSlice } from '../../App.apiSlice'

export const signupApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    requestSignup: build.mutation<Res_Signup, Req_Signup>({
      query: (params) => ({
        url: `/users`,
        method: 'POST',
        body: params,
      }),
    }),

    requestLogin: build.mutation<Res_Login, Req_Login>({
      query: (params) => ({
        url: `/users/login`,
        method: 'POST',
        body: params,
      }),
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {
        const result = await queryFulfilled
        setToken('access_token', result.data.access_token)
        setToken('refresh_token', result.data.refresh_token)
      },
    }),

    checkIsUser: build.query<Res_IsUser, void>({
      query: () => ({
        url: `/user-service/users/me`,
      }),
      providesTags: ['user'],
    }),

    updateUserInfo: build.mutation<Res_IsUser, Req_IsUser>({
      query: (params) => ({
        url: `/user-service/users`,
        method: 'PUT',
        body: params,
      }),
      invalidatesTags: ['user'],
    }),
  }),
})

export const selectUserInfo = (state: RootState) => state.api.queries['checkIsUser(undefined)']?.data

export const { useRequestSignupMutation, useRequestLoginMutation, useCheckIsUserQuery, useUpdateUserInfoMutation } =
  signupApi
