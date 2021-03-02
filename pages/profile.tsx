import { ArticleTitle } from '../components/article';
import { CreateHead } from '../lib/createHead';
import { NextPage } from 'next';
import { SelfSkills } from '../components/self';
import { Source } from '../components/source';
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
      <CreateHead title="Profile" />
      <ArticleTitle img="/img/topPage/self.jpg" title="Profile" alt="self portrait" />
      <div className={classes.wrapper}>
        <h1 className={classes.name}>Hiroki Kobayashi</h1>
        <p className={classes.p}>
          東京大学3年。普段は理学部で化学を学んでいます。
          <br />
          印刷物のデザインが好きです。最近はWebデザイン・開発（Vue / React）もしています。
          媒体や素材そのものを丹念に観察し、ちょっとしたおもしろさと物語性のあるデザインを心がけています。
        </p>
        <p className={classes.p}>
          デザインについて考えるようになったきっかけは、大学1年から所属していた学園祭委員での活動の影響が大きいです。
          パンフレット、グッズ、案内サイン、ウェブサイト、装飾物など、様々な媒体を作ることができる環境で、ひとつの「テーマ」に沿ったビジュアルデザインについて思索をめぐらせる日々が、「媒体や環境それ自体にはデザイン性が潜んでいて、それを引き出して物語を作るのがデザイナーの役割である」という基本姿勢をかたちづくったように思います。
        </p>
        <SelfSkills />
      </div>
      <Source />
    </>
  );
};

export default ProfilePage;
