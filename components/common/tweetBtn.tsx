import * as gtag from '../../lib/gtag';
import { BASE_PATH } from '../../lib/createHead';
import { NextPage } from 'next';
import { colours } from '../../styles';
import { makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';

const useStyles = makeStyles(() => ({
  customButton: {
    display: 'block',
    width: 'fit-content',
    margin: '10px auto 30px',
    padding: '5px 10px',
    textDecoration: 'none',
    color: colours.social.twitter,
    border: `1px solid ${colours.social.twitter}`,
    borderRadius: 3,
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      color: 'white',
      background: colours.social.twitter,
    },
  },
}));

export const TweetBtn: NextPage = () => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <a
      className={classes.customButton}
      onClick={() => {
        const href = `https://twitter.com/intent/tweet?${[
          ['text', encodeURIComponent(document.title)],
          [
            'url',
            encodeURIComponent(
              BASE_PATH.replace(/(.+)\/$/, '$1') + (router.pathname !== '/' ? router.asPath : '/portfolio'),
            ),
          ],
        ]
          .map(e => `${e[0]}=${e[1]}`)
          .join('&')}`;
        gtag.event({ action: `tweet__${router.pathname}`, category: 'twitter-share', label: '' });
        window.open(href);
      }}
    >
      Share via Twitter
    </a>
  );
};
