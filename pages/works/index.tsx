import { CreateHead } from '../../lib/createHead';
import { WorkIndex } from '../../components/works/workIndex';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  wrapper: {
    paddingTop: 30,
  },
}));

export default function IndexPage() {
  const classes = useStyles();
  return (
    <>
      <CreateHead title="Projects" />
      <div className={classes.wrapper}>
        <WorkIndex />
      </div>
    </>
  );
}
