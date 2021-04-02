import { ExternalLink } from '../../common/externalLink';
import { NextPage } from 'next';
import { WorksDatum } from '..';

export const IPT2021: NextPage = ({}) => (
  <>
    <p>
      <ExternalLink href="https://tad-toyama.jp/ipt" category="works">
        世界ポスタートリエンナーレトヤマ（IPT）
      </ExternalLink>
      は3年に1回開催されるポスターの国際展覧会であり、誰でも応募することができる。自由制作でも応募できるが、わたしは共通テーマ「INVISIBLE」に沿った作品を制作して応募した。
    </p>
    <p>
      見えないということ、わからないということは愛すべきことだ。それが好奇心を生み、それが探究心となって新しいものを作り出すエネルギーになる。ちょうど抽象概念を当てはめてしまった感情が、そのことば以上のものをもたなくなり、そのことばの辞書的な意味で上書きされていくのと似ている。見えないということをそれ自体、そのまま肯定したらどうなるかということを考えて制作した。
    </p>
  </>
);

export const IPT2021Data: WorksDatum = {
  id: 'IPT2021',
  project: 'IPT2021 "INVISIBLE"',
  year: 2021,
  collaborated: false,
  contribution: ['poster design'],
  topImg: '/img/works/IPT2021/IPT2021-top.jpg',
  works: [
    {
      name: `「'cuz it's invisible」 1`,
      img: '/img/works/IPT2021/IPT2021-1.jpg',
      topPage: true,
      alt: '',
    },
    {
      name: `「'cuz it's invisible」 2`,
      img: '/img/works/IPT2021/IPT2021-2.jpg',
      topPage: false,
      alt: '',
    },
    {
      name: `「内在」`,
      img: '/img/works/IPT2021/IPT2021-3.jpg',
      topPage: true,
      alt: '',
    },
  ],
};
