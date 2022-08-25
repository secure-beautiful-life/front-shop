import styled from 'styled-components'
import { getInnerPadding } from './../../designs/util/atom'
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

export const SearchWrap = styled.div`
  width: 100%;
  ${getFlex()}
`

export const Dropdown = styled.div`
  position: absolute;
  right: 0;
  width: 6rem;
  height: auto;
  transform: translateY(3rem);
  z-index: 20;
`

export const ModalContent = styled.div`
  ${getFlex({ dir: 'column' })}
  width: 100%;
  height: 100%;
  div {
    ${getFlex({ js: 'space-between' })}
    width: 95%;
  }
  button {
    width: 7rem;
    border: none;
    height: 2.6rem;
    border-radius: 0.6rem;
    &:first-child {
    }
    &:hover {
      background-color: skyblue;
      cursor: pointer;
    }
  }
`
