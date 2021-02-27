export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

// IDが取得できない場合を想定する
export const existsGaId = GA_ID !== '';

// 開発環境やテストデプロイを除外する
const isProduction = () => window.location.origin === 'https://hero--key1207.vercel.app/';

// PVを測定する
export const pageview = path => {
  if (!isProduction()) {
    return;
  }
  window.gtag('config', GA_ID, {
    page_path: path,
  });
};

// GAイベントを発火させる
export const event = ({ action, category, label, value = '' }) => {
  // if (window.location.origin === 'http://localhost:3000') {
  // console.log({ event_category: category, event_label: JSON.stringify(label), value });
  // }

  if (!existsGaId) {
    return;
  }

  if (!isProduction()) {
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  });
  console.log({ event_category: category, event_label: JSON.stringify(label), value });
};
