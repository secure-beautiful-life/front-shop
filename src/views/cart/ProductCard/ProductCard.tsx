import * as UI from './ProductCard.styled'
import { IoClose, IoCheckmarkSharp } from 'react-icons/io5'
import AppCounter from '../../../core/components/AppCounter'
import useCounter from '../../../core/hooks/useCounter'
import { useDeleteCartListMutation, useUpdateCartListMutation } from '../../../api/cart/cart.query'
import { Req_UpdateCartList } from '../../../api/cart/cart.interface'

export interface ProductCardProps {
  brandName: string
  productName: string
  price: number
  initCnt: number
  imgUrl: string
  productId: number
  cartDetailId: number
  refetchList: () => void
}

export default function ProductCard({
  brandName,
  productName,
  price,
  initCnt,
  imgUrl,
  productId,
  cartDetailId,
  refetchList,
}: ProductCardProps) {
  const { cnt, setCnt } = useCounter(initCnt)

  const [updateCart] = useUpdateCartListMutation()
  const [deleteCart] = useDeleteCartListMutation()

  const onUpdateCart = (value: number) => () => {
    const config: Req_UpdateCartList = {
      cartDetailId,
      body: {
        productId,
        count: cnt + value,
      },
    }
    updateCart(config)
      .unwrap()
      .then(() => {})
      .catch(() => {})
  }

  const onDeleteCart = () => {
    deleteCart({ cartDetailId })
      .unwrap()
      .then(() => refetchList())
      .catch(() => {})
  }

  return (
    <UI.ProductWrap>
      <UI.BrandTitle>
        {/* <img src={'https://gram-img.s3.ap-northeast-2.amazonaws.com/upload-img/default_user.jpeg'} /> */}
        <strong>{brandName}</strong>
      </UI.BrandTitle>
      <UI.Hr />
      <div>
        <UI.BrandItem>
          {/* <UI.Check type={'checkbox'} id="item1" />
          <label htmlFor={'item1'}>
            <IoCheckmarkSharp size={'1rem'} />
          </label> */}
          <img src={imgUrl} alt={productName} />
          <strong>{productName}</strong>
          <IoClose size={'1.2rem'} fill={'#949494'} onClick={onDeleteCart} />
        </UI.BrandItem>
        <UI.TotalPrice>
          <AppCounter cnt={cnt} setCnt={setCnt} onPlus={onUpdateCart(1)} onMinus={onUpdateCart(-1)} />
          <span>{(price * cnt).toLocaleString()}원</span>
        </UI.TotalPrice>
      </div>
    </UI.ProductWrap>
  )
}
