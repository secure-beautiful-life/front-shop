import { css } from 'styled-components'

export const hideScrollBar = () => {
  const style = css`
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `
  return style
}

export const sliceLetter = (content: any, limit: number) => {
  if (!content) return
  if (content.length > limit) {
    return `${content.slice(0, limit)}...`
  }
  return content
}
