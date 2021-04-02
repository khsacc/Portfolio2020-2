import { ExternalLink } from '../common/externalLink';
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
      width: '100%',
      maxWidth: '400px',
      padding: 10,
      margin: '0 auto',
    },
    img: {
      transition: 'all 0.8s 0.05s',
      width: 'calc(100% - 20px)',
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
      本サイトはNext.js + TypeScriptで開発しています。
      <br />
      ソースコードはGitHubで公開しています。
      <br />
      <div className={classes.img_wrapper}>
        <ExternalLink href="https://github.com/khsacc/Portfolio2020-2/" category="github-link">
          <img className={classes.img} src="/img/source/source.svg" alt="" />
          <img className={[classes.img, classes.img_hover].join(' ')} src="/img/source/source_hover.svg" alt="" />
        </ExternalLink>
      </div>
    </div>
  );
};
