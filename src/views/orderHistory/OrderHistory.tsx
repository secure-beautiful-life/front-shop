import { startTransition } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetOrderCartQuery } from '../../api/order/order.query'
import { setReviewInfo } from '../../App.slice'
import AppHeader from '../../core/components/AppHeader'
import ProductEmpty from '../../core/components/empty/ProductEmpty'
import NoLogin from '../../core/components/NoLogin'
import { useAppDispatch } from '../../core/hooks/redux'
import { sliceLetter } from '../../designs/util/helpder'
import Loading from '../cart/ProductCard/Loading'
import * as UI from './OrderHistory.styled'

export default function OrderHistory() {
  const { data, isLoading, isError } = useGetOrderCartQuery()

  console.log(data)

  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  const goToDetailPage = (product: any) => () => {
    const itemInfo = {
      productId: product.productId,
      img: product.profile_image_url,
      name: product.productName,
    }
    dispatch(setReviewInfo(itemInfo))
    startTransition(() => navigate(`/review/create`))
  }

  return (
    <>
      <AppHeader title="주문 내역" isBack></AppHeader>
      <UI.Wrap>
        {isLoading && <Loading />}
        {!isError && !isLoading && data && data.total_length < 1 && <ProductEmpty />}
        {!isError &&
          !isLoading &&
          data?.content.map((order: any) => (
            <UI.HistoryWrap>
              <strong>{order.orderDate.slice(0, 10)}</strong>
              {order.orderProducts.map((product: any) => (
                <UI.Product>
                  <img src={product.profile_image_url} alt={product.productName} />
                  <div>
                    <p>{sliceLetter(product.productName, 20)}</p>
                    <div>
                      <strong>{product.price.toLocaleString()}원</strong>
                      <span>{product.count}</span>
                    </div>
                  </div>
                  <button onClick={goToDetailPage(product)}>리뷰 작성</button>
                </UI.Product>
              ))}
            </UI.HistoryWrap>
          ))}
        {isError && <NoLogin />}
      </UI.Wrap>
    </>
  )
}
