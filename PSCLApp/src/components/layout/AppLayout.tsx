import { NavLink, Outlet } from 'react-router-dom';

const links = [
  { to: '/', label: 'Tableau de bord' },
  { to: '/inscriptions', label: 'Inscriptions' },
  { to: '/inscriptions/nouveau', label: 'Nouvelle inscription' },
  { to: '/parametres', label: 'Paramètres' }
];

export function AppLayout() {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-[260px_1fr]">
      <aside className="bg-primary p-4 text-white">
        <h1 className="text-xl font-bold">PSCLApp</h1>
        <p className="mt-1 text-xs text-white/80">Paroisse Sainte-Catherine-Labouré</p>

        <nav className="mt-5 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block rounded px-3 py-2 text-sm ${isActive ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="p-4 md:p-6">
        <header className="mb-4 rounded border bg-white px-4 py-3">
          <p className="text-sm text-slate-600">
            Application locale sans backend distant • Base de données SQLite locale
          </p>
        </header>

        <Outlet />
      </main>
    </div>
  );
}
