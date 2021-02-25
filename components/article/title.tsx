import { LineUmb } from '../common';
import { NextPage } from 'next';
import { Parallax } from 'react-scroll-parallax';
import { ReactNode, useEffect, useState } from 'react';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';
import { transitionTimingfunc } from '../../styles/global';

const useStyles = (umbColour: string) =>
  makeStyles(theme => ({
    wrapper: {
      width: '90%',
      maxWidth: 650,
      margin: '0 auto 10px',
      position: 'relative',
      transition: 'all 1.45s ease-in-out',
    },
    article__img: {
      width: '100%',
    },
    article__title: {
      fontSize: '2em',
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      background: colours.main.sub,
      color: 'white',
      opacity: 0,
      padding: '2px 0',
      transition: `all 0.8s 0.8s ${transitionTimingfunc.title}`,
      [theme.breakpoints.up('mobile')]: {
        fontSize: '3em',
      },
    },
    article__title__shown: {
      opacity: 1,
      padding: '2px 25px',
    },
    umb: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      width: '37.5%',
      color: umbColour,
      opacity: 0,
      transition: `all 1s 0.8s ${transitionTimingfunc.title}`,
    },
    umb__shown: {
      opacity: 1,
      width: '35%',
    },
  }));

export const ArticleTitle: NextPage<{ img: string; title: ReactNode; umbColour?: string; alt: string }> = ({
  img,
  title,
  umbColour = colours.main.sub,
  alt,
}) => {
  const classes = useStyles(umbColour)();

  const [entered, setEntered] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setEntered(true);
    }, 250);
  }, []);
  return (
    <div className={classes.wrapper} style={{ transform: `translateX(${entered ? 0 : -4}%)` }}>
      <Parallax y={[3, -2]}>
        <img src={img} className={[classes.article__img].join(' ')} alt={alt} />
      </Parallax>
      <span className={[classes.article__title, entered ? classes.article__title__shown : ''].join(' ')}>{title}</span>
      <LineUmb className={[classes.umb, entered ? classes.umb__shown : ''].join(' ')} />
    </div>
  );
};
