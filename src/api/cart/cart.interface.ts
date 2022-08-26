export interface Res_AddCart {}

export interface Req_AddCart {
  product_id: number
  amount: number
}

export interface CartProductList {
  cartDetailId: number
  profile_image_url: string
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
  cart_id: number
  body: {
    product_id: number
    amount: number
  }
}
