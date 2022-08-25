import styled from 'styled-components'
import { getFlex } from '../../designs/util/display'

import { hideScrollBar } from '../../designs/util/helpder'

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 5rem 0 2rem 0;
  overflow-y: scroll;
  ${hideScrollBar()}
  gap: 1rem;
  ~ nav {
    display: none;
  }
`

export const ImgList = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
    object-fit: cover;
  }
`

export const ModalImg = styled.img`
  width: 16rem;
  height: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  object-fit: cover;
`

export const ImgWrap = styled.div`
  position: relative;
  svg {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    cursor: pointer;
  }
`

export const DelModalWrap = styled.div`
  ${getFlex({ dir: 'column', js: 'space-between' })}

  width: 100%;
  height: 100%;
  padding: 3rem 0;
  p {
    font-size: 1.2rem;
  }
`
