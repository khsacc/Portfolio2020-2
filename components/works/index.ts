export type WorksDetail = {
  name: string;
  note?: string;
  img: string;
};

export type WorksDatum = {
  project: string;
  year: number;
  note: string;
  works: WorksDetail[];
};

export const worksData: WorksDatum[] = [
  {
    project: '第70回駒場祭',
    year: 2019,
    note: '',
    works: [
      {
        name: '公式ポスター',
        img: 'img/works/KF70/KF70_poster.jpg',
      },
    ],
  },
  {
    project: '第92回五月祭',
    year: 2019,
    note: '',
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
