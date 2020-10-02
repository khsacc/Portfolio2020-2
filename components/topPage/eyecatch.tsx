import { makeStyles } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
  },
  top_icon: {
    width: '100px',
    display: 'block',
    margin: '0 auto 10px',
  },
  name: {
    fontFamily: 'mr-eaves-modern, sans-serif',
    fontWeight: 300,
    fontStyle: 'normal',
    textAlign: 'center',
    fontSize: '3.5em',
    lineHeight: 1,
    margin: 0,
    color: '#de4575',
  },
  top_link: {
    textDecoration: 'none',
  },
}));

export const TopEyecatch = () => {
  const classes = useStyles();
  return (
    <Link href="/">
      <a className={classes.top_link}>
        {/* <img className={classes.img} src="/topPage/top.jpg" /> */}
        <img src="/topPage/top_icon.svg" className={classes.top_icon} />
        <h1 className={classes.name}>
          Hiroki
          <br />
          Kobayashi
        </h1>
      </a>
    </Link>
  );
};
