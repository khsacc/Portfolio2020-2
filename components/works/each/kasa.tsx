import { NextPage } from 'next';
import Link from 'next/link';

export const kasa: NextPage = ({}) => (
  <>
    <p>
      雨の日はなんとなく気分が晴れないことも多いが、傘はそんなときに出かけるのを少しだけ楽しくしてくれる。傘に打ち付ける雨音を聴いているとどこか落ち着く。緊急事態宣言で自室に引きこもる毎日を過ごしていて、いま世の中にはそんな「傘」のようなものが必要なのではないか、とふと思ったところから着想してこのシリーズは始まった。いつしか自分のアイコンのように使うようになり、このサイトもそんな流れで出来上がった。このポートフォリオのちょっとした裏話は、
      <Link href="/blog/about-this-portfolio">
        <a>「ポートフォリオ裏話」</a>
      </Link>
      に書き留めたので、併せてお読みいただけたら嬉しい。
    </p>
  </>
);
