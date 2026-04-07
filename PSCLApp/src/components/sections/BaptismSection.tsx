import { UseFormRegister } from 'react-hook-form';
import { Card } from '@/components/ui/Card';
import { RegistrationFormData } from '@/schemas/registrationSchema';

interface Props {
  register: UseFormRegister<RegistrationFormData>;
}

export function BaptismSection({ register }: Props) {
  return (
    <Card title="Informations sur le baptême">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <label className="text-sm">
          Date de baptême
          <input type="date" className="mt-1 w-full rounded border px-2 py-1" {...register('baptismInfo.baptismDate')} />
        </label>

        <label className="self-end text-sm">
          <input type="checkbox" className="mr-2" {...register('baptismInfo.baptismCertificateProvided')} />
          Copie du certificat de baptême fournie
        </label>

        <input className="rounded border px-2 py-1" placeholder="Nom de la paroisse" {...register('baptismInfo.baptismParishName')} />
        <input className="rounded border px-2 py-1" placeholder="Adresse de la paroisse" {...register('baptismInfo.baptismParishAddress')} />
        <input className="rounded border px-2 py-1" placeholder="Courriel de la paroisse" {...register('baptismInfo.baptismParishEmail')} />
        <input className="rounded border px-2 py-1" placeholder="Signature" {...register('signature')} />

        <label className="text-sm">
          Date de signature
          <input type="date" className="mt-1 w-full rounded border px-2 py-1" {...register('signatureDate')} />
        </label>
      </div>
    </Card>
  );
}
