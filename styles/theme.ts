import { createMuiTheme } from '@material-ui/core';

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    se: true;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const glowSansCondR = {
  fontFamily: 'glow-sans-condensed',
  fontStyle: 'sans-serif',
  // fontDisplay: 'swap',
  fontWeight: 400,
  src: `url("https://hero-key629522.vercel.app/typefaces/GlowSansJ-Condensed-Regular.woff") format('woff')`,
  // unicodeRange:
  //   'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
  breakpoints: {
    values: {
      se: 280,
      mobile: 414,
      tablet: 820,
      laptop: 1024,
      desktop: 1280,
    },
  },
  typography: {
    fontFamily: ['mr-eaves-modern', 'glow-sans-condensed'].join(', '),
    fontSize: 17,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [glowSansCondR],
      },
    },
  },
  palette: {
    text: {
      primary: '#5c3030',
    },
  },
});

export default theme;
