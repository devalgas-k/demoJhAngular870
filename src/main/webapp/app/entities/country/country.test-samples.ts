import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 20027,
};

export const sampleWithPartialData: ICountry = {
  id: 11410,
  countryName: 'ah désormais',
};

export const sampleWithFullData: ICountry = {
  id: 26481,
  countryName: 'en par sous couleur de',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
