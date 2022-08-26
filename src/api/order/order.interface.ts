export interface Req_PostOrder {
  products: [
    {
      id: number
      amount: number
    }
  ]
  address: string
}

export interface Order_Product {
  totalPrice: number
  orderProducts: Array<{
    profile_image_url: string
    productName: string
    price: number
    count: number
  }>
}
