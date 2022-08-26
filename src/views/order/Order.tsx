import { useCheckIsUserQuery } from '../../api/auth/auth.query'
import { CartProductList } from '../../api/cart/cart.interface'
import { useGetCartListQuery } from '../../api/cart/cart.query'
import AppHeader from '../../core/components/AppHeader'
import * as UI from './Order.styled'

export default function Order() {
  const { data, isLoading, isError } = useGetCartListQuery()
  const { data: userData } = useCheckIsUserQuery()

  return (
    <>
      <AppHeader title="결제" isBack />
      <UI.Wrap>
        <UI.OrderInfo>
          <strong>총 {data?.products.length}개의 상품</strong>
          {data?.products.map((product: CartProductList) => (
            <ul>
              <li>
                <UI.BrandTitle>
                  {/* <img src={'https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/default_user.jpeg'} /> */}
                  <strong>{product.brandName}</strong>
                </UI.BrandTitle>
                <UI.Hr />
                <UI.BrandItem>
                  <img src={product.profile_image_url} alt={product.name} />
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.count}개</span>
                  </div>
                  <strong>{(product.price * product.count).toLocaleString()}원</strong>
                </UI.BrandItem>
              </li>
            </ul>
          ))}
        </UI.OrderInfo>
        <UI.PayInfo>
          <UI.UserInfo>
            <strong>{userData?.name}</strong>
            <p>{userData?.phone}</p>
            <p>{userData?.address}</p>
          </UI.UserInfo>
          <div>
            <strong>총 결제 금액</strong>
            <span>{data?.totalPrice.toLocaleString()}원</span>
          </div>
        </UI.PayInfo>
      </UI.Wrap>
    </>
  )
}
