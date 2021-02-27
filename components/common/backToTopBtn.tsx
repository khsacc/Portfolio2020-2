import * as gtag from '../../lib/gtag';
import { NextPage } from 'next';
import { colours } from '../../styles/colours';
import { makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';

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

export const BackToTopBtn: NextPage<{ isTop: boolean }> = ({ isTop }) => {
  const classes = useStyles();
  const router = useRouter();
  const currentPathName = router.pathname;
  return (
    <div className={[classes.topLinkWrapper, isTop ? classes.topLink_hidden : ''].join(' ')}>
      <a
        className={classes.topLink}
        onClick={() => {
          gtag.event({ action: 'transition', category: 'to-top', label: currentPathName });
          router.push('/', '/', { scroll: false });
        }}
      >
        {'>> '}Back to Top
      </a>
    </div>
  );
};
