import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 3161,
};

export const sampleWithPartialData: ILocation = {
  id: 12631,
  streetAddress: 'dehors outre',
  postalCode: 'responsable hi près',
  stateProvince: 'tard fort',
};

export const sampleWithFullData: ILocation = {
  id: 2350,
  streetAddress: "soigner aujourd'hui",
  postalCode: 'aigre malgré',
  city: 'Tourcoing',
  stateProvince: 'candide',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
