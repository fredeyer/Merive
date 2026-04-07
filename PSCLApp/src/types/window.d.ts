import { RegistrationApi } from '../../electron/types/ipc';

declare global {
  interface Window {
    psclApi: RegistrationApi;
  }
}

export {};
