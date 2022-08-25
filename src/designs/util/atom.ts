import { css } from 'styled-components'
import { COLOR } from '../assets/token'
import { TYPO } from './constant'
import { FuncCss, Typo } from './interface'

export const getTypo: FuncCss<Typo> = (params = TYPO) => {
  const style = css`
    font-size: ${params.fontSize};
    font-weight: ${params.fontWeight};
  `
  return style
}

export const getInnerPadding: FuncCss<string> = (params = '6rem') => {
  const style = css`
    padding-bottom: ${params};
  `
  return style
}

export const getColor: FuncCss<string> = (params = 'GREY_6') => {
  const style = css`
    color: ${COLOR[params]};
  `
  return style
}

export const getBgColor: FuncCss<string> = (params = 'GREY_6') => {
  const style = css`
    background-color: ${COLOR[params]};
  `
  return style
}
