import { CreateHead } from '../../lib/createHead';

import { Blog } from '../../components/topPage/blog';
import { Subtitle } from '../../components/common';
import { blogsData } from '../../components/blog/each';
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
      <CreateHead title="Blogs" />
      <div className={classes.wrapper}>
        <Blog data={blogsData} />
      </div>
    </>
  );
}
