import { NextPage } from 'next';
import { Self, SelfTheme } from '../components/self';

const ProfilePage: NextPage = () => (
  <>
    <Self showName />
    <SelfTheme />
  </>
);

export default ProfilePage;
