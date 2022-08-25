import { getFlex } from './../../designs/util/display'
import styled from 'styled-components'
import { hideScrollBar } from '../../designs/util/helpder'

export const Wrap = styled.div<{ empty: boolean }>`
  ${getFlex({ dir: 'column', js: 'flex-start', ai: 'flex-start' })}
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  padding: 4rem 0 7rem 0;
  gap: 2rem;
  ${hideScrollBar()}
  div {
    width: 100%;
  }
  ${({ empty }) => empty && `~nav{display:none;}`}
`

export const EmptyWrap = styled.div`
  ~ nav {
    display: none;
  }
`
