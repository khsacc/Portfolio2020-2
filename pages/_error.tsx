import { NextPage, NextPageContext } from 'next';
import { colours } from '../styles';
import { makeStyles } from '@material-ui/core';
import React from 'react';

// https://nextjs.org/docs/advanced-features/custom-error-page

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 100px)',
    width: '100%',
    fontSize: '1.5em',
  },
  statusCode: {
    fontWeight: 'bold',
    display: 'inline-block',
    margin: 10,
    padding: 10,
    borderRight: `1px solid ${colours.main.dark}`,
  },
}));

const Error: NextPage<{ statusCode: number }> = ({ statusCode }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <span className={classes.statusCode}>{statusCode}</span>
      {statusCode === 404 ? 'Page not found.' : 'error occurred.'}
    </div>
  );
};

Error.getInitialProps = async ({ res }: NextPageContext) => ({
  statusCode: res.statusCode,
}); // SSR

export default Error;
