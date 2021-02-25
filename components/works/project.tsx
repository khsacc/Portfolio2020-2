import { NextPage } from 'next';
import { WorksDatum } from '.';
import { WorksDetail } from './data';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  img: { width: '100%' },
  title: {
    fontWeight: 'bold',
    marginRight: 10,
    paddingRight: 10,
    borderRight: `1px solid ${colours.main.sub}`,
  },
}));

export const ProjectInfo: NextPage<{ prj: WorksDatum }> = ({ prj }) => {
  const classes = useStyles();
  return (
    <>
      <div>
        <img className={classes.img} src={prj.topImg} />
      </div>
      <div>
        <span className={classes.title}>{prj.project}</span>
        {prj.year}年{prj.collaborated && <span>・共同制作</span>}
      </div>
      <div>
        {prj.collaborated && <span>Contributed in: </span>}
        {prj.contribution.join(' / ')}
      </div>
    </>
  );
};

// 画像表示用component
const useWorkImgStyles = makeStyles(() => ({
  wrapper: {
    width: '95%',
    margin: '25px auto',
  },
  img: {
    width: '100%',
  },
  description: {
    fontSize: '85%',
    width: '85%',
    margin: '0 auto',
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
}));
export const WorkImg: NextPage<{ work: WorksDetail }> = ({ work }) => {
  const classes = useWorkImgStyles();
  return (
    <div className={classes.wrapper}>
      <img src={work.img} className={classes.img} alt={work.name || ''} />
      <div className={classes.name}>{work.name} </div>
      <div className={classes.description}>{work.note}</div>
    </div>
  );
};
