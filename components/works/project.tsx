import * as gtag from '../../lib/gtag';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import { WorksDatum } from '.';
import { WorksDetail } from './data';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';
import Link from 'next/link';

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
    transition: 'all 0.5s ease-out',
  },
  img: {
    margin: '10px auto',
    display: 'block',
    cursor: 'pointer',
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
  focusedBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: colours.works.bg,
  },
  focusedWrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 1000,
    transition: 'opacity 0.3s ease-in-out',
  },
  focusedImage: {
    display: 'block',
    maxWidth: '98vw',
    maxHeight: '98vh',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const WorkImgPopup: NextPage<{
  img: string;
  isFocused: boolean;
  setIsFocused: Dispatch<SetStateAction<boolean>>;
}> = ({ img, isFocused, setIsFocused }) => {
  const classes = useWorkImgStyles();
  const [style, setStyle] = useState({ display: 'none', opacity: 0 });
  useEffect(() => {
    // 滑らかにtransitionかつdisplay: noneを実現するためにはこんな感じしかないと思ったが、どうか？
    if (isFocused) {
      // popupを新たに表示する
      setStyle({ display: 'flex', opacity: 0 });
      setTimeout(() => {
        setStyle({ display: 'flex', opacity: 1 });
      }, 100);
    } else {
      // popupを隠す
      setStyle({ display: 'flex', opacity: 0 });
      setTimeout(() => {
        setStyle({ display: 'none', opacity: 0 });
      }, 100);
    }
  }, [isFocused]);
  return (
    <>
      <div className={classes.focusedWrapper} style={style}>
        <div
          className={classes.focusedBg}
          onClick={() => {
            setIsFocused(false);
          }}
        />
        <img src={img} className={classes.focusedImage} />
      </div>
    </>
  );
};

export const WorkImg: NextPage<{ work: WorksDetail; imgWidth?: string }> = ({ work, imgWidth }) => {
  const classes = useWorkImgStyles();
  const [isFocused, setIsFocused] = useState(false);
  const displayImage = useRef(null);

  return (
    <>
      <WorkImgPopup img={work.img} isFocused={isFocused} setIsFocused={setIsFocused} />
      <div className={[classes.wrapper].join(' ')}>
        <img
          src={work.img}
          className={classes.img}
          style={{ width: imgWidth || '100%' }}
          alt={work.name || ''}
          ref={displayImage}
          onClick={() => {
            setIsFocused(!isFocused);
          }}
        />
        <div className={classes.name}>{work.name} </div>
        <div className={classes.description}>{work.note}</div>
      </div>
    </>
  );
};

const useNextStyle = makeStyles(() => ({ wrap: { textAlign: 'right' } }));
export const NextProject: NextPage<{ nextPrj: WorksDatum; currentId: string }> = ({ nextPrj, currentId }) => {
  const classes = useNextStyle();
  return (
    <div className={classes.wrap}>
      <Link href={`/works/${nextPrj.id}`}>
        <a
          onClick={() => {
            gtag.event({
              action: `next-work__from-${currentId}__to-${nextPrj.id}`,
              category: 'next-work',
              label: `from-${currentId}__to-${nextPrj.id}`,
            });
          }}
        >
          {'>>'} Next Project: {nextPrj.project}
        </a>
      </Link>
    </div>
  );
};
