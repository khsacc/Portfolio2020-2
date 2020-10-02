import { AppProps } from 'next/app';
// import { Header } from '../components/header';
import { ThemeProvider } from '@material-ui/core/styles';
// import { headerStyle } from '../styles';
import { PageTransition } from 'next-page-transitions';
import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const useStyles = makeStyles(() => ({
  page: {
    // marginTop: headerStyle.height,
    background: '#fcf0f0',
    padding: '10px',
    minHeight: '100vh',
    width: '100%',
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

  return (
    <>
      <CssBaseLine />
      {/* <Header /> */}
      <ThemeProvider theme={theme}>
        <div className={classes.page}>
          <PageTransition timeout={600} classNames="page-transition">
            <Component {...pageProps} />
          </PageTransition>
        </div>
      </ThemeProvider>
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
        }
        .page-transition-enter-active {
          opacity: 1;
          transition: all ease-in-out 0.5s;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: all ease-in-out 0.5s;
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
