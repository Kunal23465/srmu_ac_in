export interface InstituteProfile {
  id: number;
  title: string;            // e.g. Department Head
  name: string;             // e.g. Prof. (Dr.) Abhishek Saxena
  position: string;         // e.g. Dean FoCE, SRMU
  image: string;            // img path

 
  summary: string;          // Short text to show on card

  detailsHeading?: string;  // Section title

  details: string[];        // Bullet OR normal items depending on useBullets

  useBullets?: boolean;     // NEW -> whether to show list as bullets

  modalContent?: string;    // NEW -> full long modal description (paragraphs)
}
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
  modalContent?: React.ReactNode; 
}

