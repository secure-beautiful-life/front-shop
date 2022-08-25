import styled from 'styled-components'
import { getBgColor } from './designs/util/atom'
import { getFlex, getMaxMediaScreen } from './designs/util/display'

interface I_AppInner {
  isDimmed: boolean
}
export const AppInner = styled.main<I_AppInner>`
  ${getFlex({ dir: 'column' })}
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: 0 1.8rem;
  margin: 0 auto;
  ${getMaxMediaScreen({ maxWidth: '528px' })}
  box-shadow: 0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12);
  ${({ isDimmed }) =>
    isDimmed &&
    `
    height: 100vh;
    overflow-y:hidden;
  `}
`

export const Dimmed = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  ${getBgColor('GREY_2')}
  opacity: 50%;
  z-index: 10;
`
