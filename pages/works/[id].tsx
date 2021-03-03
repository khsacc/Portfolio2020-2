import { CreateHead } from '../../lib/createHead';
import { NextPage } from 'next';
import { PageContent } from '../../components/common/pageContent';
import { ProjectArticle, ProjectInfo, WorkImg, WorksDatum, worksData } from '../../components/works';

import { RelatedBlog } from '../../components/works/relatedBlog';
import { Subtitle } from '../../components/article/subtitle';

const ProjectPage: NextPage<{ prj: WorksDatum }> = ({ prj }) => (
  <>
    <CreateHead title={prj.project} ogimage={prj.topImg ? prj.topImg : prj.works[0].img}></CreateHead>
    <PageContent>
      <ProjectInfo prj={prj} />
      <ProjectArticle id={prj.id} />
      <Subtitle disableFade={true}>Works</Subtitle>
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
