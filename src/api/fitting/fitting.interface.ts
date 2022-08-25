export interface Req_PostFitting {
  productId: number
  clothUrl: string
  profileUrl: string
  desc: string
}

export interface Res_PostFitting {
  userId: string
  productId: number
  image: string
}

export interface Req_FittingDetail {
  id: number
}
export interface Res_FittingDetail {
  id: number
  userId: string
  productId: number
  image: string
  created_at: string
  updated_at: string
}
