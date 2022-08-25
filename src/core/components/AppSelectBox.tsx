import styled from 'styled-components'
import { getTypo } from '../../designs/util/atom'
import { getFlex } from '../../designs/util/display'

interface Props {
  optionList: Array<string>
  onSetValue: (e: any) => void
  label?: string
}

export default function AppSelectBox({ optionList, onSetValue, label }: Props) {
  return (
    <Wrap>
      {label && <Label htmlFor={`${label}-id`}>{label}</Label>}
      <Select id={`${label}-id`} name="gender" onChange={onSetValue}>
        {optionList.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </Select>
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

const Label = styled.label``

const Select = styled.select`
  width: 100%;
  height: 2.5rem;
  border-radius: 1rem;
  border: none;
  background-color: #f4f4f4;
  padding: 0 1rem;
  &:focus {
    outline: none;
  }
`
