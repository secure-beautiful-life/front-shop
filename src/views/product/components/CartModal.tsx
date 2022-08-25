import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { usePostAddCartMutation } from '../../../api/cart/cart.query'
import { selectProduct } from '../../../api/product/product.query'

import AppButton from '../../../core/components/AppButton'
import AppCounter from '../../../core/components/AppCounter'
import SimpleModal from '../../../core/components/modal/SimpleModal'

import { useAppSelector } from '../../../core/hooks/redux'
import useCounter from '../../../core/hooks/useCounter'
import { useModal } from '../../../core/hooks/useModal'
import { getBgColor, getColor } from '../../../designs/util/atom'
import { getFlex } from '../../../designs/util/display'
import { sliceLetter } from '../../../designs/util/helpder'

export default function CartModal({ trigger }: { trigger: any }) {
  const navigate = useNavigate()

  const productId = window.location.pathname.slice(window.location.pathname.lastIndexOf('/') + 1)
  const productApi = useAppSelector(selectProduct)
  const product: any = productApi[`getProductDetail({"id":${productId}})`]?.data

  const { cnt, setCnt } = useCounter(1)
  const { isModal, setIsModal } = useModal()

  const [addCart, { isLoading, error }] = usePostAddCartMutation()

  const onAddCart = () => {
    const values = {
      productId: Number(productId),
      count: cnt,
    }
    addCart(values)
      .unwrap()
      .then(() => {
        window.alert('장바구니에 상품이 추가되었습니다.')
        trigger(false)
      })
      .catch((err) => {
        if (err.status === 401) setIsModal(true)
      })
  }

  return (
    <>
      {
        <SimpleModal
          isModal={isModal}
          icon={'error'}
          content="로그인을 해주세요."
          btnText="로그인 하러가기"
          trigger={setIsModal}
          btnTrigger={() => {
            navigate('/login')
            trigger(false)
          }}
        />
      }
      <Wrap>
        <ProductWrap>
          <strong>{sliceLetter(product?.name, 25)}</strong>
          <div>
            <AppCounter cnt={cnt} setCnt={setCnt} />
            <strong>{product?.price.toLocaleString()}원</strong>
          </div>
        </ProductWrap>
        <PriceWrap>
          <span>{cnt}개 상품 금액</span>
          <strong>{(product?.price * cnt).toLocaleString()}원</strong>
        </PriceWrap>
        <BtnWrap>
          {/* <AppButton
            content="바로구매"
            onClick={() => {
              navigate('/cart')
            }}
          /> */}
          <AppButton content="장바구니" onClick={onAddCart} />
        </BtnWrap>
      </Wrap>
    </>
  )
}

export const Wrap = styled.div`
  ${getFlex({ dir: 'column', js: 'space-between', ai: 'flex-start' })}
  width: 100%;
  height: 100%;
`

export const ProductWrap = styled.div`
  width: 100%;
  height: 6rem;
  padding: 1rem;
  ${getBgColor('GREY_1')}
  strong {
    font-size: 1.1rem;
  }
  & > div {
    margin-top: 0.5rem;
    ${getFlex({ js: 'space-between' })}
  }
`

export const BtnWrap = styled.div`
  ${getFlex()}
  width: 100%;
  gap: 1rem;
  button {
    border-radius: 2rem;
    width: 100%;
    &:first-child {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  }
`

export const PriceWrap = styled.div`
  width: 100%;
  ${getFlex({ js: 'space-between' })}
  span {
    ${getColor('GREY_4')}
    font-size: 0.8rem;
  }
  strong {
    font-size: 1.5rem;
  }
`
