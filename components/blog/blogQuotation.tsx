import { NextPage } from 'next';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  quotation: {
    display: 'block',
    padding: 15,
    background: colours.blog.quotation,
    margin: '15px 0',
    borderRadius: 5,
  },
}));
export const BlogQuotation: NextPage = props => {
  const classes = useStyles();
  return <span className={classes.quotation}>{props.children}</span>;
};
