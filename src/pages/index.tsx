import React, { ChangeEvent, useRef, useState } from 'react'
import Select from '../components/Select'
import Head from 'next/head'

import { faleMais, ddd } from '../../data.json'

import * as Styled from './indexStyled.module'
import { calculateCallValue } from '../utils/calculate'
import { validateMinute, validateSelect } from '../utils/validate'
import Button from '../components/Button'

export default function Home() {
  return (
    <Styled.Container>
      <Head>
        <title>softcom</title>
      </Head>
      <Styled.Body></Styled.Body>
    </Styled.Container>
  )
}
