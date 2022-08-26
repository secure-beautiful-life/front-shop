import { IoClose } from 'react-icons/io5'
import { useParams } from 'react-router-dom'
import { useCheckIsUserQuery } from '../../api/auth/auth.query'
import { useGetReviewQuery } from '../../api/review/review.query'
import AppHeader from '../../core/components/AppHeader'
import Rate from '../../core/components/Rate'
import { sliceLetter } from '../../designs/util/helpder'
import * as UI from './Review.styled'

export default function Review() {
  const params = useParams()
  const { data: reviewList } = useGetReviewQuery({ product_id: Number(params.id), offset: 0, limit: 10 })
  const { data: userData } = useCheckIsUserQuery()

  return (
    <>
      <AppHeader isBack title={'상품 리뷰'} />
      <UI.Wrap>
        <strong>리뷰 {reviewList?.totalElements}개</strong>
        {reviewList?.content.map((review: any) => (
          <UI.ReviewWrap>
            {/* {userData?.name === review.name && <IoClose size={20} />} */}
            <UI.Profile>
              <strong>{sliceLetter(review.reviewerName, 6)}</strong>
              <Rate rate={review.rate} />
            </UI.Profile>
            <p>{review.content}</p>
            <UI.ImageWrap>
              {review.images.length > 0 && review.images.map((img: string) => <img src={img} alt="img" />)}
            </UI.ImageWrap>
            <UI.Box />
          </UI.ReviewWrap>
        ))}
      </UI.Wrap>
    </>
  )
}
