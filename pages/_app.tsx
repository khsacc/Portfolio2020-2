import { AppProps } from 'next/app';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { LoadAnim } from '../components/loading';
import { PageTransition } from 'next-page-transitions';
import { ThemeProvider } from '@material-ui/core/styles';
import { colours, headerStyle } from '../styles';
import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const useStyles = makeStyles(() => ({
  page: {
    minHeight: `calc(100vh - ${headerStyle.height}px)`,
    width: '100%',
    marginTop: headerStyle.height,
    background: colours.main.back,
  },
}));

const defaultLayout = ({ Component, pageProps }: AppProps) => {
  const classes = useStyles();

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
        <div className={classes.page}>
          <PageTransition timeout={700} classNames="page-transition">
            <Component key={router.pathname} {...pageProps} />
          </PageTransition>
        </div>
        <Footer />
      </ThemeProvider>
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
        }
        .page-transition-enter-active {
          opacity: 1;
          transition: all ease-in-out 0.7s;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transform: translateY(-3%);
          transition: all ease-in-out 0.7s;
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
