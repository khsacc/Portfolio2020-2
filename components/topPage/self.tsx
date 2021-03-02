import { HoverBtn } from '../common/hoverBtn';
import { LineUmb } from '../common';
import { NextPage } from 'next';
import { Parallax } from 'react-scroll-parallax';
import { Subtitle } from '../common';
import { colours, sectionStyle, zIndex } from '../../styles';
import { makeStyles } from '@material-ui/core';
import { padding } from '../../styles/global';
import { useState } from 'react';

export const Self: NextPage<{ showName?: boolean; isLink?: boolean }> = ({ showName = false, isLink = true }) => {
  const classes = makeStyles(theme => ({
    wrapper: {
      width: '100%',
      maxWidth: 800,
      margin: `${sectionStyle.margin}px auto`,
      padding: padding.common,
      textAlign: 'center',
      position: 'relative',
      display: 'block',
      transition: 'all 0.85s ease-in-out',
    },
    wrapper__isLink: {
      borderRadius: 7.5,
      '&:hover': {
        transform: 'scale(1.015)',
        '& $umb': {
          color: '#d19090',
          transform: 'scale(1.035) translateX(-1%)',
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
    self__wrapper__top: {
      width: '90%',
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
    profile_page__top: {
      position: 'absolute',
      bottom: 10,
      left: '50%',
      transform: 'translateX(-50%)',
    },
  }))();

  const [hover, setHover] = useState(false);

  return (
    <Parallax y={[0, 0]}>
      <div
        className={[classes.wrapper, isLink && classes.wrapper__isLink].join(' ')}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
      >
        <Parallax
          y={[-3, 3]}
          tagOuter="span"
          className={[classes.self__wrapper, !isLink ? classes.self__wrapper__top : ''].join(' ')}
        >
          <img src="/img/topPage/self.jpg" alt="self portrait" className={classes.self} />
          {isLink ? (
            <HoverBtn text=">> Profile" hover={hover} avoidMobile={true} />
          ) : (
            <span className={classes.profile_page__top}>Profile</span>
          )}
        </Parallax>

        <>
          {showName && <Subtitle>Hiroki Kobayashi</Subtitle>}
          <p className={classes.prof}>
            東京大学3年。
            <br />
            印刷物のデザインが好きです。最近はWebデザイン・開発（Vue / React）もしています。
            媒体や素材そのものを丹念に観察し、ちょっとしたおもしろさと物語性のあるデザインを心がけています。{'>>'}{' '}
            more...
          </p>
          <Parallax y={[-50, 15]} className={classes.umb}>
            <LineUmb />
          </Parallax>
        </>
      </div>
    </Parallax>
  );
};
