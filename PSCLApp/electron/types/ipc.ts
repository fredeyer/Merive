import { RegistrationInput, RegistrationRecord } from '../../src/types/registration';

export interface DashboardStats {
  total: number;
  recent: RegistrationRecord[];
}

export interface RegistrationSearch {
  query?: string;
  year?: number;
}

export interface RegistrationApi {
  list: (search?: RegistrationSearch) => Promise<RegistrationRecord[]>;
  get: (id: number) => Promise<RegistrationRecord | null>;
  create: (input: RegistrationInput) => Promise<RegistrationRecord>;
  update: (id: number, input: RegistrationInput) => Promise<RegistrationRecord>;
  remove: (id: number) => Promise<void>;
  dashboard: () => Promise<DashboardStats>;
}
