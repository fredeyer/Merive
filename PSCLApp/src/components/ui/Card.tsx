import { ReactNode } from 'react';

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="bg-white border rounded p-4 space-y-3">
      <h2 className="font-semibold">{title}</h2>
      {children}
    </section>
  );
}
