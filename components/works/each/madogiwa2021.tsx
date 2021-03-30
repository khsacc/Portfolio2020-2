import { NextPage } from 'next';
import { WorksDatum } from '..';

export const Madogiwa2021: NextPage = () => (
  <>
    <p>
      知人からの依頼で、演劇のポスターを作ることになった。台本こそ既存のものだが、「これから演劇を始める中学生のため」のイベントという立ち位置で、ポスターもそんな中学生にとって刺激的なものにしてほしい、という要望だった。
    </p>
    <p>
      制作にあたっては演出の田中さんとミーティングをさせていただき、台本を読んでの互いの解釈を交換しながら、どのようなメッセージを込めるかについて相談した。グラフィックについての具体的な相談をするのではなく、あくまで作品の中で大切にした世界観を共有する。この作業がとても面白く、そしてビジュアル的な示唆とアイデアに富んでいた。異なる分野のクリエイターとの共同作業をしたい、と思っていたところだったこともあり、とても印象に残るプロジェクトになった。
    </p>
  </>
);

export const Madogiwa2021Data: WorksDatum = {
  id: 'madogiwa-2021',
  project: '演劇『いつだって窓際であたしたち』ポスター',
  year: 2021,
  note: '',
  collaborated: false,
  contribution: ['DTP'],
  works: [
    {
      name: '',
      img: '/img/works/madogiwa-2021/madogiwa-poster-final.jpg',
      topPage: true,
      alt: 'いつだって窓際であたしたち 2021.4.30. 於市川学園',
      note: '',
    },
  ],
};
