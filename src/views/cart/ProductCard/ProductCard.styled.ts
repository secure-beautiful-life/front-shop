import { getFlex } from '../../../designs/util/display'
import styled from 'styled-components'
import { getBgColor, getColor, getTypo } from '../../../designs/util/atom'
import { hideScrollBar } from '../../../designs/util/helpder'

export const ProductWrap = styled.div`
  ${getFlex({ dir: 'column' })}
  width: 100%;
  button,
  svg {
    cursor: pointer;
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
  font-size: 1rem;
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    margin-right: 0.6rem;
    object-fit: cover;
  }
`

export const BrandItem = styled.div`
  ${getFlex({ js: 'flex-start', ai: 'flex-start' })}
  width: inherit;
  position: relative;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    margin-right: 1rem;
  }
  input {
    margin-right: 0.8rem;
  }
  strong {
    padding-top: 0.5rem;
    font-size: 1rem;
    padding-right: 1rem;
  }
  svg:last-of-type {
    position: absolute;
    right: 0;
  }
`

export const Check = styled.input`
  &[type='checkbox'] {
    display: none;
  }
  &[type='checkbox'] + label {
    display: inline-block;
    width: 25px;
    height: 25px;
    position: relative;
    border-radius: 50%;
    border: 1px solid grey;
    svg {
      display: none;
    }
    margin-right: 0.5rem;
  }
  &:checked + label {
    background-color: beige;
    svg {
      display: block;
      position: absolute;
      left: 50;
      top: 50%;
      transform: translate(-30%, -50%);
    }
  }
`

export const Counter = styled.div`
  margin: 1rem 0;
  ${getFlex({ js: 'flex-start' })}
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  button {
    ${getFlex()}
    font-size: 1.2rem;
    border-radius: 50%;
    border: none;
    width: 1.6rem;
    height: 1.6rem;
    &:hover {
      background-color: blue;
      ${getColor('WHITE')}
    }
  }
  span {
    ${getFlex()}
    border: 1px solid lightgray;
    width: 2.3rem;
    height: 1.8rem;
    border-radius: 0.5rem;
  }
`

export const TotalPrice = styled.div`
  ${getFlex({ js: 'space-between' })}
  &>span {
    ${getTypo({ fontSize: '1rem', fontWeight: 500 })}
    width: 100%;
    text-align: right;
  }
  & > div {
    svg,
    span {
      ${getBgColor('GREY_1')}
    }
  }
`

export const LoadingWrapOuter = styled.div`
  ${getFlex({ dir: 'column', js: 'flex-start', ai: 'flex-start' })}
  gap: 1rem;
  & > div {
    width: 100% !important;
    height: 1.2rem;
  }
  margin-bottom: 3rem;
`

export const LoadingWrap = styled.div`
  ${getFlex({ js: 'flex-start', ai: 'flex-start' })}
`

export const LoadingImg = styled.div`
  width: 5rem !important;
  height: 4rem;
  border-radius: 1rem;
  margin-right: 1rem;
  ${getBgColor('GREY_1')}
`

export const LoadingLine = styled.div`
  height: 1rem;
  margin-top: 0.7rem;
  ${getBgColor('GREY_1')}
`

export const LoadingListWrap = styled.div`
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
  ~ nav {
    display: none;
  }
`
