import { headerStyle } from '../../styles';
import { makeStyles } from '@material-ui/core';

export const Header = () => {
  const useStyles = makeStyles(() => ({
    headerWrapper: {
      position: 'fixed',
      top: '-5px',
      left: '-5px',
      width: 'calc(100% + 10px)',
      background: 'white',
      opacity: 0.5,
      height: headerStyle.height,
      boxShadow: '0 3px 5px #4373b5',
    },
  }));
  const classes = useStyles();
  return <div className={classes.headerWrapper}></div>;
};
