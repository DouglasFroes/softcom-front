import React, { useRef, useState } from 'react'
import clapsApi from '../../services/claps'
import useDebounce from '../../utils/useDebounce'
import * as Styled from './styled'

interface propsButton {
  userId: string
  articleId: string
}

export default function Button(props: propsButton) {
  const { userId, articleId } = props

  const [count, setCount] = useState(1)
  const countRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  async function initAnimation() {
    if (count === 50) {
      return
    }
    setCount(1)
    // eslint-disable-next-line promise/param-names
    const sleep = m => new Promise(r => setTimeout(r, m))

    imgRef.current.className = 'imgBorder imgAnimation1'

    const countApi = await clapsApi(userId, articleId)
    await sleep(500)

    if (countApi === 0) {
      imgRef.current.className = ''
      return
    }

    countRef.current.className = 'numberAnimations'
    imgRef.current.className = 'imgBorder imgAnimation2'

    let i = 0

    for (i = 0; i < countApi; i++) {
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

  const onClickClaps = React.useCallback(useDebounce(initAnimation), [])

  return (
    <Styled.Container>
      <Styled.CountNumberRender>
        <div className="hidden" ref={countRef}>
          <p>+{count}</p>
        </div>
      </Styled.CountNumberRender>
      <div>
        <Styled.ImageRender onClick={onClickClaps}>
          <img src="/claps.svg" ref={imgRef} />
        </Styled.ImageRender>
        <p className="clapsText" ref={textRef}>
          {count} claps
        </p>
      </div>
    </Styled.Container>
  )
}
