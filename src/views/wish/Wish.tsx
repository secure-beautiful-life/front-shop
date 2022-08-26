import { startTransition } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetLikeListQuery } from '../../api/product/product.query'
import AppHeader from '../../core/components/AppHeader'
import { ProductCardVertical } from '../../core/components/card/ProductCard'
import ProductEmpty from '../../core/components/empty/ProductEmpty'
import NoLogin from '../../core/components/NoLogin'
import ProductLoading from '../../core/components/ProductLoading'
import { Product } from '../../core/types/product'
import * as UI from './Wish.styled'

export default function Wish() {
  const { data: wishList, isLoading, isError } = useGetLikeListQuery()

  const navigate = useNavigate()
  const goToDetailPage = (id: number) => () => startTransition(() => navigate(`/product/detail/${id}`))

  console.log(wishList)

  return (
    <>
      <AppHeader title="좋아요 누른 상품" isBack />
      <UI.Wrap>
        <UI.ProductWrap>
          {isLoading && <ProductLoading />}
          {isError && <NoLogin />}
          {!isError && !isLoading && wishList.length < 1 && <ProductEmpty />}
          {!isError &&
            !isLoading &&
            wishList.map((product: Product) => (
              <ProductCardVertical
                onClick={goToDetailPage(product.product_id)}
                key={product.product_id}
                product={product}
                categoryId={product.category_id}
              />
            ))}
        </UI.ProductWrap>
      </UI.Wrap>
    </>
  )
}
