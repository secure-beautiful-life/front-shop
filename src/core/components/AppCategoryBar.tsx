import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { getFlex } from '../../designs/util/display'

type Item = { name: string; to: string; isOn: boolean }

interface Props {
  list: Array<Item>
}

export default function AppCategoryBar({ list }: Props) {
  return (
    <Wrap>
      {list.map((item) => (
        <LinkWrap key={item.name} isOn={item.isOn}>
          <Link to={item.to}>{item.name}</Link>
        </LinkWrap>
      ))}
    </Wrap>
  )
}

const Wrap = styled.div`
  ${getFlex({ js: 'space-between' })}
  width: 100%;
  padding: 0 0.5rem;
  margin-bottom: 1rem;
`

const LinkWrap = styled.div<Pick<Item, 'isOn'>>`
  width: 2.5rem;
  height: 1rem;
  padding-bottom: 1.5rem;
  font-size: 0.8rem;
  text-align: center;
  a {
    color: grey;
    text-decoration: none;
  }
  ${({ isOn }) =>
    isOn &&
    css`
      border-bottom: 2px solid black;
      a {
        color: #000000;
      }
    `}
`
