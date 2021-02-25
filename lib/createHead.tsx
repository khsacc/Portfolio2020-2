import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

export const CreateHead: NextPage<{ title?: string; ogimage?: string }> = ({ title, ogimage }) => {
  const router = useRouter();
  // ogimageはpublic/meta内に配置しファイル名のみを渡す
  // og:descriptionは適当な記述が思いつかないので保留
  return (
    <Head>
      <title>{[title, `Hiroki Kobayashi Design Portfolio`].join(' | ')}</title>
      <meta name="og:title" content={[title, `Hiroki Kobayashi Design Portfolio`].join(' | ')}></meta>
      <meta name="og:image" content={`${process.env.BASE_PATH}meta/${ogimage || 'ogimage.png'}`}></meta>
      <meta name="og:type" content={router.pathname === '/' ? 'website' : 'article'}></meta>
      <meta name="og:site_name" content="Hiroki Kobayashi Design Portfolio"></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
    </Head>
  );
};
