import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Fragment_Mono } from 'next/font/google'
export default function App({ Component, pageProps }: AppProps) {

  return (<div className='app'>
    {/* <Header /> */}
    <Component {...pageProps} />
    <Footer />
  </div >)

}
