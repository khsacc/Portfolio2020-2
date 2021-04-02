import * as gtag from '../../lib/gtag';
import { HoverBtn } from '../common/hoverBtn';
import { LineUmb } from '../common';
import { NextPage } from 'next';
import { Subtitle } from '../article/subtitle';
import { WorksDatum, WorksDetail } from '../works/data';
import { boxShadow, padding, transitionTimingfunc } from '../../styles/global';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { worksData } from '../works/data';
import Link from 'next/link';
import theme from '../../styles/theme';

const useTopWorkStyles = makeStyles(theme => ({
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
      '& $workImg': {
        transform: 'scale(1.02)',
        boxShadow: boxShadow.workImg,
        borderRadius: 5,
      },
    },
  },
  workImg: {
    height: 200,
    margin: 10,
    transition: `all 0.6s ${transitionTimingfunc.workImg}`,
    [theme.breakpoints.up('mobile')]: {
      height: 250,
    },
    [theme.breakpoints.up('sm')]: {
      height: 320,
    },
    [theme.breakpoints.up('tablet')]: {
      height: 375,
    },
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

const WorkContainer: NextPage<{ workidx: number; prj: WorksDatum; work: WorksDetail; all?: boolean }> = ({
  workidx,
  prj,
  work,
  all = false,
}) => {
  const classes = useTopWorkStyles(theme);
  const [hover, setHover] = useState(false);

  const customAttributes = all
    ? {
        style: {
          height: 200,
        },
      }
    : {};

  return (
    <Link href={`/works/${prj.id}`} scroll={false}>
      <a
        onClick={() => {
          gtag.event({
            action: `${all ? 'work-index' : 'top-work'}__${prj.id}-${workidx}`,
            label: work.img,
            category: all ? 'work-index' : 'top-work',
          });
        }}
      >
        <div
          className={classes.workContainer}
          key={workidx}
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseOut={() => {
            setHover(false);
          }}
          data-aos={all ? '' : 'fade-up'}
        >
          <img src={work.img} className={classes.workImg} alt="" {...customAttributes} />
          <LineUmb className={classes.workUmb} />
          <HoverBtn
            hover={hover}
            style={{ fontSize: '1em' }}
            text={
              <>
                <div className={classes.prjName}>{prj.project}</div>
                {!all && <div>{work.name}</div>}
              </>
            }
          ></HoverBtn>
        </div>
      </a>
    </Link>
  );
};

export const TopWork: NextPage = () => {
  const classes = useTopWorkStyles();
  return (
    <>
      <Subtitle>Works</Subtitle>
      <div className={classes.container}>
        {worksData
          .reduce(
            (pre: (WorksDetail & { prj: WorksDatum })[], cur: WorksDatum) => [
              ...pre,
              ...cur.works.filter(work => work.topPage).map(work => ({ ...work, prj: cur })),
            ],
            [],
          )
          .map((work, workidx) => (
            <WorkContainer key={workidx} workidx={workidx} work={work} prj={work.prj} />
          ))}
      </div>
    </>
  );
};

export const WorkIndex: NextPage = () => {
  const classes = useTopWorkStyles();
  return (
    <>
      <Subtitle>Works</Subtitle>
      <div className={classes.container}>
        {worksData
          .reduce(
            (pre: (WorksDetail & { prj: WorksDatum })[], cur: WorksDatum) => [
              ...pre,
              ...cur.works
                .filter(work => typeof work.hideAsAll === 'undefined' || work.hideAsAll === false)
                .map(work => ({ ...work, prj: cur })),
            ],
            [],
          )
          .map((work, workidx) => (
            <WorkContainer key={workidx} workidx={workidx} work={work} prj={work.prj} all={true} />
          ))}
      </div>
    </>
  );
};
