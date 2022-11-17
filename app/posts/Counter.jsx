'use client'

import { React, useState } from 'react'

export default function Counter () {
  const [counter, setCount] = useState(0)

  return (
    <button onClick={() => setCount(counter + 1)}>{counter}</button>
  )
}
