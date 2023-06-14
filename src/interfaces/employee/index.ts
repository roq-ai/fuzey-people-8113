import { VacationRequestInterface } from 'interfaces/vacation-request';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  user_id: string;
  company_id: string;
  employment_start_date: any;
  employment_end_date?: any;
  position: string;
  salary: number;
  created_at?: any;
  updated_at?: any;
  vacation_request?: VacationRequestInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    vacation_request?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  company_id?: string;
  position?: string;
}
