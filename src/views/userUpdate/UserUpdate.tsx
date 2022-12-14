import { BsBell, BsCart2 } from 'react-icons/bs'
import * as UI from './UserUpdate.styled'
import AppHeader from '../../core/components/AppHeader'
import AppInput from '../../core/components/AppInput'
import AppSelectBox from '../../core/components/AppSelectBox'
import { REG_EMAIL, REG_NAME, REG_PASSWORD, REG_PH, REG_USERNAME } from '../../core/constant/reg'
import { useInput } from '../../core/hooks/useInput'
import { useSelect } from '../../core/hooks/useSelect'
import AppButton from '../../core/components/AppButton'
import { useCheckIsUserQuery, useUpdateUserInfoMutation } from '../../api/auth/auth.query'
import { useAppDispatch } from '../../core/hooks/redux'
import { useNavigate } from 'react-router-dom'
import { FileSelectBox } from '../sellerAdmin/SellerAdmin.styled'
import { GoPlus } from 'react-icons/go'
import { useState } from 'react'
import { uploadFiles } from '../../core/util/uploadFile'

function HeaderIcon() {
  return (
    <div>
      <BsBell style={{ marginRight: '1.3rem' }} />
      <BsCart2 />
    </div>
  )
}

export default function UserUpdate() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [profileImg, setProfileImg] = useState()

  const profileImgHandler = (e: any) => {
    const file = e.target.files
    setProfileImg(file)
  }

  const { data: userData, isLoading, isError } = useCheckIsUserQuery()
  const [updateUser] = useUpdateUserInfoMutation()

  const { value: name, onSetValue: setName, isValid: isValidName } = useInput(userData?.name, REG_NAME)
  const { value: password, onSetValue: setPassword, isValid: isValidPw } = useInput('', REG_PASSWORD)
  const { value: gender, onSetValue: setGender, optionList: genderList } = useSelect(['WOMAN', 'MAN'])
  const { value: email, onSetValue: setEmail, isValid: isValidEmail } = useInput(userData?.email, REG_EMAIL)
  const { value: phoneNumber, onSetValue: setPhone, isValid: isValidPh } = useInput(userData?.phoneNumber, REG_PH)
  const { value: address, onSetValue: setAddress } = useInput(userData?.address)

  const isAllValid = [isValidName, isValidEmail, isValidPh].every((ele) => ele === true)
  const onUpdateProfile = async () => {
    const img = await uploadFiles(profileImg)
    const values = {
      name: name ? name : userData?.name,
      password: password ? password : null,
      gender: gender ? gender : userData?.gender,
      email: email ? email : userData?.email,
      phoneNumber: phoneNumber ? phoneNumber : userData?.phoneNumber,
      address: address ? address : userData?.address,
      profileUrl: img ? img[0] : null,
    }

    updateUser(values)
      .unwrap()
      .then((res: any) => {
        window.alert('???????????? ??????????????????.')
        navigate('/user')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <AppHeader isBack title="?????? ?????? ??????" />
      <UI.Wrap>
        <AppInput
          type="text"
          label="?????? ??????"
          placeHolder={String(userData?.name)}
          value={name}
          onSetValue={setName}
          errorMessage={!isValidName ? '????????? ??????????????????.' : ''}
        />
        <AppInput
          type="password"
          label="???????????? ??????"
          placeHolder="??????????????? ??? ????????? ?????? ??????????????? ????????? ???????????????."
          value={password}
          onSetValue={setPassword}
          errorMessage={!isValidPw ? '???????????? ??????, ??????, ??????????????? 8?????? ??????, 13?????? ???????????????.' : ''}
        />
        <AppInput
          type="text"
          label="????????? ??????"
          placeHolder={String(userData?.email)}
          value={email}
          onSetValue={setEmail}
          errorMessage={!isValidEmail ? '????????? ???????????? ??????????????????.' : ''}
        />
        <AppSelectBox label="??????" optionList={genderList} onSetValue={setGender} />
        <AppInput
          type="text"
          label="????????? ?????? ??????"
          placeHolder={String(userData?.phoneNumber)}
          value={phoneNumber}
          onSetValue={setPhone}
          errorMessage={!isValidPh ? '?????? ???????????? ??????????????????.' : ''}
        />
        <AppInput
          type="text"
          label="?????? ??????"
          placeHolder={String(userData?.address)}
          value={address}
          onSetValue={setAddress}
        />
        <p>????????? ????????? ?????? ?????????</p>
        <FileSelectBox>
          <input type="file" id="imageUrl" onChange={profileImgHandler} />
          <label htmlFor="imageUrl">
            <GoPlus />
          </label>
        </FileSelectBox>
        <AppButton
          disabled={!isAllValid || address === ''}
          content="?????? ?????? ????????????"
          onClick={onUpdateProfile}
          radius="0.3rem"
        />
      </UI.Wrap>
    </>
  )
}
