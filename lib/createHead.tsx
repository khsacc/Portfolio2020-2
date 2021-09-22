import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Head from 'next/head';

// SSGするのでprocess.envが使えない（という理解）
export const BASE_PATH = 'https://hero--key1207.vercel.app/';

export const CreateHead: NextPage<{ title?: string; ogimage?: string; description?: string }> = ({
  title,
  ogimage,
  description,
}) => {
  const router = useRouter();
  // ogimageはpublic/meta内に配置しファイル名のみを渡す
  // og:descriptionは適当な記述が思いつかないので保留
  return (
    <>
      <NextSeo
        title={title}
        // description={description || `Hiroki Kobayashi, a designer interested in DTP, web, and spacial design`}
        openGraph={{
          title: [title, `Hiroki Kobayashi Design Portfolio`].join(' | '),
          description: description || `Hiroki Kobayashi, a designer interested in DTP, web, and spacial design`,
          images: [
            {
              url: typeof ogimage !== 'undefined' ? `${BASE_PATH}${ogimage}` : `${BASE_PATH}meta/ogimage.jpg`,
            },
          ],
        }}
      />
      <Head>
        <meta charSet="utf-8"></meta>
        {/* <title>{[title, `Hiroki Kobayashi Design Portfolio`].join(' | ')}</title>
      <meta name="og:title" content={[title, `Hiroki Kobayashi Design Portfolio`].join(' | ')}></meta> */}
        {/* <meta
        name="og:image"
        content={typeof ogimage !== 'undefined' ? `${BASE_PATH}${ogimage}` : `${BASE_PATH}meta/ogimage.jpg`}
      ></meta>
      <meta name="og:type" content={router.pathname === '/' ? 'website' : 'article'}></meta>
      <meta name="og:site_name" content="Hiroki Kobayashi Design Portfolio"></meta>
      <meta name="twitter:card" content="summary_large_image"></meta> */}
        <meta name="note:card" content="summary_large_image"></meta>
        {/* <meta
          name="description"
          content={description || `Hiroki Kobayashi, a designer interested in DTP, web, and spacial design.`}
        ></meta>
        <meta
          name="og:description"
          content={description || `Hiroki Kobayashi, a designer interested in DTP, web, and spacial design`}
        ></meta> */}
      </Head>
    </>
  );
};
