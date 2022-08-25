export interface ReviewInfo {
  productId: number
  img: string
  name: string
}

export interface Initial_State {
  isDimmed: boolean
  reviewInfo: ReviewInfo
}
