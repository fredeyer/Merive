import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import { Card } from '@/components/ui/Card';
import { FormField } from '@/components/ui/FormField';
import { RegistrationFormData } from '@/schemas/registrationSchema';

interface Props {
  register: UseFormRegister<RegistrationFormData>;
  errors: FieldErrors<RegistrationFormData>;
}

const fields: Array<{ name: Path<RegistrationFormData>; label: string; type?: 'text' | 'number' | 'date' | 'email' }> = [
  { name: 'firstName', label: 'Prénom' },
  { name: 'lastName', label: 'Nom' },
  { name: 'birthDate', label: 'Date de naissance', type: 'date' },
  { name: 'age', label: 'Âge', type: 'number' },
  { name: 'motherFirstName', label: 'Prénom mère' },
  { name: 'motherLastName', label: 'Nom mère' },
  { name: 'fatherFirstName', label: 'Prénom père' },
  { name: 'fatherLastName', label: 'Nom père' },
  { name: 'address', label: 'Adresse' },
  { name: 'city', label: 'Ville' },
  { name: 'postalCode', label: 'Code postal' },
  { name: 'fatherPhone', label: 'Téléphone père' },
  { name: 'motherPhone', label: 'Téléphone mère' },
  { name: 'parentEmail', label: 'Courriel parents', type: 'email' }
];

export function IdentitySection({ register, errors }: Props) {
  return (
    <Card title="Identification de la personne inscrite">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {fields.map((field) => (
          <FormField key={field.name} label={field.label} error={errors[field.name]}>
            <input
              className="w-full rounded border px-2 py-1"
              type={field.type ?? 'text'}
              {...register(field.name)}
            />
          </FormField>
        ))}
      </div>

      <label className="mt-3 block text-sm">
        <input type="checkbox" className="mr-2" {...register('birthCertificateProvided')} />
        Copie du certificat de naissance fournie
      </label>
    </Card>
  );
}
