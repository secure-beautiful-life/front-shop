import { css } from 'styled-components'

type T_BoxShadow = { [x: string]: string }

const BoxShadow: T_BoxShadow = {
  TYPE_A: 'box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;',
} as const

export const getBoxShadow = (params: keyof typeof BoxShadow) => {
  const style = css`
    ${BoxShadow[params]}
  `
  return style
}
