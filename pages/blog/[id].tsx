import { BlogDatum, blogsData } from '../../components/blog/each';
import { BlogProvider } from '../../components/blog/blogProvider';
import { CreateHead } from '../../lib/createHead';
import { NextPage } from 'next';
import { PageContent } from '../../components/common/pageContent';

const BlogPage: NextPage<{ blog: BlogDatum }> = ({ blog }) => (
  <>
    <CreateHead title={`blog - ${blog.title}`} ogimage={blog.img}></CreateHead>
    <PageContent>
      <BlogProvider data={blog} />
    </PageContent>
  </>
);
export async function getStaticPaths() {
  return { paths: blogsData.map(e => `/blog/${e.id}`), fallback: false };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const blog = blogsData.find(e => e.id === id);
  return { props: { blog } };
}

export default BlogPage;
