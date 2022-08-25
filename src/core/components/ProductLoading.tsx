import styled from 'styled-components'
import { getBgColor } from '../../designs/util/atom'
import { getFlex } from '../../designs/util/display'
import { hideScrollBar } from '../../designs/util/helpder'

export default function ProductLoading() {
  return (
    <ListWrap>
      <Wrap>
        <Img />
        <Line />
        <Line />
      </Wrap>
      <Wrap>
        <Img />
        <Line />
        <Line />
      </Wrap>
      <Wrap>
        <Img />
        <Line />
        <Line />
      </Wrap>
      <Wrap>
        <Img />
        <Line />
        <Line />
      </Wrap>
      <Wrap>
        <Img />
        <Line />
        <Line />
      </Wrap>
      <Wrap>
        <Img />
        <Line />
        <Line />
      </Wrap>
    </ListWrap>
  )
}

export const ListWrap = styled.div`
  ${hideScrollBar()}
  ${getFlex({ js: 'flex-start', ai: 'flex-start' })}
  flex-wrap:wrap;
  width: auto;
  height: 70vh;
  overflow-y: scroll;
  gap: 1rem;
`

export const Wrap = styled.div`
  ${getFlex({ dir: 'column' })}
  width: 9rem;
  height: 16rem;
  gap: 1rem;
`

export const Img = styled.div`
  width: inherit;
  height: 10rem;
  ${getBgColor('GREY_1')}
`

export const Line = styled.div`
  width: inherit;
  height: 1rem;
  ${getBgColor('GREY_1')}
`
