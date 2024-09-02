import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 12724,
};

export const sampleWithPartialData: IRegion = {
  id: 14378,
  regionName: 'Lre8',
};

export const sampleWithFullData: IRegion = {
  id: 29991,
  regionName: 'Ncae9',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
