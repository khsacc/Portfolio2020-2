import { CreateHead } from '../../lib/createHead';
import { NextPage } from 'next';
import { PageContent } from '../../components/common/pageContent';
import { ProjectArticle, ProjectInfo, WorkImg, WorksDatum, worksData } from '../../components/works';
// import { makeStyles } from '@material-ui/core';
import { RelatedBlog } from '../../components/works/relatedBlog';
import { Subtitle } from '../../components/article/subtitle';

// const useStyles = makeStyles(() => ({}));

const ProjectPage: NextPage<{ prj: WorksDatum }> = ({ prj }) => (
  // const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  <>
    <CreateHead title={prj.project} ogimage={prj.topImg ? prj.topImg : prj.works[0].img}></CreateHead>
    <PageContent>
      <ProjectInfo prj={prj} />
      <ProjectArticle id={prj.id} />
      <Subtitle>Works</Subtitle>
      {prj.works.map((work, idx) => (
        <WorkImg work={work} key={idx} />
      ))}
      <RelatedBlog workId={prj.id} />
    </PageContent>
  </>
);
export async function getStaticPaths() {
  return { paths: worksData.map(e => `/works/${e.id}`), fallback: false };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const prj = worksData.find(e => e.id === id);
  return { props: { prj } };
}

export default ProjectPage;
