import { BlogImg } from '../../blog/blogImg';
import { BlogQuotation } from '../../blog/blogQuotation';
import { ExternalLink } from '../../common/externalLink';
import { NextPage } from 'next';
import { WorksDatum } from '..';

export const akamonRestroom: NextPage = ({}) => (
  <>
    <p>
      <ExternalLink href="https://www.u-tokyo.ac.jp/focus/ja/events/z0506_00002.html" category="works">
        「（仮称）赤門脇トイレ」デザインコンペティション
      </ExternalLink>
      は学内限定で開催された建築デザインコンペティションで、赤門のすぐそばにある5m×5mの小さな土地に多目的トイレをつくるというものだった。共同制作者に建築を学んだことがある人はいなかったし、わたし自身建築デザインにきちんと取り組むのは人生で初めてだったが、最終審査のプレゼンテーションまで進むことができた。結果は応募総数63点中、次点の優秀賞。まず自分自身が結果に驚いた。
    </p>
    <p>
      コンペティションへの参加を決めてからこの地を初めて訪れたのはある日の夜だった。生い茂る雑草に覆いかぶさる暗闇の中に、これまで存在すら気がつかなかった塀が佇んでいた。この土地が〈本郷キャンパスの歴史〉から取り残されてきた土地なのだと感じるようになった。この土地が、素朴な美しい塀を取り囲む静けさを抱く〈空き地〉であることが、とても魅力的に感じられてきた。
    </p>
    <p>
      思えば、本郷キャンパスは建物が多すぎて窮屈だ。しかし、このコンペティションではその空き地に、またひとつトイレという建物を作ってしまうらしい。正直、もったいない。〈空き地〉は乱暴に建物を建てようならばすぐ壊れてしまう。
    </p>
    <BlogImg img="/img/works/akamon-restroom/akamon-restroom-place.jpg" width="80%" />
    <p>
      だから、建築というよりオブジェクトを作ろうと考えた。建築という営みを持ち込むと、とてもこの美しき静けさを維持できるとは思えなかった。〈空き地〉に置き物をちょこっとしつらえる、そんな意識を大切にした。
    </p>
    <p>
      その中で、隣接する現代的な建築群についても、「『歴史的』でない」と否定するのではなく、「キャンパスの歴史の一部」として、現代ならではの美しさをもつ存在として親和的に捉えられないかとも思うようになった。本郷における「歴史的建築」といえば、赤門と、安田講堂や総合図書館といったスクラッチタイル造りで「おなじみ」の建物ばかり。それらはランドマークにすぎないのに、そればかりが歴史というラベリングで語られるのには違和感があった。歴史とは時の流れである。そう思っているといつしか、この狭い土地を南北に、濃密な時間の軸、歴史の軸が貫いているように感じられてきた。これは空間の〈年輪〉だと。
    </p>
    <p>審査員の先生には以下のような講評をいただいた。</p>
    <BlogQuotation>
      歴史的な景観の特徴を拾い上げ、建物だけでなくむしろ周囲の空間を含めた公共トイレ空間の質を実現しようとする姿勢が好ましい提案。インクルーシブなトイレとしてのプランニングにも意識が行き届いており、トータルなバランスに優れた佳品である。
      <br />（
      <ExternalLink href="https://www.u-tokyo.ac.jp/focus/ja/articles/z0506_00008.html" category="work">
        https://www.u-tokyo.ac.jp/focus/ja/articles/z0506_00008.html
      </ExternalLink>
      ）
    </BlogQuotation>
    <p>
      建築系の知識もソフトウェアの経験もなく、正直なところ、設計も模型も提出物も稚拙さの残るものになってしまったと思う。それでも空間デザインの感覚は新鮮で楽しく、学びが多かったし、それをコンペという場で高く評価してもらえたことは嬉しかった。最終審査に残りつつ最優秀まであと一歩足りなかった、現地にこれを建てらなれかった悔しさを忘れず、足りないものを身に付けながら、次の機会を待とうと思う。
    </p>
    <p>
      <ExternalLink category="work" href="https://note.com/mariiint/n/n30715f90fbcf">
        共同制作者の武田さんのnote『非建築学徒が建築コンペで入賞するまで』
      </ExternalLink>
      には、思考過程がもう少し詳しく記録されている。わたしは複雑な思考過程を記録する努力を放棄してしまったので、こちらもぜひともお読みいただきたい。
    </p>
    <p>アドバイス・応援をくださったみなさん、ありがとうございました。</p>
  </>
);

export const AkamonRestroomData: WorksDatum = {
  id: 'akamon-restroom',
  project: '「〈空き地〉の年輪」（赤門脇トイレ デザインコンペ）',
  year: 2021,
  collaborated: true,
  collaboratedWith: [{ name: 'Marin Takeda', link: 'https://note.com/mariiint' }, { name: 'Rin Kikuchi' }],
  contribution: ['Architecture and lighting design'],
  awards: ['「（仮称）赤門脇トイレ」デザインコンペティション 優秀賞'],
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
        'ガラス張りの外壁の奥には、少しだけ高さの低い内壁がある。カプセル的な見た目で「〈空き地〉の保存」というコンセプトを表現するとともに、この構造を生かした間接照明を設置することで、この箱型オブジェ全体をふんわりとした照明に仕上げたかった。控え柱は奥の塀についているものを象徴的に模した。インテリア的な外観を目指すことで、建物らしさを軽減しようとした。',
    },
    {
      img: '/img/works/akamon-restroom/akamon-restroom-5.jpg',
      topPage: false,
      alt: '',
    },
    {
      img: '/img/works/akamon-restroom/akamon-restroom-6.jpg',
      topPage: false,
      alt: '',
    },
    {
      img: '/img/works/akamon-restroom/akamon-restroom-7.jpg',
      topPage: false,
      alt: '',
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
};
