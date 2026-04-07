import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { registrationApi } from '@/services/registrationApi';
import { RegistrationRecord } from '@/types/registration';

export function InscriptionsListPage() {
  const [items, setItems] = useState<RegistrationRecord[]>([]);
  const [query, setQuery] = useState('');
  const [year, setYear] = useState<string>('');

  const load = async () => {
    const yearFilter = year.trim() ? Number(year) : undefined;
    const records = await registrationApi.list(query.trim() || undefined, yearFilter);
    setItems(records);
  };

  useEffect(() => {
    void load();
  }, []);

  const onDelete = async (id: number) => {
    if (!window.confirm('Supprimer cette inscription ?')) return;

    await registrationApi.remove(id);
    await load();
  };

  return (
    <div className="space-y-4">
      <div className="rounded border bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold">Recherche des inscriptions</h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_180px_auto]">
          <input
            className="rounded border px-2 py-1"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Nom, prénom, téléphone, date de naissance (YYYY-MM-DD)"
          />
          <input
            className="rounded border px-2 py-1"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            placeholder="Année d'inscription"
            type="number"
          />
          <button className="rounded bg-primary px-3 py-1 text-white" onClick={load} type="button">
            Rechercher
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-2 text-left">Nom complet</th>
              <th className="p-2 text-center">Date de naissance</th>
              <th className="p-2 text-center">Année</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-2">{item.firstName} {item.lastName}</td>
                <td className="p-2 text-center">{new Date(item.birthDate).toLocaleDateString('fr-CA')}</td>
                <td className="p-2 text-center">{item.registrationYear}</td>
                <td className="space-x-3 p-2 text-center">
                  <Link className="text-primary underline" to={`/inscriptions/${item.id}`}>
                    Détail
                  </Link>
                  <Link className="text-primary underline" to={`/inscriptions/${item.id}/modifier`}>
                    Modifier
                  </Link>
                  <button className="text-red-600 underline" onClick={() => onDelete(item.id)} type="button">
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td className="p-4 text-center text-slate-500" colSpan={4}>
                  Aucune inscription trouvée.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
