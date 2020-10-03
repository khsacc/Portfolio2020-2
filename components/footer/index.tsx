import { NextPage } from 'next';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';

export const Footer: NextPage = () => {
  const classes = makeStyles(() => ({
    wrapper: {
      background: colours.main.sub,
      padding: 3,
      color: 'white',
      textAlign: 'center',
    },
  }))();
  return (
    <footer className={classes.wrapper}>
      <div>Hiroki Kobayashi 2020</div>
    </footer>
  );
};
