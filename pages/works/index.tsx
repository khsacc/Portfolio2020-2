import { CreateHead } from '../../lib/createHead';
import { TopWork } from '../../components/topPage/works';
import { makeStyles } from '@material-ui/core';
import classes from '*.module.css';

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
        <TopWork />
      </div>
    </>
  );
}
