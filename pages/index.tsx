import { NextPage } from 'next';
import { Self, Top } from '../components/topPage';
import { Source } from '../components/source';
import { makeStyles } from '@material-ui/core';
import Link from 'next/link';

const IndexPage: NextPage = () => {
  const classes = makeStyles(theme => ({
    wrapper_link: {
      textDecoration: 'none',
      color: theme.palette.text.primary,
    },
  }))();

  return (
    <>
      <Top />
      <Link href="profile" scroll={false}>
        <a className={classes.wrapper_link}>
          <Self isLink={true} />
        </a>
      </Link>

      <Source />
    </>
  );
};

export default IndexPage;
