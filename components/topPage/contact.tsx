import { NextPage } from 'next';
import { Subtitle } from '../common';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  wrapper: {
    textAlign: 'center',
    marginTop: '40px',
  },

  spacing: {
    display: 'inline-block',
    width: 0,
    transition: 'width 0.4s',
  },
  mail: {
    fontSize: '1.5em',
    padding: '5px 0 2px',
    transitionTimingFunction: 'ease-in-out',
    transition: 'color 0.6s, background 0.2s',
    textDecoration: 'none',
    color: colours.main.dark,
    '&:hover': {
      color: 'white',
      background: colours.main.sub,
      '& $spacing': {
        width: 25,
      },
    },
  },
}));

export const Contact: NextPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Subtitle>Contact</Subtitle>
      <div data-aos="fade-up">
        <p>ご連絡は、以下のアドレスまでお願いいたします。</p>
        <a href="mailto:hero.key629522@gmail.com" className={classes.mail}>
          <span className={classes.spacing} />
          hero.key629522@gmail.com
          <span className={classes.spacing} />
        </a>
      </div>
    </div>
  );
};
