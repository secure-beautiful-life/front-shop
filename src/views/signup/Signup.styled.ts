import styled from 'styled-components'
import { getFlex } from '../../designs/util/display'
import { hideScrollBar } from '../../designs/util/helpder'

export const Wrap = styled.div`
  ${getFlex({ dir: 'column', js: 'center', ai: 'center' })}
  width: 100%;
  height: 100vh;
  padding: 5rem 0 8rem 0;
  overflow-y: scroll;
  ${hideScrollBar()}

  h1 {
    font-size: 1.4rem;
  }

  + div {
    transform: translateY(-30rem);
  }
  + nav {
    display: none;
  }
  button {
    margin-bottom: 1.5rem;
  }
`

export const FormWrap = styled.div`
  ${getFlex({ dir: 'column', js: 'center', ai: 'flex-start' })}
  width: 100%;
  gap: 1.5rem;
  margin-top: 1rem;
`

export const selectWrap = styled.div`
  ${getFlex({ ai: 'flex-start' })}
  width: 100%;
  gap: 1rem;
  > select {
    width: 50%;
    margin-bottom: 0.5rem;
  }
  input {
    width: 100%;
  }
`

export const ModalContent = styled.div`
  width: 100%;
`
