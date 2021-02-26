import { LineUmb, Subtitle } from '../common';
import { NextPage } from 'next';
import { blogsData } from '../blog/each';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';
import { transitionTimingfunc } from '../../styles/global';
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
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
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

export const Blog: NextPage = () => {
  const classes = useStyles(theme);

  return (
    <>
      <Subtitle>Blog</Subtitle>
      <p className={classes.comment} data-aos="fade-up">
        主催したワークショップのご報告やデザインの裏側など。長くなりがちですが、丁寧に書くよう心がけています。是非お読みください。
      </p>
      <div className={classes.blogsContainer}>
        {blogsData.map((blog, idx) => (
          <Link href={`/blog/${blog.id}`} scroll={false}>
            <a className={classes.link}>
              <div key={idx} className={classes.wrapper}>
                <LineUmb className={classes.umb} />
                <img src={blog.img} className={classes.img} />
                <div className={classes.title}>{blog.title}</div>
                <div className={classes.date}>published: {blog.date}</div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};
