export interface Res_AddCart {}

export interface Req_AddCart {
  productId: number
  count: number
}

export interface CartProductList {
  cartDetailId: number
  profileUrl: string
  name: string
  price: number
  count: number
  brandName: string
  productId: number
}

export interface Res_CartList {
  cartId: number
  products: Array<CartProductList>
  totalPrice: number
}

export interface Req_UpdateCartList {
  cartDetailId: number
  body: {
    productId: number
    count: number
  }
}
