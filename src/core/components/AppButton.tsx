import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { getBgColor } from '../../designs/util/atom'

interface Props {
  content: string
  onClick: (x: any) => any
  width?: string
  color?: string
  background?: string
  radius?: string
}

export default function AppButton(props: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button disabled={props.disabled} {...props}>
      {props.content}
    </Button>
  )
}

const Button = styled.button<Props>`
  width: ${({ width }) => (width ? width : '100%')};
  height: auto;
  padding: 0.8rem 0;
  ${({ radius }) => radius && `border-radius : ${radius};`}
  color: ${({ color }) => (color ? color : '#ffffff')};
  background-color: ${({ background }) => (background ? background : '#010101')};
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    ${getBgColor('GREY_1')}
    cursor: not-allowed;
  }
`
