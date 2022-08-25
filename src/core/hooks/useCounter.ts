import { useState } from 'react'

export default function useCounter(initial: number) {
  const [cnt, setCnt] = useState(initial)
  return { cnt, setCnt }
}
