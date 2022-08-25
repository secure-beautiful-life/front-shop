import styled from 'styled-components'
import { getColor, getTypo } from '../../../designs/util/atom'
import { getFlex, setMediaScreen } from '../../../designs/util/display'

export const Wrap = styled.div`
  width: 100%;
  ${getFlex({ dir: 'column' })}
`

export const HeaderWrap = styled.ul`
  width: 100%;
  ${getFlex({ js: 'space-between' })}
`

export const Header = styled.li`
  cursor: pointer;
  height: 2.8rem;
  ${getFlex()}
  ${getTypo({ fontSize: '0.9rem', fontWeight: 600 })}
  ${getColor('GREY_2')}
  &[data-current=true] {
    ${getColor('BLACK')}
  }
`

export const CellWrap = styled.ul`
  width: 100%;
  ${getFlex({ js: 'flex-start' })}
  flex-wrap: wrap;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 1rem;
`

export const Cell = styled.li`
  cursor: pointer;
  ${getFlex({ js: 'flex-start' })}
  width: calc((100vw - 3.7rem) / 3);
  height: 2rem;
  ${setMediaScreen('width:9.6rem')}
  ${getTypo({ fontSize: '0.8rem', fontWeight: 600 })}
  ${getColor('GREY_2')}
  &[data-current=true] {
    ${getColor('BLACK')}
  }
`
