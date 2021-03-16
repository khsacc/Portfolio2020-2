export type BlogDatum = {
  id: string;
  title: string;
  img: string;
  date: string;
  pickup: boolean;
  related?: string[]; // worksのidを書く
};

/**
 * 新しいブログを追加するためには二つの操作が必要です。
 * ひとつはこのファイルにidをはじめとする情報を書いてください。
 * もうひとつは../blogProvider.tsx内にあるblogListに、本文を作成するための配列情報を登録してください。
 * このファイルに定義される情報は、レンダリングするページを決定するのに使われます。したがってこのjsonにはReactNodeを含むことができず、このように分けるしかないのです。
 */
export const blogsData: BlogDatum[] = [
  {
    id: 'MF94-workshop',
    title: 'はじめてデザインするあなたに贈る、デザインのレッスン',
    img: 'img/blog/MF94-workshop.jpg',
    date: 'Mar, 2021',
    pickup: true,
  },
  {
    id: 'MF93-workshop',
    title: 'チームの印刷デザインに対する意識改革を、ワークショップで',
    img: 'img/blog/MF93-workshop.jpg',
    date: 'Feb, 2020',
    related: ['MF93'],
    pickup: true,
  },
  {
    id: 'about-this-portfolio',
    title: 'ポートフォリオ裏話',
    img: 'img/blog/portfolio-website.jpg',
    date: 'Feb, 2021',
    related: ['kasa'],
    pickup: true,
  },
  {
    id: 'KF70-design',
    title: '第70回駒場祭のデザイン',
    img: 'img/blog/KF70.png',
    date: 'Dec, 2019',
    related: ['KF70'],
    pickup: true,
  },
];
