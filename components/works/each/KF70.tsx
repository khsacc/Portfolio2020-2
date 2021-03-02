import { BlogContainer } from '../../topPage/blog';
import { NextPage } from 'next';
import { blogsData } from '../../blog/each';
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
