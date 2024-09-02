import dayjs from 'dayjs/esm';

import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 23978,
  jobTitle: 'Assistant de paradigme interne',
  profil: '../fake-data/blob/hipster.png',
  profilContentType: 'unknown',
};

export const sampleWithPartialData: IJob = {
  id: 27934,
  jobTitle: 'Assistant de la responsabilité international',
  minSalary: 30932.82,
  date: dayjs('2024-09-02'),
  codeCode: 'e869da98-69a7-482c-89ed-cb28cdc90fe1',
  profil: '../fake-data/blob/hipster.png',
  profilContentType: 'unknown',
};

export const sampleWithFullData: IJob = {
  id: 22216,
  jobTitle: 'Manager des fonctionnalités direct',
  minSalary: 209.07,
  maxSalary: 5071,
  subSalary: 9331.16,
  totalSalary: 24559.72,
  date: dayjs('2024-09-01'),
  codeCode: '269d9ee6-cd53-4147-a605-265eddbb4c42',
  profil: '../fake-data/blob/hipster.png',
  profilContentType: 'unknown',
};

export const sampleWithNewData: NewJob = {
  jobTitle: 'Agent de recherche humain',
  profil: '../fake-data/blob/hipster.png',
  profilContentType: 'unknown',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
