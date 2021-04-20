import { NextPage } from 'next';
import { Subtitle } from '../common';
import { WorkImg } from '../works/project';
import { WorksDetail } from '../works';
import { makeStyles } from '@material-ui/core';
import { padding } from '../../styles/global';
import React from 'react';

// ここでしか表示しないのでデータ管理もここでやる（そのことにより配列の中にjsxを含んでもサーバーサイドのエラーを吐かないので便利！）
const laboratoryData: WorksDetail[] = [
  {
    img: '/img/works/lab/20210421.jpg',
    alt: '2021.4.21.',
    topPage: true,
  },
  {
    // name: '「いろいろいろ」',
    img: '/img/works/kasa/kasa-3.jpg',
    topPage: false,
    alt: '',
  },
  {
    // name: 'greeting card',
    img: '/img/works/kasa/kasa-4.jpg',
    topPage: true,
    alt: 'Merry Christmas and Happy New Year 2021',
  },
];

const useStyles = makeStyles(() => ({
  whole: {
    marginTop: 30,
    marginBottom: 30,
  },
  desc: {
    textAlign: 'center',
    padding: padding.common,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const TopLab: NextPage = () => {
  const classes = useStyles();

  return (
    <div id="lab">
      <Subtitle>Laboratory</Subtitle>
      <p data-aos="fade-up" className={classes.desc}>
        日常の中で実験的に制作したグラフィックなど、細々としたものを。
      </p>
      <div className={classes.container}>
        {laboratoryData.map(datum => (
          <WorkImg key={datum.img} work={datum} imgWidth="300px" eventCategory="lab-image" margin="5px"></WorkImg>
        ))}
      </div>
    </div>
  );
};
