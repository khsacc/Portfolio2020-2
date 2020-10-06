import { ArticleTitle } from '../components/article';
import { NextPage } from 'next';
import { SelfSkills } from '../components/self';
import { makeStyles } from '@material-ui/core';
import { padding } from '../styles/global';

const ProfilePage: NextPage = () => {
  const classes = makeStyles(() => ({
    name: {
      fontWeight: 300,
      textAlign: 'center',
      fontSize: '2.5em',
    },
    wrapper: {
      padding: padding.common,
      maxWidth: 800,
      margin: '0 auto',
    },
    p: {
      textAlign: 'center',
    },
  }))();

  return (
    <>
      <ArticleTitle img="/img/topPage/self.jpg" title="Profile" alt="self portrait" />
      <div className={classes.wrapper}>
        <h1 className={classes.name}>Hiroki Kobayashi</h1>
        <p className={classes.p}>
          東京大学3年。
          <br />
          印刷物のデザインが得意ですが、Webデザイン・開発もやっています。
          <br />
          媒体と素材を活かすための、ちょっとした工夫について日々考えています。
        </p>
        <p className={classes.p}>
          デザインについて考えるようになったきっかけは、大学1年から所属していた学園祭委員での活動の影響が大きいです。
          <br />
          パンフレット、グッズ、案内サイン、ウェブサイト、装飾物など、様々な媒体を作ることができる環境で、ひとつの「テーマ」に沿ったビジュアルデザインについて思索をめぐらせる日々が、「媒体や環境を活かす」という私の基本姿勢をかたちづくったように思います。
        </p>
        <SelfSkills />
      </div>
    </>
  );
};

export default ProfilePage;
