import { NextPage } from 'next';
import { Self, Top } from '../components/topPage';
import { Source } from '../components/source';

const IndexPage: NextPage = () => (
  <>
    <Top />
    <Self />
    <Source />
  </>
);

export default IndexPage;
