import { customeOverViewType } from "../../../types/home-data-type";
import scst from "../../../assets/images/about/committeesAndCells/sc-st.jpg"
import discri from "../../../assets/images/about/committeesAndCells/anti-discrimination-cell.jpg"
import comp from "../../../assets/images/about/committeesAndCells/complaint.jpg"
import saving from "../../../assets/images/about/committeesAndCells/saving-money.jpg"
import rag from "../../../assets/images/about/committeesAndCells/anti-ragging-committee.jpg"
import board from "../../../assets/images/about/committeesAndCells/proctorial-board1.jpg"
import digital from "../../../assets/images/about/committeesAndCells/digital-learning-monitoring.jpg"
import gender from "../../../assets/images/about/committeesAndCells/gender-sensitization-cell.jpg"
import obc from "../../../assets/images/about/committeesAndCells/OBC-CELL.jpg"
import minority from "../../../assets/images/about/committeesAndCells/minority-cell.jpg"
import unnat from "../../../assets/images/about/committeesAndCells/unnat.jpg"
import grievance from "../../../assets/images/about/committeesAndCells/Student-Grievance-and-Redressal-Committee.jpg"





export interface Card {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  readMoreLink: string;
}

export const committeeCards: Card[] = [
  {
    id: 1,
    title: 'Anti Ragging Committee',
    description: 'Ragging is a Criminal Offence as per "The UP Prohibition of Ragging in the Educational Institutions Act 2010" passed by Uttar Pradesh legislature and by the order of Hon\'ble Supreme Court dated 08 May, 2009.',
    imagePath: rag,
    readMoreLink: '/committees/anti-ragging',
  },
  {
    id: 2,
    title: 'Proctorial Board',
    description: 'To provide the serenity and ambience necessary for the pursuit of academic excellence in the campus. Discipline is prerequisite.',
    imagePath: board,
    readMoreLink: '/committees/proctorial-board',
  },
  {
    id: 3,
    title: 'SC/ST Welfare Committee',
    description: 'The University is sensitive about the welfare of all students including SC and ST.',
    imagePath: scst,
    readMoreLink: '/committees/sc-st-welfare',
  },

  {
    id: 4,
    title: 'Students Welfare Fund Committee',
    description: 'The University has established a fund known as Student Welfare Fund in the academic session 2014-15 with an objective to help the needy, poor and deserving students to pursue studies.',
    imagePath: saving,
    readMoreLink: '/committees/digital-learning',
  },
  {
    id: 5,
    title: 'Anti-Discrimination Cell',
    description: 'The University provides everybody with equal opportunity into its fold irrespective of caste, religion, language or based on gender.',
    imagePath: discri,
    readMoreLink: '/committees/gender-sensitization',
  },
  {
    id: 6,
    title: 'Internal Complaints Committee',
    description: 'Sexual Harassment is an offence under The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 No. 14 of 2013.',
    imagePath: comp,
    readMoreLink: '/committees/obc-cell',
  },
  {
    id: 7,
    title: 'Digital Learning Monitoring Cell',
    description: 'Under Digital Initiative by MHRD and Government of India, “Digital Learning Monitoring Cell” is established in Shri Ramswaroop Memorial University. ',
    imagePath: digital,
    readMoreLink: '/committees/minority-cell',
  },
  {
    id: 8,
    title: 'Gender Sensitization Cell',
    description: 'Gender Sensitization involves creating awareness about gender issues and working towards and creating an enabling environment of gender justice where men and women can work together with a sense of personal security and dignity.',
    imagePath: gender,
    readMoreLink: '/committees/unnat-bharat-abhiyan',
  },
  {
    id: 9,
    title: 'OBC CELL',
    description: 'The OBC Cell at Shri Ramswaroop Memorial University was established with the purpose to empower the OBC students.',
    imagePath: obc,
    readMoreLink: '/committees/grievance-redressal',
  },
  {
    id: 10,
    title: 'Minority Cell',
    description: 'The Minority Cell\'s purpose is to support and strengthen the minority groups in all of their extracurricular, co-curricular, and academic endeavors.',
    imagePath: minority,
    readMoreLink: '/committees/grievance-redressal',
  },
  {
    id: 11,
    title: 'Unnat Bharat Cell',
    description: 'Unnat Bharat Abhiyan is inspired by the vision of transformational change in rural development processes by leveraging knowledge institutions to help build the architecture of an Inclusive India.',
    imagePath: unnat,
    readMoreLink: '/committees/grievance-redressal',
  },
  {
    id: 12,
    title: 'Student Grievance And Redressal Committee',
    description: 'The Student Grievance and Redressal Committee was established with the purpose of investigating and evaluating any complaints submitted by students.',
    imagePath: grievance,
    readMoreLink: '/committees/grievance-redressal',
  },
];




export const CommitteeOverviewData: customeOverViewType = {
  heading: "Committees & Cells",
  content:
    "Education has the potential to change our world. It is a powerful tool for eradicating inequality, gender disparity, diminishing poverty, alleviation of disease and to develop means for creating a sustainable planet, infused with peace and prosperity. Founders of the University, Alumni and Gold Medalist from IIT Kanpur, envision Shri Ramswaroop Memorial University to be a globally recognized place of teaching-learning, doing research and preparing human capital with ethical, social and ecological sensibilities, thereby contributing to national prosperity."
};

