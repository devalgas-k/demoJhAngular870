import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 20627,
  email: '^r@Y(.P&tr+m',
};

export const sampleWithPartialData: IEmployee = {
  id: 8145,
  email: 'CKYrh.@aT.I',
  phoneNumber: 'demain subito miaou',
  commissionPct: 9085,
  level: 1,
  contract: 'CDD',
  cv: '../fake-data/blob/hipster.png',
  cvContentType: 'unknown',
};

export const sampleWithFullData: IEmployee = {
  id: 9016,
  firstName: 'Noé',
  lastName: 'Renault',
  email: ';@=.f\\f_`#',
  phoneNumber: 'ronron vers incarner',
  hireDate: dayjs('2024-09-01T23:48'),
  salary: 15585,
  commissionPct: 3707,
  level: 12,
  contract: 'CDD',
  cv: '../fake-data/blob/hipster.png',
  cvContentType: 'unknown',
};

export const sampleWithNewData: NewEmployee = {
  email: 'Gt@PNt#.D)-[6#',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
