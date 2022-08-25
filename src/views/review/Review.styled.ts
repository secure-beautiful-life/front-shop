import styled from 'styled-components'
import { getBgColor } from '../../designs/util/atom'
import { getFlex } from '../../designs/util/display'
import { hideScrollBar } from '../../designs/util/helpder'

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  ${hideScrollBar()}
  ${getFlex({ dir: 'column', js: 'flex-start', ai: 'flex-start' })}
  padding: 5rem 0 3rem 0;
  strong {
    font-size: 1.2rem;
  }
  + nav {
    display: none;
  }
  button {
    margin-top: 1rem;
  }
  gap: 2rem;
`

export const ReviewWrap = styled.div`
  width: 100%;
  position: relative;

  p {
    font-size: 1rem;
    margin-bottom: 0.8rem;
    line-height: 1.5rem;
  }
  strong {
    font-size: 1rem;
  }

  & > svg:first-child {
    position: absolute;
    right: 0;
    cursor: pointer;
  }
`

export const Profile = styled.div`
  ${getFlex({ js: 'flex-start' })}
  margin-bottom: 0.8rem;
  strong {
    margin-right: 0.5rem;
  }
`

export const ImageWrap = styled.div`
  ${getFlex({ js: 'flex-start' })}
  gap: 1rem;
  overflow-y: scroll;
  width: 100%;
  ${hideScrollBar()}
  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }
`

export const WriteWrap = styled.div`
  width: 100%;
  ${getFlex({ dir: 'column', js: 'flex-start', ai: 'flex-start' })}
  gap: 1rem;
  textarea {
    font-size: 0.9rem;
    width: 100%;
    height: 10rem;
    padding: 0.5rem;
  }
  svg {
    cursor: pointer;
  }
  margin-bottom: 1rem;
`

export const Box = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  height: 0.05rem;
  ${getBgColor('GREY_1')}
`
