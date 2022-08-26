import { useEffect, useState } from 'react'
import { CartProductList } from '../../api/cart/cart.interface'
import { useGetCartListQuery, useUpdateCartListMutation } from '../../api/cart/cart.query'
import { useLazyGetProductDetailQuery } from '../../api/product/product.query'
import AppHeader from '../../core/components/AppHeader'
import ProductEmpty from '../../core/components/empty/ProductEmpty'
import NoLogin from '../../core/components/NoLogin'
import { getToken } from '../../core/util/user'
import * as UI from './Cart.styled'
import Loading from './ProductCard/Loading'
import ProductCard from './ProductCard/ProductCard'

export default function Cart() {
  const { data, isLoading, isError, refetch } = useGetCartListQuery()

  return (
    <>
      <AppHeader title="장바구니" isBack />
      {isLoading && <Loading />}
      {/* {!isError && !isLoading && data && productList.length > 0 && (
        <UI.Wrap empty={isLoading}>
          {productList.map((product: CartProductList) => (
            <ProductCard
              key={product.cartDetailId}
              initCnt={product.count}
              price={product.price}
              brandName={product.brand_name}
              productName={product.name}
              imgUrl={product.profile_image_url}
              productId={product.productId}
              cart_id={product.cartDetailId}
              refetchList={refetch}
            />
          ))}
        </UI.Wrap>
      )} */}
      {!isError && !isLoading && data && data?.content.length === 0 && (
        <UI.EmptyWrap>
          <ProductEmpty />
        </UI.EmptyWrap>
      )}
      {isError && <NoLogin />}
    </>
  )
}
