import { CSSProperties, ReactNode } from 'react';
import { NextPage } from 'next';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';
import { transitionTimingfunc } from '../../styles/global';
import UAParser from 'ua-parser-js';

const useStyles = makeStyles(() => ({
  // note: 当該tagに付与するclassNameの側をUAParserの返す値に基づいて変更するとhydration errorが起こる可能性があるので、classの中身を変える
  btn: {
    position: 'absolute',
    bottom: 30,
    left: 15,
    fontSize: '1.75em',
    background: colours.main.sub,
    color: 'white',
    transition: `all 0.8s ${transitionTimingfunc.title}`,
    opacity: 0,
    // opacity: !avoidHover ? 0 : 1,
    // padding: !avoidHover ? '5px 0' : '5px 15px',
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
  const uaParser = new UAParser();
  const isHoverAllowed = !['mobile', 'tablet,'].includes(`${uaParser.getDevice().type}`);

  const classes = useStyles();

  // classの動的付与はuaParserの挙動がserver/clientで違うのでhydration errorの原因になる。
  const additionalStyle = avoidMobile === true && isHoverAllowed === false ? { opacity: 1, padding: '5px 15px' } : {};

  return (
    <span className={[classes.btn, hover ? classes.btn_hover : ''].join(' ')} style={{ ...style, ...additionalStyle }}>
      {text}
    </span>
  );
};
