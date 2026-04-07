import { ReactNode } from 'react';
import { FieldError } from 'react-hook-form';

type Props = {
  label: string;
  error?: FieldError;
  children: ReactNode;
};

export function FormField({ label, error, children }: Props) {
  return (
    <label className="block space-y-1">
      <span className="text-sm font-medium">{label}</span>
      {children}
      {error && <span className="text-xs text-red-600">{error.message}</span>}
    </label>
  );
}
