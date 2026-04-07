export function SettingsPage() {
  return (
    <div className="space-y-4">
      <section className="rounded border bg-white p-4">
        <h2 className="text-lg font-semibold">Paramètres</h2>
        <p className="mt-2 text-sm text-slate-600">
          Cette application fonctionne 100% en local, sans API externe et sans authentification en ligne.
        </p>
        <p className="text-sm text-slate-600">
          Base de développement: <code>prisma/dev.db</code>
        </p>
      </section>

      <section className="rounded border bg-white p-4">
        <h3 className="font-semibold">Workflow Git recommandé</h3>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-700">
          <li>Faire un <code>git clone</code> du projet sur votre machine locale.</li>
          <li>Créer une branche de travail: <code>git checkout -b feature/...</code>.</li>
          <li>Commiter localement puis pousser vers GitHub.</li>
        </ol>
      </section>
    </div>
  );
}
