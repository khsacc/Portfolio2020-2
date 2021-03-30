import { NextPage } from 'next';
import { WorksDatum } from '..';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  blogWrapper: {
    margin: '0 auto',
    width: 'fit-content',
  },
}));

export const KF70: NextPage = ({}) => {
  const classes = useStyles();
  return (
    <>
      <p>
        2019年の駒場祭は広報局長として委員会の制作全体を統括する立場だった。デザイナーとしての仕事は主に二つで、ひとつは「テーマ」と呼ばれる制作指針の整備と管理、もうひとつはテーマの下制作される様々なデザインへのフィードバックだった。
      </p>
      <p>
        テーマは「学園祭を廻ることで様々な人や出来事に遭遇する」ことを、「万華鏡をくるくると回すと模様が変化する」ことにたとえたもので、一定の指針の下で自在にロゴを変化させるダイナミックな手法を採り入れた。
      </p>
      {/* <p>ディレクションの際に考えたことは、以下の記事に詳しくまとめた。</p>
      <div className={classes.blogWrapper}>
        <BlogContainer blog={blogsData.find(e => e.id === 'KF70-design')} />
      </div> */}
    </>
  );
};

export const KF70data: WorksDatum = {
  id: 'KF70',
  project: '第70回駒場祭',
  topImg: '/img/works/KF70/KF70_top.jpg',
  year: 2019,
  note: '',
  collaborated: true,
  contribution: ['Design Direction', 'DTP', 'Web Design'],
  works: [
    {
      name: '公式ポスター',
      img: '/img/works/KF70/KF70_poster.jpg',
      topPage: true,
      note:
        'A2版。黒色の背景は、万華鏡を覗き込むと光が見えるイメージに重なる。多用したアイデンティティのひとつだ。ディレクション中心で、自分がデザインしたものはそう多くなかった駒場祭。このポスターはわたしの思うテーマの世界観がぎゅっと詰まった、そんな作品だ。',
      alt:
        '第70回駒場祭「七変華」 | のぞきこむと、色とりどりの華模様。ちりばめられた祭の華は、めぐり歩けば、一歩ごとにあたらしい。出遭いの予感に誘われて、もう一歩踏み出す。祭とは、くるり回せばくるりと変わる、万華鏡。',
    },
    {
      name: 'ロゴ',
      img: '/img/blog/KF70-4.png',
      topPage: false,
      note:
        '学園祭では統一のテーマの下で印刷物、グッズ、案内サイン、ウェブサイト、映像……と様々なアウトプットが生み出される。ビジュアル自体に展開性を内在させることで、たくさんの模様が見えては消える万華鏡の世界観を表現しようとした。ここに掲載されているのは委員会内に配布した作例で、テーマを共同制作した3人の委員がそれぞれ作ったもの。',
      alt: '',
    },
    {
      name: '公式パンフレット 「ご来場の皆さまへ」ページ',
      img: '/img/works/KF70/KF70_pam.jpg',
      topPage: false,
      alt: '',
    },
    {
      name: 'テーマ紹介看板',
      img: '/img/works/KF70/KF70_board.jpg',
      topPage: false,
      alt:
        '第70回駒場祭「七変華」 | のぞきこむと、色とりどりの華模様。ちりばめられた祭の華は、めぐり歩けば、一歩ごとにあたらしい。出遭いの予感に誘われて、もう一歩踏み出す。祭とは、くるり回せばくるりと変わる、万華鏡。',
    },
  ],
};
