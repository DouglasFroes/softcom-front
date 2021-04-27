import React from 'react'
import * as Styled from './styled'

interface propsButton {
  onClick(): void
  label: string
}

export default function Button(props: propsButton) {
  const { onClick, label } = props
  return (
    <Styled.Button onClick={onClick} aria-label="button-01">
      {label}
    </Styled.Button>
  )
}
