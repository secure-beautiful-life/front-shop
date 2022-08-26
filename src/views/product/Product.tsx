import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'

import { useCheckIsUserQuery } from '../../api/auth/auth.query'
import { useGetAllFittingQuery, usePostFittingMutation } from '../../api/fitting/fitting.query'
import { useGetProductDetailQuery } from '../../api/product/product.query'
import { useGetReviewQuery } from '../../api/review/review.query'
import AppButton from '../../core/components/AppButton'
import AppHeader from '../../core/components/AppHeader'
import SimpleModal from '../../core/components/modal/SimpleModal'
import { useModal } from '../../core/hooks/useModal'
import animationData from '../../designs/assets/lottineLoading.json'
import { sliceLetter } from '../../designs/util/helpder'
import { ModalImg } from '../fitting/Fitting.styled'
import * as UI from './Product.styled'
import ReviewCard from './components/ReviewCard'

export default function Product() {
  const [triggerFitting, setTriggerFitting] = useState(false)
  const [fittingImg, setFittingImg] = useState('')
  const { isModal, setIsModal } = useModal()
  const [modalProps, setModalProps] = useState({ content: '', btn: '', trigger: () => {} })

  const params = useParams()
  const navigate = useNavigate()

  const { data: product, isLoading } = useGetProductDetailQuery({ product_id: Number(params.id) })
  const { data: reviewList } = useGetReviewQuery({ product_id: Number(params.id), offset: 0, limit: 10 })
  const { data: userData } = useCheckIsUserQuery()
  const { data } = useGetAllFittingQuery()

  const [postFitting, { isLoading: fittingLoading, isSuccess, isError }] = usePostFittingMutation()

  const onPostFitting = () => {
    const fittingParams: any = {
      desc: 'test',
      productId: Number(params.id),
      clothUrl: product?.profile_image_url,
      profile_image_url: userData?.profile_image_url,
    }
    if (!fittingParams.profile_image_url) {
      setModalProps({ content: '로그인을 해주세요', btn: '로그인 하러가기', trigger: () => navigate('/login') })
      setIsModal(true)
      return
    }
    setTriggerFitting(true)
    setIsModal(true)
    postFitting(fittingParams)
      .unwrap()
      .then((res) => {
        setFittingImg(res.image)
      })
      .catch((er) => console.log(er))
  }

  return (
    <>
      {triggerFitting ? (
        <SimpleModal
          isModal={isModal}
          content={fittingLoading ? <FittingLoading /> : <FittingModal image={fittingImg} />}
          btnText={'닫기'}
          trigger={() => {
            setIsModal(false)
            setTriggerFitting(false)
          }}
          btnTrigger={() => setIsModal(false)}
          height={'25rem'}
          isBtn={fittingLoading ? false : true}
        />
      ) : (
        <SimpleModal
          isModal={isModal}
          icon={'error'}
          content={modalProps.content}
          btnText={modalProps.btn}
          trigger={setIsModal}
          btnTrigger={modalProps.trigger}
        />
      )}
      <AppHeader isBack title={sliceLetter(product?.name, 15) || ''} />
      <UI.Wrap>
        <UI.TopImg src={product?.profile_image_url} />
        {/* <UI.ShadowImg /> */}
        <UI.TitleBar>
          <strong>{product?.brand_name}</strong>
        </UI.TitleBar>
        <UI.EssentialInfo>
          <p>{product?.name}</p>
          <span>{Number(product?.price).toLocaleString()}원</span>
        </UI.EssentialInfo>
        <AppButton
          content="💄 화장해보기"
          onClick={onPostFitting}
          background="white"
          color="black"
          radius="0.5rem"
          style={{ marginTop: '1.2rem', border: '1px solid black' }}
        />
        <AppButton
          content="🙌 다른 사람 피팅 사진 둘러보기 🙌"
          onClick={() => navigate(`/product/fitting/${params.id}`)}
          background="white"
          color="black"
          radius="0.5rem"
          style={{ marginTop: '1.2rem', border: '1px solid black' }}
        />
        <UI.FittingHelper>
          내가 등록한 프로필 사진 위에 옷이 피팅됩니다. <br />
          혹시 등록하지 않았다면 <a href="/user">마이페이지</a>에서 사진을 추가해주세요.
        </UI.FittingHelper>
        <UI.ReviewSection onClick={() => navigate(`/product/review/${params.id}`)}>
          {reviewList?.totalElements !== 0 && <strong>리뷰 {reviewList?.totalElements}개</strong>}
          <UI.ReviewList>
            {reviewList?.content.map((item: any) => (
              <ReviewCard item={item} key={item.id} />
            ))}
          </UI.ReviewList>
        </UI.ReviewSection>
        <UI.ImageWrap>
          {product?.detail_images.map((image: any) => (
            <UI.ItemImg key={image} src={image.image_url} alt={'상품 이미지'} />
          ))}
        </UI.ImageWrap>
      </UI.Wrap>
    </>
  )
}

export function FittingModal({ image }: { image: string }) {
  return <ModalImg src={image} alt="fitting img" />
}

export function FittingLoading() {
  return (
    <UI.FittingLoading>
      <Player autoplay loop src={animationData} style={{ height: '300px', width: '300px' }}></Player>
      <p>피팅 중 입니다</p>
    </UI.FittingLoading>
  )
}
