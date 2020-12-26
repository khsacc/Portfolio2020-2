import { NextPage } from 'next';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';
import { transitionTimingfunc } from '../../styles/global';

const useStyles = makeStyles(() => ({
  btn: {
    position: 'absolute',
    bottom: 30,
    left: 15,
    fontSize: '1.75em',
    background: colours.main.sub,
    color: 'white',
    transition: `all 0.8s ${transitionTimingfunc.title}`,
    opacity: 0,
    padding: '5px 0',
  },
  btn_hover: {
    padding: '5px 15px',
    opacity: 1,
  },
}));

// Wrapper
export const HoverBtn: NextPage<{ text: string; hover?: boolean }> = ({ text, hover }) => {
  const classes = useStyles();
  return <span className={[classes.btn, hover ? classes.btn_hover : ''].join(' ')}>{text}</span>;
};
