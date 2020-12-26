import { Fade, makeStyles } from '@material-ui/core';
import { LineUmb } from '../common';
import { NextPage } from 'next';
import { colours, zIndex } from '../../styles';
import { useEffect, useState } from 'react';

type WelcomeLettersDatum = { d: string; time: number };

const WelcomeLetter: NextPage<{ data: WelcomeLettersDatum }> = ({ data }) => {
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(true);
  }, data.time);

  const classes = makeStyles(() => ({
    welcome__base: {
      opacity: 0,
      transform: 'translateY(5px)',
      transition: 'all 0.3s ease-in-out',
    },
    welcome__show: {
      transform: 'translateY(0)',
      opacity: 1,
    },
  }))();
  return (
    <path
      className={[classes.welcome__base, show ? classes.welcome__show : ''].join(' ')}
      style={{ fill: '#fff' }}
      d={data.d}
    ></path>
  );
};

export const LoadAnim: NextPage = () => {
  const classes = makeStyles(() => ({
    basement: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      background: colours.main.sub,
      zIndex: zIndex.load_anim.base,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
    },
    umb: {
      width: '45%',
      transform: 'translateY(-10px) scale(0.8)',
      opacity: 0,
      transition: 'all 0.6s ease-in-out',
    },
    umb__show: {
      opacity: 1,
      transform: 'translateY(0) scale(0.9)',
    },
    exit: {
      opacity: 1,
    },
    exitActive: {
      transition: 'all 0.8s ease-in-out',
    },
    exitDone: {
      opacity: 0,
    },
    welcome: {
      width: 150,
    },
  }))();

  // アニメーション自体の表示切り替え
  const [showAnim, setShowAnim] = useState(true);
  const [showUmb, setShowUmb] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowUmb(true);
    }, 200);
    setTimeout(() => {
      setShowAnim(false);
    }, 1000);
  }, []);

  const welcomeSvg: WelcomeLettersDatum[] = [
    // LoadAnimはフォントの読み込み前に表示されることが予想されるので文字は全てSVG
    {
      d:
        'M.3.34H3.56L6,19.86c.05.44,0,1.59,0,1.63a16.52,16.52,0,0,1,.71-1.63L16,.34h2l2.38,19.52c.05.44.09,1.54.09,1.63a12.12,12.12,0,0,1,.62-1.63L30.53.34h3.26L20.65,26.78H18.58L16,8.62c0-.39-.17-1.45-.17-1.45s-.44,1.06-.62,1.45l-9,18.16H4.09Z',
    },
    {
      d:
        'M32.46,19a9.27,9.27,0,0,1,8.95-7.75c2.82,0,4.67,1.72,4.27,3.79s-3.79,5.2-10.44,6.08a4,4,0,0,0,4.36,3.79,6.94,6.94,0,0,0,4.5-1.76l1,1.58a8.82,8.82,0,0,1-6.3,2.51C34.23,27.26,31.8,23,32.46,19Zm10.36-3.83c.13-.79-.49-1.63-1.81-1.63-2.29,0-5.07,2.07-5.68,5.73C39.21,18.85,42.55,16.73,42.82,15.19Z',
    },
    {
      d:
        'M48.41,23.61,52.56.34l3.13-.53-4.23,23.8c-.18,1.1.08,1.58.74,1.58a5,5,0,0,0,1.28-.26v1.32a5.23,5.23,0,0,1-2.77.84C49,27.09,48,26.07,48.41,23.61Z',
    },
    {
      d:
        'M70,15.19A6.17,6.17,0,0,0,66,13.6a6,6,0,0,0-6,5.25c-.61,3.52,1.24,6.08,4.59,6.08a5.74,5.74,0,0,0,3.35-1.19l1,1.5a7.29,7.29,0,0,1-5.37,2c-4.72,0-7.32-4.18-6.61-8.46a9,9,0,0,1,8.86-7.53,7.31,7.31,0,0,1,4.62,1.58Z',
    },
    {
      d:
        'M79.61,27.35c-5,0-7.8-4.1-7-8.5a9.06,9.06,0,0,1,8.82-7.67c5.06,0,7.79,4.14,7.05,8.5A9,9,0,0,1,79.61,27.35Zm1.68-13.83c-2.6,0-5.07,2.07-5.64,5.37C75,22.73,76.88,25,79.7,25s5.07-2.12,5.64-5.38C86,15.81,84.11,13.52,81.29,13.52Z',
    },
    {
      d:
        'M111.47,24.53c0-2.47,1.5-5.46,1.5-8.24,0-1.72-.53-2.47-1.81-2.47-1.8,0-4.76,2.07-5.59,6.79l-1.11,6.17h-3L103,18.1c.53-2.87.27-4.28-1.59-4.28s-4.71,2.07-5.55,6.79l-1.1,6.17h-3l2.11-11.94c.18-1.1-.08-1.59-.74-1.59a4.88,4.88,0,0,0-1.28.27V12.19a5.19,5.19,0,0,1,2.77-.83c1.68,0,2.69,1.23,2.34,3.43,1.5-2.07,3.48-3.52,5.55-3.52,2.51,0,3.7,1.63,3.79,4.05,1.59-2.6,3.84-4.05,6-4.05,2.56,0,3.79,1.8,3.79,4.4,0,3.18-1.5,6.17-1.5,8.6a.83.83,0,0,0,.84.92,5,5,0,0,0,1.28-.26v1.32a5,5,0,0,1-2.69.84A2.34,2.34,0,0,1,111.47,24.53Z',
    },
    {
      d:
        'M119.8,19a9.26,9.26,0,0,1,9-7.75c2.82,0,4.67,1.72,4.27,3.79s-3.79,5.2-10.44,6.08a4,4,0,0,0,4.36,3.79,6.9,6.9,0,0,0,4.49-1.76l1,1.58a8.83,8.83,0,0,1-6.31,2.51C121.56,27.26,119.14,23,119.8,19Zm10.36-3.83c.13-.79-.49-1.63-1.81-1.63-2.29,0-5.07,2.07-5.69,5.73C126.54,18.85,129.89,16.73,130.16,15.19Z',
    },
    {
      d:
        'M136.1,24.84a2.57,2.57,0,0,1,2.51-2.29,2,2,0,0,1,2.08,2.29,2.58,2.58,0,0,1-2.52,2.29A2,2,0,0,1,136.1,24.84ZM140.69.34h4.09l-4.53,19.39h-1.94Z',
    },
  ].map((e, i) => ({ ...e, time: i * 70 + 250 }));

  return (
    <Fade
      in={showAnim}
      timeout={{
        appear: 0,
        enter: 0,
        exit: 1000,
      }}
    >
      <div className={classes.basement}>
        <div>
          <LineUmb className={[classes.umb, showUmb ? classes.umb__show : ''].join(' ')} />
          <br />
          <svg className={classes.welcome} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145 27">
            <defs>
              <style>.cls-1{'{fill:#fff;}'}</style>
            </defs>
            {welcomeSvg.map((data, i) => (
              <WelcomeLetter key={i} data={data}></WelcomeLetter>
            ))}
          </svg>
        </div>
      </div>
    </Fade>
  );
};
