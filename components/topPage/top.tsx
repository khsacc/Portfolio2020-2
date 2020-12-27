import { HoverBtn } from '../common/hoverBtn';
import { Parallax } from 'react-scroll-parallax';
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
    transition: 'all 0.5s 1.3s cubic-bezier(.31,.84,.59,1)',
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
  img_wrapper: {
    width: `100vw`,
    height: `calc(100vh - ${headerStyle.height}px)`,
    overflow: 'hidden',
    animation: '$imageAnim 1s ease-in-out',
    position: 'relative',
    backgroundImage: 'url("/img/topPage/top_back.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    // backgroundPosition: 'center',
  },
  img: {
    display: 'block',
    margin: '0 auto',
    width: '100%',
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
  useEffect(() => {
    setShowTheme(true);
  }, []);

  return (
    <Parallax y={[0, 0]} className={classes.wrapper}>
      {/* <img className={classes.heading} src="/img/topPage/heading.svg" alt="わくわくさせるクリエイティブ" /> */}
      <div className={classes.img_wrapper}>
        <div className={classes.theme__container}>
          <span className={[classes.theme, showTheme ? classes.theme__show : ''].join(' ')}>
            <span className={classes.theme_partial}>“わくわくさせる</span>
            <span className={classes.theme_partial}>クリエイティブ”</span>
          </span>
        </div>
      </div>
    </Parallax>
  );
};
