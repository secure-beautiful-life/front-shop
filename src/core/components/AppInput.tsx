import { InputHTMLAttributes, useState } from 'react'
import styled from 'styled-components'
import { getTypo } from '../../designs/util/atom'
import { getFlex } from '../../designs/util/display'

interface Props {
  placeHolder: string
  onSetValue: (e: any) => void
  value: string
  label?: string
  errorMessage?: string
}

export default function AppInput(props: Props & InputHTMLAttributes<HTMLInputElement>) {
  const [isBlur, setIsBlur] = useState(false)

  return (
    <Wrap>
      {props.label && <label htmlFor={props.value}>{props.label}</label>}
      <Input
        type={props.type}
        id={props.label}
        value={props.value}
        onChange={props.onSetValue}
        placeholder={props.placeHolder}
        onBlur={() => setIsBlur(true)}
        onFocus={() => setIsBlur(false)}
      />
      {isBlur && props.errorMessage && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
    </Wrap>
  )
}

const Wrap = styled.div`
  ${getFlex({ dir: 'column', js: 'center', ai: 'flex-start' })}
  width: 100%;
  label {
    padding-left: 0.5rem;
    margin-bottom: 0.4rem;
    ${getTypo({ fontSize: '0.65rem', fontWeight: 500 })}
  }
`

const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 1rem;
  padding-left: 1rem;
  margin-bottom: 0.6rem;
  background-color: #f4f4f4;
  border: none;
  &:last-child {
    margin-bottom: 0;
  }
  &:focus {
    outline: none;
  }
`

const ErrorMessage = styled.p`
  color: red;
  padding-left: 0.5rem;
`
