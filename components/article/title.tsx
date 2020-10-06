import { LineUmb } from '../common';
import { NextPage } from 'next';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';

export const ArticleTitle: NextPage<{ img: string; title: string; umbColour?: string; alt: string }> = ({
  img,
  title,
  umbColour = colours.main.sub,
  alt,
}) => {
  const classes = makeStyles(theme => ({
    wrapper: {
      width: '90%',
      maxWidth: 650,
      margin: '0 auto 10px',
      position: 'relative',
      animation: '1s $enter linear',
    },
    '@keyframes enter': {
      '0%': {
        transform: 'translateY(-2%)',
      },
      '100%': {
        transform: 'translateY(0)',
      },
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
      padding: '2px 25px',
      [theme.breakpoints.up('mobile')]: {
        fontSize: '3em',
      },
    },
    umb: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      width: '35%',
      color: umbColour,
    },
  }))();

  return (
    <div className={classes.wrapper}>
      <img src={img} className={classes.article__img} alt={alt} />
      <span className={classes.article__title}>{title}</span>
      <LineUmb className={classes.umb} />
    </div>
  );
};
