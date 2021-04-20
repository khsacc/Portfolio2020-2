import * as gtag from '../../lib/gtag';
import { NextPage } from 'next';
import { colours, zIndex } from '../../styles';
import { headerStyle } from '../../styles';
import { makeStyles } from '@material-ui/core';
import { mrEavesBook } from '../../styles';
import { useRouter } from 'next/router';
import Link from 'next/link';

const HeaderDesign: NextPage = () => {
  const classes = makeStyles(() => ({
    top_icon: {
      width: '50px',
      display: 'block',
      margin: '0 auto 5px',
    },
    name: {
      ...mrEavesBook,
      textAlign: 'center',
      fontSize: '2em',
      lineHeight: 1,
      margin: 0,
      color: colours.main.main,
    },
    top_link: {
      textDecoration: 'none',
      cursor: 'pointer',
    },
  }))();

  const router = useRouter();

  return (
    // <Link href="/" scroll={false}>
    <a
      className={classes.top_link}
      onClick={() => {
        if (router.pathname !== '/') {
          router.push('/', '/', { scroll: false });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        gtag.event({ action: `header-link__@${router.asPath}`, category: 'header-link', label: '' });
      }}
    >
      <div>
        <img src="/img/topPage/top_icon.svg" alt="" className={classes.top_icon} />
        <h1 className={classes.name}>Hiroki Kobayashi</h1>
      </div>
    </a>
    // </Link>
  );
};

// Wrapper
export const Header: NextPage = ({}) => {
  const classes = makeStyles(() => ({
    headerWrapper: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: headerStyle.height,
      padding: 10,
      background: colours.main.back,
      zIndex: zIndex.header,
    },
  }))();
  const router = useRouter();
  const topPageScroll = () => {
    router.asPath === '/' && window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <header className={classes.headerWrapper} onClick={topPageScroll}>
      <HeaderDesign />
    </header>
  );
};
