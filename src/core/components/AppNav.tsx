import styled from 'styled-components'
import { FiHome, FiSearch, FiTag, FiUser, FiHeart } from 'react-icons/fi'
import { getFlex, getMaxMediaScreen } from '../../designs/util/display'
import { useNavigate } from 'react-router-dom'
import { startTransition, useEffect, useState } from 'react'
import { getCurrentNav } from '../util'
import { getBgColor, getColor } from '../../designs/util/atom'
import AppButton from './AppButton'
import ModalSlideUp from './modal/ModalSlideUp'
import { useModal } from '../hooks/useModal'
import CartModal from '../../views/product/components/CartModal'
import { selectCartList } from '../../api/cart/cart.query'
import { useAppSelector } from '../hooks/redux'
import { usePostOrderMutation } from '../../api/order/order.query'
import { selectUserInfo } from '../../api/auth/auth.query'

export default function AppNav() {
  const [current, setCurrent] = useState(getCurrentNav())
  const { isModal, setIsModal } = useModal()

  const [orderCartList] = usePostOrderMutation()

  const getColor = (name: string) => (current === name ? 'black' : 'lightgrey')

  const navigate = useNavigate()
  const goTo = (location: string, name: string) => () =>
    startTransition(() => {
      navigate(location)
      setCurrent(name)
    })

  useEffect(() => {
    setCurrent(getCurrentNav())
  }, [navigate])

  const productList: any = useAppSelector(selectCartList)
  const userInfo: any = useAppSelector(selectUserInfo)

  const onOrder = () => {
    const config = {
      data: productList.products,
      address: userInfo.address,
    }
    orderCartList(config).then(() => {
      window.alert('상품 주문이 완료되었습니다.')
      navigate('/')
    })
  }

  return (
    <>
      {current !== 'product' && (
        <NavWrap>
          <IconWrap onClick={goTo('/', 'home')}>
            <FiHome stroke={getColor('home')} />
            <span style={{ color: getColor('home') }}>홈</span>
          </IconWrap>
          <IconWrap onClick={goTo('/cart', 'brand')}>
            <FiTag color={getColor('brand')} />
            <span style={{ color: getColor('brand') }}>장바구니</span>
          </IconWrap>
          <IconWrap onClick={goTo('/wish', 'wish')}>
            <FiHeart color={getColor('wish')} />
            <span style={{ color: getColor('wish') }}>찜</span>
          </IconWrap>
          <IconWrap onClick={goTo('/order-history', 'store')}>
            <FiSearch color={getColor('store')} />
            <span style={{ color: getColor('store') }}>주문내역</span>
          </IconWrap>
          <IconWrap onClick={goTo('/user', 'user')}>
            <FiUser color={getColor('user')} />
            <span style={{ color: getColor('user') }}>마이페이지</span>
          </IconWrap>
          <Box />
        </NavWrap>
      )}
      {current === 'product' && (
        <NavWrap>
          {isModal && (
            <ModalSlideUp children={<CartModal trigger={setIsModal} />} isModal={isModal} trigger={setIsModal} />
          )}
          <OrderBtn onClick={() => setIsModal(true)}>구매하기</OrderBtn>
          <Box />
        </NavWrap>
      )}
      {current === 'cart' && (
        <NavWrap>
          <OrderBtn onClick={() => navigate('/order')}>구매하기</OrderBtn>
          <Box />
        </NavWrap>
      )}
      {current === 'order' && (
        <NavWrap>
          <OrderBtn onClick={onOrder}>결제하기</OrderBtn>
          <Box />
        </NavWrap>
      )}
      {current === 'auth' && (
        <NavWrap>
          <AppButton onClick={() => navigate('/')} radius="0.5rem" content="로그인 전에 둘러보기" />
          <Box />
        </NavWrap>
      )}
    </>
  )
}

const NavWrap = styled.nav`
  ${getFlex({ ai: 'flex-start', js: 'space-between' })}
  width: 100vw;
  height: 6rem;
  position: fixed;
  bottom: 0;
  gap: 1rem;
  padding: 0.8rem 2rem 0;
  background-color: #ffffff;
  box-shadow: 0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12);
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  ${getMaxMediaScreen({ maxWidth: '528px' })}
  button {
    cursor: pointer;
  }
`

const IconWrap = styled.div`
  ${getFlex({ dir: 'column' })}
  span {
    margin-top: 0.4rem;
    font-size: 0.6rem;
    text-decoration: none;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &:hover {
    cursor: pointer;
  }
`

const Box = styled.div`
  position: absolute;
  right: 50%;
  bottom: 0.8rem;
  transform: translateX(50%);
  width: 8rem;
  height: 0.2rem;
  background-color: black;
  border-radius: 2rem;
`

const OrderBtn = styled.button`
  width: 100%;
  height: 2.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  letter-spacing: 0.08rem;
  ${getBgColor('BLACK')}
  ${getColor('WHITE')}
`

export const Likebox = styled.div`
  ${getFlex({ dir: 'column' })}
  span {
    margin-top: 0.3rem;
  }
`
