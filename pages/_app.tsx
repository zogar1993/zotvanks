import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"
import styled from "styled-components"
import Image from 'next/image'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <MainContent>
          <Component {...pageProps} />
        </MainContent>
        <BioAside>
          <AvatarFrame>
            <Image
              src="/images/profile.png"
              height={192}
              width={192}
              alt="Facundo Garcia Avatar"
            />
          </AvatarFrame>
        </BioAside>
      </Layout>
    </>
  )
}
export default MyApp

const AvatarFrame = styled.div`
  margin: 0 auto;
  width: 208px;
  height: 208px;
	border: white 8px solid;
	border-radius: 4px;
`

export const BioAside = styled.aside`
	padding-top: 48px;
  width: 300px;
`

export const Layout = styled.div`
	display: flex;
  max-width: 960px;
  margin: 0 auto;
`

export const MainContent = styled.main`
  background: white;
  width: 672px;
  min-height: 100vh;
`