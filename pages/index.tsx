import { Contact, Self, Top, TopWork } from '../components/topPage';
import { CreateHead } from '../lib/createHead';
import { NextPage } from 'next';
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
      <CreateHead title="Top" />
      <Top />
      <Link href="/profile" scroll={false}>
        <a className={classes.wrapper_link}>
          <Self />
        </a>
      </Link>
      <TopWork />
      <Contact />
      <Source />
    </>
  );
};

export default IndexPage;
