import { ArticleTitle } from '../components/article';
import { NextPage } from 'next';
import { SelfSkills } from '../components/self';
import { makeStyles } from '@material-ui/core';
import { padding } from '../styles/global';

const ProfilePage: NextPage = () => {
  const classes = makeStyles(() => ({
    wrapper: {
      padding: padding.common,
    },
    abs: {
      textAlign: 'center',
    },
  }))();

  return (
    <>
      <ArticleTitle img="/img/topPage/self.jpg" title="Profile" />
      <div className={classes.wrapper}>
        <p className={classes.abs}>
          東京大学3年。
          <br />
          印刷物のデザインが得意ですが、Webデザイン・開発もやっています。
          <br />
          媒体と素材を活かすための、ちょっとした工夫について日々考えています。
        </p>
        <SelfSkills />
      </div>
    </>
  );
};

export default ProfilePage;
