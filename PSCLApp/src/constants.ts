import { CatechesisHistory, FormationTrack, PaymentMethod } from './types/registration';

export const formationTrackOptions: Array<{ value: FormationTrack; label: string }> = [
  { value: 'AGE_0_5', label: '0-5 ans' },
  { value: 'AGE_6', label: '6 ans' },
  { value: 'AGE_7_13', label: '7-13 ans' },
  { value: 'AGE_14_17', label: '14-17 ans' },
  { value: 'ADULT_CATECHUMENATE', label: 'Catéchuménat adultes (18 ans+)' },
  { value: 'ADULT_CONFIRMATION', label: 'Confirmation adultes (18 ans+)' }
];

export const catechesisHistoryOptions: Array<{ value: CatechesisHistory; label: string }> = [
  { value: 'NONE', label: 'Aucune' },
  { value: 'ONE_YEAR', label: 'Une année' },
  { value: 'TWO_YEARS', label: 'Deux années' },
  { value: 'THREE_YEARS', label: 'Trois années' },
  { value: 'FOUR_YEARS', label: 'Quatre années' },
  { value: 'OTHER', label: 'Autre précision' }
];

export const paymentMethodOptions: Array<{ value: PaymentMethod; label: string }> = [
  { value: 'CASH', label: 'Comptant' },
  { value: 'CHEQUE', label: 'Chèque' },
  { value: 'DEBIT', label: 'Débit' },
  { value: 'CREDIT_CARD', label: 'Carte de crédit' },
  { value: 'INTERAC', label: 'Virement Interac' }
];
