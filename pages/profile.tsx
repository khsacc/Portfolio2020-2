import { NextPage } from 'next';
import { Self, SelfSkills, SelfTheme } from '../components/self';

const ProfilePage: NextPage = () => (
  <>
    <Self showName />
    {/* <SelfTheme /> */}
    <SelfSkills />
  </>
);

export default ProfilePage;
