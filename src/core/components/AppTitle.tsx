import styled from 'styled-components'
import { getTypo } from '../../designs/util/atom'

interface Props {
  title: string
}

export default function AppTitle(props: Props) {
  return <Title>{props.title}</Title>
}

const Title = styled.h1`
  ${getTypo({ fontSize: '3rem', fontWeight: 700 })}
  height: auto;
`
