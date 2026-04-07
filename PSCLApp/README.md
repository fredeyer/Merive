# PSCLApp

Application desktop **100% locale** pour la gestion des inscriptions au baptême et au parcours de catéchèse de la Paroisse Sainte-Catherine-Labouré.

## Stack
- Electron
- React + TypeScript + Vite
- SQLite + Prisma
- Tailwind CSS
- React Hook Form + Zod
- electron-builder

## Arborescence principale

```text
PSCLApp/
├─ electron/                # Main process, preload, services Prisma
├─ prisma/                  # schema, migration, seed, base SQLite locale
├─ src/
│  ├─ components/           # layout, sections formulaire, UI réutilisable
│  ├─ pages/                # Dashboard, Inscriptions, Form, Details, Settings
│  ├─ schemas/              # Validation Zod
│  ├─ services/             # API renderer → preload
│  └─ types/                # Types partagés
└─ package.json
```

## Démarrage local

```bash
npm install
npm run prisma:generate
npm run prisma:migrate -- --name init
npm run prisma:seed
npm run dev
```

## Build desktop

```bash
npm run desktop:build
```

## Workflow Git recommandé

```bash
git clone <url-du-repo>
cd PSCLApp
git checkout -b feature/ma-fonctionnalite
# ... modifications
git add .
git commit -m "feat: ..."
git push origin feature/ma-fonctionnalite
```

## Notes
- Aucun backend distant.
- Aucune API cloud.
- Données stockées localement (SQLite).
- Impression: bouton `window.print()` en MVP, architecture prête pour un module PDF dédié côté Electron.
