import { TextareaHTMLAttributes } from 'react'
import styled from 'styled-components'
import { getTypo } from '../../designs/util/atom'
import { getFlex } from '../../designs/util/display'

interface Props {
  placeHolder: string
  onSetValue: (e: any) => void
  value: string
  label?: string
}

export default function AppTextArea(props: Props & TextareaHTMLAttributes<HTMLInputElement>) {
  return (
    <Wrap>
      {props.label && <label htmlFor={props.value}>{props.label}</label>}
      <TextArea id={props.value} value={props.value} onChange={props.onSetValue} placeholder={props.placeHolder} />
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 5rem;

  ${getFlex({ dir: 'column', ai: 'flex-start' })}
  label {
    ${getTypo({ fontSize: '1rem', fontWeight: 500 })}
    margin-bottom: 0.5rem;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  height: 5rem;
  background-color: transparent;
  border-radius: 0.5rem;
  resize: none;
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
`
