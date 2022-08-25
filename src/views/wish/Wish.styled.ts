import styled from 'styled-components'
import { getInnerPadding } from '../../designs/util/atom'
import { getFlex } from '../../designs/util/display'
import { hideScrollBar } from '../../designs/util/helpder'

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  ${getInnerPadding()}
`

export const ProductWrap = styled.div`
  ${hideScrollBar()}
  ${getFlex({ js: 'flex-start', ai: 'flex-start' })}
  flex-wrap:wrap;
  width: auto;
  height: 70vh;
  overflow-y: scroll;
  gap: 1rem;
`
