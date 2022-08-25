import { apiSlice } from '../../App.apiSlice'
import { RootState } from '../../App.store'
import * as I from './product.interface'

export const productApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    // getAllProduct: build.query<I.Res_ProductList, I.Req_ProductList>({
    //   query: ({ page, size = 20 }) => ({
    //     url: `/product-service/products?page=${page}&size=${size}`,
    //   }),
    // }),

    // ! 카테고리 불러오기
    getCategory: build.query<any, void>({
      query: () => ({
        url: '/categories',
      }),
    }),

    // ! 카테고리에 따라 상품 불러오기
    getProduct: build.query<any, I.Req_ProductList>({
      query: ({ offset = 0, limit = 10, category_id }) => ({
        url: `/products?category_id=${category_id}&offset=${offset}&limit=${limit}`,
      }),
      providesTags: ['product'],
    }),

    // ! 상품 검색해서 불러오기
    productSearch: build.query<any, I.Req_ProductList_Search>({
      query: ({ sort = 'idAsc', name }) => ({
        url: `/product-service/products/search?sort=${sort}&name=${name}`,
      }),
      transformResponse: (res: any) => res.data,
    }),

    // ! 검색 시 글자 자동완성
    productAutoComplete: build.query<I.Res_ProductAutoComplete, I.Req_ProductList_Search>({
      query: ({ name }) => ({
        url: `/product-service/products/search/autocomplete?name=${name}`,
      }),
      transformResponse: (res: any) => res.data,
    }),

    // ! product detail 가져오기
    getProductDetail: build.query<any, I.Req_Product>({
      query: ({ product_id }) => ({
        url: `products/${product_id}`,
      }),
    }),

    // ! BRAND : 상품 등록
    postProduct: build.mutation<I.Res_Post_Product, I.Req_Post_Product>({
      query: (params) => ({
        url: `/product-service/products`,
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['product'],
    }),

    postLike: build.mutation<any, I.Req_Post_Wish>({
      query: (params) => ({
        url: `/product-service/wishs`,
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['product', 'like'],
    }),

    deleteLike: build.mutation<any, I.Req_Post_Wish>({
      query: (params) => ({
        url: `/product-service/wishs`,
        method: 'DELETE',
        body: params,
      }),
      invalidatesTags: ['product', 'like'],
    }),

    getLikeList: build.query<any, void>({
      query: () => ({
        url: '/product-service/wishs',
      }),
      transformResponse: (res: any) => res.content,
      providesTags: ['like'],
    }),
  }),
})

export const selectProduct = (state: RootState) => state.api.queries
export const selectCategory = (state: RootState) => state.api.queries

export const {
  // useGetAllProductQuery,
  useLazyProductSearchQuery,
  useLazyProductAutoCompleteQuery,
  useGetCategoryQuery,
  useGetProductQuery,
  useLazyGetProductQuery,
  useGetProductDetailQuery,
  usePostLikeMutation,
  useDeleteLikeMutation,
  useGetLikeListQuery,
  usePostProductMutation,
} = productApi
