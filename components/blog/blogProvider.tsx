import { ArticleTitle } from '../article';
import { BlogDatum } from './each';
import { KF70Design } from './each/KF70-design';
import { MF93Workshop } from './each/MF93-workshop';
import { NextPage } from 'next';
import { PageContent } from '../common/pageContent';
import { WorkImg } from '../works';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';

const blogList = {
  // keyはidにしてください。
  'MF93-workshop': MF93Workshop,
  'KF70-design': KF70Design,
};

export type BlogContent = {
  heading: string;
  content: JSX.Element;
};

const useStyles = makeStyles(() => ({
  info: {
    textAlign: 'center',
  },
  contentLink: {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  work: {
    textAlign: 'center',
    fontSize: '0.4em',
    borderBottom: `1px solid ${colours.main.light}`,
    margin: '0.2em',
  },
  title: {
    textAlign: 'center',
    fontSize: '0.4em',
  },
  heading: {
    margin: '30px 0 0',
    letterSpacing: '-1px',
  },
}));

export const BlogTitle: NextPage<{ title: string }> = ({ title }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.work}>blog</div>
      <div className={classes.title}>{title}</div>
    </>
  );
};

export const BlogProvider: NextPage<{
  data: BlogDatum;
}> = ({ data }) => {
  const classes = useStyles();
  const contents = blogList[data.id] as BlogContent[];
  return typeof contents !== 'undefined' ? (
    <PageContent>
      <ArticleTitle title={<BlogTitle title={data.title} />} img={data.img} alt=""></ArticleTitle>
      <p className={classes.info}>published: {data.date}</p>
      <ol>
        {contents.map((section, idx) => (
          <li key={idx}>
            <a
              className={classes.contentLink}
              onClick={() => {
                const elementPosition = document.getElementById(`${idx}`).getBoundingClientRect().top;
                const requiredScroll = elementPosition - 120;
                window.scrollBy({ top: requiredScroll, behavior: 'smooth' });
              }}
            >
              {section.heading}
            </a>
          </li>
        ))}
      </ol>
      {contents.map((section, idx) => (
        <div key={idx} id={`${idx}`}>
          <h2 className={classes.heading}>{section.heading}</h2>
          {section.content}
        </div>
      ))}
    </PageContent>
  ) : (
    <></>
  );
};
