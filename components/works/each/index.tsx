import { AkamonRestroomData, akamonRestroom } from './akamon-restroom';
import { IPT2021, IPT2021Data } from './IPT2021';
import { KF70, KF70data } from './KF70';
import { KasaData, kasa } from './kasa';
import { LittermateData, littermate } from './littermate';
import { MF92, MF92Data } from './MF92';
import { MF93, MF93Data } from './MF93';
import { Madogiwa2021, Madogiwa2021Data } from './madogiwa2021';
import { NextPage } from 'next';
import { makeStyles } from '@material-ui/core';

// ここに並べたものが表示対象です
const articleData = {
  KF70,
  MF92,
  MF93,
  IPT2021,
  kasa,
  'akamon-restroom': akamonRestroom,
  'madogiwa-2021': Madogiwa2021,
  littermate,
};

// dataはここからexportしておいてください
export { AkamonRestroomData, KF70data, IPT2021Data, Madogiwa2021Data, MF93Data, KasaData, MF92Data, LittermateData };

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
