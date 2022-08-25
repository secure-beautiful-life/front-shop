import { useEffect, useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { useNavigate } from 'react-router-dom'
import animationData from '../../designs/assets/lottieSignup.json'
import * as UI from './Signup.styled'
import AppButton from '../../core/components/AppButton'
import AppInput from '../../core/components/AppInput'
import AppSelectBox from '../../core/components/AppSelectBox'
import { useInput } from '../../core/hooks/useInput'
import { useRequestSignupMutation } from '../../api/auth/auth.query'
import { useSelect } from '../../core/hooks/useSelect'
import { REG_EMAIL, REG_NAME, REG_PASSWORD, REG_PH, REG_USERNAME } from '../../core/constant/reg'
import AppLink from '../../core/components/AppLink'
import { PROFILE_URL_DEFAULT } from '../../core/constant'
import { cleanupState, setIsDimmed } from '../../App.slice'
import AppModal from '../../core/components/modal/AppModal'
import { useAppDispatch } from '../../core/hooks/redux'
import { Modal_Type } from './signup.interface'

export default function SignUp() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [signUp, { isLoading, error }] = useRequestSignupMutation()
  const [isModal, setIsModal] = useState<Modal_Type>(null)

  const { value: username, onSetValue: setUserName, isValid: isValidUserName } = useInput('', REG_USERNAME)
  const { value: password, onSetValue: setPassword, isValid: isValidPw } = useInput('', REG_PASSWORD)
  const { value: name, onSetValue: setName, isValid: isValidName } = useInput('', REG_NAME)
  const { value: gender, onSetValue: setGender, optionList: genderList } = useSelect(['WOMAN', 'MAN'])
  const { value: role, onSetValue: setRole, optionList: roleList } = useSelect(['USER', 'BRAND'])
  const { value: email, onSetValue: setEmail, isValid: isValidEmail } = useInput('', REG_EMAIL)
  const { value: phoneNumber, onSetValue: setPhone, isValid: isValidPh } = useInput('', REG_PH)
  const { value: address, onSetValue: setAddress } = useInput('')

  const isAllValid = [isValidUserName, isValidPw, isValidName, isValidEmail, isValidPh].every((ele) => ele === true)

  const onSignUp = async () => {
    const values = {
      username,
      password,
      name,
      gender,
      email,
      phoneNumber,
      address,
      role,
      profileUrl: PROFILE_URL_DEFAULT,
    }
    signUp(values)
      .unwrap()
      .then(() => {
        dispatch(setIsDimmed(true))
        setIsModal('success')
      })
      .catch(() => {
        dispatch(setIsDimmed(true))
        setIsModal('error')
      })
  }

  useEffect(() => {
    return () => {
      dispatch(cleanupState())
    }
  }, [dispatch])

  return (
    <UI.Wrap>
      <Player autoplay loop src={animationData} style={{ height: '200px', width: '200px' }} />
      <UI.FormWrap>
        <AppInput
          type="text"
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
        <UI.selectWrap>
          <AppSelectBox label="회원 타입" optionList={roleList} onSetValue={setRole} />
          <AppInput
            type="text"
            label={role === 'USER' ? '성함' : '브랜드 이름'}
            placeHolder=""
            value={name}
            onSetValue={setName}
            errorMessage={!isValidName ? '성함을 입력해주세요.' : ''}
          />
        </UI.selectWrap>
        <AppSelectBox label="성별" optionList={genderList} onSetValue={setGender} />
        <AppInput
          type="text"
          label="이메일"
          placeHolder="email@naver.com"
          value={email}
          onSetValue={setEmail}
          errorMessage={!isValidEmail ? '이메일 형식으로 입력해주세요.' : ''}
        />
        <AppInput
          type="text"
          label="핸드폰 번호"
          placeHolder="010-1234-5678"
          value={phoneNumber}
          onSetValue={setPhone}
          errorMessage={!isValidPh ? '번호 형식으로 입력해주세요.' : ''}
        />
        <AppInput type="text" label="지역" placeHolder="address" value={address} onSetValue={setAddress} />
        <AppButton content="회원가입" radius="2rem" onClick={onSignUp} disabled={!isAllValid || address === ''} />
      </UI.FormWrap>
      <AppLink href="/login" content="로그인 하러가기" />
      {isModal === 'success' && (
        <AppModal type="small" icon="success">
          <UI.ModalContent>
            <p>
              안녕하세요 ! <strong>{name}</strong>님
            </p>
            <AppButton
              content="로그인 하러 가기"
              onClick={() => {
                dispatch(setIsDimmed(false))
                navigate('/login')
              }}
              radius="1.5rem"
              background="#9DAABB"
            />
          </UI.ModalContent>
        </AppModal>
      )}
      {isModal === 'error' && (
        <AppModal type="small" icon="error">
          <div>
            <p>{'다시 입력해주세요.'}</p>
            <AppButton
              content="확인"
              onClick={() => {
                dispatch(setIsDimmed(false))
                setIsModal(null)
              }}
              radius="1.5rem"
              background="#9DAABB"
            />
          </div>
        </AppModal>
      )}
    </UI.Wrap>
  )
}
