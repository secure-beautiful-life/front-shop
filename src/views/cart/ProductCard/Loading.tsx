import * as UI from './ProductCard.styled'

export default function Loading() {
  return (
    <UI.LoadingListWrap>
      <UI.LoadingWrapOuter>
        <UI.LoadingLine />
        <UI.LoadingWrap>
          <UI.LoadingImg />
          <div>
            <UI.LoadingLine />
            <UI.LoadingLine />
          </div>
        </UI.LoadingWrap>
      </UI.LoadingWrapOuter>
      <UI.LoadingWrapOuter>
        <UI.LoadingLine />
        <UI.LoadingWrap>
          <UI.LoadingImg />
          <div>
            <UI.LoadingLine />
            <UI.LoadingLine />
          </div>
        </UI.LoadingWrap>
      </UI.LoadingWrapOuter>
      <UI.LoadingWrapOuter>
        <UI.LoadingLine />
        <UI.LoadingWrap>
          <UI.LoadingImg />
          <div>
            <UI.LoadingLine />
            <UI.LoadingLine />
          </div>
        </UI.LoadingWrap>
      </UI.LoadingWrapOuter>
    </UI.LoadingListWrap>
  )
}
