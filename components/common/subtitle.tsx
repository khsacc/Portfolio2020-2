import { NextPage } from 'next';
import { makeStyles } from '@material-ui/core';
import { mrEavesRegular, zIndex } from '../../styles';

export const Subtitle: NextPage = props => {
  // 致命的な問題として、このコンポーネント日本語に使えません
  const classes = makeStyles(theme => ({
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
    },
  }))();
  return <h2 className={classes.name}>{props.children}</h2>;
};
