import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { useParams } from 'react-router-dom'
import { useCheckIsUserQuery } from '../../api/auth/auth.query'

import {
  useDeleteFittingMutation,
  useGetFittingDetailQuery,
  useGetProductFittingQuery,
} from '../../api/fitting/fitting.query'
import AppButton from '../../core/components/AppButton'
import AppHeader from '../../core/components/AppHeader'
import ModalSlideUp from '../../core/components/modal/ModalSlideUp'
import SimpleModal from '../../core/components/modal/SimpleModal'
import { useModal } from '../../core/hooks/useModal'
import * as UI from './Fitting.styled'

export default function Fitting() {
  const [currId, setCurrId] = useState(0)
  const [delId, setDelId] = useState(0)

  const { isModal, setIsModal } = useModal()
  const { isModal: deleteModal, setIsModal: setDeleteModal } = useModal()
  const params = useParams()
  const { data, isLoading } = useGetProductFittingQuery({ productId: Number(params.id) })
  const { data: userData } = useCheckIsUserQuery()

  const [deleteImg] = useDeleteFittingMutation()

  const onOpenDeleteModal = (id: number) => {
    setDeleteModal(true)
    setDelId(id)
  }

  return (
    <>
      <ModalSlideUp isModal={deleteModal} trigger={() => setDeleteModal(false)}>
        <UI.DelModalWrap>
          <p>피팅된 이미지를 삭제하시겠습니까?</p>
          <AppButton
            content="삭제하기"
            radius="1rem"
            onClick={() =>
              deleteImg({ id: delId })
                .unwrap()
                .then(() => setDeleteModal(false))
            }
            width="100%"
          />
        </UI.DelModalWrap>
      </ModalSlideUp>
      <AppHeader title="피팅 둘러보기" isBack />
      <UI.Wrap>
        <UI.ImgList>
          {data?.map((item) => (
            <UI.ImgWrap>
              {userData?.userId === item.userId && (
                <IoClose size={'1.4rem'} fill={'black'} onClick={() => onOpenDeleteModal(item.id)} />
              )}
              <img
                key={item.id}
                src={item.image}
                alt="fitting img"
                onClick={() => {
                  setCurrId(item.id)
                  setIsModal(true)
                }}
              />
            </UI.ImgWrap>
          ))}
        </UI.ImgList>
      </UI.Wrap>
      <SimpleModal
        isModal={isModal}
        content={<FittingModal fittingId={currId} />}
        btnText="닫기"
        trigger={() => setIsModal(false)}
        btnTrigger={() => setIsModal(false)}
        height={'25rem'}
      />
    </>
  )
}

export function FittingModal({ fittingId }: { fittingId: number }) {
  const { data, isLoading } = useGetFittingDetailQuery({ id: fittingId })

  return <UI.ModalImg src={data?.image} alt="fitting img" />
}
