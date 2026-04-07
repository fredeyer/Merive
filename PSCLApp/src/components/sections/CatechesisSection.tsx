import { UseFormRegister } from 'react-hook-form';
import { Card } from '@/components/ui/Card';
import { catechesisHistoryOptions } from '@/constants';
import { RegistrationFormData } from '@/schemas/registrationSchema';

interface Props {
  register: UseFormRegister<RegistrationFormData>;
}

export function CatechesisSection({ register }: Props) {
  return (
    <Card title="Historique des années de catéchèse">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <select className="w-full rounded border px-2 py-1" {...register('catechesisHistory')}>
          {catechesisHistoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <input
          className="w-full rounded border px-2 py-1"
          placeholder="Autre précision"
          {...register('catechesisHistoryOther')}
        />
      </div>
    </Card>
  );
}
