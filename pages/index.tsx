import { NextPage } from 'next';
import { Self, Top } from '../components/topPage';

const IndexPage: NextPage = () => (
  <>
    <Top />
    <Self />
  </>
);

export default IndexPage;
