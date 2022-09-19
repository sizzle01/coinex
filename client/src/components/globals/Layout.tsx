import Head from 'next/head'

import React, { ReactNode } from 'react'
import { AnimatePresence } from 'framer-motion'

import Footer from '../Footer'
import Navbar from '../Navbar'


interface Props {
  children?: ReactNode
  // any props that come into the component
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>CoinEx</title>
        <link rel="shortcut icon" href="favicon.png" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="coinex" />
        <meta property="og:description" content="Welcome to coinex" />
        <meta property="og:image" content="" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <AnimatePresence>
          <Navbar />
          {children}
          <Footer />
      </AnimatePresence>
    </>
  )
}

export default Layout

