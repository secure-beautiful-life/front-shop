import styled from 'styled-components'
import { throttle } from 'lodash'
import { FiSearch, FiX } from 'react-icons/fi'
import { useInput } from '../hooks/useInput'
import { getFlex } from '../../designs/util/display'
import { getBgColor, getColor, getTypo } from '../../designs/util/atom'
import { useLazyProductAutoCompleteQuery } from '../../api/product/product.query'
import { startTransition, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { sliceLetter } from '../../designs/util/helpder'

export default function AppSearch() {
  const [value, onSetValue] = useState('')

  const [trigger, result] = useLazyProductAutoCompleteQuery()

  const throttled = useRef(throttle((value) => trigger({ name: value }), 1000))
  useEffect(() => {
    if (!value) return
    throttled.current(value)
  }, [value])

  const navigate = useNavigate()
  const goToDetailPage = (id: number) => () => startTransition(() => navigate(`product/detail/${id}`))

  const onClear = () => onSetValue('')

  return (
    <Wrap>
      <InputWrap>
        <SearchInput value={value} placeholder="아이템을 검색해보세요." onChange={(e) => onSetValue(e.target.value)} />
        <FiSearch size="1rem" stroke="#262626" />
        {value.length > 0 && <FiX size="1rem" stroke="#262626" onClick={onClear} />}
      </InputWrap>
      {value.length > 0 && (
        <AutoCompleteWrap>
          {value.length > 0 && result.data && result?.data?.length < 1 && (
            <Item style={{ color: 'grey' }}>아이템이 없습니다.</Item>
          )}
          {result?.data?.map((ele: any) => (
            <Item key={ele.productId} onClick={goToDetailPage(ele.productId)}>
              <img src={ele.imageUrl} alt={ele.name} />
              <div>
                <span>{sliceLetter(ele.name, 25)}</span>
                <span>{ele.brandName}</span>
              </div>
            </Item>
          ))}
        </AutoCompleteWrap>
      )}
    </Wrap>
  )
}

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  ${getFlex({ dir: 'column' })}
`

const AutoCompleteWrap = styled.ul`
  position: absolute;
  ${getFlex({ dir: 'column', ai: 'flex-start', js: 'flex-start' })}
  width: 100%;
  height: auto;
  min-height: 4rem;
  max-height: 15rem;
  overflow-y: scroll;
  ${getBgColor('WHITE')}
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  bottom: 0;
  transform: translateY(100%);
  z-index: 10;
  flex-wrap: nowrap;
`

const Item = styled.li`
  border: none;
  ${getFlex({ js: 'flex-start' })}
  width: 100%;
  min-height: 4rem;
  font-size: 1.1rem;
  div {
    ${getFlex({ dir: 'column', ai: 'flex-start' })}
    span:last-child {
      font-size: 0.8rem;
      margin-top: 0.5rem;
      ${getColor('GREY_4')}
    }
  }

  img {
    width: 3rem;
    height: 4rem;
    margin-right: 1rem;
  }

  margin-bottom: 2rem;
  line-height: 1.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`

const InputWrap = styled.div`
  width: 100%;
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  svg:first-of-type {
    position: absolute;
    left: 1rem;
  }
  svg:last-of-type {
    right: 1rem !important;
  }
`

const SearchInput = styled.input`
  width: 100%;
  height: 2.4rem;
  background-color: #e9ecef;
  border-radius: 1.3rem;
  border: none;
  padding-left: 2.4rem;
  margin: 1rem 0;
`
