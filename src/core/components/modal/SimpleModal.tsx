import { createPortal } from 'react-dom'
import styled from 'styled-components'

import { Player } from '@lottiefiles/react-lottie-player'

import errorAnimation from '../../../designs/assets/lottieError.json'
import successAnimation from '../../../designs/assets/lottieSuccess.json'
import { getBoxShadow } from '../../../designs/util/boxShadow'
import { getFlex, getMaxMediaScreen } from '../../../designs/util/display'
import AppButton from '../AppButton'
import * as I from './interface'

export default function SimpleModal(props: I.SimpleModal) {
  const container = document.getElementById('root') || document.body

  return createPortal(<Contents {...props} />, container)
}

const Contents = ({
  isModal,
  icon,
  content,
  btnText,
  trigger,
  btnTrigger,
  height = '13rem',
  isBtn = true,
}: I.SimpleModal) => {
  return (
    <>
      {isModal && (
        <>
          <Wrap height={height}>
            <>
              {icon === 'success' && (
                <Player autoplay loop src={successAnimation} style={{ height: '70px', width: '70px' }} />
              )}
              {icon === 'error' && (
                <Player autoplay loop src={errorAnimation} style={{ height: '70px', width: '70px' }} />
              )}
            </>
            <p>{content}</p>
            {isBtn && <AppButton onClick={btnTrigger} content={btnText} radius="1rem" />}
          </Wrap>
          <Cover onClick={() => trigger(false)} />
        </>
      )}
    </>
  )
}

const Wrap = styled.div<{ height: string }>`
  ${getFlex({ dir: 'column', js: 'flex-start' })}
  gap: 1.1rem;
  position: fixed;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  width: 80vw;
  max-width: 400px;
  ${({ height }) => `height: ${height};`}
  background-color: white;
  z-index: 10;
  border-radius: 1.5rem;
  padding: 1.2rem 2rem;
  ${getBoxShadow('TYPE_A')}
  @media screen and (max-height: 680px) {
    transform: translate(50%, 20%);
  }
  p {
    font-size: 1.1rem;
  }
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
