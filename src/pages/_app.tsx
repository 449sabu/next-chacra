import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MyApp;
