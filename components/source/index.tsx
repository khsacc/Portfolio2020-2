import { NextPage } from 'next';
import { makeStyles } from '@material-ui/core';

export const Source: NextPage = () => {
  const classes = makeStyles(() => ({
    wrapper: {
      textAlign: 'center',
      marginTop: 100,
    },
    img_wrapper: {
      position: 'relative',
      height: 'fit-content',
    },
    img: {
      maxWidth: 400,
      margin: 5,
      transition: 'all 0.8s 0.05s',
    },
    img_hover: {
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translate(-50%, 0px)',
      opacity: 0,
      '&:hover': {
        opacity: 1,
      },
    },
  }))();
  return (
    <div className={classes.wrapper} data-aos="fade-up">
      本サイトのソースコードは、GitHubで公開しています。
      <br />
      <a href="https://github.com/khsacc/Portfolio2020-2/" target="_blank" rel="noreferrer external">
        <div className={classes.img_wrapper}>
          <img className={classes.img} src="/img/source/source.svg" alt="" />
          <img className={[classes.img, classes.img_hover].join(' ')} src="/img/source/source_hover.svg" alt="" />
        </div>
      </a>
    </div>
  );
};
