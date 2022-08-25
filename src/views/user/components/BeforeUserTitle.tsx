import { startTransition } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import AppButton from '../../../core/components/AppButton'
import IconCard from '../../../core/components/card/IconCard'
import { getTypo } from '../../../designs/util/atom'
import { getFlex } from '../../../designs/util/display'

export default function BeforeUserTitle() {
  const navigate = useNavigate()

  const goTo = (location: string) => () =>
    startTransition(() => {
      navigate(location)
    })

  return (
    <>
      <Title>
        <div>
          <p>sasstyle 회원이라면</p>
          <br />
          <p>누구나 무료배송!</p>
        </div>
        <div>
          <AppButton onClick={goTo('/login')} radius="1.2rem" color="black" background="white" content="로그인" />
          <AppButton onClick={goTo('/signup')} radius="1.2rem" color="black" background="white" content="회원가입" />
        </div>
      </Title>
      <IconCard icon="🌟" content="sasstyle 회원만의 특별한 혜택 보러가기" />
    </>
  )
}

const Title = styled.div`
  ${getFlex({ js: 'space-between', ai: 'center' })}
  width: 100%;
  height: 6rem;
  p:first-of-type {
    ${getTypo({ fontSize: '0.9rem' })}
    color: #bfbfbf;
  }
  p:last-of-type {
    ${getTypo({ fontSize: '1.1rem', fontWeight: 700 })}
  }
  div:last-of-type {
    width: 50%;
    ${getFlex({ js: 'space-between', ai: 'center' })}
    gap: 0.5rem;
  }

  button {
    border: 0.5px solid #bfbfbf;
    padding: 0.7rem 0;
    color: #737373;
    font-weight: 600;
    &:hover {
      background-color: #e4e4e4;
      border: none;
    }
  }
`
