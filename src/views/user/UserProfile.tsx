import styled from 'styled-components'
import { selectUserInfo } from '../../api/auth/auth.query'
import AppHeader from '../../core/components/AppHeader'
import { useAppSelector } from '../../core/hooks/redux'
import { getFlex } from '../../designs/util/display'

export default function UserProfile() {
  const userInfo: any = useAppSelector(selectUserInfo)

  return (
    <>
      <AppHeader title="내 프로필" isBack />
      <Wrap>
        <img src={userInfo?.profileUrl} alt="user" />
        <div>
          <InfoWrap>
            <strong>이름 :</strong>
            <p>{userInfo?.phoneNumber}</p>
          </InfoWrap>
          <InfoWrap>
            <strong>핸드폰 번호 :</strong>
            <p>{userInfo?.name}</p>
          </InfoWrap>
          <InfoWrap>
            <strong>성별 :</strong>
            <p>{userInfo?.gender}</p>
          </InfoWrap>
          <InfoWrap>
            <strong>이메일 :</strong>
            <p>{userInfo?.email}</p>
          </InfoWrap>
          <InfoWrap>
            <strong>주소 :</strong>
            <p>{userInfo?.address}</p>
          </InfoWrap>
        </div>
      </Wrap>
    </>
  )
}

export const Wrap = styled.div`
  ${getFlex({ dir: 'column' })}
  width: 100%;
  height: 100%;
  gap: 2rem;
  img {
    width: 80%;
    height: auto;
  }
  & > div {
    ${getFlex({ dir: 'column', js: 'flex-start', ai: 'flex-start' })}
    width: 80%;
    gap: 1rem;
  }
`

export const InfoWrap = styled.div`
  ${getFlex({ js: 'flex-start', ai: 'flex-start' })}
  width: 80%;
  strong {
    font-size: 1rem;
  }
  p {
    font-size: 1rem;
  }
`
