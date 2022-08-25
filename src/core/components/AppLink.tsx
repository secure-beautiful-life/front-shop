import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getColor, getTypo } from '../../designs/util/atom'

interface Props {
  href: string
  content: string
}

export default function AppLink({ href, content }: Props) {
  return (
    <Wrap>
      <Link to={href}>{content}</Link>
    </Wrap>
  )
}

export const Wrap = styled.div`
  width: 100%;
  a {
    display: block;
    width: 100%;
    padding-right: 1rem;
    ${getTypo({ fontSize: '0.8rem', fontWeight: 500 })}
    ${getColor('GREY_BROWN')}
    text-align: right;
    &:visited {
      color: inherit;
    }
  }
`
