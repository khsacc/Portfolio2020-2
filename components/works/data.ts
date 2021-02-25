export type WorksDetail = {
  name: string;
  note?: string;
  img: string;
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
        img: 'img/works/KF70/KF70_poster.jpg',
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
        name: '屋内案内サイン',
        img: 'img/works/MF92/MF92navi.jpg',
      },
      {
        name: '公式パンフレット表紙',
        img: 'img/works/MF92/MF92pam_cover.jpg',
      },
    ],
  },
];
