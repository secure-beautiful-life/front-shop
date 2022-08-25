import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import styled from 'styled-components'

export default function Rate({ rate }: { rate: number }) {
  return (
    <>
      {rate === 1 && (
        <Wrap>
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </Wrap>
      )}
      {rate === 2 && (
        <Wrap>
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </Wrap>
      )}
      {rate === 3 && (
        <Wrap>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </Wrap>
      )}
      {rate === 4 && (
        <Wrap>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </Wrap>
      )}
      {rate === 5 && (
        <Wrap>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </Wrap>
      )}
    </>
  )
}

export const Wrap = styled.div`
  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`
