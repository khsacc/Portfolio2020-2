import { CreateHead } from '../../lib/createHead';
import { WorkIndex } from '../../components/topPage/works';
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
      <CreateHead />
      <div className={classes.wrapper}>
        <WorkIndex />
      </div>
    </>
  );
}
