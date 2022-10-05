import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Hooter'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <footer>
        <Footer />
      </footer>
    </Html>
  )
}
