import * as gtag from '../../lib/gtag';
import { NextPage } from 'next';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Footer: NextPage<{ currentPage: string }> = ({ currentPage }) => {
  const classes = makeStyles(() => ({
    wrapper: {
      // background: colours.main.dark,
      borderTop: `1px solid ${colours.main.main}`,
      padding: '5px 0 25px',
      color: colours.main.dark,
      textAlign: 'center',
      fontSize: '1.2em',
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

  const scrollToTop = (target: string) => {
    target === currentPage && window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={classes.wrapper}>
      Hiroki Kobayashi | Design Portfolio
      <br />
      {pages.map((page, idx) => (
        <Link href={page.href} scroll={false} key={`footer-${idx}`}>
          <a
            className={classes.link}
            onClick={() => {
              scrollToTop(page.href);
              const router = useRouter();
              gtag.event({
                action: 'click',
                category: 'footer-link',
                label: `from-${router.pathname}_to-${page.display}`,
              });
            }}
          >
            {page.display}
          </a>
        </Link>
      ))}
    </footer>
  );
};
