import { LineUmb } from '../common';
import { NextPage } from 'next';
import { Subtitle } from '../common';
import { colours, sectionStyle, zIndex } from '../../styles';
import { makeStyles } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  wrapper_link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  wrapper: {
    width: '100%',
    maxWidth: 800,
    margin: `${sectionStyle.margin}px auto`,
    padding: 10,
    background: colours.main.back,
    textAlign: 'center',
    position: 'relative',
    display: 'block',
    // transition: 'all 0.7s ease-in-out',
    // '&:hover': {
    //   borderRadius: 15,
    //   background: colours.main.hover,
    // },
  },
  self: {
    width: '95%',
    [theme.breakpoints.up('mobile')]: {
      maxWidth: 450,
      width: '60%',
    },
  },
  prof: {
    position: 'relative',
    zIndex: zIndex.top.self_content,
  },
  umb: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    color: colours.main.light,
    zIndex: zIndex.top.self_umb,
    width: '60%',
    maxWidth: 450,
    height: 'fit-content',
    [theme.breakpoints.up('mobile')]: {
      width: '35%',
    },
  },
}));

// Wrapper
export const Self: NextPage<{ showName?: boolean }> = ({ showName = false }) => {
  const classes = useStyles();
  return (
    <Link href="/profile" scroll={false}>
      <a className={classes.wrapper_link}>
        <div className={classes.wrapper}>
          <img src="/img/topPage/self.jpg" alt="" className={classes.self} />
          <div>
            {showName && <Subtitle>Hiroki Kobayashi</Subtitle>}
            <p className={classes.prof}>
              東京大学3年。
              <br />
              印刷物のデザインが得意ですが、Webデザイン・開発もやっています。
              <br />
              媒体と素材を活かすための、ちょっとした工夫について日々考えています。
            </p>
            <div className={classes.umb}>
              <LineUmb />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
