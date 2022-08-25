import styled from 'styled-components'
import { getTypo } from '../../../designs/util/atom'
import { getFlex } from '../../../designs/util/display'

export const VerticalWrap = styled.div`
  position: relative;
  ${getFlex({ dir: 'column', js: 'flex-start', ai: 'flex-start' })}
  width: 9rem;
  height: 16rem;
  background: #ffffff;

  @media screen and (max-width: 530px) {
    width: 40vw;
  }

  img {
    width: inherit;
    height: 10rem;
    margin-bottom: 0.7rem;
    object-fit: cover;
  }
  strong {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }
  p {
    ${getTypo({ fontSize: '0.75rem' })}
    margin-bottom: 0.5rem;
  }
  span {
    ${getTypo({ fontSize: '0.9rem', fontWeight: 700 })}
  }
  &:hover {
    cursor: pointer;
  }
`

export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`

export const LikeBtn = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 1rem;
  svg {
    z-index: 10;
  }
`

export const HorizontalWrap = styled.div`
  width: 100%;
  height: 5rem;
  background: #ffffff;
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  border-radius: 6rem;
`
