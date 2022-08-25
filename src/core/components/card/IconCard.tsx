import styled from 'styled-components'
import { getTypo } from '../../../designs/util/atom'
import { getFlex } from '../../../designs/util/display'

interface Props {
  icon: string
  content: string
}

export default function IconCard(props: Props) {
  return (
    <Wrap>
      <span>{props.icon}</span>
      <p>{props.content}</p>
    </Wrap>
  )
}

const Wrap = styled.div`
  ${getFlex({ js: 'flex-start' })}
  width: 98%;
  height: 4rem;
  padding: 0 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 0.8rem;
  transform: translateX(1%);
  span {
    ${getTypo({ fontSize: '1.2rem' })}
    margin-right: 0.8rem;
  }
  p {
    ${getTypo({ fontSize: '0.85rem', fontWeight: 600 })}
    color:#595959
  }
`
