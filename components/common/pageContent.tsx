import { NextPage } from 'next';
import { makeStyles } from '@material-ui/core';
import { padding } from '../../styles/global';
import { useState } from 'react';

const useStyle = makeStyles(() => ({
  wrapper: {
    padding: padding.common,
    maxWidth: 700,
    width: '100%',
    margin: '0 auto',
  },
}));
export const PageContent: NextPage = props => {
  const classes = useStyle();
  return <div className={classes.wrapper}>{props.children}</div>;
};
