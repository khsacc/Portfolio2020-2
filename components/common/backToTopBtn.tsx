import { NextPage } from 'next';
import { colours } from '../../styles/colours';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import Link from 'next/link';

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
  },
  topLink_hidden: {
    opacity: 0,
    pointerEvents: 'none',
  },
}));

export const BackToTopBtn: NextPage<{ isTop: boolean }> = ({ isTop }) => {
  const classes = useStyles();
  return (
    <div className={[classes.topLinkWrapper, isTop ? classes.topLink_hidden : ''].join(' ')}>
      <Link href="/" scroll={false}>
        <a className={classes.topLink}>{'>> '}Back to Top</a>
      </Link>
    </div>
  );
};
