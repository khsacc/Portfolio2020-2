import { NextPage } from 'next';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  category__wrapper: {
    padding: '4px 8px 1px',
    marginRight: 5,
    background: colours.main.sub,
    color: 'white',
  },
}));

export const WorkCategory: NextPage = props => {
  const classes = useStyles();
  return <span className={classes.category__wrapper}>{props.children}</span>;
};
