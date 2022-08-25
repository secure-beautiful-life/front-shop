export interface Req_PostOrder {
  data: Array<{ productId: number; count: number }>
  address: string
}

export interface Order_Product {
  totalPrice: number
  orderProducts: Array<{
    profileUrl: string
    productName: string
    price: number
    count: number
  }>
}

export interface Res_Order {
  data: Array<{ data: Array<Order_Product>; status: string; orderDate: string; address: string }>
}
