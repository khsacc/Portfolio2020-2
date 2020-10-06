import { AppProps } from 'next/app';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { LoadAnim } from '../components/loading';
import { PageTransition } from 'next-page-transitions';
import { ThemeProvider } from '@material-ui/core/styles';
import { colours, headerStyle } from '../styles';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const defaultLayout = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Hiroki Kobayashi | Design Portfolio</title>
        <link rel="stylesheet" href="https://use.typekit.net/vpq5jbc.css"></link>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseLine />
        <LoadAnim />
        <Header />
        <div
          style={{
            minHeight: `calc(100vh - ${headerStyle.height}px)`,
            width: '100%',
            marginTop: headerStyle.height,
            background: colours.main.back,
          }}
        >
          <PageTransition timeout={500} classNames="page-transition">
            <Component key={router.pathname} {...pageProps} />
          </PageTransition>
        </div>
        <Footer />
      </ThemeProvider>
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
        }

        .page-transition-enter-done {
          transition: all ease-in-out 0.5s;
          opacity: 1;
        }

        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transform: translateY(-1.5%);
          transition: all ease-in-out 0.8s;
        }
      `}</style>
    </>
  );
};

defaultLayout.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default defaultLayout;
