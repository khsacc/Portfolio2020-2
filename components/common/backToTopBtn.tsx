import * as gtag from '../../lib/gtag';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { colours } from '../../styles/colours';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  topLinkWrapper: {
    textAlign: 'center',
    margin: '10px auto',
    transition: 'all 0s 1s ease-in-out',
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

export const BackToTopBtn: NextPage<{ currentPath: string; router: NextRouter }> = ({ currentPath, router }) => {
  const classes = useStyles();
  return (
    <div className={[classes.topLinkWrapper, currentPath === '/' ? classes.topLink_hidden : ''].join(' ')}>
      <a
        className={classes.topLink}
        onClick={() => {
          gtag.event({ action: `to-top__from-${currentPath}`, category: 'to-top', label: '' });
          router.push('/', '/', { scroll: false });
        }}
      >
        {'>> '}Back to Top
      </a>
    </div>
  );
};
