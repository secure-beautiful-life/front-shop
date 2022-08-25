import styled from 'styled-components'
import { getColor, getTypo } from '../../../designs/util/atom'
import { getFlex } from '../../../designs/util/display'

export default function ProductEmpty() {
  return (
    <Wrap>
      <img src="https://gram-img.s3.ap-northeast-2.amazonaws.com/empty.jpg" alt="empty" />
      <p>상품이 없습니다</p>
    </Wrap>
  )
}

const Wrap = styled.div`
  ${getFlex({ dir: 'column' })}
  width: 100%;
  height: 100%;
  transform: translateY(-10%);
  p {
    ${getTypo({ fontSize: '1rem' })}
    ${getColor('BLACK')}
  }
`
