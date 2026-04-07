import { RegistrationInput } from '@/types/registration';

export const registrationApi = {
  dashboard: () => window.psclApi.dashboard(),
  list: (query?: string, year?: number) => window.psclApi.list({ query, year }),
  get: (id: number) => window.psclApi.get(id),
  create: (payload: RegistrationInput) => window.psclApi.create(payload),
  update: (id: number, payload: RegistrationInput) => window.psclApi.update(id, payload),
  remove: (id: number) => window.psclApi.remove(id)
};
