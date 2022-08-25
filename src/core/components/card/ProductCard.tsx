import { Product } from '../../types/product'
import * as UI from './ProductCard.styled'
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5'
import { useDeleteLikeMutation, usePostLikeMutation } from '../../../api/product/product.query'
import { getToken } from '../../util/user'
import { useState } from 'react'
import { sliceLetter } from '../../../designs/util/helpder'

export interface Props {
  product: Product
  onClick: () => void
  categoryId: number
  _ref?: any
}

export function ProductCardVertical(props: Props) {
  const { profile_image_url, price, name, brand_name, wish, product_id } = props.product

  const [postLike] = usePostLikeMutation()
  const [deleteLike] = useDeleteLikeMutation()

  const [isLike, setIsLike] = useState<boolean>(wish)

  const onPostLike = (e: any) => {
    e.stopPropagation()
    postLike({ productId: product_id })
      .unwrap()
      .then(() => {
        setIsLike(true)
      })
      .catch(() => {})
  }

  const onDeleteLike = (e: any) => {
    e.stopPropagation()
    deleteLike({ productId: product_id })
      .unwrap()
      .then(() => {
        setIsLike(false)
      })
      .catch(() => {})
  }

  return (
    <UI.VerticalWrap onClick={props.onClick} ref={props._ref}>
      <UI.ImgWrap>
        {getToken('access_token') && (
          <UI.LikeBtn>
            {isLike ? (
              <IoHeartSharp size="1.5rem" fill={'red'} onClick={onDeleteLike} />
            ) : (
              <IoHeartOutline size="1.5rem" stroke={'black'} onClick={onPostLike} />
            )}
          </UI.LikeBtn>
        )}
        <img src={profile_image_url} alt={name} />
      </UI.ImgWrap>
      <strong>{brand_name}</strong>
      <p>{sliceLetter(name, 15)}</p>
      <span>{Number(price).toLocaleString()}원</span>
    </UI.VerticalWrap>
  )
}

export function ProductCardHorizontal() {
  return <UI.HorizontalWrap></UI.HorizontalWrap>
}
