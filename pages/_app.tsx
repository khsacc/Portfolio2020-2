import { AppProps } from 'next/app';

const defaultLayout = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
  </>
)

export default defaultLayout;
