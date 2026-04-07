export type FormationTrack =
  | 'AGE_0_5'
  | 'AGE_6'
  | 'AGE_7_13'
  | 'AGE_14_17'
  | 'ADULT_CATECHUMENATE'
  | 'ADULT_CONFIRMATION';

export type CatechesisHistory = 'NONE' | 'ONE_YEAR' | 'TWO_YEARS' | 'THREE_YEARS' | 'FOUR_YEARS' | 'OTHER';

export type PaymentMethod = 'CASH' | 'CHEQUE' | 'DEBIT' | 'CREDIT_CARD' | 'INTERAC';

export interface RegistrationInput {
  registrationYear: number;
  formationTrack: FormationTrack;
  firstName: string;
  lastName: string;
  birthDate: string;
  age: number;
  motherFirstName: string;
  motherLastName: string;
  fatherFirstName: string;
  fatherLastName: string;
  address: string;
  city: string;
  postalCode: string;
  fatherPhone: string;
  motherPhone: string;
  parentEmail: string;
  birthCertificateProvided: boolean;
  catechesisHistory: CatechesisHistory;
  catechesisHistoryOther?: string | null;
  signature?: string | null;
  signatureDate?: string | null;
  sacramentStatus: {
    baptism: boolean;
    firstPardon: boolean;
    firstCommunion: boolean;
    professionOfFaith: boolean;
    confirmation: boolean;
  };
  godparentInfo: {
    godfatherFirstName?: string | null;
    godfatherLastName?: string | null;
    godfatherCertificateProvided: boolean;
    godmotherFirstName?: string | null;
    godmotherLastName?: string | null;
    godmotherCertificateProvided: boolean;
  };
  baptismInfo: {
    baptismDate?: string | null;
    baptismCertificateProvided: boolean;
    baptismParishName?: string | null;
    baptismParishAddress?: string | null;
    baptismParishEmail?: string | null;
  };
  paymentInfo: {
    registrationFee: number;
    trainingFee: number;
    paymentMethod: PaymentMethod;
    chequeNumber?: string | null;
    paidAt?: string | null;
  };
  adminScheduleInfo: {
    baptismDate?: string | null;
    baptismTime?: string | null;
    celebrant?: string | null;
    trainingDate?: string | null;
    trainingTime?: string | null;
    presentationDate?: string | null;
    presentationTime?: string | null;
  };
}

export interface RegistrationRecord extends RegistrationInput {
  id: number;
  createdAt: string;
  updatedAt: string;
}
