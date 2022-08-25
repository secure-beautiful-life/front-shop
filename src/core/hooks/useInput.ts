import { useEffect, useState } from 'react'
import { checkReg } from '../util'

export function useInput(initialState: any = '', regExp: any = undefined) {
  const [value, setValue] = useState(initialState)
  const [isValid, setIsValid] = useState(false)

  const onSetValue = (e: any) => setValue(e.target.value)

  useEffect(() => {
    regExp && setIsValid(checkReg(value, regExp))
  }, [value])

  return { value, onSetValue, isValid }
}
