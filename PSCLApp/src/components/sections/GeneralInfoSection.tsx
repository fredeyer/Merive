import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Card } from '@/components/ui/Card';
import { FormField } from '@/components/ui/FormField';
import { formationTrackOptions } from '@/constants';
import { RegistrationFormData } from '@/schemas/registrationSchema';

interface Props {
  register: UseFormRegister<RegistrationFormData>;
  errors: FieldErrors<RegistrationFormData>;
}

export function GeneralInfoSection({ register, errors }: Props) {
  return (
    <Card title="Informations générales d'inscription">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <FormField label="Année d'inscription" error={errors.registrationYear}>
          <input className="w-full rounded border px-2 py-1" type="number" {...register('registrationYear')} />
        </FormField>

        <FormField label="Parcours de formation" error={errors.formationTrack}>
          <select className="w-full rounded border px-2 py-1" {...register('formationTrack')}>
            {formationTrackOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </FormField>
      </div>
    </Card>
  );
}
