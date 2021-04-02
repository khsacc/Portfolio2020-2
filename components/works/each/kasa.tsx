import { NextPage } from 'next';
import { WorksDatum } from '..';
import Link from 'next/link';

export const kasa: NextPage = ({}) => (
  <>
    <p>
      雨の日はなんとなく気分が晴れないことも多いが、傘はそんなときに出かけるのを少しだけ楽しくしてくれる。傘に打ち付ける雨音を聴いているとどこか落ち着く。緊急事態宣言で自室に引きこもる毎日を過ごしていて、いま世の中にはそんな「傘」のようなものが必要なのではないか、とふと思ったところから着想してこのシリーズは始まった。いつしか自分のアイコンのように使うようになり、このサイトもそんな流れで出来上がった。このポートフォリオのちょっとした裏話は、
      <Link href="/blog/about-this-portfolio">
        <a>「ポートフォリオ裏話」</a>
      </Link>
      に書き留めたので、併せてお読みいただけたら嬉しい。
    </p>
  </>
);

export const KasaData: WorksDatum = {
  id: 'kasa',
  project: 'あまがさ',
  year: '2020-2021',
  collaborated: false,
  contribution: ['Graphic design'],
  works: [
    {
      name: 'virtual background',
      img: '/img/works/kasa/kasa-1.jpg',
      topPage: true,
      alt: '',
      note:
        '「おうち時間をもっと楽しく」をテーマにバーチャル背景を作る、というAdobeのワークショップに参加した際に制作した、本プロジェクト最初のデザイン。トリムマークを仕込んだところがちょっとしたこだわり。色違いで展開して気分によって使い分けられる。',
    },
    {
      name: 'virtual background',
      img: '/img/works/kasa/kasa-2.jpg',
      topPage: false,
      alt: '',
      hideAsAll: true,
    },
    {
      name: '「いろいろいろ」',
      img: '/img/works/kasa/kasa-3.jpg',
      topPage: false,
      alt: '',
    },
    {
      name: 'greeting card',
      img: '/img/works/kasa/kasa-4.jpg',
      topPage: true,
      alt: 'Merry Christmas and Happy New Year 2021',
    },
    {
      name: 'ポートフォリオサイト',
      img: '/img/works/kasa/kasa-5.jpg',
      topPage: false,
      alt: 'わくわくさせるクリエイティブ',
    },
  ],
};
