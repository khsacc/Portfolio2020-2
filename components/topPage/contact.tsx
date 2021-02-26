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
  link: {
    display: 'inline-block',
    fontSize: '1.3em',
    padding: '5px 15px 2px',
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
  right: {
    borderRight: `1px solid ${colours.main.sub}`,
  },
}));

export const Contact: NextPage = () => {
  const classes = useStyles();
  const address = 'k.hiroki.listen2@gmail.com';
  return (
    <div className={classes.wrapper}>
      <Subtitle>Contact</Subtitle>
      <div data-aos="fade-up">
        {/* <p>ご連絡は、以下のアドレスまでお願いいたします。</p> */}
        <a href={`mailto:${address}`} className={[classes.link, classes.right].join(' ')}>
          <span className={classes.spacing} />
          E-mail: {address}
          <span className={classes.spacing} />
        </a>
        <a href={`https://www.instagram.com/hero__key1207/`} className={classes.link}>
          <span className={classes.spacing} />
          Instagram @hero__key1207
          <span className={classes.spacing} />
        </a>
      </div>
    </div>
  );
};
