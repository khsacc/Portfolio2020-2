import { NextRouter } from 'next/router';

export const scrollLists: { path: string; id: string; offset: number }[] = [
  {
    path: '/',
    id: 'lab',
    offset: 150,
  },
];

export const idScrollFunction = (router: NextRouter) => {
  scrollLists.forEach(e => {
    if (router.pathname === e.path && router.query.to === e.id) {
      const requiredScroll =
        document.getElementById(e.id) && document.getElementById(e.id).getBoundingClientRect().top - e.offset;
      requiredScroll && window.scrollBy({ top: requiredScroll });
    }
  });
};
