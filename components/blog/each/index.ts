export type BlogDatum = {
  id: string;
  title: string;
  img: string;
  date: string;
  related?: string[]; // worksのidを書く
};

/**
 * 新しいブログを追加するためには二つの操作が必要です。
 * ひとつはこのファイルにidをはじめとする情報を書いてください。
 * もうひとつは../blogProvider.tsx内にあるblogListに、本文を作成するための配列情報を登録してください。
 * このファイルに定義される情報は、レンダリングするページを決定するのに使われます。したがってこのjsonにはReactNodeを含むことができず、このように分けるしかないのです。
 */
export const blogsData = [
  {
    id: 'MF93-workshop',
    title: 'チームの印刷デザインに対する意識改革を、ワークショップで',
    img: '/img/blog/MF93-workshop.jpg',
    date: 'Feb, 2020',
    related: 'MF93',
  },
  {
    id: 'KF70-design',
    title: '第70回駒場祭のデザイン',
    img: '/img/blog/KF70.png',
    date: 'Dec, 2019',
    related: 'KF70',
  },
];