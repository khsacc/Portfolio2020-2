import { AppProps } from 'next/app';
// import { Header } from '../components/header';
import { ThemeProvider } from '@material-ui/core/styles';
// import { headerStyle } from '../styles';
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
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
};

defaultLayout.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default defaultLayout;
