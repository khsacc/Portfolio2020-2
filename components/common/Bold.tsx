import { NextPage } from 'next';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  bold: { fontWeight: 'bold' },
  emphasize: { fontWeight: 'bold', color: colours.main.main },
}));

export const Bold: NextPage = props => {
  const classes = useStyles();
  return <span className={classes.bold}>{props.children}</span>;
};

export const Emphasize: NextPage = props => {
  const classes = useStyles();
  return <span className={classes.emphasize}>{props.children}</span>;
};
