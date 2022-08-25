import styled from 'styled-components'
import { getFlex, getMaxMediaScreen } from '../../designs/util/display'
import { getColor, getTypo } from '../../designs/util/atom'
import { ReactElement } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

interface Props {
  title: string
  icon?: ReactElement
  isBack?: boolean
}

export default function AppHeader({ title, icon, isBack }: Props) {
  const navigate = useNavigate()
  return (
    <HeaderWrap data-isback={isBack}>
      <div>
        {isBack && (
          <IoIosArrowBack onClick={() => navigate(-1)} size="1rem" style={{ transform: `translate(-10px,3px)` }} />
        )}
        <span>{title}</span>
      </div>
      {icon && icon}
    </HeaderWrap>
  )
}

export const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 3.4rem;
  padding: 1.8rem;
  background-color: #ffffff;
  z-index: 100;
  ${getFlex({ js: 'space-between' })} ${getMaxMediaScreen()} span {
    ${getTypo({ fontSize: '1.22rem', fontWeight: 700 })}
    ${getColor('BLACK')}
  }
  svg {
    width: 1.3rem;
    height: 1.3rem;
    ${getColor('GREY_4')}
    cursor: pointer;
  }

  &[data-isback='true'] {
    & > div {
      span {
        position: absolute;
        right: 50%;
        transform: translateX(50%);
      }
    }
  }
`
