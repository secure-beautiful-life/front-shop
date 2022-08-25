export interface Product {
  categoryId: number
  productId: number
  profileUrl: string
  name: string
  price: number
  brandName: string
  wish: false
}

export type Product_List = Array<Product>

export type Product_Sort = {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}
