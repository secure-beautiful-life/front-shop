import { getFlex, getMaxMediaScreen } from '../../designs/util/display'
import styled from 'styled-components'
import { getBgColor, getColor } from '../../designs/util/atom'

export const Wrap = styled.div`
  ${getFlex({ dir: 'column', js: 'flex-start' })}
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  padding: 4.2rem 0 7rem 0;
  div {
    width: 100%;
  }
`

export const OrderInfo = styled.div`
  strong {
    font-size: 1rem;
    width: 20rem;
  }
  ul {
    margin-top: 1rem;
    li:last-of-type {
      margin-bottom: 2rem !important;
    }
  }
  li {
    margin-bottom: 2rem;
    width: 100%;
  }
`
export const Hr = styled.div`
  width: 100%;
  height: 1px;
  ${getBgColor('GREY_1')}
  margin: 0.5rem 0;
`

export const BrandTitle = styled.div`
  ${getFlex({ js: 'flex-start' })}
  width: inherit;
  height: 2rem;
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    margin-right: 0.6rem;
  }
`

export const BrandItem = styled.div`
  ${getFlex({ js: 'flex-start', ai: 'flex-start' })}
  width: inherit;
  position: relative;
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    margin-right: 1rem;
    object-fit: cover;
  }
  input {
    margin-right: 0.8rem;
  }
  strong {
    padding-top: 0.5rem;
    font-size: 1.1rem;
  }
  svg:last-of-type {
    position: absolute;
    right: 0;
  }
  & > div {
    ${getFlex({ dir: 'column', ai: 'flex-start', js: 'flex-start' })}
    gap:0.5rem;
    span {
      font-size: 0.9rem;
    }
  }
  & > strong {
    width: 100%;
    text-align: right;
  }
`

export const UserInfo = styled.div`
  margin-top: 2rem;
  ${getFlex({ dir: 'column', ai: 'flex-start' })}
  gap: 0.5rem;
  strong {
    font-size: 1.5rem;
  }
  p:first-of-type {
    font-size: 1rem;
  }
  p:last-of-type {
    font-size: 1rem;
    ${getColor('GREY_4')}
  }
`

export const PayInfo = styled.div`
  position: fixed;
  bottom: 8rem;
  margin-top: 2rem;
  padding: 0 1.7rem;
  ${getFlex({ dir: 'column' })}
  ${getMaxMediaScreen()};
  ${getFlex({ js: 'space-between' })}
  strong {
    font-size: 1.1rem;
  }
  span {
    font-size: 1rem;
    ${getColor('GREY_4')}
    font-size: 1.5rem;
  }
  div:last-child {
    margin-top: 3rem;
    ${getFlex({ dir: 'row', js: 'space-between' })}
  }
`
