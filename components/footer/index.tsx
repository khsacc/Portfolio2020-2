import * as gtag from '../../lib/gtag';
import { NextPage } from 'next';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';
// import Link from 'next/link';

export const Footer: NextPage = () => {
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
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  }))();
  const pages: { href: string; display: string }[] = [
    {
      href: '/',
      display: 'Top',
    },
    {
      href: '/profile',
      display: 'Profile',
    },
    {
      href: '/works',
      display: 'Works',
    },
    {
      href: '/blog',
      display: 'Blogs',
    },
  ];

  const router = useRouter();

  const currentPage = router.pathname;
  const currentFullPath = router.asPath;

  const handleClick = (target: string) => {
    if (target === currentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push(target, target, { scroll: false });
    }
  };

  return (
    <footer className={classes.wrapper}>
      Hiroki Kobayashi | Design Portfolio
      <br />
      {pages.map((page, idx) => (
        // const Wrapper = page.href === currentPage ? 'span' : Link;
        // const wrapperAttributes = page.href === currentPage ? {} : { href: page.href, scroll: false };
        // <Wrapper {...wrapperAttributes} key={idx}>
        <a
          className={classes.link}
          key={idx}
          onClick={() => {
            gtag.event({
              action: `footer-link__from-${currentFullPath}__to-${page.display}`,
              category: 'footer-link',
              label: `from-${currentFullPath}_to-${page.display}`,
            });
            handleClick(page.href);
          }}
        >
          {page.display}
        </a>
        // </Wrapper>
      ))}
    </footer>
  );
};
