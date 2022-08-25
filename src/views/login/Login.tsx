import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'

import { cleanupState, selectIsDimmed, setIsDimmed } from '../../App.slice'
import { useRequestLoginMutation } from '../../api/auth/auth.query'
import AppButton from '../../core/components/AppButton'
import AppInput from '../../core/components/AppInput'
import AppLink from '../../core/components/AppLink'
import AppModal from '../../core/components/modal/AppModal'
import { REG_PASSWORD, REG_USERNAME } from '../../core/constant/reg'
import { useAppDispatch, useAppSelector } from '../../core/hooks/redux'
import { useInput } from '../../core/hooks/useInput'
import animationData from '../../designs/assets/lottieLogin.json'
import * as UI from './Login.styled'

export default function Login() {
  const isDimmed = useAppSelector(selectIsDimmed)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [isModal, setIsModal] = useState(false)
  const [login, { isLoading, error, isSuccess }] = useRequestLoginMutation()

  const { value: username, onSetValue: setUserName, isValid: isValidUserName } = useInput('', REG_USERNAME)
  const { value: password, onSetValue: setPassword, isValid: isValidPw } = useInput('', REG_PASSWORD)

  const isAllValid = [isValidUserName, isValidPw].every((ele) => ele === true)

  const onLogin = async () => {
    const values = {
      username,
      password,
    }
    login(values)
      .unwrap()
      .then(() => navigate('/'))
      .catch(() => {
        dispatch(setIsDimmed(true))
        setIsModal(true)
      })
  }

  useEffect(() => {
    return () => {
      dispatch(cleanupState())
    }
  }, [])

  return (
    <>
      <UI.LoginWrap>
        <Player autoplay loop src={animationData} style={{ height: '300px', width: '300px' }}></Player>
        <AppInput
          label="아이디"
          placeHolder="영어, 숫자 4 ~ 13 글자"
          value={username}
          onSetValue={setUserName}
          errorMessage={!isValidUserName ? '아이디는 영어, 숫자로 4글자 이상, 13글자 이하입니다.' : ''}
        />
        <AppInput
          type="password"
          label="비밀번호"
          placeHolder="영어, 숫자, 특수문자 8 ~ 13 글자"
          value={password}
          onSetValue={setPassword}
          errorMessage={!isValidPw ? '아이디는 영어, 숫자, 특수문자로 8글자 이상, 13글자 이하입니다.' : ''}
        />
        <AppButton content="로그인" radius="2rem" onClick={onLogin} disabled={false} />
        <AppLink href="/signup" content="회원가입 하러가기" />
      </UI.LoginWrap>
      {isModal && isDimmed && (
        <AppModal type="small" icon="error">
          <div>
            <p>{'잘못된 계정입니다.'}</p>
            <AppButton
              content="확인"
              onClick={() => {
                dispatch(setIsDimmed(false))
                setIsModal(false)
              }}
              radius="1.5rem"
              background="#9DAABB"
            />
          </div>
        </AppModal>
      )}
    </>
  )
}
