import { Prisma, PrismaClient } from '@prisma/client';
import { RegistrationInput } from '../../src/types/registration';

const includes = {
  sacramentStatus: true,
  godparentInfo: true,
  paymentInfo: true,
  baptismInfo: true,
  adminScheduleInfo: true
} satisfies Prisma.RegistrationInclude;

const toScalarData = (input: RegistrationInput) => ({
  registrationYear: input.registrationYear,
  formationTrack: input.formationTrack,
  firstName: input.firstName,
  lastName: input.lastName,
  birthDate: new Date(input.birthDate),
  age: input.age,
  motherFirstName: input.motherFirstName,
  motherLastName: input.motherLastName,
  fatherFirstName: input.fatherFirstName,
  fatherLastName: input.fatherLastName,
  address: input.address,
  city: input.city,
  postalCode: input.postalCode,
  fatherPhone: input.fatherPhone,
  motherPhone: input.motherPhone,
  parentEmail: input.parentEmail,
  birthCertificateProvided: input.birthCertificateProvided,
  catechesisHistory: input.catechesisHistory,
  catechesisHistoryOther: input.catechesisHistoryOther,
  signature: input.signature,
  signatureDate: input.signatureDate ? new Date(input.signatureDate) : null
});

export class RegistrationService {
  constructor(private readonly prisma: PrismaClient) {}

  list(query?: string, year?: number) {
    const trimmedQuery = query?.trim();
    const parsedDate = trimmedQuery && /^\d{4}-\d{2}-\d{2}$/.test(trimmedQuery) ? new Date(`${trimmedQuery}T00:00:00.000Z`) : undefined;

    return this.prisma.registration.findMany({
      where: {
        AND: [
          year ? { registrationYear: year } : {},
          trimmedQuery
            ? {
                OR: [
                  { firstName: { contains: trimmedQuery, mode: 'insensitive' } },
                  { lastName: { contains: trimmedQuery, mode: 'insensitive' } },
                  { fatherPhone: { contains: trimmedQuery } },
                  { motherPhone: { contains: trimmedQuery } },
                  ...(parsedDate ? [{ birthDate: parsedDate }] : [])
                ]
              }
            : {}
        ]
      },
      include: includes,
      orderBy: [{ createdAt: 'desc' }]
    });
  }

  get(id: number) {
    return this.prisma.registration.findUnique({ where: { id }, include: includes });
  }

  create(input: RegistrationInput) {
    return this.prisma.registration.create({
      data: {
        ...toScalarData(input),
        sacramentStatus: { create: input.sacramentStatus },
        godparentInfo: { create: input.godparentInfo },
        baptismInfo: {
          create: {
            ...input.baptismInfo,
            baptismDate: input.baptismInfo.baptismDate ? new Date(input.baptismInfo.baptismDate) : null
          }
        },
        paymentInfo: {
          create: {
            ...input.paymentInfo,
            paidAt: input.paymentInfo.paidAt ? new Date(input.paymentInfo.paidAt) : null
          }
        },
        adminScheduleInfo: {
          create: {
            ...input.adminScheduleInfo,
            baptismDate: input.adminScheduleInfo.baptismDate ? new Date(input.adminScheduleInfo.baptismDate) : null,
            trainingDate: input.adminScheduleInfo.trainingDate ? new Date(input.adminScheduleInfo.trainingDate) : null,
            presentationDate: input.adminScheduleInfo.presentationDate ? new Date(input.adminScheduleInfo.presentationDate) : null
          }
        }
      },
      include: includes
    });
  }

  update(id: number, input: RegistrationInput) {
    return this.prisma.registration.update({
      where: { id },
      data: {
        ...toScalarData(input),
        sacramentStatus: { upsert: { update: input.sacramentStatus, create: input.sacramentStatus } },
        godparentInfo: { upsert: { update: input.godparentInfo, create: input.godparentInfo } },
        baptismInfo: {
          upsert: {
            update: { ...input.baptismInfo, baptismDate: input.baptismInfo.baptismDate ? new Date(input.baptismInfo.baptismDate) : null },
            create: { ...input.baptismInfo, baptismDate: input.baptismInfo.baptismDate ? new Date(input.baptismInfo.baptismDate) : null }
          }
        },
        paymentInfo: {
          upsert: {
            update: { ...input.paymentInfo, paidAt: input.paymentInfo.paidAt ? new Date(input.paymentInfo.paidAt) : null },
            create: { ...input.paymentInfo, paidAt: input.paymentInfo.paidAt ? new Date(input.paymentInfo.paidAt) : null }
          }
        },
        adminScheduleInfo: {
          upsert: {
            update: {
              ...input.adminScheduleInfo,
              baptismDate: input.adminScheduleInfo.baptismDate ? new Date(input.adminScheduleInfo.baptismDate) : null,
              trainingDate: input.adminScheduleInfo.trainingDate ? new Date(input.adminScheduleInfo.trainingDate) : null,
              presentationDate: input.adminScheduleInfo.presentationDate ? new Date(input.adminScheduleInfo.presentationDate) : null
            },
            create: {
              ...input.adminScheduleInfo,
              baptismDate: input.adminScheduleInfo.baptismDate ? new Date(input.adminScheduleInfo.baptismDate) : null,
              trainingDate: input.adminScheduleInfo.trainingDate ? new Date(input.adminScheduleInfo.trainingDate) : null,
              presentationDate: input.adminScheduleInfo.presentationDate ? new Date(input.adminScheduleInfo.presentationDate) : null
            }
          }
        }
      },
      include: includes
    });
  }

  async remove(id: number) {
    await this.prisma.registration.delete({ where: { id } });
  }

  async dashboard() {
    const [total, recent] = await Promise.all([
      this.prisma.registration.count(),
      this.prisma.registration.findMany({ include: includes, orderBy: { createdAt: 'desc' }, take: 5 })
    ]);
    return { total, recent };
  }
}
