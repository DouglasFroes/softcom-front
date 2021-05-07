import React from 'react'
import Head from 'next/head'

import Claps from '../components/Claps'
import * as Styled from './indexStyled.module'

interface propsHome {
  userId: string
  articleId: string
}

export default function Home(props: propsHome) {
  const { userId, articleId } = props

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
        <Claps userId={userId} articleId={articleId} />
      </Styled.Body>
    </Styled.Container>
  )
}
Home.getInitialProps = () => {
  /*
  ## A melhor forma de pera essa informação ##
  userId
    usar o token e no servidor resgaria as informação do  usuário
  ArticleId
    passando o id do artigo com params  */
  return {
    userId: 'ksfgks-gfgdfsndfngns',
    articleId: 'fgiodjgijdfjgidfjg'
  }
}
