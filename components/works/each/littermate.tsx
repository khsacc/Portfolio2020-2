import { ExternalLink } from '../../common/externalLink';
import { NextPage } from 'next';
import { WorksDatum } from '..';
import Link from 'next/link';

export const littermate: NextPage = ({}) => (
  <>
    <p>
      かねてから{' '}
      <Link href="/works/KF70">
        <a>駒場祭</a>
      </Link>
      や
      <Link href="/works/akamon-restroom">
        <a>赤門脇トイレデザインコンペティション</a>
      </Link>
      で一緒にデザインしてきた
      <ExternalLink href="https://note.com/mariiint" category="collaborator">
        武田さん
      </ExternalLink>
      と、今度はファッションブランドのブランディングの仕事をすることになった。Littermateは東大で生物学を専攻する大学院生たちが立ち上げたストリートファッションブランドで、ファッションという領域に彼らなりの「生物学観」を表現しているのが面白い。既存のブランドを「リブランディング」する仕事は難易度が高かったが、「かちっとしていて、かつ自由である」というコンセプトを、最終的にはロゴやウェブサイトといった新たにデザインした制作物に落とし込めたのではないか、と感じている。
    </p>
    <p>
      とにもかくにもご購入ください、と言いたいところだが、まずは私たちのこだわりのつまった
      <ExternalLink href="https://littermate-official.vercel.app/" category="work">
        ウェブサイト
      </ExternalLink>
      を是非ご訪問いただきたい。
    </p>
  </>
);

export const LittermateData: WorksDatum = {
  id: 'littermate',
  project: 'Littermate Branding',
  year: '2021',
  collaborated: true,
  collaboratedWith: [{ name: 'Marin Takeda', link: 'https://note.com/mariiint' }],
  contribution: ['Branding', 'Web', 'DTP'],
  works: [
    {
      name: 'Logo Tag',
      img: '/img/works/littermate/littermate-tag.jpg',
      topPage: true,
      alt: 'Littermate',
      note:
        '洋服につけるタグのデザインには、我々が制作したロゴにDNAの二重らせん構造をモチーフとしたイラストを組み合わせた。ロゴは今回のブランディングの根幹に位置する制作物で、サイエンスらしい整然とした雰囲気を保ちつつ、遊びもあるという二面性を大切にし、「Biology is ambivalent」というコンセプトを表現したロゴになっている。',
    },
    {
      name: 'Logo T-shirt & Cap',
      img: '/img/works/littermate/littermate-logo-product.jpg',
      topPage: true,
      alt: 'Littermate',
      note:
        'リブランディングで私たちが作り直したロゴを使った新商品も制作していただいた。刺繍にするとロゴ下段の「ゆらぎ感」がより強調されるのは意図しない幸運で、コンセプトに説得力を持たせる結果になったように感じた。',
    },
    {
      name: 'Website',
      img: '/img/works/littermate/littermate-web-1.jpg',
      topPage: false,
      alt: 'Littermate Website',
      note:
        'ウェブサイトは今回手がけた中で最も大規模な制作物で、デザインから実装までを私がほぼ担当した。遊び心を大切にしつつ、ファッションブランドらしく、かつサイエンスのイメージも残す……。そんなことを考えながら制作した。',
    },
    {
      name: 'Website',
      img: '/img/works/littermate/littermate-web-2.jpg',
      topPage: false,
      alt: 'Littermate Website',
      note: '',
    },
    {
      name: 'Poster',
      img: '/img/works/littermate/poster.jpg',
      topPage: false,
      alt: 'Littermate Popup Store',
      note: '新宿マルイへの出店に際して制作したポスター。大きな紙に印刷してはじめて成り立つ誌面設計を心がけた。',
    },
  ],
};
