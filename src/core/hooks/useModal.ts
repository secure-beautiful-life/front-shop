import { useState } from 'react'

export function useModal() {
  const [isModal, setIsModal] = useState(false)
  return { isModal, setIsModal }
}
