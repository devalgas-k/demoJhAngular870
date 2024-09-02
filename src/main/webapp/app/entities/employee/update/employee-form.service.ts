import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import dayjs from 'dayjs/esm';
import { DATE_TIME_FORMAT } from 'app/config/input.constants';
import { IEmployee, NewEmployee } from '../employee.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IEmployee for edit and NewEmployeeFormGroupInput for create.
 */
type EmployeeFormGroupInput = IEmployee | PartialWithRequiredKeyOf<NewEmployee>;

/**
 * Type that converts some properties for forms.
 */
type FormValueOf<T extends IEmployee | NewEmployee> = Omit<T, 'hireDate'> & {
  hireDate?: string | null;
};

type EmployeeFormRawValue = FormValueOf<IEmployee>;

type NewEmployeeFormRawValue = FormValueOf<NewEmployee>;

type EmployeeFormDefaults = Pick<NewEmployee, 'id' | 'hireDate'>;

type EmployeeFormGroupContent = {
  id: FormControl<EmployeeFormRawValue['id'] | NewEmployee['id']>;
  firstName: FormControl<EmployeeFormRawValue['firstName']>;
  lastName: FormControl<EmployeeFormRawValue['lastName']>;
  email: FormControl<EmployeeFormRawValue['email']>;
  phoneNumber: FormControl<EmployeeFormRawValue['phoneNumber']>;
  hireDate: FormControl<EmployeeFormRawValue['hireDate']>;
  salary: FormControl<EmployeeFormRawValue['salary']>;
  commissionPct: FormControl<EmployeeFormRawValue['commissionPct']>;
  level: FormControl<EmployeeFormRawValue['level']>;
  contract: FormControl<EmployeeFormRawValue['contract']>;
  cv: FormControl<EmployeeFormRawValue['cv']>;
  cvContentType: FormControl<EmployeeFormRawValue['cvContentType']>;
  manager: FormControl<EmployeeFormRawValue['manager']>;
  department: FormControl<EmployeeFormRawValue['department']>;
};

export type EmployeeFormGroup = FormGroup<EmployeeFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class EmployeeFormService {
  createEmployeeFormGroup(employee: EmployeeFormGroupInput = { id: null }): EmployeeFormGroup {
    const employeeRawValue = this.convertEmployeeToEmployeeRawValue({
      ...this.getFormDefaults(),
      ...employee,
    });
    return new FormGroup<EmployeeFormGroupContent>({
      id: new FormControl(
        { value: employeeRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      firstName: new FormControl(employeeRawValue.firstName),
      lastName: new FormControl(employeeRawValue.lastName),
      email: new FormControl(employeeRawValue.email, {
        validators: [Validators.required, Validators.pattern('^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$')],
      }),
      phoneNumber: new FormControl(employeeRawValue.phoneNumber),
      hireDate: new FormControl(employeeRawValue.hireDate),
      salary: new FormControl(employeeRawValue.salary),
      commissionPct: new FormControl(employeeRawValue.commissionPct),
      level: new FormControl(employeeRawValue.level, {
        validators: [Validators.min(1), Validators.max(14)],
      }),
      contract: new FormControl(employeeRawValue.contract),
      cv: new FormControl(employeeRawValue.cv),
      cvContentType: new FormControl(employeeRawValue.cvContentType),
      manager: new FormControl(employeeRawValue.manager),
      department: new FormControl(employeeRawValue.department),
    });
  }

  getEmployee(form: EmployeeFormGroup): IEmployee | NewEmployee {
    return this.convertEmployeeRawValueToEmployee(form.getRawValue() as EmployeeFormRawValue | NewEmployeeFormRawValue);
  }

  resetForm(form: EmployeeFormGroup, employee: EmployeeFormGroupInput): void {
    const employeeRawValue = this.convertEmployeeToEmployeeRawValue({ ...this.getFormDefaults(), ...employee });
    form.reset(
      {
        ...employeeRawValue,
        id: { value: employeeRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): EmployeeFormDefaults {
    const currentTime = dayjs();

    return {
      id: null,
      hireDate: currentTime,
    };
  }

  private convertEmployeeRawValueToEmployee(rawEmployee: EmployeeFormRawValue | NewEmployeeFormRawValue): IEmployee | NewEmployee {
    return {
      ...rawEmployee,
      hireDate: dayjs(rawEmployee.hireDate, DATE_TIME_FORMAT),
    };
  }

  private convertEmployeeToEmployeeRawValue(
    employee: IEmployee | (Partial<NewEmployee> & EmployeeFormDefaults),
  ): EmployeeFormRawValue | PartialWithRequiredKeyOf<NewEmployeeFormRawValue> {
    return {
      ...employee,
      hireDate: employee.hireDate ? employee.hireDate.format(DATE_TIME_FORMAT) : undefined,
    };
  }
}
