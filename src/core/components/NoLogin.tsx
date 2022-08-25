import styled from 'styled-components'
import { getColor, getTypo } from '../../designs/util/atom'
import { getFlex } from '../../designs/util/display'

export default function NoLogin() {
  return (
    <Wrap>
      <img src="https://gram-img.s3.ap-northeast-2.amazonaws.com/nologin.png" alt="please login" />
      <p>로그인을 먼저 해주세요.</p>
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
  ~ nav {
    display: none;
  }
  img {
    width: 18rem;
    height: auto;
    margin-bottom: 3rem;
  }
`
