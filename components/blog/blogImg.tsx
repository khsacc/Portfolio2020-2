import * as gtag from '../../lib/gtag';
import { ExternalLink } from '../common/externalLink';
import { NextPage } from 'next';
import { WorkImg } from '../works';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

// 執筆しやすいようにprop構造を変更しただけ
// Linkにできるようにした
export const BlogImg: NextPage<{
  name?: string;
  note?: string;
  img: string;
  alt?: string;
  width?: string;
  href?: string;
}> = ({ name, note, img, alt, width, href }) => {
  const currentPathName = useRouter().pathname;
  return typeof href === 'undefined' ? (
    <WorkImg work={{ name, note, img, alt: alt || '', topPage: false }} imgWidth={width}></WorkImg>
  ) : (
    <a
      href={href}
      rel="external nofollow noopener noreferrer"
      target="_blank"
      onClick={() => {
        gtag.event({ action: 'exLink', category: 'blog', label: `from-${currentPathName}-to-${href}` });
      }}
    >
      <WorkImg work={{ name, note, img, alt: alt || '', topPage: false }} imgWidth={width}></WorkImg>
    </a>
  );
};
