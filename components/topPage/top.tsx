import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';

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
    padding: '5px 10px 0.5px',
    color: 'white',
    background: colours.main.sub,
    width: 'fit-content',
    margin: 10,
    fontFamily: 'glow-sans-condensed',
    [theme.breakpoints.up('tablet')]: {
      fontSize: '1.8em',
    },
    [theme.breakpoints.up('mobile')]: {
      padding: '5px 35px 0.5px',
    },
  },
  theme_partial: {
    display: 'inline-block',
  },
  img_wrapper: {
    width: '100%',
    maxHeight: '500px',
    height: 'object-fit',
    overflow: 'hidden',
    animation: '$imageAnim 1s ease-in-out',
    position: 'relative',
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

  return (
    <div className={classes.wrapper}>
      {/* <img className={classes.heading} src="/img/topPage/heading.svg" alt="わくわくさせるクリエイティブ" /> */}
      <div className={classes.img_wrapper}>
        <img className={classes.img} alt="" src="/img/topPage/top_back.svg" />
        <div className={classes.theme__container}>
          <span className={classes.theme}>
            <span className={classes.theme_partial}>“わくわくさせる</span>
            <span className={classes.theme_partial}>クリエイティブ”</span>
          </span>
        </div>
      </div>
    </div>
  );
};
