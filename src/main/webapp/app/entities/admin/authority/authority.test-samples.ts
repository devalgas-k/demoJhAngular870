import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '10649be6-44c0-4282-9d03-fd077c922e5f',
};

export const sampleWithPartialData: IAuthority = {
  name: '941ec1ed-eda9-4db1-91b7-120eae37a22d',
};

export const sampleWithFullData: IAuthority = {
  name: 'dce14111-ac42-422c-92e2-3a95e766c72a',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
