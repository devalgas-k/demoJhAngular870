import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 795,
  title: 'A5^z.c',
};

export const sampleWithPartialData: ITask = {
  id: 58,
  title: 'RXAp%',
};

export const sampleWithFullData: ITask = {
  id: 27040,
  title: 'G^f',
  description: '../fake-data/blob/hipster.txt',
};

export const sampleWithNewData: NewTask = {
  title: 'C6>_B',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
