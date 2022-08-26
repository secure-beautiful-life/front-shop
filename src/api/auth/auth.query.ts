import { Req_IsUser, Req_Login, Req_Signup, Req_UserImg, Res_IsUser, Res_Login, Res_Signup } from './auth.interface'
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
        url: `/users/me`,
      }),
      providesTags: ['user'],
    }),

    updateUserInfo: build.mutation<Res_IsUser, Req_IsUser>({
      query: (params) => ({
        url: `/users/info/me`,
        method: 'PUT',
        body: params,
      }),
      invalidatesTags: ['user'],
    }),

    updateUserImg: build.mutation<any, Req_UserImg>({
      query: (params) => ({
        url: `/users/profile/me`,
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['user'],
    }),

    deleteUserImg: build.mutation<any, void>({
      query: () => ({
        url: `/users/profile/me`,
        method: 'DELETE',
      }),
      invalidatesTags: ['user'],
    }),
  }),
})

export const selectUserInfo = (state: RootState) => state.api.queries['checkIsUser(undefined)']?.data

export const { useRequestSignupMutation, useRequestLoginMutation, useCheckIsUserQuery, useUpdateUserInfoMutation } =
  signupApi
