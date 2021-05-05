import React from 'react'
import Head from 'next/head'

import Claps from '../components/Claps'
import * as Styled from './indexStyled.module'

export default function Home() {
  return (
    <Styled.Container>
      <Head>
        <title>Softcom</title>
      </Head>
      <Styled.Body>
        <div className="teste">
          <p>Branding</p>
          <p>Corporate Culture</p>
        </div>
        <Claps />
      </Styled.Body>
    </Styled.Container>
  )
}
