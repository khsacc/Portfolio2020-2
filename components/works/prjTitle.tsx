import { NextPage } from 'next';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  work: {
    textAlign: 'center',
    fontSize: '0.6em',
    borderBottom: `1px solid ${colours.main.light}`,
    margin: '0.2em',
  },
  title: {
    textAlign: 'center',
    fontSize: '0.6em',
  },
}));

export const ProjectTitle: NextPage<{ title: string }> = ({ title }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.work}>work</div>
      <div className={classes.title}>{title}</div>
    </>
  );
};
