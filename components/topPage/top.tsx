import { UAParser } from 'ua-parser-js';
import { colours, headerStyle } from '../../styles';
import { makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    background: colours.main.back,
    textAlign: 'center',
  },
  theme__container: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  },
  theme: {
    fontSize: '1.4em',
    letterSpacing: -2,
    display: 'inline-block',
    // padding: '5px 3px 0.5px',
    paddingTop: 5,
    paddingBottom: 0.5,
    color: 'white',
    background: colours.main.sub,
    width: 'fit-content',
    margin: 10,
    opacity: 0,
    transition: 'all 0.4s 1s cubic-bezier(.31,.84,.59,1)',
    fontFamily: 'glow-sans-condensed',
    [theme.breakpoints.up('tablet')]: {
      fontSize: '1.8em',
    },
  },
  theme__show: {
    opacity: 1,
    background: colours.main.sub,
    paddingLeft: 15,
    paddingRight: 15,
    [theme.breakpoints.up('mobile')]: {
      paddingLeft: 35,
      paddingRight: 35,
    },
  },
  theme_partial: {
    display: 'inline-block',
  },
  img_wrapper_base: {
    width: `100vw`,
    height: `calc(100vh - ${headerStyle.height}px)`,
    overflow: 'hidden',
    animation: '$imageAnim 1s ease-in-out',
    position: 'relative',
  },
  img_wrapper_img: {
    backgroundImage: 'url("/img/topPage/top_back-mobile.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    '-webkit-background-size': 'cover',
    backgroundAttachment: 'fixed',
    [theme.breakpoints.up('tablet')]: {
      backgroundImage: 'url("/img/topPage/top_back.svg")',
    },
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    animation: '$imageAnim 1s ease-in-out',
  },
  '@keyframes imageAnim': {
    '0%': {
      transform: 'translateY(-3%)',
    },
    '100%': {
      transform: 'translateY(0)',
    },
  },
  heading: {
    height: '26px',
    marginBottom: 15,
  },
}));

// Wrapper
export const Top = () => {
  const classes = useStyles();

  const [showTheme, setShowTheme] = useState(false);
  const [isBackgroundSizeSupported, setIsBackgroundSizeSupported] = useState(false);
  useEffect(() => {
    // background-size: 'cover'が使えないブラウザに対する特殊処理。調べたけど詳細不明なので、ひとまずiOSをすべてはじく。
    // アイキャッチの画像をスクロールしても固定にするためにはbackground-imageを使う必要があるが、iOSではこれを諦める。
    // 後々position: fixedで実装し直せれば良いが若干複雑なので、とりあえず放置しておく
    const uaParser = new UAParser();
    const currentOS = uaParser.getOS().name;
    setIsBackgroundSizeSupported(currentOS !== 'iOS');
    setShowTheme(true);
  }, []);

  return (
    <>
      <div className={[classes.img_wrapper_base, isBackgroundSizeSupported ? classes.img_wrapper_img : ''].join(' ')}>
        {!isBackgroundSizeSupported && <img className={classes.img} src="/img/topPage/top_back-mobile.svg" />}
        <div className={classes.theme__container}>
          <span className={[classes.theme, showTheme ? classes.theme__show : ''].join(' ')}>
            <span className={classes.theme_partial}>“わくわくさせる</span>
            <span className={classes.theme_partial}>クリエイティブ”</span>
          </span>
        </div>
      </div>
    </>
  );
};
