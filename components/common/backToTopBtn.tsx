import * as gtag from '../../lib/gtag';
import { NextPage } from 'next';
import { colours } from '../../styles/colours';
import { makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useStyles = makeStyles(() => ({
  topLinkWrapper: {
    textAlign: 'center',
    margin: '10px auto',
    transition: 'all 0s 1s ease-in-out',
    height: 40,
  },
  topLink: {
    textDecoration: 'none',
    color: 'white',
    background: colours.main.sub,
    padding: 10,
    cursor: 'pointer',
  },
  topLink_hidden: {
    opacity: 0,
    pointerEvents: 'none',
  },
}));

export const BackToTopBtn: NextPage = ({}) => {
  const classes = useStyles();
  const router = useRouter();
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsTop(router.pathname === '/');
    }, 1000);
  }, [router.asPath]);
  return (
    <div className={[classes.topLinkWrapper].join(' ')}>
      {!isTop && (
        <a
          className={classes.topLink}
          onClick={() => {
            gtag.event({ action: `to-top__from-${router.asPath}`, category: 'to-top', label: '' });
            router.push('/', '/', { scroll: false });
          }}
        >
          {'>> '}Back to Top
        </a>
      )}
    </div>
  );
};
