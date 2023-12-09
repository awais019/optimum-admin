export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
};

export type DoctorAll = {
  id: string;
  name: string;
  experience: number;
  clinicName: string;
  clinicCity: string;
  clinicAddress: string;
};

export interface Doctor {
  id: string;
  name: string;
  email: string;
  gender: string;
  verificationStatus: string;
  experience: number;
  clinicName: string;
  clinicAddress: string;
  clinicCity: string;
  state: string;
  documentName: string;
}
