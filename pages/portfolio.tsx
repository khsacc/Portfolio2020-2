import * as gtag from '../lib/gtag';
import { NextPage } from 'next';
import { useEffect } from 'react';
// import { useRouter } from 'next/router';
import { NextRouter, withRouter } from 'next/router';
import UAParser from 'ua-parser-js';

// はじめてアクセスした場合のトップページで表示崩れが起こることがあるので、リンクを貼る用のURLを発行し、即時にリダイレクトする。
// 具体的には、携帯端末での「Profile」の恒常的な表示が上手くいかなかった。2回目以降はうまくいく。
const PortfolioPage: NextPage<{ router: NextRouter }> = ({ router }) => {
  // staticに最適化されたページでは初回レンダリングでqueryがundefinedになる。したがって手動でクエリパラメータを抽出する必要がある。

  useEffect(() => {
    window.onload = () => {
      const uaParser = new UAParser();
      gtag.event({
        action: 'on-visit__/portfolio',
        category: 'on-visit',
        label: JSON.stringify(uaParser.getResult()),
      });

      const rawQueryParamsArr = router.asPath.split('?');
      if (rawQueryParamsArr.length >= 2) {
        type QueryParams = { to: string } & { [key: string]: string };
        const queryParams: QueryParams = rawQueryParamsArr[1].split('&').reduce((pre, cur) => {
          const param = cur.split('=');
          return {
            ...pre,
            [param[0]]: param[1],
          };
        }, {} as QueryParams);
        router.push(queryParams.to, queryParams.to, { scroll: false });
      } else {
        router.push('/', '/', { scroll: false });
      }
    };
  }, []);
  return <></>;
};

export default withRouter(PortfolioPage);
