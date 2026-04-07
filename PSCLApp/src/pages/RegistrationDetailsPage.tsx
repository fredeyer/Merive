import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RegistrationRecord } from '@/types/registration';
import { registrationApi } from '@/services/registrationApi';

export function RegistrationDetailsPage() {
  const { id } = useParams();
  const [item, setItem] = useState<RegistrationRecord | null>(null);

  useEffect(() => {
    if (!id) return;
    registrationApi.get(Number(id)).then(setItem);
  }, [id]);

  if (!item) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="space-y-4">
      <section className="rounded border bg-white p-4">
        <h2 className="text-lg font-semibold">{item.firstName} {item.lastName}</h2>
        <p className="text-sm text-slate-600">Né(e) le {new Date(item.birthDate).toLocaleDateString('fr-CA')}</p>
        <div className="mt-3 flex gap-3 text-sm">
          <Link className="text-primary underline" to={`/inscriptions/${item.id}/modifier`}>
            Modifier
          </Link>
          <button className="text-primary underline" onClick={() => window.print()} type="button">
            Imprimer la fiche
          </button>
        </div>
      </section>

      <section className="rounded border bg-white p-4">
        <h3 className="mb-2 font-semibold">Résumé</h3>
        <ul className="space-y-1 text-sm">
          <li>Année d'inscription: {item.registrationYear}</li>
          <li>Parcours: {item.formationTrack}</li>
          <li>Téléphone père: {item.fatherPhone}</li>
          <li>Téléphone mère: {item.motherPhone}</li>
          <li>Courriel parents: {item.parentEmail}</li>
          <li>Ville: {item.city}</li>
        </ul>
      </section>
    </div>
  );
}
