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
  awards?: string[];
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
      {
        name: 'ロゴ',
        img: '/img/blog/KF70-4.png',
        topPage: false,
        note:
          '学園祭では統一のテーマの下で印刷物、グッズ、案内サイン、ウェブサイト、映像……と様々なアウトプットが生み出される。ビジュアル自体に展開性を内在させることで、たくさんの模様が見えては消える万華鏡の世界観を表現しようとした。ここに掲載されているのは委員会内に配布した作例で、テーマを共同制作した3人の委員がそれぞれ作ったもの。',
        alt: '',
      },
      {
        name: '公式パンフレット 「ご来場の皆さまへ」ページ',
        img: '/img/works/KF70/KF70_pam.jpg',
        topPage: false,
        alt: '',
      },
      {
        name: 'テーマ紹介看板',
        img: '/img/works/KF70/KF70_board.jpg',
        topPage: false,
        alt:
          '第70回駒場祭「七変華」 | のぞきこむと、色とりどりの華模様。ちりばめられた祭の華は、めぐり歩けば、一歩ごとにあたらしい。出遭いの予感に誘われて、もう一歩踏み出す。祭とは、くるり回せばくるりと変わる、万華鏡。',
      },
    ],
  },
  {
    id: 'akamon-restroom',
    project: '「〈空き地〉の年輪」（赤門脇トイレ デザインコンペ）',
    year: 2021,
    collaborated: true,
    collaboratedWith: [{ name: 'Marin Takeda', link: 'https://note.com/mariiint' }, { name: 'Rin Kikuchi' }],
    contribution: ['Architecture and lightning design'],
    awards: ['「（仮称）赤門脇トイレ」デザインコンペティション　優秀賞'],
    works: [
      {
        img: '/img/works/akamon-restroom/akamon-restroom-1.jpg',
        topPage: true,
        alt: '',
        note:
          '「外観は本郷キャンパスの歴史性を踏まえた良好な経年変化をもたらす素材を基調とすること」という指定があった。しかし、木やレンガ、タイルではすぐ隣にあるガラス張りの建物と調和しない。一直線に並ぶガラスとコンクリートの建物群は美しく、その「面」の美しさに参加させたいとの直感から、ガラス張りの外観を採用した。内側の化粧板が日焼けして、ゆっくりと飴色に変わっていく。あまりにゆっくりとした経年変化だが、そのくらいがこの静かな〈空き地〉の空気にあっていると思った。',
      },
      {
        img: '/img/works/akamon-restroom/akamon-restroom-2.jpg',
        topPage: false,
        alt: '',
        note:
          '車椅子使用者がトイレを利用する時、便座の左右どちらに車椅子をとめたいかは好みがある。どちらのニーズにも応えることができるよう、対称な配置とした。また、門の近くにある屋外トイレとあれば、大概の人は手荷物を置いておく台が必要だ。着替えをしたり、子どもの面倒をみたりと様々な使い方を想定し、そのいずれの場面でも困らないよう努めた。',
      },
      {
        img: '/img/works/akamon-restroom/akamon-restroom-3.jpg',
        topPage: false,
        alt: '',
        note:
          'ガラス張りの外壁の奥には、少しだけ高さの低い内壁がある。カプセル的な見た目で「〈空き地〉の保存」というコンセプトを表現するとともに、この構造を生かした間接照明を設置することで、この箱型オブジェ全体をふんわりとした照明に仕上げたかった。',
      },
      {
        img: '/img/works/akamon-restroom/akamon-restroom-2D.svg',
        topPage: false,
        alt: '平面図',
        name: '平面図・立面図',
        note: 'Illustrator製の図面たち。CADの習得を心に誓った……（笑）',
      },

      {
        name: '照明計画イメージ図',
        note:
          '日常的にキャンパスに通う人は、屋外のトイレをわざわざ頻繁には使わないだろう。でも、大学の人にもこの〈オブジェ〉に愛着を持ってほしかった。この敷地全体をやんわりとした照明としてデザインすることで、敷地の外側に対するやんわりとした緩やかな働きかけを試みた。',
        img: '/img/works/akamon-restroom/akamon-restroom-lightning.jpg',
        topPage: false,
        alt: '',
      },
      {
        name: 'ラフスケッチ',
        note:
          '公共トイレの安全を確保するには、アプローチは開放的であるべきだ。しかしこの土地に一度足を踏み入れると、目の前にあるはずの通りやそこを歩く人が、驚くほど遠く感じられる。この〈空き地〉は隔絶性を内包していて、内側から外の気配を感じることが少ない。このスケッチはそんなことを考えながら描いたものだ。それがプライベートな空間としてのトイレの安心を保障する。',
        img: '/img/works/akamon-restroom/akamon-restroom-4.jpg',
        topPage: false,
        alt: '',
      },
      {
        name: '一次審査提出書類',
        note:
          '建築デザインを説明するときに、文字はできるだけ少ない方が良いとされる（らしい）が、建築学生以外のアイデアも取り入れるという趣旨を信じ、思い切って逆を行くことにした。提出直前まで詩的な文章と向き合っているのは不安しかなかったが、この〈物語性〉をいかに空間表現に落とし込んだか、ということをどうしても伝えたかった。功を奏しただろうか。',
        img: '/img/works/akamon-restroom/akamon-restroom-document.jpg',
        topPage: false,
        alt: '',
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
        topPage: false,
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
