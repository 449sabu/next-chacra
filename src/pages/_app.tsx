import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WalletProvider } from '../contexts/wallet'
import Navber from 'components/Navber'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <header>
        <Navber />
      </header>
      <Component {...pageProps} />
    </WalletProvider>
  )
}

export default MyApp
