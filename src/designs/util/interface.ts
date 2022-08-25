import { FlattenSimpleInterpolation } from 'styled-components'

export interface Flex {
  dir?: 'row' | 'column'
  js?: 'center' | 'flex-start' | 'flex-end' | 'space-between'
  ai?: 'center' | 'flex-start' | 'flex-end' | 'space-between'
}

export interface Max_MediaScreen {
  maxWidth: string
  maxHeight?: string
}

export interface Typo {
  fontSize: string
  fontWeight?: number
}

export type FuncCss<T> = (x?: T) => FlattenSimpleInterpolation
