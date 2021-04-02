import { BlogDatum } from './each';
import { CSSProperties } from 'react';
import { NextPage } from 'next';
import { boxShadow, transitionTimingfunc } from '../../styles/global';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';
import Link from 'next/link';
import theme from '../../styles/theme';

const useStyles = makeStyles(theme => {
  const hoverCommon: CSSProperties = {
    transform: 'scale(1.0075)',
    borderRadius: 5,
  };
  const hoverTransitionTimingFunction: CSSProperties = {
    transition: `all 0.5s ${transitionTimingfunc.workImg}`,
  };
  return {
    wrapper: {
      margin: '40px auto',
      position: 'relative',
      width: '100%',
      maxWidth: 750,
      height: 'fit-content',
      ...hoverTransitionTimingFunction,
      '&:hover': {
        ...hoverCommon,
        boxShadow: boxShadow.workImg,
      },
      [theme.breakpoints.up('tablet')]: {
        '&:hover': {
          '& $cover': {
            background: 'rgba(100, 50, 50, 0.8)',
            ...hoverCommon,
          },
          ' & $img': {
            ...hoverCommon,
          },
        },
      },
    },
    wrapper__atag: {
      textDecoration: 'none',
      color: colours.main.dark,
      [theme.breakpoints.up('tablet')]: {
        color: 'white',
      },
    },
    img: {
      display: 'block',
      margin: '10px auto',
      width: '90%',
      ...hoverTransitionTimingFunction,
      [theme.breakpoints.up('tablet')]: {
        width: '100%',
        margin: 0,
      },
    },
    cover: {
      display: 'none',
      [theme.breakpoints.up('tablet')]: {
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        background: 'rgba(100, 50, 60, 0.6)',
        ...hoverTransitionTimingFunction,
      },
    },
    letter__wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: 15,
      [theme.breakpoints.up('tablet')]: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
      },
    },
  };
});

export const BlogIndex: NextPage<{ data: BlogDatum[] }> = ({ data }) => {
  const classes = useStyles(theme);
  return (
    <>
      {data.map((datum, idx) => (
        <Link href={`/blog/${datum.id}`} key={datum.id}>
          <a className={classes.wrapper__atag}>
            <div key={datum.id} className={classes.wrapper}>
              <img src={datum.img} className={classes.img} />
              <div className={classes.cover} />
              <div className={classes.letter__wrapper}>
                <div>No. {idx + 1}</div>
                <h2>{datum.title}</h2>
                <p>{datum.note}</p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </>
  );
};
