import * as gtag from '../../lib/gtag';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

export const ExternalLink: NextPage<{ href: string; category: string; className?: string }> = prop => {
  const currentPathName = useRouter().asPath;
  return typeof prop.href !== 'undefined' ? (
    <a
      href={prop.href}
      rel="external nofollow noopener noreferrer"
      target="_blank"
      className={prop.className || ''}
      onClick={() => {
        gtag.event({
          action: `exLink__from-${currentPathName}__to-${prop.href}`,
          category: prop.category,
          label: `${prop.href}`,
        });
      }}
    >
      {prop.children}
    </a>
  ) : (
    <></>
  );
};
