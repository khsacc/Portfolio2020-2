import { AkamonRestroomData, IPT2021Data, KF70data, KasaData, MF92Data, MF93Data, Madogiwa2021Data } from './each';
import { LittermateData } from './each/littermate';

export type WorksDetail = {
  name?: string;
  note?: string;
  img: string;
  alt: string;
  topPage: boolean;
  hideAsAll?: boolean;
};

export type WorksDatum = {
  id: string;
  project: string;
  topImg?: string;
  year: number | string;
  note?: string;
  collaborated: boolean;
  collaboratedWith?: {
    name: string;
    link?: string;
  }[];
  awards?: string[];
  contribution: string[];
  works: WorksDetail[];
};

// ここに並べる順番でトップページの順番が決まります。
export const worksData: WorksDatum[] = [
  KF70data,
  AkamonRestroomData,
  Madogiwa2021Data,
  LittermateData,
  IPT2021Data,
  MF93Data,
  KasaData,
  MF92Data,
];
