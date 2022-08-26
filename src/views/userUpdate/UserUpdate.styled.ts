import styled from 'styled-components'
import { getTypo } from '../../designs/util/atom'
import { getFlex } from '../../designs/util/display'

export const Wrap = styled.div`
  ${getFlex({ dir: 'column', js: 'flex-start', ai: 'flex-start' })}
  width: 100%;
  height: 100vh;
  padding: 5rem 0 7rem 0;
  gap: 1rem;
  overflow-y: scroll;
  button {
    /* margin-top: calc(100% - 4rem); */
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
  p {
    padding-left: 0.5rem;
    ${getTypo({ fontSize: '0.65rem', fontWeight: 500 })}
  }
`
