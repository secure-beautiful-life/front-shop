import styled from 'styled-components'
import { BsFillPersonFill, BsJournalText, BsMegaphone, BsPersonLinesFill, BsSliders } from 'react-icons/bs'
import { getColor } from '../../../designs/util/atom'
import { getFlex } from '../../../designs/util/display'
import { useNavigate } from 'react-router-dom'

export default function NavList() {
  const navigate = useNavigate()
  return (
    <ListWrap>
      <li onClick={() => navigate('/user/profile')}>
        <BsFillPersonFill size="1.4rem" />
        <span>내 프로필 보기</span>
      </li>
      <li>
        <BsMegaphone size="1.4rem" />
        <span>공지사항</span>
      </li>
      <li>
        <BsPersonLinesFill size="1.4rem" />
        <span>개인정보 수집 및 이용</span>
      </li>
      <li>
        <BsJournalText size="1.4rem" />
        <span>서비스 이용 약관</span>
      </li>
      <li>
        <BsSliders size="1.4rem" />
        <span>설정</span>
      </li>
    </ListWrap>
  )
}

const ListWrap = styled.ul`
  width: 100%;
  margin-top: 1rem;

  svg {
    ${getColor('GREY_4')};
    margin-right: 1.1rem;
  }
  li {
    ${getFlex({ js: 'flex-start' })}
    font-size: 1rem;
    height: 4rem;
    cursor: pointer;
  }
`
