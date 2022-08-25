import { Player } from '@lottiefiles/react-lottie-player'
import successAnimation from '../../../designs/assets/lottieSuccess.json'
import errorAnimation from '../../../designs/assets/lottieError.json'
import styled from 'styled-components'
import { VscChromeClose } from 'react-icons/vsc'
import { getBgColor, getTypo } from '../../../designs/util/atom'
import { getBoxShadow } from '../../../designs/util/boxShadow'
import { getFlex, getScreenCenter } from '../../../designs/util/display'

interface Props {
  type: 'small'
  icon?: 'error' | 'success'
  children: JSX.Element
}

export default function AppModal({ type, icon, children }: Props) {
  if (type === 'small') {
    return (
      <SmallWrap>
        <>
          {icon === 'success' && (
            <Player autoplay loop src={successAnimation} style={{ height: '80px', width: '80px' }} />
          )}
          {icon === 'error' && <Player autoplay loop src={errorAnimation} style={{ height: '80px', width: '80px' }} />}
          {children}
        </>
      </SmallWrap>
    )
  } else return <></>
}

const SmallWrap = styled.div`
  ${getBgColor('WHITE')}
  ${getScreenCenter()}
  ${getFlex({ dir: 'column', js: 'flex-start' })}
  width: 18rem;
  height: 14rem;
  padding: 1rem;
  border-radius: 2rem;
  ${getBoxShadow('TYPE_A')}
  gap: 1rem;
  z-index: 999;
  + div {
    width: 100%;
  }
  p {
    ${getTypo({ fontSize: '1rem' })}
    text-align: center;
    margin-bottom: 2rem;
    width: 100%;
  }
`
