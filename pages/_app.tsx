import { AppProps } from 'next/app';
import { Header } from '../components/header';
import { PageTransition } from 'next-page-transitions';
import { ThemeProvider } from '@material-ui/core/styles';
import { headerStyle } from '../styles';
import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CssBaseLine from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const useStyles = makeStyles(() => ({
  page: {
    minHeight: '100vh',
    width: '100%',
    marginTop: headerStyle.height,
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
      <CssBaseLine />
      <Header />
      <ThemeProvider theme={theme}>
        <div className={classes.page}>
          <PageTransition timeout={700} classNames="page-transition">
            <Component key={router.pathname} {...pageProps} />
          </PageTransition>
        </div>
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
