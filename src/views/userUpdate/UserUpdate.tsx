import { BsBell, BsCart2 } from 'react-icons/bs'
import * as UI from './UserUpdate.styled'
import AppHeader from '../../core/components/AppHeader'
import AppInput from '../../core/components/AppInput'
import AppSelectBox from '../../core/components/AppSelectBox'
import { REG_EMAIL, REG_NAME, REG_PASSWORD, REG_PH, REG_USERNAME, REG_ADDRESS } from '../../core/constant/reg'
import { useInput } from '../../core/hooks/useInput'
import { useSelect } from '../../core/hooks/useSelect'
import AppButton from '../../core/components/AppButton'
import { useCheckIsUserQuery, useUpdateUserInfoMutation } from '../../api/auth/auth.query'
import { useAppDispatch } from '../../core/hooks/redux'
import { useNavigate } from 'react-router-dom'
import { FileSelectBox } from '../sellerAdmin/SellerAdmin.styled'
import { GoPlus } from 'react-icons/go'
import { useState } from 'react'

function HeaderIcon() {
  return (
    <div>
      <BsBell style={{ marginRight: '1.3rem' }} />
      <BsCart2 />
    </div>
  )
}

export default function UserUpdate() {
  const navigate = useNavigate()

  const [profileImg, setProfileImg] = useState()

  const profileImgHandler = (e: any) => {
    const files = e.target.files
    if (files.length <= 0) return console.log('files does not exist')
    const file = files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const base64 = reader.result
      return base64
    }
  }

  const { data: userData, isLoading, isError } = useCheckIsUserQuery()
  const [updateUser] = useUpdateUserInfoMutation()

  const { value: email, onSetValue: setEmail, isValid: isValidEmail } = useInput(userData?.email, REG_EMAIL)
  const { value: phone, onSetValue: setPhone, isValid: isValidPh } = useInput(userData?.phone, REG_PH)
  const { value: address, onSetValue: setAddress, isValid: isVaildAddress } = useInput(userData?.address, REG_ADDRESS)

  const isAllValid = [isValidEmail, isValidPh, isVaildAddress].every((ele) => ele === true)
  const onUpdateProfile = async () => {
    const values = {
      email: email ? email : userData?.email,
      phone: phone ? phone : userData?.phone,
      address: address ? address : userData?.address,
    }

    updateUser(values)
      .unwrap()
      .then((res: any) => {
        window.alert('프로필을 수정했습니다.')
        navigate('/user')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const onUpdateImg = async () => {
    const values = {
      email: email ? email : userData?.email,
      phone: phone ? phone : userData?.phone,
      address: address ? address : userData?.address,
    }

    updateUser(values)
      .unwrap()
      .then((res: any) => {
        window.alert('프로필을 수정했습니다.')
        navigate('/user')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <AppHeader isBack title="기본 정보 수정" />
      <UI.Wrap>
        <AppInput
          type="text"
          label="이메일 변경"
          placeHolder={String(userData?.email)}
          value={email}
          onSetValue={setEmail}
          errorMessage={!isValidEmail ? '이메일 형식으로 입력해주세요.' : ''}
        />
        <AppInput
          type="text"
          label="핸드폰 번호 변경"
          placeHolder={String(userData?.phone)}
          value={phone}
          onSetValue={setPhone}
          errorMessage={!isValidPh ? ' - 없이 11자리 입력해주세요.' : ''}
        />
        <AppInput
          type="text"
          label="지역 변경"
          placeHolder={String(userData?.address)}
          value={address}
          onSetValue={setAddress}
          errorMessage={!isVaildAddress ? '지역은 10자 이상 30자 이하로 작성해주세요.' : ''}
        />
        <AppButton disabled={!isAllValid} content="변경 정보 저장하기" onClick={onUpdateProfile} radius="0.3rem" />
        <FileSelectBox>
          <input type="file" id="imageUrl" onChange={profileImgHandler} />
          <label htmlFor="imageUrl">
            <GoPlus />
          </label>
        </FileSelectBox>
        <AppButton content="프로필 이미지 저장하기" onClick={() => {}} radius="0.3rem" />
      </UI.Wrap>
    </>
  )
}
