import { colours } from '../../styles';
import { headerStyle } from '../../styles';
import { makeStyles } from '@material-ui/core';
import Link from 'next/link';

const HeaderDesign = () => {
  const useStyles = makeStyles(() => ({
    top_icon: {
      width: '50px',
      display: 'block',
      margin: '0 auto 5px',
    },
    name: {
      fontFamily: 'mr-eaves-modern, sans-serif',
      fontWeight: 300,
      fontStyle: 'normal',
      textAlign: 'center',
      fontSize: '2em',
      lineHeight: 1,
      margin: 0,
      color: colours.main.main,
    },
    top_link: {
      textDecoration: 'none',
    },
  }));
  const classes = useStyles();
  return (
    <Link href="/">
      <a className={classes.top_link}>
        <img src="/topPage/top_icon.svg" className={classes.top_icon} />
        <h1 className={classes.name}>Hiroki Kobayashi</h1>
      </a>
    </Link>
  );
};

// Wrapper
export const Header = () => {
  const useStyles = makeStyles(() => ({
    headerWrapper: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: headerStyle.height,
      padding: 10,
      background: colours.main.back,
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.headerWrapper}>
      <HeaderDesign />
    </div>
  );
};
