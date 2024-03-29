import { ExternalLink } from '../common/externalLink';
import { NextPage } from 'next';
import { WorkImg } from '../works';
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
}> = ({ name, note, img, alt, width, href }) =>
  typeof href === 'undefined' ? (
    <WorkImg work={{ name, note, img, alt: alt || '', topPage: false }} imgWidth={width}></WorkImg>
  ) : (
    <ExternalLink href={href} category="blog-image">
      <WorkImg work={{ name, note, img, alt: alt || '', topPage: false }} imgWidth={width}></WorkImg>
    </ExternalLink>
  );
