import { NextPage } from 'next';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  category__wrapper: {
    padding: '4px 10px 1px 0',
    marginRight: 10,
    color: colours.main.dark,
    borderRight: `1px solid ${colours.main.main}`,
    display: 'inline-block',
    // color: 'white',
  },
}));

export const WorkCategory: NextPage = props => {
  const classes = useStyles();
  return <span className={classes.category__wrapper}>{props.children}</span>;
};
