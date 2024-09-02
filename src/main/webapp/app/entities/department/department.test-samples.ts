import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 30187,
  departmentName: 'vouh miam',
};

export const sampleWithPartialData: IDepartment = {
  id: 31293,
  departmentName: 'présidence miaou plic',
};

export const sampleWithFullData: IDepartment = {
  id: 20151,
  departmentName: 'emmener smack reproduire',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'adversaire',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
