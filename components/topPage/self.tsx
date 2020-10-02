import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';

// Wrapper
export const Self = () => {
  const useStyles = makeStyles(() => ({
    wrapper: {
      width: '100%',
      padding: 10,
      background: colours.main.back,
      textAlign: 'center',
    },
    self: {
      width: '60%',
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img src="/topPage/self.jpg" className={classes.self} />
      <br />
      "わくわくさせるクリエイティブ"
    </div>
  );
};
