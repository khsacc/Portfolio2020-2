import { AppProps } from 'next/app';
import { Header } from '../components/header';
import CssBaseLine from '@material-ui/core/CssBaseline';

const defaultLayout = ({ Component, pageProps }: AppProps) => (
  <>
    <CssBaseLine />
    <Header />
    <Component {...pageProps} />
  </>
);

export default defaultLayout;
