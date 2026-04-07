import { UseFormRegister } from 'react-hook-form';
import { Card } from '@/components/ui/Card';
import { RegistrationFormData } from '@/schemas/registrationSchema';

interface Props {
  register: UseFormRegister<RegistrationFormData>;
}

const sacramentFields: Array<{ key: keyof RegistrationFormData['sacramentStatus']; label: string }> = [
  { key: 'baptism', label: 'Baptême' },
  { key: 'firstPardon', label: '1er pardon' },
  { key: 'firstCommunion', label: 'Première communion' },
  { key: 'professionOfFaith', label: 'Profession de foi' },
  { key: 'confirmation', label: 'Confirmation' }
];

export function SacramentsSection({ register }: Props) {
  return (
    <Card title="Sacrements et profession de foi">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {sacramentFields.map((field) => (
          <label key={field.key} className="text-sm">
            <input type="checkbox" className="mr-2" {...register(`sacramentStatus.${field.key}`)} />
            {field.label}
          </label>
        ))}
      </div>
    </Card>
  );
}
