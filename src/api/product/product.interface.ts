import { Product_List, Product_Sort } from '../../core/types/product'

export interface Req_ProductList {
  category_id?: number
  offset: number
  limit?: number
}

export interface Res_ProductList {
  content: Product_List
  pageable: {
    sort: Product_Sort
    offset: number
    pageNumber: number
    pageSize: number
    paged: boolean
    unpaged: boolean
  }
  last: boolean
  totalPages: number
  totalElements: number
  number: number
  sort: {
    empty: true
    sorted: false
    unsorted: true
  }
  size: number
  first: boolean
  numberOfElements: number
  empty: boolean
}

export type Res_ProductAutoComplete = Array<string>

export interface Req_ProductList_Search {
  sort?: string
  name: string
}

export interface Res_Product {
  profileUrl: string
  name: string
  brandName: string
  price: number
  topDescription: string
  bottomDescription: string
  images: Array<string>
}

export interface Req_Product {
  product_id: number
}

export interface Req_Post_Product {
  categoryId: number
  name: string
  price: number
  stockQuantity: number
  profileUrl: string
  images: Array<string>
}

export interface Res_Post_Product {
  productId: number
}

export interface Req_Post_Wish {
  productId: number
}
