import styled from 'styled-components'
import { getFlex } from '../../designs/util/display'

export const LoginWrap = styled.div`
  width: 100%;
  height: 100vh;
  gap: 1.5rem;
  ${getFlex({ dir: 'column' })}
  transform: translateY(-4rem);
  button {
    margin-top: 0.5rem;
  }
  + nav {
    display: none;
  }
`
