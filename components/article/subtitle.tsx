import { LineUmb } from '../common';
import { NextPage } from 'next';
import { colours, mrEavesRegular, zIndex } from '../../styles';
import { makeStyles } from '@material-ui/core';

export const Subtitle: NextPage = props => {
  const classes = makeStyles(theme => ({
    wrapper: {
      position: 'relative',
      marginTop: '1em',
    },
    umb: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      height: 80,
      color: colours.main.main,
    },
    name: {
      ...mrEavesRegular,
      textAlign: 'center',
      fontSize: '2em',
      position: 'relative',
      zIndex: zIndex.top.self_content,
      [theme.breakpoints.up('mobile')]: {
        fontSize: '2.5em',
      },
      fontFeatureSettings: '"palt"',
      background: colours.main.subtitle_back,
      margin: '1.7em 0 1em',
    },
  }))();
  return (
    <div className={classes.wrapper} data-aos="fade-up" data-aos-duration="600" data-aos-offset="50">
      <LineUmb className={classes.umb} />
      <h2 className={classes.name}>{props.children}</h2>
    </div>
  );
};
