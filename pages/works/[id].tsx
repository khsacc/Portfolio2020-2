import { CreateHead } from '../../lib/createHead';
import { NextPage } from 'next';
import { PageContent } from '../../components/common/pageContent';
import { ProjectInfo, WorksDatum, worksData } from '../../components/works';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({}));

const ProjectPage: NextPage<{ prj: WorksDatum }> = ({ prj }) => {
  const classes = useStyles();
  return (
    <>
      <CreateHead title={prj.project}></CreateHead>
      <PageContent>
        <ProjectInfo prj={prj} />
      </PageContent>
    </>
  );
};

export async function getStaticPaths() {
  return { paths: worksData.map(e => `/works/${e.id}`), fallback: false };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const prj = worksData.find(e => e.id === id);
  return { props: { prj } };
}

export default ProjectPage;
