import Rate from '../../../core/components/Rate'
import { sliceLetter } from '../../../designs/util/helpder'
import * as UI from './ReviewCard.styled'

interface Review {
  images: Array<string>
  reviewerName: string
  content: string
  date: string
  rate: number
}

interface Props {
  item: Review
}

export default function ReviewCard({ item }: Props) {
  const { images, reviewerName, content, date, rate } = item
  return (
    <UI.Wrap>
      <div>
        <UI.WriterInfo>
          <strong>{sliceLetter(reviewerName, 3)}</strong>
          <Rate rate={rate} />
        </UI.WriterInfo>
        <p>{sliceLetter(content, 30)}</p>
      </div>
      {images?.length > 0 && <img src={images[0]} alt="review img" />}
    </UI.Wrap>
  )
}
