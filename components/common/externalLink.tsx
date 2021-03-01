import * as gtag from '../../lib/gtag';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

export const ExternalLink: NextPage<{ href: string; category: string }> = prop => {
  const currentPathName = useRouter().pathname;
  return typeof prop.href !== 'undefined' ? (
    <a
      href={prop.href}
      rel="external nofollow noopener noreferrer"
      target="_blank"
      onClick={() => {
        gtag.event({ action: 'exLink', category: prop.category, label: `from-${currentPathName}-to-${prop.href}` });
      }}
    >
      {prop.children}
    </a>
  ) : (
    <></>
  );
};
