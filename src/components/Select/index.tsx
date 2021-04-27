import React from 'react'
import * as Styled from './styled'

interface obj {
  id: number
  title: string
  value?: number
  destiny?: any[]
}

interface propsSelect {
  placeholder: string
  data: obj[]
  callback?: (item: []) => void
}

function Select(props: propsSelect, ref: any) {
  const { placeholder, data, callback } = props
  return (
    <Styled.Select
      ref={ref}
      onChange={() => {
        if (!callback) return
        callback(data[ref?.current?.value - 1]?.destiny as [])
      }}
      defaultValue={placeholder}
    >
      <option value={placeholder} disabled>
        {placeholder}
      </option>
      {data?.map(item => (
        <option value={item.value || item.id} key={item.id}>
          {item.title}
        </option>
      ))}
    </Styled.Select>
  )
}

export default React.forwardRef(Select)
