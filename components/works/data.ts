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
  topImg: string;
  year: number;
  note: string;
  collaborated: boolean;
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
        note: 'A2版。黒色の背景は、万華鏡を覗き込むと光が見えるイメージに重なる。多用したアイデンティティのひとつだ。',
        alt:
          '第70回駒場祭「七変華」 | のぞきこむと、色とりどりの華模様。ちりばめられた祭の華は、めぐり歩けば、一歩ごとにあたらしい。出遭いの予感に誘われて、もう一歩踏み出す。祭とは、くるり回せばくるりと変わる、万華鏡。',
      },
    ],
  },
  {
    id: 'MF92',
    project: '第92回五月祭',
    topImg: '',
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
