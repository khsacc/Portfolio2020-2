/**
 * document.tsx
 * material-uiによるstyleのrenderingに関するエラーを防止するために必要です。
 * https://material-ui.com/ja/guides/server-rendering/
 */

// import 'aos/dist/aos.css';
import { BASE_PATH } from '../lib/createHead';
import { GA_ID, existsGaId } from '../lib/gtag';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { colours } from '../styles'; // needed to use AOS in react typescript
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* adobe fonts */}
          <link rel="stylesheet" href="https://use.typekit.net/vpq5jbc.css"></link>
          {/* Google Analytics */}
          {existsGaId && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script
                async
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}', {
                      page_path: window.location.pathname,
                    });`,
                }}
              />
            </>
          )}
          {/* Google Analytics */}

          {/* PWA primary color */}
          {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
          <meta name="msapplication-square70x70logo" content={`${BASE_PATH}meta/site-tile-70x70.png`} />
          <meta name="msapplication-square150x150logo" content={`${BASE_PATH}meta/site-tile-150x150.png`} />
          <meta name="msapplication-wide310x150logo" content={`${BASE_PATH}meta/site-tile-310x150.png`} />
          <meta name="msapplication-square310x310logo" content={`${BASE_PATH}meta/site-tile-310x310.png`} />
          <meta name="msapplication-TileColor" content="#0078d7" />
          <link rel="shortcut icon" type="image/vnd.microsoft.icon" href={`${BASE_PATH}meta/favicon.ico`} />
          <link rel="icon" type="image/vnd.microsoft.icon" href={`${BASE_PATH}meta/favicon.ico`} />
          <link rel="apple-touch-icon" sizes="57x57" href={`${BASE_PATH}meta/apple-touch-icon-57x57.png`} />
          <link rel="apple-touch-icon" sizes="60x60" href={`${BASE_PATH}meta/apple-touch-icon-60x60.png`} />
          <link rel="apple-touch-icon" sizes="72x72" href={`${BASE_PATH}meta/apple-touch-icon-72x72.png`} />
          <link rel="apple-touch-icon" sizes="76x76" href={`${BASE_PATH}meta/apple-touch-icon-76x76.png`} />
          <link rel="apple-touch-icon" sizes="114x114" href={`${BASE_PATH}meta/apple-touch-icon-114x114.png`} />
          <link rel="apple-touch-icon" sizes="120x120" href={`${BASE_PATH}meta/apple-touch-icon-120x120.png`} />
          <link rel="apple-touch-icon" sizes="144x144" href={`${BASE_PATH}meta/apple-touch-icon-144x144.png`} />
          <link rel="apple-touch-icon" sizes="152x152" href={`${BASE_PATH}meta/apple-touch-icon-152x152.png`} />
          <link rel="apple-touch-icon" sizes="180x180" href={`${BASE_PATH}meta/apple-touch-icon-180x180.png`} />
          <link rel="icon" type="image/png" sizes="36x36" href={`${BASE_PATH}meta/android-chrome-36x36.png`} />
          <link rel="icon" type="image/png" sizes="48x48" href={`${BASE_PATH}meta/android-chrome-48x48.png`} />
          <link rel="icon" type="image/png" sizes="72x72" href={`${BASE_PATH}meta/android-chrome-72x72.png`} />
          <link rel="icon" type="image/png" sizes="96x96" href={`${BASE_PATH}meta/android-chrome-96x96.png`} />
          <link rel="icon" type="image/png" sizes="128x128" href={`${BASE_PATH}meta/android-chrome-128x128.png`} />
          <link rel="icon" type="image/png" sizes="144x144" href={`${BASE_PATH}meta/android-chrome-144x144.png`} />
          <link rel="icon" type="image/png" sizes="152x152" href={`${BASE_PATH}meta/android-chrome-152x152.png`} />
          <link rel="icon" type="image/png" sizes="192x192" href={`${BASE_PATH}meta/android-chrome-192x192.png`} />
          <link rel="icon" type="image/png" sizes="256x256" href={`${BASE_PATH}meta/android-chrome-256x256.png`} />
          <link rel="icon" type="image/png" sizes="384x384" href={`${BASE_PATH}meta/android-chrome-384x384.png`} />
          <link rel="icon" type="image/png" sizes="512x512" href={`${BASE_PATH}meta/android-chrome-512x512.png`} />
          <link rel="icon" type="image/png" sizes="36x36" href={`${BASE_PATH}meta/icon-36x36.png`} />
          <link rel="icon" type="image/png" sizes="48x48" href={`${BASE_PATH}meta/icon-48x48.png`} />
          <link rel="icon" type="image/png" sizes="72x72" href={`${BASE_PATH}meta/icon-72x72.png`} />
          <link rel="icon" type="image/png" sizes="96x96" href={`${BASE_PATH}meta/icon-96x96.png`} />
          <link rel="icon" type="image/png" sizes="128x128" href={`${BASE_PATH}meta/icon-128x128.png`} />
          <link rel="icon" type="image/png" sizes="144x144" href={`${BASE_PATH}meta/icon-144x144.png`} />
          <link rel="icon" type="image/png" sizes="152x152" href={`${BASE_PATH}meta/icon-152x152.png`} />
          <link rel="icon" type="image/png" sizes="160x160" href={`${BASE_PATH}meta/icon-160x160.png`} />
          <link rel="icon" type="image/png" sizes="192x192" href={`${BASE_PATH}meta/icon-192x192.png`} />
          <link rel="icon" type="image/png" sizes="196x196" href={`${BASE_PATH}meta/icon-196x196.png`} />
          <link rel="icon" type="image/png" sizes="256x256" href={`${BASE_PATH}meta/icon-256x256.png`} />
          <link rel="icon" type="image/png" sizes="384x384" href={`${BASE_PATH}meta/icon-384x384.png`} />
          <link rel="icon" type="image/png" sizes="512x512" href={`${BASE_PATH}meta/icon-512x512.png`} />
          <link rel="icon" type="image/png" sizes="16x16" href={`${BASE_PATH}meta/icon-16x16.png`} />
          <link rel="icon" type="image/png" sizes="24x24" href={`${BASE_PATH}meta/icon-24x24.png`} />
          <link rel="icon" type="image/png" sizes="32x32" href={`${BASE_PATH}meta/icon-32x32.png`} />
        </Head>
        <body style={{ background: colours.main.back }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async ctx => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
