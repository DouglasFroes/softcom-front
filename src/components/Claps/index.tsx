import React, { useRef, useState } from 'react'
import * as Styled from './styled'

interface propsButton {
  onClick?: () => void
}

export default function Button(props: propsButton) {
  const { onClick } = props
  const [count, setCount] = useState(1)
  const countRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  async function initAnimation() {
    const sleep = m => new Promise(r => setTimeout(r, m))

    imgRef.current.className = 'imgBorder imgAnimation1'

    await sleep(1000)

    countRef.current.className = 'numberAnimations'
    imgRef.current.className = 'imgBorder imgAnimation2'

    let i = 0

    for (i = 0; i < 50; i++) {
      await sleep(150)
      setCount(i + 1)
    }
    imgRef.current.className = 'imgBorder'
    countRef.current.className = 'exitAnimations'
    await sleep(1000)
    countRef.current.className = 'hidden'
    textRef.current.style.display = 'flex'
    await sleep(1000)
    imgRef.current.className = ''
    textRef.current.style.display = 'none'
  }

  return (
    <Styled.Container>
      <div className="count">
        <div className="hidden" ref={countRef}>
          <p>+{count}</p>
        </div>
      </div>
      <div>
        <div className="animation" onClick={initAnimation}>
          <img src="/claps.svg" ref={imgRef} />
        </div>
        <p className="clapsText" ref={textRef}>
          {count} claps
        </p>
      </div>
    </Styled.Container>
  )
}
