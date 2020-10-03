import { Fade, makeStyles } from '@material-ui/core';
import { LineUmb } from '../common';
import { NextPage } from 'next';
import { colours, zIndex } from '../../styles';
import { useEffect, useState } from 'react';

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
  }))();

  const [showAnim, setShowAnim] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowAnim(false);
    }, 850);
  }, []);
  // todo: react-css-transition

  return (
    <Fade
      in={showAnim}
      timeout={{
        appear: 0,
        enter: 0,
        exit: 800,
      }}
    >
      <div className={classes.basement}>
        <div>
          <LineUmb className={classes.umb} />
          <br />
          Welcome!
        </div>
      </div>
    </Fade>
  );
};
