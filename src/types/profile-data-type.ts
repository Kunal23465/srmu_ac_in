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

