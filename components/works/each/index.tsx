import { IPT2021 } from './IPT2021';
import { KF70 } from './KF70';
import { MF92 } from './MF92';
import { NextPage } from 'next';
import { makeStyles } from '@material-ui/core';

// ここに並べたものが表示対象です
const articleData = {
  KF70,
  MF92,
  IPT2021,
};

// 全体
const useProjectArticleStyles = makeStyles(() => ({
  wrapper: {
    paddingTop: 30,
    fontSize: '1rem',
  },
}));
export const ProjectArticle: NextPage<{ id: string }> = ({ id }) => {
  const classes = useProjectArticleStyles();
  const ArticleComponent = articleData[id];
  return (
    <div className={classes.wrapper}>
      {typeof ArticleComponent !== 'undefined' && <ArticleComponent></ArticleComponent>}
    </div>
  );
};
