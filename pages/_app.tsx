import { AppProps } from 'next/app';
import { Header } from '../components/header'
import Head from 'next/head'
import CssBaseLine from '@material-ui/core/CssBaseline'

const defaultLayout = ({ Component, pageProps }: AppProps) => (
  <>
    <CssBaseLine />
    <Head>
    </Head>
    <Header />
    <Component {...pageProps} />
  </>
)

export default defaultLayout;
