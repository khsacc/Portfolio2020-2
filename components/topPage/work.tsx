import { HoverBtn } from '../common/hoverBtn';
import { LineUmb } from '../common';
import { NextPage } from 'next';
import { Subtitle } from '../article/subtitle';
import { WorksDatum, WorksDetail } from '../works';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';
import { padding } from '../../styles/global';
import { useState } from 'react';
import { worksData } from '../works';

const useTopWorkStyles = makeStyles(() => ({
  container: {
    padding: padding.common,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  workContainer: {
    position: 'relative',
    '&:hover': {
      '& $workUmb': {
        opacity: 1,
        transform: 'scale(-1.05, 1.05)',
        bottom: '7%',
        left: '7%',
      },
    },
  },
  workImg: {
    height: 400,
    margin: 10,
  },
  workUmb: {
    width: '30%',
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    color: colours.main.light,
    transform: 'scale(-1, 1)',
    opacity: 0,
    transition: 'all 0.5s ease-out',
  },
  prjName: {
    fontSize: '0.8em',
  },
}));

const WorkContainer: NextPage<{ workidx: number; prj: WorksDatum; work: WorksDetail }> = ({ workidx, prj, work }) => {
  const classes = useTopWorkStyles();
  const [hover, setHover] = useState(false);

  return (
    <div
      className={classes.workContainer}
      key={workidx}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
      // data-aos="fade-up"
    >
      <img src={work.img} className={classes.workImg} />
      <LineUmb className={classes.workUmb} />
      <HoverBtn
        hover={hover}
        style={{ fontSize: '1em' }}
        text={
          <>
            <div className={classes.prjName}>{prj.project}</div>
            <div>{work.name}</div>
          </>
        }
      ></HoverBtn>
    </div>
  );
};

export const TopWork: NextPage = () => {
  const classes = useTopWorkStyles();

  return (
    <>
      <Subtitle>Works</Subtitle>
      <div className={classes.container}>
        {worksData.map(prj => (
          <>
            {prj.works.map((work, workidx) => (
              <WorkContainer key={workidx} workidx={workidx} work={work} prj={prj} />
            ))}
          </>
        ))}
      </div>
    </>
  );
};
