import { UseFormRegister } from 'react-hook-form';
import { Card } from '@/components/ui/Card';
import { RegistrationFormData } from '@/schemas/registrationSchema';

interface Props {
  register: UseFormRegister<RegistrationFormData>;
}

export function GodparentsSection({ register }: Props) {
  return (
    <Card title="Informations sur le parrain et la marraine">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <input className="rounded border px-2 py-1" placeholder="Prénom du parrain" {...register('godparentInfo.godfatherFirstName')} />
        <input className="rounded border px-2 py-1" placeholder="Nom du parrain" {...register('godparentInfo.godfatherLastName')} />

        <label className="text-sm md:col-span-2">
          <input type="checkbox" className="mr-2" {...register('godparentInfo.godfatherCertificateProvided')} />
          Copie de l'extrait de baptême + confirmation (parrain) fournie
        </label>

        <input className="rounded border px-2 py-1" placeholder="Prénom de la marraine" {...register('godparentInfo.godmotherFirstName')} />
        <input className="rounded border px-2 py-1" placeholder="Nom de la marraine" {...register('godparentInfo.godmotherLastName')} />

        <label className="text-sm md:col-span-2">
          <input type="checkbox" className="mr-2" {...register('godparentInfo.godmotherCertificateProvided')} />
          Copie de l'extrait de baptême + confirmation (marraine) fournie
        </label>
      </div>
    </Card>
  );
}
