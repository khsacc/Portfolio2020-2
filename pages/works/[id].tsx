import { CreateHead } from '../../lib/createHead';
import { NextPage } from 'next';
import { PageContent } from '../../components/common/pageContent';
import { ProjectArticle, ProjectInfo, WorkImg, WorksDatum, worksData } from '../../components/works';

import { NextProject } from '../../components/works/project';
import { RelatedBlog } from '../../components/works/relatedBlog';
import { Subtitle } from '../../components/article/subtitle';

const ProjectPage: NextPage<{ prj: WorksDatum; nextPrj: WorksDatum | null }> = ({ prj, nextPrj }) => (
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
      {nextPrj && <NextProject nextPrj={nextPrj} currentId={prj.id} />}
    </PageContent>
  </>
);
export async function getStaticPaths() {
  return { paths: worksData.map(e => `/works/${e.id}`), fallback: false };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const prjIdx = worksData.findIndex(e => e.id === id);
  const nextPrjIdx = prjIdx + 1;
  return { props: { prj: worksData[prjIdx], nextPrj: worksData[nextPrjIdx] || null } }; // undefinedではエラーを吐く
}

export default ProjectPage;
