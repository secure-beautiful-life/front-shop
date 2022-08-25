export interface Req_Review {
  productId: number
}

export interface Res_Review {
  totalPages: number
  totalElements: number
  number: number
  sort: {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  size: number
  content: [
    {
      reviewId: number
      content: string
      rate: number
    }
  ]
  pageable: {
    sort: {
      empty: boolean
      sorted: boolean
      unsorted: boolean
    }
    offset: number
    pageNumber: number
    pageSize: number
    paged: boolean
    unpaged: boolean
  }
  numberOfElements: number
  first: boolean
  last: boolean
  empty: boolean
}

export interface Res_PostReview {}

export interface Req_PostReview {
  productId: number
  content: string
  images: Array<string> | null
  rate: number
}

export interface Req_DeleteReview {
  reviewId: number
}
