export type WorksDetail = {
  name?: string;
  note?: string;
  img: string;
  alt: string;
  topPage: boolean;
};

export type WorksDatum = {
  id: string;
  project: string;
  topImg?: string;
  year: number | string;
  note?: string;
  collaborated: boolean;
  collaboratedWith?: {
    name: string;
    link?: string;
  }[];
  contribution: string[];
  works: WorksDetail[];
};

export const worksData: WorksDatum[] = [
  {
    id: 'KF70',
    project: '第70回駒場祭',
    topImg: '/img/works/KF70/KF70_top.jpg',
    year: 2019,
    note: '',
    collaborated: true,
    contribution: ['Design Direction', 'DTP', 'Web Design'],
    works: [
      {
        name: '公式ポスター',
        img: '/img/works/KF70/KF70_poster.jpg',
        topPage: true,
        note:
          'A2版。黒色の背景は、万華鏡を覗き込むと光が見えるイメージに重なる。多用したアイデンティティのひとつだ。ディレクション中心で、自分がデザインしたものはそう多くなかった駒場祭。このポスターはわたしの思うテーマの世界観がぎゅっと詰まった、そんな作品だ。',
        alt:
          '第70回駒場祭「七変華」 | のぞきこむと、色とりどりの華模様。ちりばめられた祭の華は、めぐり歩けば、一歩ごとにあたらしい。出遭いの予感に誘われて、もう一歩踏み出す。祭とは、くるり回せばくるりと変わる、万華鏡。',
      },
    ],
  },
  {
    id: 'IPT2021',
    project: 'IPT2021 "INVISIBLE"',
    year: 2021,
    collaborated: false,
    contribution: ['Graphic design'],
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
  },
  {
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
  },
  {
    id: 'MF93',
    project: '第93回五月祭',
    year: 2020,
    note: '',
    collaborated: true,
    contribution: ['DTP', 'Web'],
    works: [
      {
        name: '公式ウェブサイト',
        img: '/img/works/MF93/MF93-1.jpg',
        topPage: true,
        alt: '五月祭公式グッズ',
        note:
          'ページデザインと実装をどちらも担当したのは初めての経験だった。実装を知ることで広がるデザインの幅があることを実感として知った。貴重な経験だった。',
      },
      {
        name: '公式ウェブサイト',
        img: '/img/works/MF93/MF93-2.jpg',
        topPage: false,
        alt: 'オンライン開催について',
      },
      {
        name: '東大新聞広告',
        img: '/img/works/MF93/MF93-3.jpg',
        topPage: true,
        note:
          '新聞広告はモノクロだから、すぐ重たくなってしまい世界観に合わなくなってしまう。大胆なアケ組みと書体の細さが生きる配置で、細長くてモノクロだからこその良さを追求した。',
        alt: '',
      },
      {
        name: '『オンライン企画公開の手引き』紙面デザイン',
        note:
          'PDFで配布する資料だから、スマートフォンでも、タブレットでも、PCでも読みやすいものを目指した。その結果がこの、左側に目次を配置する変則3段組。1段の幅をスマートフォンの幅に、あるいは2段分の幅をタブレットの幅にしたとき、ちょうど良い文字のサイズにしてある。PC版には少し大きいが、この時代にそれが不都合になることはないだろう。',
        img: '/img/works/MF93/MF93-5.jpg',
        topPage: true,
        alt: '',
      },
      {
        name: '新入生向け五月祭参加マニュアル 表紙',
        img: '/img/works/MF93/MF93-4.jpg',
        topPage: false,
        alt: '',
      },
    ],
  },
  {
    id: 'MF92',
    project: '第92回五月祭',
    year: 2019,
    note: '',
    collaborated: true,
    contribution: ['DTP', 'Information Signs'],
    works: [
      {
        name: '公式パンフレット表紙',
        img: '/img/works/MF92/MF92pam_cover.jpg',
        topPage: true,
        alt: '第92回五月祭「〈おもしろい〉が交差する」公式パンフレット',
      },
      {
        name: '屋内案内サイン',
        img: '/img/works/MF92/MF92navi.jpg',
        topPage: true,
        alt: '矢印で教室の方向を指し示す案内サイン。45度傾けた正方形を組み合わせて作られる。',
        note:
          '45度傾けた正方形を組み合わせてどんな数・方向も指し示せるサインをデザインした。この回のテーマは「〈おもしろい〉が交差する。」。わかりやすくあるべき案内サインにテーマを反映するのは難しいとされていたが、「交差」をうまく取り込んだ〈おもしろい〉サインができた。Twitter上では一般の方々からいくつか反応もあり、手応えのあった作品。',
      },
    ],
  },
];
