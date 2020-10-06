import { NextPage } from 'next';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';
import Link from 'next/link';

export const Footer: NextPage = () => {
  const classes = makeStyles(() => ({
    wrapper: {
      // background: colours.main.dark,
      borderTop: `1px solid ${colours.main.main}`,
      padding: 3,
      color: colours.main.dark,
      textAlign: 'center',
    },
    link: {
      margin: '0 5px',
      color: colours.main.dark,
    },
  }))();
  const pages = [
    {
      href: '/',
      display: 'Top',
    },
    {
      href: '/profile',
      display: 'Profile',
    },
  ];
  return (
    <footer className={classes.wrapper}>
      Hiroki Kobayashi | Design Portfolio
      <br />
      {pages.map(page => (
        <Link href={page.href}>
          <a className={classes.link}>{page.display}</a>
        </Link>
      ))}
    </footer>
  );
};
