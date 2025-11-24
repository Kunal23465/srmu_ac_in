export interface ProfileData {
  name: string;
  title: string;
  designation: string;
  office: string;
  imageSrc: string;
  experienceTotal: string;
  experienceBreakdown?: string;
  supervisorDetail?: string;
  achievements: string[];
  consultancyCount?: number;
  consultancyCost?: string;
  fundingAgencies?: string;
  eiaProjects?: string[];
  totalEiaProjects?: string;
  profileButtonText: string;
  profileButtonLink: string;
  backgroundColor: string;
}