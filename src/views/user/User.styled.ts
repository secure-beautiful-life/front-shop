import styled from 'styled-components'
import { hideScrollBar } from '../../designs/util/helpder'

export const Wrap = styled.div`
  ${hideScrollBar()}
  padding-top: 3.4rem;
  padding-bottom: 6rem;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`
