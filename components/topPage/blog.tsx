import * as gtag from '../../lib/gtag';
import { BlogDatum, blogsData } from '../blog/each';
import { LineUmb, Subtitle } from '../common';
import { NextPage } from 'next';
import { boxShadow, transitionTimingfunc } from '../../styles/global';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';
import Link from 'next/link';
import theme from '../../styles/theme';

const useStyles = makeStyles(theme => ({
  comment: {
    textAlign: 'center',
    padding: '0 20px',
  },
  blogsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  wrapper: {
    padding: 20,
    width: 300,
    margin: 15,
    position: 'relative',
    transition: `all 0.7s ${transitionTimingfunc.workImg}`,
    '&:hover': {
      transform: `scale(1.03)`,
      boxShadow: boxShadow.workImg,
      borderRadius: 5,
      '& $umb': {
        color: colours.main.main,
        transform: `scale(1.05)`,
        bottom: '12%',
        right: '11%',
      },
    },
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  img: {
    display: 'block',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    letterSpacing: '-1px',
    margin: '10px 0',
    position: 'relative',
  },
  date: {
    fontSize: '90%',
    textAlign: 'right',
    position: 'relative',
  },
  umb: {
    position: 'absolute',
    color: colours.main.light,
    bottom: '10%',
    right: '10%',
    width: '30%',
    transition: `all 0.7s ease-in`,
  },
}));

export const BlogContainer: NextPage<{ blog: BlogDatum }> = ({ blog }) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <Link href={`/blog/${blog.id}`} scroll={false}>
      <a
        className={classes.link}
        onClick={() => {
          gtag.event({
            action: `blog-open__from-${router.asPath}__to-${blog.id}`,
            category: 'blog-container',
            label: '',
          });
        }}
      >
        <div className={classes.wrapper}>
          <LineUmb className={classes.umb} />
          <img src={`/${blog.img}`} className={classes.img} />
          <div className={classes.title}>{blog.title}</div>
          <div className={classes.date}>published: {blog.date}</div>
        </div>
      </a>
    </Link>
  );
};

export const Blog: NextPage<{ data: BlogDatum[]; title?: string; comment?: string }> = ({ data, title, comment }) => {
  const classes = useStyles(theme);

  return (
    <>
      <Subtitle>{title || 'Blogs'}</Subtitle>
      {comment && (
        <p className={classes.comment} data-aos="fade-up">
          {comment}
        </p>
      )}
      <div className={classes.blogsContainer} data-aos="fade-up">
        {data.map((blog, idx) => (
          <BlogContainer blog={blog} key={idx} />
        ))}
      </div>
    </>
  );
};
