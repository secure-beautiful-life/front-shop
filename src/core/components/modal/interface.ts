export interface SimpleModal {
  isModal: boolean
  trigger: any
  icon?: 'error' | 'success'
  content: any
  btnText: string
  btnTrigger: any
  height?: string
  isBtn?: boolean
}
