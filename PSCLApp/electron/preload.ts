import { contextBridge, ipcRenderer } from 'electron';
import { RegistrationApi } from './types/ipc';
import { RegistrationInput } from '../src/types/registration';

const api: RegistrationApi = {
  list: (search) => ipcRenderer.invoke('registration:list', search),
  get: (id) => ipcRenderer.invoke('registration:get', id),
  create: (input: RegistrationInput) => ipcRenderer.invoke('registration:create', input),
  update: (id, input: RegistrationInput) => ipcRenderer.invoke('registration:update', id, input),
  remove: (id) => ipcRenderer.invoke('registration:delete', id),
  dashboard: () => ipcRenderer.invoke('registration:dashboard')
};

contextBridge.exposeInMainWorld('psclApi', api);
