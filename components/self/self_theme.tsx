import { makeStyles } from '@material-ui/core';

export const SelfTheme = () => {
  const classes = makeStyles(() => ({
    subtitle: {
      letterSpacing: -3,
      fontSize: '1.8em',
      fontWeight: 300,
      textAlign: 'center',
    },
  }))();
  return (
    <>
      <h2 className={classes.subtitle}>わくわくさせるクリエイティブ</h2>
    </>
  );
};
