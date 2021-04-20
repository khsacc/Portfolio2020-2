import { Blog } from '../components/topPage/blog';
import { Contact, Self, Top, TopWork } from '../components/topPage';
import { CreateHead } from '../lib/createHead';
import { NextPage } from 'next';
import { Source } from '../components/source';
import { TopLab } from '../components/topPage/lab';
import { blogsData } from '../components/blog/each';
import { idScrollFunction } from '../lib/idScroll';
import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const useStyle = makeStyles(theme => ({
  wrapper_link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

const IndexPage: NextPage = () => {
  const classes = useStyle();
  const router = useRouter();

  useEffect(() => {
    idScrollFunction(router);
  }, []);

  // useEffect(() => {
  //   if (router.query.to === 'lab') {
  //     const rawCoordinate = document.getElementById('lab').getBoundingClientRect().top;
  //     const requiredScroll = rawCoordinate - 120;
  //     window.scrollBy({ top: requiredScroll, behavior: 'smooth' });
  //   }
  // }, [router.events]);

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
      <TopLab />
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
