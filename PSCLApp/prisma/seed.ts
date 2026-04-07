import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.registration.deleteMany();

  await prisma.registration.create({
    data: {
      registrationYear: 2026,
      formationTrack: 'AGE_7_13',
      firstName: 'Élodie',
      lastName: 'Martel',
      birthDate: new Date('2015-03-15'),
      age: 11,
      motherFirstName: 'Julie',
      motherLastName: 'Martel',
      fatherFirstName: 'Marc',
      fatherLastName: 'Martel',
      address: '123 Rue Principale',
      city: 'Montréal',
      postalCode: 'H1A 1A1',
      fatherPhone: '5141112233',
      motherPhone: '5141112244',
      parentEmail: 'famille.martel@example.org',
      birthCertificateProvided: true,
      catechesisHistory: 'ONE_YEAR',
      signature: 'Julie Martel',
      signatureDate: new Date('2026-02-10'),
      sacramentStatus: { create: { baptism: true, firstPardon: false, firstCommunion: false, professionOfFaith: false, confirmation: false } },
      godparentInfo: { create: { godfatherFirstName: 'Louis', godfatherLastName: 'Roy', godfatherCertificateProvided: true, godmotherFirstName: 'Anne', godmotherLastName: 'Lefebvre', godmotherCertificateProvided: true } },
      baptismInfo: { create: { baptismDate: new Date('2015-06-20'), baptismCertificateProvided: true, baptismParishName: 'Saint-Jean', baptismParishAddress: '45 Rue Est', baptismParishEmail: 'contact@stjean.org' } },
      paymentInfo: { create: { registrationFee: 85, trainingFee: 40, paymentMethod: 'INTERAC', paidAt: new Date('2026-02-12') } },
      adminScheduleInfo: { create: { baptismDate: new Date('2026-05-21'), baptismTime: '10:00', celebrant: 'Père Antoine', trainingDate: new Date('2026-04-10'), trainingTime: '19:00', presentationDate: new Date('2026-04-25'), presentationTime: '09:30' } }
    }
  });
}

main().finally(async () => prisma.$disconnect());
