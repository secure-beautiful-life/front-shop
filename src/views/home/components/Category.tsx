import * as UI from './Category.styled'
import { useGetCategoryQuery } from '../../../api/product/product.query'
import { useState } from 'react'

export default function Category({ onSetCategory }: { onSetCategory: (id: number) => void }) {
  type Current = { [key: string]: string }

  const { data: categoryList, isLoading } = useGetCategoryQuery()

  const [current, setCurrent] = useState<Current>({ header: 'face', cell: '전체' })
  const isCurrent = (name: string, type: string) => current[type] === name

  return (
    <>
      {!isLoading ? (
        <UI.Wrap>
          <UI.HeaderWrap>
            {categoryList.content.map((category: any) => (
              <UI.Header
                key={category.name}
                onClick={() => {
                  setCurrent({ header: category.name, cell: '전체' })
                  onSetCategory(category.id)
                  console.log(category.id)
                }}
                data-current={isCurrent(category.name, 'header')}
              >
                {category.name}
              </UI.Header>
            ))}
          </UI.HeaderWrap>
          <UI.CellWrap>
            <UI.Cell
              data-current={isCurrent('전체', 'cell')}
              onClick={() => {
                setCurrent({ ...current, cell: '전체' })
                const curr = categoryList.find((category: any) => category.name === current.header)
                onSetCategory(curr.id)
              }}
            >
              전체
            </UI.Cell>
            {categoryList.content
              .find((category: any) => category.name === current.header)
              .children.map((ele: any) => (
                <UI.Cell
                  data-current={isCurrent(ele.name, 'cell')}
                  key={ele.name}
                  onClick={() => {
                    setCurrent({ ...current, cell: ele.name })
                    onSetCategory(ele.id)
                  }}
                >
                  {ele.name}
                </UI.Cell>
              ))}
          </UI.CellWrap>
        </UI.Wrap>
      ) : (
        <div style={{ width: '100%', height: '10rem' }}></div>
      )}
    </>
  )
}
