import { BlogContainer } from '../topPage/blog';
import { NextPage } from 'next';
import { Subtitle } from '../common';
import { blogsData } from '../blog/each';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  blogDesc: { textAlign: 'center' },
  wrapper: { display: 'flex', justifyContent: 'center' },
}));
export const RelatedBlog: NextPage<{ workId: string }> = props => {
  const classes = useStyles();
  const relatedBlogs = blogsData.filter(e => e.related && e.related.includes(props.workId));
  return (
    <>
      {relatedBlogs.length > 0 && (
        <>
          <Subtitle disableFade={true}>Blog</Subtitle>
          <div className={classes.blogDesc}>関連するブログ</div>
          <div className={classes.wrapper}>
            {relatedBlogs.map(blog => (
              <BlogContainer blog={blog} key={blog.id} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
