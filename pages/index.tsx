import { Blog } from '../components/topPage/blog';
import { Contact, Self, Top, TopWork } from '../components/topPage';
import { CreateHead } from '../lib/createHead';
import { NextPage } from 'next';
import { Source } from '../components/source';
import { blogsData } from '../components/blog/each';
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
      <Blog
        data={blogsData.filter(e => e.pickup)}
        title="Blogs"
        comment="主催したワークショップのご報告やデザインの裏側、展覧会レポートなど。丁寧に書くよう心がけるので、お読みいただけたら嬉しいです。"
      />
      <Contact />
      <Source />
    </>
  );
};

export default IndexPage;
