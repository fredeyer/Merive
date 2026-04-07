import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './styles.css';
import { AppLayout } from './components/layout/AppLayout';
import { DashboardPage } from './pages/DashboardPage';
import { InscriptionsListPage } from './pages/InscriptionsListPage';
import { RegistrationFormPage } from './pages/RegistrationFormPage';
import { RegistrationDetailsPage } from './pages/RegistrationDetailsPage';
import { SettingsPage } from './pages/SettingsPage';

const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'inscriptions', element: <InscriptionsListPage /> },
      { path: 'inscriptions/nouveau', element: <RegistrationFormPage mode="create" /> },
      { path: 'inscriptions/:id', element: <RegistrationDetailsPage /> },
      { path: 'inscriptions/:id/modifier', element: <RegistrationFormPage mode="edit" /> },
      { path: 'parametres', element: <SettingsPage /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
