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
  awardsContainer: {
    margin: '15px 0',
    textAlign: 'center',
  },
  awards: {
    padding: 10,
    color: colours.works.awards,
    margin: 5,
    borderRight: `1px solid ${colours.works.awards}`,
    borderLeft: `1px solid ${colours.works.awards}`,
  },
}));

export const ProjectInfo: NextPage<{ prj: WorksDatum }> = ({ prj }) => {
  const classes = useStyles();
  return (
    <>
      {prj.topImg && (
        <div>
          <img className={classes.img} src={prj.topImg} />
        </div>
      )}
      <div>
        <span className={classes.title}>{prj.project}</span>
        {prj.year}年{prj.collaborated && <span>・共同制作</span>}
        {prj.collaboratedWith && prj.collaboratedWith.length > 0 && (
          <span>
            {' '}
            with{' '}
            {prj.collaboratedWith.map(e =>
              typeof e.link === 'undefined' ? (
                <span key={e.name}>{e.name}</span>
              ) : (
                <a href={e.link} rel="external nofollow noopener noreferrer" target="_blank" key={e.name}>
                  {e.name}
                </a>
              ),
            )}
          </span>
        )}
      </div>
      <div>
        {prj.collaborated && <span>Contributed in: </span>}
        {prj.contribution.join(' / ')}
      </div>
      {prj.awards && prj.awards.length > 0 && (
        <div className={classes.awardsContainer}>
          {prj.awards.map((award, idx) => (
            <div className={classes.awards} key={idx}>
              {award}
            </div>
          ))}
        </div>
      )}
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
    margin: '10px auto',
    display: 'block',
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

export const WorkImg: NextPage<{ work: WorksDetail; imgWidth?: string }> = ({ work, imgWidth }) => {
  const classes = useWorkImgStyles();
  return (
    <div className={classes.wrapper} data-aos="fade-up">
      <img src={work.img} className={classes.img} style={{ width: imgWidth || '100%' }} alt={work.name || ''} />

      <div className={classes.name}>{work.name} </div>
      <div className={classes.description}>{work.note}</div>
    </div>
  );
};
