import { BsBell, BsCart2 } from 'react-icons/bs'
import NavList from './components/NavList'
import BeforeUserTitle from './components/BeforeUserTitle'
import * as UI from './User.styled'
import { AfterUserTitle } from './components/AfterUserTitle'
import AppHeader from '../../core/components/AppHeader'
import { useCheckIsUserQuery } from '../../api/auth/auth.query'

function HeaderIcon() {
  return (
    <div>
      <BsBell style={{ marginRight: '1.3rem' }} />
      <BsCart2 />
    </div>
  )
}

export default function User() {
  const { data: userData, isLoading, isError } = useCheckIsUserQuery()

  return (
    <>
      <AppHeader title="마이페이지" icon={HeaderIcon()} />
      <UI.Wrap>
        {!userData && <BeforeUserTitle />}
        {userData && <AfterUserTitle user={userData} />}
        <NavList />
      </UI.Wrap>
    </>
  )
}
