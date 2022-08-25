import styled from 'styled-components'
import { getBgColor, getColor, getTypo } from '../../designs/util/atom'
import { getFlex } from '../../designs/util/display'
import { hideScrollBar } from '../../designs/util/helpder'

export const Wrap = styled.div`
  padding-top: 5rem;
  padding-bottom: 7.5rem;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  ${hideScrollBar()}
  button {
    margin-top: 2rem;
  }
`

export const FormWrap = styled.form`
  width: 100%;
  ${getFlex({ dir: 'column', js: 'flex-start', ai: 'center' })}
  gap: 1rem;
`

export const FileSelectGroup = styled.div`
  ${getFlex({ dir: 'column', js: 'flex-start', ai: 'flex-start' })}
  gap: 1.5rem;
  margin: 1.5rem 0;
`

export const FileSelectWrap = styled.div`
  strong {
    ${getTypo({ fontSize: '1rem', fontWeight: 500 })}
    display: block;
    margin-bottom: 0.5rem;
  }
`

export const FileSelectBox = styled.div`
  cursor: pointer;
  ${getFlex()}
  width: 4rem;
  height: 4rem;
  font-size: 18px;
  padding: 0 10px;
  border-radius: 1.1rem;
  ${getBgColor('GREY_1')}

  label {
    display: inline-block;
    ${getFlex()}
    width: 4rem;
    height: 4rem;
    ${getColor('WHITE')}
    ${getTypo({ fontSize: '2rem', fontWeight: 500 })}
    cursor: pointer;
  }
  input {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`

export const TextAreaGroup = styled.div`
  ${getFlex({ dir: 'column', js: 'flex-start', ai: 'flex-start' })}
  gap: 1.5rem;
  margin: 1.5rem 0;
`

export const Select = styled.select`
  width: 50%;
  height: 2.5rem;
  border-radius: 1rem;
  border: none;
  background-color: #f4f4f4;
  padding: 0 1rem;
  margin-bottom: 1rem;
  &:focus {
    outline: none;
  }
`
