import { css } from 'styled-components'
import { BREAK_POINT, FLEX, MEDIA_SCREEN } from './constant'
import { Flex, FuncCss, Max_MediaScreen } from './interface'

export const getFlex: FuncCss<Flex> = (params = FLEX) => {
  const style = css`
    display: flex;
    flex-direction: ${params.dir};
    justify-content: ${params.js ? params.js : 'center'};
    align-items: ${params.ai ? params.ai : 'center'};
  `
  return style
}

export const getMaxMediaScreen: FuncCss<Max_MediaScreen> = (params = MEDIA_SCREEN) => {
  const style = css`
    @media screen and (min-width: ${BREAK_POINT}) {
      max-width: ${params.maxWidth};
      min-width: 375px;
      ${params.maxHeight !== '' && `max-height: ${params.maxHeight}`}
    }
  `
  return style
}

export const getSafeWidth = () => {
  const style = css`
    width: 98%;
    transform: translateX(1%);
  `
  return style
}

export const getScreenCenter = () => {
  const style = css`
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  `
  return style
}

export const setMediaScreen = (option: string) => {
  const style = css`
    @media screen and (min-width: ${BREAK_POINT}) {
      ${option}
    }
  `
  return style
}
