import { useState } from 'react'

export function useSelect(optionList: Array<string>) {
  const [value, setValue] = useState(optionList[0])
  const onSetValue = (e: any) => setValue(e.currentTarget.value)

  return { value, onSetValue, optionList }
}
