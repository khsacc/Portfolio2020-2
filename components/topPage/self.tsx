import { LineUmb } from '../common';
import { colours, mrEavesRegular, zIndex } from '../../styles';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    padding: 10,
    background: colours.main.back,
    textAlign: 'center',
    position: 'relative',
  },
  self: {
    width: '95%',
    [theme.breakpoints.up('mobile')]: {
      maxWidth: 450,
      width: '60%',
    },
  },
  name: {
    ...mrEavesRegular,
    fontSize: '2em',
    position: 'relative',
    zIndex: zIndex.top.self_content,
    [theme.breakpoints.up('mobile')]: {
      fontSize: '2.5em',
    },
  },
  prof: {
    position: 'relative',
    zIndex: zIndex.top.self_content,
  },
  umb: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    color: colours.main.light,
    zIndex: zIndex.top.self_umb,
    width: '60%',
    maxWidth: 450,
    height: 'fit-content',
    [theme.breakpoints.up('mobile')]: {
      width: '35%',
    },
  },
}));

// Wrapper
export const Self = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img src="/topPage/self.jpg" alt="" className={classes.self} />
      <div>
        <h2 className={classes.name}>Hiroki Kobayashi</h2>
        <p className={classes.prof}>
          東京大学3年。印刷物のデザインが得意ですが、Webデザイン・開発もやっています。
          <br />
          媒体と素材を活かすための、ちょっとした工夫について日々考えています。
        </p>
        <div className={classes.umb}>
          <LineUmb />
        </div>
      </div>
    </div>
  );
};
