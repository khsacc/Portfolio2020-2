import { NextPage } from 'next';
import { Subtitle } from '../common';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  centre: {
    textAlign: 'center',
  },
  mail: {
    fontSize: '1.5em',
  },
}));

export const Contact: NextPage = () => {
  const classes = useStyles();
  return (
    <>
      <Subtitle>Contact</Subtitle>
      <div className={classes.centre} data-aos="fade-up">
        <p>以下の e-mail アドレスまでお願いいたします。</p>
        <a>hero.key629522@gmail.com</a>
      </div>
    </>
  );
};
