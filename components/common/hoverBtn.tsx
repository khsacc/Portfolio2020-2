import { CSSProperties, ReactNode } from 'react';
import { NextPage } from 'next';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';
import { transitionTimingfunc } from '../../styles/global';
import UAParser from 'ua-parser-js';

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
export const HoverBtn: NextPage<{
  text?: string | ReactNode;
  hover?: boolean;
  style?: CSSProperties;
  avoidMobile?: boolean;
}> = ({ text, hover, style, avoidMobile = false }) => {
  const classes = useStyles();

  const uaParser = new UAParser(); // todo: hydration errorが起こる可能性がある
  const isHoverAllowed = !['mobile', 'tablet,'].includes(`${uaParser.getDevice().type}`);

  const hoverParameter = !avoidMobile ? hover : isHoverAllowed ? hover : true;

  return (
    <span className={[classes.btn, hoverParameter ? classes.btn_hover : ''].join(' ')} style={style}>
      {text}
    </span>
  );
};
