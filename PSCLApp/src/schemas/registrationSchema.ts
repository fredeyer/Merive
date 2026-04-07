import { z } from 'zod';

export const registrationSchema = z.object({
  registrationYear: z.coerce.number().int().min(2000).max(2100),
  formationTrack: z.enum(['AGE_0_5', 'AGE_6', 'AGE_7_13', 'AGE_14_17', 'ADULT_CATECHUMENATE', 'ADULT_CONFIRMATION']),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  birthDate: z.string().min(1),
  age: z.coerce.number().int().min(0).max(120),
  motherFirstName: z.string().min(2),
  motherLastName: z.string().min(2),
  fatherFirstName: z.string().min(2),
  fatherLastName: z.string().min(2),
  address: z.string().min(3),
  city: z.string().min(2),
  postalCode: z.string().min(3),
  fatherPhone: z.string().min(8),
  motherPhone: z.string().min(8),
  parentEmail: z.string().email(),
  birthCertificateProvided: z.boolean(),
  catechesisHistory: z.enum(['NONE', 'ONE_YEAR', 'TWO_YEARS', 'THREE_YEARS', 'FOUR_YEARS', 'OTHER']),
  catechesisHistoryOther: z.string().optional().nullable(),
  signature: z.string().optional().nullable(),
  signatureDate: z.string().optional().nullable(),
  sacramentStatus: z.object({
    baptism: z.boolean(),
    firstPardon: z.boolean(),
    firstCommunion: z.boolean(),
    professionOfFaith: z.boolean(),
    confirmation: z.boolean()
  }),
  godparentInfo: z.object({
    godfatherFirstName: z.string().optional().nullable(),
    godfatherLastName: z.string().optional().nullable(),
    godfatherCertificateProvided: z.boolean(),
    godmotherFirstName: z.string().optional().nullable(),
    godmotherLastName: z.string().optional().nullable(),
    godmotherCertificateProvided: z.boolean()
  }),
  baptismInfo: z.object({
    baptismDate: z.string().optional().nullable(),
    baptismCertificateProvided: z.boolean(),
    baptismParishName: z.string().optional().nullable(),
    baptismParishAddress: z.string().optional().nullable(),
    baptismParishEmail: z.string().email().optional().or(z.literal('')).nullable()
  }),
  paymentInfo: z.object({
    registrationFee: z.coerce.number().min(0),
    trainingFee: z.coerce.number().min(0),
    paymentMethod: z.enum(['CASH', 'CHEQUE', 'DEBIT', 'CREDIT_CARD', 'INTERAC']),
    chequeNumber: z.string().optional().nullable(),
    paidAt: z.string().optional().nullable()
  }),
  adminScheduleInfo: z.object({
    baptismDate: z.string().optional().nullable(),
    baptismTime: z.string().optional().nullable(),
    celebrant: z.string().optional().nullable(),
    trainingDate: z.string().optional().nullable(),
    trainingTime: z.string().optional().nullable(),
    presentationDate: z.string().optional().nullable(),
    presentationTime: z.string().optional().nullable()
  })
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
