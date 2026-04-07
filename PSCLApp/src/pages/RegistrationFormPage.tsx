import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminSection } from '@/components/sections/AdminSection';
import { BaptismSection } from '@/components/sections/BaptismSection';
import { CatechesisSection } from '@/components/sections/CatechesisSection';
import { GeneralInfoSection } from '@/components/sections/GeneralInfoSection';
import { GodparentsSection } from '@/components/sections/GodparentsSection';
import { IdentitySection } from '@/components/sections/IdentitySection';
import { SacramentsSection } from '@/components/sections/SacramentsSection';
import { registrationDefaults } from '@/hooks/useRegistrationDefaults';
import { RegistrationFormData, registrationSchema } from '@/schemas/registrationSchema';
import { registrationApi } from '@/services/registrationApi';

const toDateInput = (value?: string | Date | null) => (value ? new Date(value).toISOString().slice(0, 10) : '');

export function RegistrationFormPage({ mode }: { mode: 'create' | 'edit' }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: registrationDefaults
  });

  useEffect(() => {
    if (mode !== 'edit' || !id) return;

    registrationApi.get(Number(id)).then((record) => {
      if (!record) return;

      reset({
        ...record,
        birthDate: toDateInput(record.birthDate),
        signatureDate: toDateInput(record.signatureDate),
        baptismInfo: {
          ...record.baptismInfo,
          baptismDate: toDateInput(record.baptismInfo.baptismDate)
        },
        paymentInfo: {
          ...record.paymentInfo,
          paidAt: toDateInput(record.paymentInfo.paidAt)
        },
        adminScheduleInfo: {
          ...record.adminScheduleInfo,
          baptismDate: toDateInput(record.adminScheduleInfo.baptismDate),
          trainingDate: toDateInput(record.adminScheduleInfo.trainingDate),
          presentationDate: toDateInput(record.adminScheduleInfo.presentationDate)
        }
      });
    });
  }, [id, mode, reset]);

  const onSubmit = async (values: RegistrationFormData) => {
    if (mode === 'edit' && id) {
      await registrationApi.update(Number(id), values);
      navigate(`/inscriptions/${id}`);
      return;
    }

    const created = await registrationApi.create(values);
    navigate(`/inscriptions/${created.id}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-lg font-semibold">{mode === 'edit' ? 'Modifier inscription' : 'Nouvelle inscription'}</h2>

      <GeneralInfoSection register={register} errors={errors} />
      <IdentitySection register={register} errors={errors} />
      <SacramentsSection register={register} />
      <CatechesisSection register={register} />
      <GodparentsSection register={register} />
      <BaptismSection register={register} />
      <AdminSection register={register} />

      <button disabled={isSubmitting} className="rounded bg-primary px-4 py-2 text-white" type="submit">
        {mode === 'edit' ? 'Mettre à jour' : 'Enregistrer'}
      </button>
    </form>
  );
}
