import { app, BrowserWindow, ipcMain } from 'electron';
import { join } from 'path';
import { existsSync } from 'fs';
import { prisma } from './db';
import { RegistrationService } from './services/registrationService';
import { RegistrationInput } from '../src/types/registration';

const service = new RegistrationService(prisma);

const isDev = !app.isPackaged;

const createWindow = async () => {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  if (isDev) {
    await win.loadURL('http://localhost:5173');
  } else {
    const rendererPath = join(__dirname, '..', 'dist', 'index.html');
    if (existsSync(rendererPath)) {
      await win.loadFile(rendererPath);
    }
  }
};

ipcMain.handle('registration:list', (_event, search?: { query?: string; year?: number }) =>
  service.list(search?.query, search?.year)
);
ipcMain.handle('registration:get', (_event, id: number) => service.get(id));
ipcMain.handle('registration:create', (_event, input: RegistrationInput) => service.create(input));
ipcMain.handle('registration:update', (_event, id: number, input: RegistrationInput) => service.update(id, input));
ipcMain.handle('registration:delete', (_event, id: number) => service.remove(id));
ipcMain.handle('registration:dashboard', () => service.dashboard());

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.on('before-quit', async () => {
  await prisma.$disconnect();
});
