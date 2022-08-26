import * as UI from './SellerAdmin.styled'
import { GoPlus } from 'react-icons/go'
import AppInput from '../../core/components/AppInput'
import { useInput } from '../../core/hooks/useInput'
import AppHeader from '../../core/components/AppHeader'
import AppButton from '../../core/components/AppButton'
import { useState } from 'react'
import { useGetCategoryQuery, usePostProductMutation } from '../../api/product/product.query'
import { uploadFiles } from '../../core/util/uploadFile'
import { useNavigate } from 'react-router-dom'

export default function SellerAdmin() {
  const navigate = useNavigate()
  const { value: price, onSetValue: setPrice } = useInput('')
  const { value: name, onSetValue: setName } = useInput('')
  const { value: stockQuantity, onSetValue: setStockQuantity } = useInput('')

  const { data: categoryData } = useGetCategoryQuery()

  const [postProduct] = usePostProductMutation()

  const [mainImg, setMainImg] = useState()
  const [subImg, setSubImg] = useState()
  const [category, setCategory] = useState(1)

  const mainImgHandler = (e: any) => {
    const files = e.target.files
    setMainImg(files)
  }

  const subImgHandler = (e: any) => {
    const files = e.target.files
    setSubImg(files)
  }

  const onUploadProduct = async () => {
    const mainImgLocation: any = await uploadFiles(mainImg)
    const images = await uploadFiles(subImg)
    const params: any = {
      categoryId: category,
      name,
      price: Number(price),
      stockQuantity,
      profile_image_url: String(mainImgLocation[0]),
      images,
    }
    postProduct(params)
      .unwrap()
      .then((res) => {
        window.alert('상품이 등록되었습니다.')
        navigate('/user')
      })
      .catch((err) => console.log(err))
  }

  return (
    <UI.Wrap>
      <AppHeader title="상품 추가 페이지" isBack />
      <UI.Select onChange={(e: any) => setCategory(e.target.value)}>
        {categoryData &&
          categoryData.map((d: any) => (
            <option key={d.categoryId} onChange={() => setCategory(d.categoryId)} value={d.categoryId}>
              {d.name}
            </option>
          ))}
      </UI.Select>
      <UI.FormWrap>
        <AppInput label="가격" type="text" placeHolder="10,000" value={price} onSetValue={setPrice} />
        <AppInput label="상품 이름" placeHolder="검은 셔츠" value={name} onSetValue={setName} />
        <AppInput label="재고" placeHolder="100" value={stockQuantity} onSetValue={setStockQuantity} />
      </UI.FormWrap>
      <UI.FileSelectGroup>
        <UI.FileSelectWrap>
          <strong>기본 이미지 선택 ( 1개 )</strong>
          <UI.FileSelectBox>
            <input type="file" id="imageUrl" onChange={mainImgHandler} />
            <label htmlFor="imageUrl">
              <GoPlus />
            </label>
          </UI.FileSelectBox>
        </UI.FileSelectWrap>
        <UI.FileSelectWrap>
          <strong>이미지 선택 ( 최대 5개까지 가능합니다 )</strong>
          <UI.FileSelectBox>
            <input id="imageUrl" type="file" onChange={subImgHandler} multiple />
            <label htmlFor="imageUrl">
              <GoPlus />
            </label>
          </UI.FileSelectBox>
        </UI.FileSelectWrap>
      </UI.FileSelectGroup>
      <AppButton
        content="상품 등록"
        onClick={onUploadProduct}
        radius="0.3rem"
        disabled={!price || !name || !stockQuantity}
      />
    </UI.Wrap>
  )
}
