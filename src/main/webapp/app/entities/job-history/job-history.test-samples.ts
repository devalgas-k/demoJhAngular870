import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 13622,
};

export const sampleWithPartialData: IJobHistory = {
  id: 21516,
  endDate: dayjs('2024-09-02T02:21'),
  language: 'ENGLISH',
};

export const sampleWithFullData: IJobHistory = {
  id: 22526,
  startDate: dayjs('2024-09-01T08:42'),
  endDate: dayjs('2024-09-01T11:37'),
  language: 'ENGLISH',
  file: '../fake-data/blob/hipster.png',
  fileContentType: 'unknown',
  date: dayjs('2024-09-01T18:50'),
  duration: '10198',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
