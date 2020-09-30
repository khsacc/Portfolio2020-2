import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
  },
}));

export const Header = () => {
  const classes = useStyles();
  return <div className={classes.wrapper}>header</div>;
};
