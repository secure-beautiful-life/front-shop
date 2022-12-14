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
          label="?????????"
          placeHolder="??????, ?????? 4 ~ 13 ??????"
          value={username}
          onSetValue={setUserName}
          errorMessage={!isValidUserName ? '???????????? ??????, ????????? 4?????? ??????, 13?????? ???????????????.' : ''}
        />
        <AppInput
          type="password"
          label="????????????"
          placeHolder="??????, ??????, ???????????? 8 ~ 13 ??????"
          value={password}
          onSetValue={setPassword}
          errorMessage={!isValidPw ? '???????????? ??????, ??????, ??????????????? 8?????? ??????, 13?????? ???????????????.' : ''}
        />
        <UI.selectWrap>
          <AppSelectBox label="?????? ??????" optionList={roleList} onSetValue={setRole} />
          <AppInput
            type="text"
            label={role === 'USER' ? '??????' : '????????? ??????'}
            placeHolder=""
            value={name}
            onSetValue={setName}
            errorMessage={!isValidName ? '????????? ??????????????????.' : ''}
          />
        </UI.selectWrap>
        <AppSelectBox label="??????" optionList={genderList} onSetValue={setGender} />
        <AppInput
          type="text"
          label="?????????"
          placeHolder="email@naver.com"
          value={email}
          onSetValue={setEmail}
          errorMessage={!isValidEmail ? '????????? ???????????? ??????????????????.' : ''}
        />
        <AppInput
          type="text"
          label="????????? ??????"
          placeHolder="010-1234-5678"
          value={phoneNumber}
          onSetValue={setPhone}
          errorMessage={!isValidPh ? '?????? ???????????? ??????????????????.' : ''}
        />
        <AppInput type="text" label="??????" placeHolder="address" value={address} onSetValue={setAddress} />
        <AppButton content="????????????" radius="2rem" onClick={onSignUp} disabled={!isAllValid || address === ''} />
      </UI.FormWrap>
      <AppLink href="/login" content="????????? ????????????" />
      {isModal === 'success' && (
        <AppModal type="small" icon="success">
          <UI.ModalContent>
            <p>
              ??????????????? ! <strong>{name}</strong>???
            </p>
            <AppButton
              content="????????? ?????? ??????"
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
            <p>{'?????? ??????????????????.'}</p>
            <AppButton
              content="??????"
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
