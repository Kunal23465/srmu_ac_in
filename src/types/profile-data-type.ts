
export interface ProfileData {
  name: string;
  title: string;
  designation: string;
  office: string;
  qualification?: string;
  emailID?: string;
  orcidID?: string;
  contactNum?: string;
  imageSrc: string;
  experienceTotal: string;
  experienceBreakdown?: string;
  supervisorDetail?: string;
  achievements?: string[];
  consultancyCount?: number;
  consultancyCost?: string;
  fundingAgencies?: string;
  eiaProjects?: string[];
  totalEiaProjects?: string;
  profileButtonText: string;
  backgroundColor: string;
  modalContent: React.ReactNode;  
}
