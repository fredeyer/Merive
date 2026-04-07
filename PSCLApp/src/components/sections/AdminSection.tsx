import { UseFormRegister } from 'react-hook-form';
import { Card } from '@/components/ui/Card';
import { paymentMethodOptions } from '@/constants';
import { RegistrationFormData } from '@/schemas/registrationSchema';

interface Props {
  register: UseFormRegister<RegistrationFormData>;
}

export function AdminSection({ register }: Props) {
  return (
    <Card title="Réservé à l'administration">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        <input type="number" step="0.01" className="rounded border px-2 py-1" placeholder="Frais d'inscription" {...register('paymentInfo.registrationFee')} />
        <input type="number" step="0.01" className="rounded border px-2 py-1" placeholder="Frais de formation" {...register('paymentInfo.trainingFee')} />

        <select className="rounded border px-2 py-1" {...register('paymentInfo.paymentMethod')}>
          {paymentMethodOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <input className="rounded border px-2 py-1" placeholder="Numéro de chèque" {...register('paymentInfo.chequeNumber')} />
        <input type="date" className="rounded border px-2 py-1" {...register('paymentInfo.paidAt')} />
        <input type="date" className="rounded border px-2 py-1" {...register('adminScheduleInfo.baptismDate')} />

        <input className="rounded border px-2 py-1" placeholder="Heure du baptême" {...register('adminScheduleInfo.baptismTime')} />
        <input className="rounded border px-2 py-1" placeholder="Célébrant" {...register('adminScheduleInfo.celebrant')} />
        <input type="date" className="rounded border px-2 py-1" {...register('adminScheduleInfo.trainingDate')} />

        <input className="rounded border px-2 py-1" placeholder="Heure de la formation" {...register('adminScheduleInfo.trainingTime')} />
        <input type="date" className="rounded border px-2 py-1" {...register('adminScheduleInfo.presentationDate')} />
        <input className="rounded border px-2 py-1" placeholder="Heure de la présentation" {...register('adminScheduleInfo.presentationTime')} />
      </div>
    </Card>
  );
}
