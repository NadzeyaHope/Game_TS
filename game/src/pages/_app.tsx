import type { AppProps } from 'next/app'
import './../../components/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
