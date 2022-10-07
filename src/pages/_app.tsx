import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navber from 'components/Navber'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Navber />
      </header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
