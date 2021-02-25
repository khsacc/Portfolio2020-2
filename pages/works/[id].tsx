import { CreateHead } from '../../lib/createHead';
import { NextPage } from 'next';
import { PageContent } from '../../components/common/pageContent';
import { ProjectArticle, ProjectInfo, WorkImg, WorksDatum, worksData } from '../../components/works';
// import { makeStyles } from '@material-ui/core';

// const useStyles = makeStyles(() => ({}));

const ProjectPage: NextPage<{ prj: WorksDatum }> = ({ prj }) => (
  // const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  <>
    <CreateHead title={prj.project}></CreateHead>
    <PageContent>
      <ProjectInfo prj={prj} />
      <ProjectArticle id={prj.id} />
      {prj.works.map((work, idx) => (
        <WorkImg work={work} key={idx} />
      ))}
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
