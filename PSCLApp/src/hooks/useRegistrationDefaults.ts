import { RegistrationFormData } from '@/schemas/registrationSchema';

export const registrationDefaults: RegistrationFormData = {
  registrationYear: new Date().getFullYear(),
  formationTrack: 'AGE_7_13',
  firstName: '',
  lastName: '',
  birthDate: '',
  age: 0,
  motherFirstName: '',
  motherLastName: '',
  fatherFirstName: '',
  fatherLastName: '',
  address: '',
  city: '',
  postalCode: '',
  fatherPhone: '',
  motherPhone: '',
  parentEmail: '',
  birthCertificateProvided: false,
  catechesisHistory: 'NONE',
  catechesisHistoryOther: '',
  signature: '',
  signatureDate: '',
  sacramentStatus: {
    baptism: false,
    firstPardon: false,
    firstCommunion: false,
    professionOfFaith: false,
    confirmation: false
  },
  godparentInfo: {
    godfatherFirstName: '',
    godfatherLastName: '',
    godfatherCertificateProvided: false,
    godmotherFirstName: '',
    godmotherLastName: '',
    godmotherCertificateProvided: false
  },
  baptismInfo: {
    baptismDate: '',
    baptismCertificateProvided: false,
    baptismParishName: '',
    baptismParishAddress: '',
    baptismParishEmail: ''
  },
  paymentInfo: {
    registrationFee: 85,
    trainingFee: 0,
    paymentMethod: 'CASH',
    chequeNumber: '',
    paidAt: ''
  },
  adminScheduleInfo: {
    baptismDate: '',
    baptismTime: '',
    celebrant: '',
    trainingDate: '',
    trainingTime: '',
    presentationDate: '',
    presentationTime: ''
  }
};
