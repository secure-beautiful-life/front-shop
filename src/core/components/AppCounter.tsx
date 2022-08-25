import styled from 'styled-components'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { getFlex } from '../../designs/util/display'
export interface AppCounter_Props {
  setCnt: any
  cnt: number
  onPlus?: any
  onMinus?: any
}

export default function AppCounter({ setCnt, cnt, onMinus, onPlus }: AppCounter_Props) {
  return (
    <Wrap>
      <FaMinus
        onClick={() => {
          setCnt(cnt > 1 ? cnt - 1 : cnt)
          if (onMinus) onMinus()
        }}
      />
      <span>{cnt}</span>
      <FaPlus
        onClick={() => {
          setCnt(cnt + 1)
          if (onPlus) onPlus()
        }}
      />
    </Wrap>
  )
}

export const Wrap = styled.div`
  margin-top: 0.8rem;
  ${getFlex()}
  gap: 0.6rem;
  svg {
    padding: 0.5rem;
    width: 1.8rem;
    height: 1.8rem;
    background-color: white;
    border-radius: 1rem;
    &:hover {
      cursor: pointer;
    }
  }
  span {
    ${getFlex()}
    background-color: white;
    width: 2.2rem;
    height: 1.8rem;
    font-size: 1.2rem;
    border-radius: 0.6rem;
  }
`
