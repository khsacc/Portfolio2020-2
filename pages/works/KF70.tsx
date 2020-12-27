import { ArticleTitle } from '../../components/article';
import { NextPage } from 'next';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({}));

const KF70Page: NextPage = () => {
  const classes = useStyles();
  return (
    <>
      <ArticleTitle title="第70回駒場祭" img="" alt=""></ArticleTitle>
    </>
  );
};

export default KF70Page;
