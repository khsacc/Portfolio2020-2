import { NextPage } from 'next';
import { Subtitle } from '../common';
import { WorkContainer, useTopWorkStyles } from '../topPage/works'; // トップページの使い回しなので変則的なimportになっています
import { WorksDatum, WorksDetail, worksData } from '.';
import React from 'react';

export const WorkIndex: NextPage = () => {
  const classes = useTopWorkStyles();
  return (
    <>
      <Subtitle>Works</Subtitle>
      <div className={classes.container}>
        {worksData
          .reduce(
            (pre: (WorksDetail & { prj: WorksDatum })[], cur: WorksDatum) => [
              ...pre,
              ...cur.works
                .filter(work => typeof work.hideAsAll === 'undefined' || work.hideAsAll === false)
                .map(work => ({ ...work, prj: cur })),
            ],
            [],
          )
          .map((work, workidx) => (
            <WorkContainer key={workidx} workidx={workidx} work={work} prj={work.prj} all={true} />
          ))}
      </div>
    </>
  );
};
