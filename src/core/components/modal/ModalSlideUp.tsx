import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { getMaxMediaScreen } from '../../../designs/util/display'

export default function ModalSlideUp({
  children,
  isModal,
  trigger,
}: {
  children: React.ReactNode
  isModal: boolean
  trigger: any
}) {
  const container = document.getElementById('root') || document.body

  return createPortal(<Contents children={children} isModal={isModal} trigger={trigger} />, container)
}

const Contents = ({ children, isModal, trigger }: { children: React.ReactNode; isModal: boolean; trigger: any }) => {
  return (
    <>
      {isModal && (
        <>
          <Wrap>{children}</Wrap>
          <Cover onClick={() => trigger(false)} />
        </>
      )}
    </>
  )
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  width: 100vw;
  ${getMaxMediaScreen()};
  height: 17rem;
  background-color: white;
  z-index: 10;
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
  padding: 2rem 1rem;
`
const Cover = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  right: 50%;
  transform: translateX(50%);
  ${getMaxMediaScreen()};
  background-color: black;
  opacity: 20%;
  cursor: pointer;
`
