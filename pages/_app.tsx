import 'aos/dist/aos.css';
import * as gtag from '../lib/gtag';
import { AppProps } from 'next/app';
import { BackToTopBtn } from '../components/common/backToTopBtn';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { LoadAnim } from '../components/loading';
import { PageTransition } from 'next-page-transitions';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from '@material-ui/core/styles';
import { colours, headerStyle } from '../styles';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const defaultLayout = ({ Component, pageProps }: AppProps) => {
  // note that to initialize AOS, ``document`` is needed.
  useEffect(() => {
    // after mounted
    AOS.init({
      easing: 'ease-in-out-cubic',
    });
  }, []);

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const router = useRouter();
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    setIsTop(router.pathname === '/');
    setTimeout(() => {
      window.scrollTo({
        top: 0,
      });
    }, 900);
  }, [router.pathname]);

  useEffect(() => {
    if (!gtag.existsGaId) {
      return;
    }

    const handleRouteChange = path => {
      gtag.pageview(path);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/vpq5jbc.css"></link>
      </Head>
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <CssBaseLine />
          <LoadAnim />
          <Header isTop />
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
          {<BackToTopBtn isTop={isTop} />}
          <Footer currentPage={router.pathname} />
        </ParallaxProvider>
      </ThemeProvider>

      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
          height: 100%;
          width: 100%;
        }

        .page-transition-enter-done {
          transition: all ease-in-out 0.5s;
          opacity: 1;
          height: 100%;
          width: 100%;
        }

        .page-transition-exit {
          opacity: 1;
          height: 100%;
          width: 100%;
        }
        .page-transition-exit-active {
          opacity: 0;
          transform: translateY(-1.5%);
          transition: all ease-in-out 0.8s;
          height: 100%;
          width: 100%;
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
