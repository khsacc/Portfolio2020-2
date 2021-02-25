import { NextPage } from 'next';
import { WorksDatum } from '../works';
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
        Design Direction, DTP, Web Design
      </div>
    </>
  );
};
