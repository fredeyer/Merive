import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { registrationApi } from '@/services/registrationApi';

interface DashboardData {
  total: number;
  recent: Array<{ id: number; firstName: string; lastName: string; registrationYear: number }>;
}

export function DashboardPage() {
  const [data, setData] = useState<DashboardData>({ total: 0, recent: [] });

  useEffect(() => {
    registrationApi.dashboard().then(setData);
  }, []);

  return (
    <div className="space-y-4">
      <section className="rounded border bg-white p-4">
        <h2 className="text-lg font-semibold">Tableau de bord</h2>
        <p className="mt-2 text-sm">Nombre total d'inscriptions: <strong>{data.total}</strong></p>
        <Link to="/inscriptions/nouveau" className="mt-3 inline-block rounded bg-primary px-3 py-2 text-sm text-white">
          Nouvelle inscription
        </Link>
      </section>

      <section className="rounded border bg-white p-4">
        <h3 className="mb-2 font-semibold">Inscriptions récentes</h3>
        <ul className="space-y-1 text-sm">
          {data.recent.map((item) => (
            <li key={item.id}>
              <Link className="text-primary underline" to={`/inscriptions/${item.id}`}>
                {item.firstName} {item.lastName}
              </Link>{' '}
              - {item.registrationYear}
            </li>
          ))}
          {data.recent.length === 0 && <li className="text-slate-500">Aucune inscription pour le moment.</li>}
        </ul>
      </section>
    </div>
  );
}
