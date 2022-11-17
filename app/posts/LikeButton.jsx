'use client'

import { useState } from 'react'

export default function LikeButton () {
  const [liked, setLike] = useState(false)

  return (
    <button onClick={() => setLike(!liked)}>
      {liked ? '🖤' : '💜'}
    </button>
  )
}
