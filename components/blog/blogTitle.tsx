import { NextPage } from 'next';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  work: {
    textAlign: 'center',
    fontSize: '0.4em',
    borderBottom: `1px solid ${colours.main.light}`,
    margin: '0.2em',
  },
  title: {
    textAlign: 'center',
    fontSize: '0.4em',
  },
}));

export const BlogTitle: NextPage<{ title: string }> = ({ title }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.work}>blog</div>
      <div className={classes.title}>{title}</div>
    </>
  );
};
