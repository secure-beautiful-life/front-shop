export interface Product {
  category_id: number
  product_id: number
  profile_image_url: string
  name: string
  price: number
  brand_name: string
  wish: boolean
}

export type Product_List = Array<Product>

export type Product_Sort = {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}
