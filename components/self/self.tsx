import { LineUmb } from '../common';
import { NextPage } from 'next';
import { Subtitle } from '../common';
import { colours, sectionStyle, zIndex } from '../../styles';
import { makeStyles } from '@material-ui/core';

// Wrapper
export const Self: NextPage<{ showName?: boolean; isLink?: boolean }> = ({ showName = false, isLink = false }) => {
  const classes = makeStyles(theme => ({
    wrapper: {
      width: '100%',
      maxWidth: 800,
      margin: `${sectionStyle.margin}px auto`,
      padding: 10,
      background: colours.main.back,
      textAlign: 'center',
      position: 'relative',
      display: 'block',
      transition: 'all 0.85s ease-in-out',
    },
    wrapper__isLink: {
      borderRadius: 7.5,
      '&:hover': {
        // background: colours.main.hover,
        '& $umb': {
          color: '#d19090',
          transform: 'scale(1.035) translateX(-1%)',
        },
        '& $profile_page': {
          padding: '5px 15px',
          // width: 'auto',
          opacity: 1,
        },
      },
    },
    self__wrapper: {
      display: 'block',
      position: 'relative',
      margin: '0 auto',
      width: '95%',
      [theme.breakpoints.up('mobile')]: {
        maxWidth: 450,
        width: '60%',
      },
    },
    self: {
      width: '100%',
    },
    prof: {
      position: 'relative',
      zIndex: zIndex.top.self_content,
    },
    umb: {
      position: 'absolute',
      transition: 'all 0.6s ease-in-out',
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
    profile_page: {
      // display: 'block',
      position: 'absolute',
      bottom: 30,
      left: 15,
      fontSize: '1.75em',
      background: colours.main.sub,
      color: 'white',
      // width: 0,
      transition: 'all 0.8s cubic-bezier(.6,.24,.13,.65)',
      opacity: 0,
      padding: '5px 0',
    },
  }))();
  return (
    <div className={[classes.wrapper, isLink && classes.wrapper__isLink].join(' ')}>
      <span className={classes.self__wrapper}>
        <img src="/img/topPage/self.jpg" alt="self portrait" className={classes.self} />
        {isLink && <span className={classes.profile_page}>{'>>'} Profile</span>}
      </span>

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
  );
};
