import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';

// Wrapper
export const Top = () => {
  const useStyles = makeStyles(() => ({
    wrapper: {
      width: '100%',
      background: colours.main.back,
      textAlign: 'center',
    },
    img_wrapper: {
      width: '100%',
      maxHeight: '500px',
      height: 'object-fit',
      overflow: 'hidden',
      animation: '$imageAnim 1s ease-in-out',
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
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <img className={classes.heading} src="/topPage/heading.svg" alt="わくわくさせるクリエイティブ" />
      <div className={classes.img_wrapper}>
        <img className={classes.img} src="/topPage/top_back.svg" />
      </div>
    </div>
  );
};
