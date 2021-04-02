export type BlogDatum = {
  id: string;
  title: string;
  img: string;
  date: string;
  pickup: boolean;
  related?: string[]; // worksのidを書く
  note: string;
};

/**
 * 新しいブログを追加するためには二つの操作が必要です。
 * ひとつはこのファイルにidをはじめとする情報を書いてください。
 * もうひとつは../blogProvider.tsx内にあるblogListに、本文を作成するための配列情報を登録してください。
 * 両者の対応はidというstringでつけます。このロジックはblogProvider.tsxにあります。
 * このファイルに定義される情報は、レンダリングするページを決定するのに使われます。したがってこのjsonにはReactNodeを含むことができず、このように分けるしかないのです。別の表現では、このファイルはtsxであることができないのです。
 */
export const blogsData: BlogDatum[] = [
  {
    id: 'MF94-workshop',
    title: 'はじめてデザインするあなたに贈る、デザインのレッスン',
    img: 'img/blog/MF94-workshop.jpg',
    date: 'Mar, 2021',
    pickup: true,
    note:
      'デザインを始めてみたい、という同世代に向けて、講座とワークショップを行った記録です。わたし自身、まだまだデザイン修行中の身ですが、そんな中でも日々大切にしている考え方を伝えて、「デザインは面白そうだ」と思ってもらえるように構成してみました。',
  },
  {
    id: 'MF93-workshop',
    title: 'チームの印刷デザインに対する意識改革を、ワークショップで',
    img: 'img/blog/MF93-workshop.jpg',
    date: 'Feb, 2020',
    related: ['MF93'],
    pickup: true,
    note:
      'チーム制作の醍醐味は、メンバー同士のアイデアが混ざり合って、気づいたら誰も考えていなかったような作品ができることにあると思います。学園祭委員でのパンフレット制作をその実践の場として捉え、チームでの印刷物デザインの方法について考え、模索した記録をまとめました。',
  },
  {
    id: 'about-this-portfolio',
    title: 'ポートフォリオ裏話',
    img: 'img/blog/portfolio-website.jpg',
    date: 'Feb, 2021',
    related: ['kasa'],
    pickup: true,
    note:
      'わたしは、印刷のデザインを比較的長くやっている人間ですが、はじめてのポートフォリオはこのようにウェブサイトで制作することにしました。その理由や、工夫した点、書体へのちょっとしたこだわりなどを徒然なるままに書いてみました。',
  },
  {
    id: 'KF70-design',
    title: '第70回駒場祭のデザイン',
    img: 'img/blog/KF70.png',
    date: 'Dec, 2019',
    related: ['KF70'],
    pickup: true,
    note:
      '第70回駒場祭は、わたしの経験上もっとも大規模なデザインディレクションを担当したプロジェクトです。適切な指針を与えることの難しさなどについて振り返りながら、それ以前にはなかった試みを中心に振り返りたいと思います。',
  },
];
