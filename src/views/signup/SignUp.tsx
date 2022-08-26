import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as UI from './Signup.styled'
import AppButton from '../../core/components/AppButton'
import AppInput from '../../core/components/AppInput'
import AppSelectBox from '../../core/components/AppSelectBox'
import { useInput } from '../../core/hooks/useInput'
import { useRequestSignupMutation } from '../../api/auth/auth.query'
import { useSelect } from '../../core/hooks/useSelect'
import { REG_BRAND, REG_EMAIL, REG_NAME, REG_PASSWORD, REG_USERNAME } from '../../core/constant/reg'
import AppLink from '../../core/components/AppLink'
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
  const { value: passwordCheck, onSetValue: setPasswordCheck, isValid: isValidPWCheck } = useInput('', REG_PASSWORD)
  const { value: type, onSetValue: setType, optionList: typeList } = useSelect(['customer', 'brand'])
  const { value: brandName, onSetValue: setBrandName, isValid: isVaildBrand } = useInput('', REG_BRAND)
  const { value: name, onSetValue: setName, isValid: isValidName } = useInput('', REG_NAME)
  const { value: gender, onSetValue: setGender, optionList: genderList } = useSelect(['여성', '남성'])
  const { value: email, onSetValue: setEmail, isValid: isValidEmail } = useInput('', REG_EMAIL)
  const { value: phone, onSetValue: setPhone } = useInput(0)
  const { value: address, onSetValue: setAddress } = useInput('')

  const isAllValid = [isValidUserName, isValidPw, isValidPWCheck, isValidName, isValidEmail].every(
    (ele) => ele === true
  )

  const onSignUp = async () => {
    let values
    if (type === 'customer') {
      values = {
        username,
        password,
        password_check: passwordCheck,
        role_id: 3,
        name,
        type,
        gender,
        email,
        phone,
        address,
      }
    } else {
      values = {
        username,
        password,
        password_check: passwordCheck,
        role_id: 3,
        name,
        type,
        gender,
        email,
        phone,
        address,
        brand_name: brandName,
      }
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
      <h1>회원가입</h1>
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
          errorMessage={!isValidPw ? '아이디는 영어 대소문자, 숫자, 특수문자로 8글자 이상, 13글자 이하입니다.' : ''}
        />
        <AppInput
          type="password"
          label="비밀번호 확인"
          placeHolder="영어, 숫자, 특수문자 8 ~ 13 글자"
          value={passwordCheck}
          onSetValue={setPasswordCheck}
          errorMessage={!isValidPw ? '아이디는 영어 대소문자, 숫자, 특수문자로 8글자 이상, 13글자 이하입니다.' : ''}
        />
        <UI.selectWrap>
          <AppSelectBox label="회원 타입" optionList={typeList} onSetValue={setType} />
          {type === 'brand' && (
            <AppInput
              type="text"
              label={'브랜드 이름'}
              placeHolder="brand.."
              value={brandName}
              onSetValue={setBrandName}
              errorMessage={!isVaildBrand ? '브랜드 이름은 2자 이상 10자 이하여야 합니다.' : ''}
            />
          )}
          <AppInput
            type="text"
            label={'이름'}
            placeHolder="이름"
            value={name}
            onSetValue={setName}
            errorMessage={!isValidName ? '이름은 한글로 2자 이상 5자 이하여야 합니다.' : ''}
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
        <AppInput type="text" label="핸드폰 번호" placeHolder="010-1234-5678" value={phone} onSetValue={setPhone} />
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
