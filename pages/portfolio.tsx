import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// はじめてアクセスした場合のトップページで表示崩れが起こることがあるので、リンクを貼る用のURLを発行したらどうか？という試み
const PortfolioPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/', '/', { scroll: false });
  }, []);
  return <></>;
};

export default PortfolioPage;
