import scst from "../../../assets/images/about/committeesAndCells/sc-st.webp";
import discri from "../../../assets/images/about/committeesAndCells/anti-discrimination-cell.webp";
import comp from "../../../assets/images/about/committeesAndCells/complaint.webp";
import saving from "../../../assets/images/about/committeesAndCells/saving-money.webp";
import rag from "../../../assets/images/about/committeesAndCells/anti-ragging-committee.webp";
import board from "../../../assets/images/about/committeesAndCells/proctorial-board1.webp";
import digital from "../../../assets/images/about/committeesAndCells/digital-learning-monitoring.webp";
import gender from "../../../assets/images/about/committeesAndCells/gender-sensitization-cell.webp";
import obc from "../../../assets/images/about/committeesAndCells/OBC-CELL.webp";
import minority from "../../../assets/images/about/committeesAndCells/minority-cell.webp";
import unnat from "../../../assets/images/about/committeesAndCells/unnat.webp";
import grievance from "../../../assets/images/about/committeesAndCells/Student-Grievance-and-Redressal-Committee.webp";
import { customeOverViewType } from "../../../types/home-data-type";


export const CommitteeOverviewData: customeOverViewType = {
  heading: "Committees & Cells",
  content:
    "Education has the potential to change our world. It is a powerful tool for eradicating inequality. gender disparity, diminishing poverty, alleviation of disease and to develop means for creating a sustainable planet, infused with peace and prosperity.",

  counterSibling:
    "Founders of the University, Alumni and Gold Medalist from IIT Kanpur, envision Shri Ramswaroop Memorial University to be a globally recognized place of teaching-learning, doing research and preparing human capital with ethical, social and ecological sensibilities, thereby contributing to national prosperity.",
};

export interface Card {
  id: number;
  title: string;
  breadcrumb: string;
  routeKey: string;
  description: string;
  longDescription?: string;
  members?: string[];
  contact?: string[];
  imagePath: string;
  readMoreLink: string;
}

export const committeeCards: Card[] = [
  {
    id: 1,
    title: "Anti Ragging Committee",
    breadcrumb: "Anti Ragging Committee",

    routeKey: "anti-ragging",

    description: ' Ragging is a Criminal Offence as per “The UP Prohibition of Ragging in the Educational Institutions Act 2010.... ',

    longDescription: `
    Ragging is a Criminal Offence as per “The UP Prohibition of Ragging in the Educational Institutions Act 2010” passed by Uttar Pradesh legislature and by the order of Hon’ble Supreme Court dated 08 May, 2009. To implement the same in the session 2022-23 also, the Anti-Ragging Committee has been constituted as per ‘UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009’.
    `,

    members: [
    "Col. (Dr.) Vijay Kumar Tiwari, Vice Chancellor",
    "Prof. B. M. Dixit, Director, Students Welfare (Vice Chairman)",
    "Mr. Piyush Srivastava, Assistant Editor, The Telegraph, Member (Media Representative)",
    "Ms. Shachi Singh, General Secretary, NGO-Ehsaas (NGO Representative)",
    "Chowki Incharge, Gadiya (Police Representative)",
    "Dr. Praveen Srivastava, Chief Proctor",
    "Mr. S.K. Singh, Dy. Director (SRMU Polytechnic)",
    "Dr. P. C. Mishra, Associate Professor, ILS",
    "Dr. Veena Singh, Associate Professor, IMCE",
    "Dr. Sandeep Dixit, Assistant Professor, IoT",
    "Dr. Gyan Prakash Srivastava, Assistant Professor, IER",
    "Dr. Riyaz Ahmad, Assistant Professor, IAST",
    "Dr. Amar Pal, Associate Professor, INSH",
    "Ms. Safa Marwa, Assistant Professor, IoPS",
    "Mr. Neelesh Mishra, Assistant Professor, IoT",
    "Er. Kartikesh Tiwari, Assistant Professor, IoT",
    "Ms. Apurwa Singh, Assistant Professor, IoP",
    "Ms. Neeraj Kumar Verma, Assistant Professor, IoP",
    "Chief Hostel Warden Boys",
    "Chief Hostel Warden Girls",
    "Pranshu Agrahari, Convener University Student, Senate 2025-26",
    "Isha Singh, Deputy Convener University Student, Senate 2025-26",
    "Prashant Mishra, Secretary Convener University Student, Senate 2025-26"
  ],

    contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Anti Ragging WhatsApp Number: 9118885178 **OR**",
      "Mail at registrar.office@srmuu.ac.in / registrar@srmuu.ac.in / vc@srmuu.ac.in **OR**",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

    imagePath: rag,

    readMoreLink: "/committee/anti-ragging-committee",
  },
 {
  id: 2,
  title: "Proctorial Board",
  breadcrumb: "Proctorial Board",

  routeKey: "proctorial-board",

  description:
    "To provide the serenity and ambience necessary for the pursuit of academic excellence in the campus, Discipline is prerequisite.",

  longDescription: `
To provide the serenity and ambience necessary for the pursuit of academic excellence in the campus, Discipline is prerequisite. To ensure the same, constitution of Proctorial Board has been revised (as under) for the session 2025-26.
  `,

  members: [
    "Prof. (Dr.) V. N. Pathak, INSH, Chief Proctor",
    "Prof. (Dr.) Veena Singh, IMCE, Proctor",
    "Prof. (Dr.) N.B. Singh, ILS, Proctor",
    "Mr. S.K. Singh, SRMU Polytechnic, Assistant Proctor",
    "Prof. (Dr.) Prachi Bhargava, IAST, Assistant Proctor",
    "Dr. Anil Kumar, INSH, Assistant Proctor",
    "Ms. Anjali Awasthi, DCSE, Member",
    "Mr. Neelesh Mishra, DCSE, Member",
    "Mr. Atul Verma, DCSIS, Member",
    "Mr. Vikram Singh, FoME, Member",
    "Dr. Ruchi Singh, IOP, Member",
    "Dr. Nancy Gupta, IMCE, Member",
    "Dr. Shashank Shekhar, ILS, Member"
  ],

   contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Anti Ragging WhatsApp Number: 9118885178 **OR**",
      "Mail at registrar.office@srmu.ac.in / registrar@srmu.ac.in / vc@srmu.ac.in **OR**",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

  imagePath: board,

  readMoreLink: "/committee/proctorial-board",
},
  {
    id: 3,
    title: "SC/ST Welfare Committee",
    breadcrumb: "SC/ST Welfare Committee",

    routeKey: "sc-st-welfare-committee",

    description:
      "The University is sensitive about the welfare of all students including SC and ST.",

    longDescription: `
The University is sensitive about the welfare of all students including SC and ST.
To help financially weaker students through Student Welfare Fund and facilitates SC, ST students to avail the benefits of scholarship schemes of the Central and State Governments, a SC/ST Committee at University level is hereby constituted.University helps financially weaker students through the Student Welfare Fund and facilitates SC/ST students to avail the benefits of scholarship schemes of the Central and State Governments.
    `,

    members: [
    "Prof. B. M. Dixit, Director, Student Welfare",
    "Mr. Amod C. Katiha, Deputy Registrar, Academics",
    "Mr. Sunny Kumar, Assistant Professor, DCSE"
  ],

    contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Mail at registrar.office@srmu.ac.in / registrar@srmu.ac.in / vc@srmu.ac.in",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

    imagePath: scst,

    readMoreLink: "/committee/sc-st-welfare-committee",
  },
 {
  id: 4,
  title: "Students Welfare Fund Committee",
  breadcrumb: "Students Welfare Fund Committee",

  routeKey: "students-welfare-fund-committee",

  description:
    "A meeting of Student Welfare Fund Committee members is scheduled on November 11, 2025 (Tuesday) under the chairmanship of Hon'ble Vice Chancellor.",

  longDescription: `
A meeting of Student Welfare Fund Committee members is scheduled on November 11, 2025 (Tuesday) under the chairmanship of Hon'ble Vice Chancellor.
Following members are requested to be present at the Conference Room by 02:00 PM.
  `,

  members: [
    "Col. (Dr.) Vijay Kumar Tiwari, Vice Chancellor (Chairman)",
    "Prof. B. M. Dixit, Director, Student Welfare (Member)",
    "Prof. Ritu Chandra, Principal, IER & Director, IQAC (Member)",
    "Shri R. K. Jaiswal, Finance Officer (Member, Treasurer)",
    "Ar. Amod C. Katiha, Deputy Registrar, Academics (Member Secretary)",
    "Pranshu Agrahari (Convener)",
    "Isha Singh (Deputy Convener)",
    "Vipul Verma (Treasurer)",
    "Prashant Mishra (Secretary)"
  ],

  contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Mail at registrar.office@srmu.ac.in / registrar@srmu.ac.in / vc@srmu.ac.in **OR**",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

  imagePath: saving,

  readMoreLink: "/committee/students-welfare-fund-committee",
},
  {
    id: 5,
    title: "Anti-Discrimination Cell",
    breadcrumb: "Anti-Discrimination Cell",

    routeKey: "anti-discrimination-cell",

    description: "The University provides everybody with equal opportunity into its fold irrespective of caste, religion, language or based on gender.",

    longDescription: `
The University provides everybody with equal opportunity into its fold irrespective of caste, religion, language or based on gender. The University ensures that every individual inside the campus exercise & acquire equal rights in the process of offering or receiving education. Justice, Peace and Revolution are the roots based on which the living system exist in the campus. Any act, speech or intention that perturbs the harmony amongst people is seriously regarded and dealt on immediate basis to restore the peace.
The University has constituted the Anti-Discrimination Cell in compliance to the UGC regulations (Promotion of Equity in Higher Educational Institutions), with the following members:`,

    members: [
    "Prof. (Dr.) Ritu Chandra, Director, IQAC – Chairperson",
    "Prof. (Dr.) Manju Pandey, Director, IoP – Member",
    "Prof. (Dr.) Amit Kumar, Director, IoPS – Member",
    "Dr. Shweta Shukla, Associate Professor, Faculty of Humanities & Social Sciences – Member",
    "Ms. Itee Pandey, Assistant Professor, IoPS – Member",
    "Prof. (Dr.) Shikha Srivastava, Associate Professor, IoP – Member",
    "Ms. Shraddha Pandey, Assistant Professor, IoP – Member",
    "Ms. Safa Marwa, Assistant Professor, IoPS – Member"
  ],

    contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Mail at registrar.office@srmu.ac.in / registrar@srmu.ac.in / vc@srmu.ac.in **OR**",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

    imagePath: discri,
    readMoreLink: "/committee/anti-discrimination-cell",
  },
  {
    id: 6,
    title: "Internal Complaints Committee",
    breadcrumb: "Internal Complaints Committee",

    routeKey: "internal-complaints-committee",

    description:
      `In order to prevent harassment of employee or students inside the University Campus "Internal Complaints Committee" has been constituted.`,

    longDescription: `
In order to prevent harassment of employee or students inside the University Campus "Internal Complaints Committee" has been constituted. The composition of Internal Complaints Committee (ICC) is as under:
Objectives of the Committee

(a) Provide a work place based on equality and respect. The cell shall look after the matters (if any), of depriving a student/ staff or group of students on the basis of caste, creed, language, ethnicity, gender, different ability.
(b) Provide a safe and congenial work environment for the academic growth of the people belonging to the university.
(c) Provide assistance if an employee or a student chooses to file a police complaint.
(d) Provide a system to redress dispute and dialogue to address issues through conciliation without adversely effecting complainant's rights to minimize the need for purely punitive approaches.
(e) Ensure protection against retaliation to complainants, witnesses, committee members and other employees involved in prevention and complaint resolution.
(f) Ensure adverse action against a covered individual because the employee or the student is engaged in protected activities.
(g) Women Harassment matters will be forwarded to Women Grievance Redressal Cell.`,

     members: [
    "Prof (Dr) Ritu Chandra, Principal, Institute of Education & Research (Chairperson) – Ex-Officio",
    "Ms Shachi Singh, General Secretary, NGO-Ehsaas (NGO Representative)",
    "Director, Student Welfare (Member)",
    "Chief Proctor (Member)",
    "Concerned Director/ Dean/ HOD",
    "Dr Veena Singh, Associate Professor, IMCE (Member)",
    "Dr Shruti Sharma, Associate Professor, Institute of Legal Studies (Member)",
    "Dr Manjari Kureel, Assistant Professor, FOHSS (Member)",
    "Deputy Registrar, Academics (Member Secretary) – Ex-Officio",
    "Any member can be nominated at the discretion of the Chairperson"
  ],

    contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Mail at registrar.office@srmu.ac.in / registrar@srmu.ac.in / vc@srmu.ac.in **OR**",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

    imagePath: comp,

    readMoreLink: "/committee/internal-complaints-committee",
  },
  {
  id: 7,
  title: "Digital Learning Monitoring Cell",
  breadcrumb: "Digital Learning Monitoring Cell",

  routeKey: "digital-learning-monitoring-cell",

  description:
    "Under Digital Initiative by MHRD and Government of India, “Digital Learning Monitoring Cell” is established in Shri Ramswaroop Memorial University.",

  longDescription: `
Under Digital Initiative by MHRD and Government of India, “Digital Learning Monitoring Cell” is established in Shri Ramswaroop Memorial University. In fast changing world of educational technology, the campuses across the world are using educational technology for the better functioning and academic standards. The objective of “Digital Learning Monitoring Cell” is to inculcate digital culture by following and implementing Digital Action Plan 17-by-17. As per Govt. guidelines, the Digital Learning Monitoring Cell would work out and formulate 3 years immediate plan, 7 years intermediate plan and 15 year vision for the ‘University Smart Campus’.
  `,

  members: [
    "Dr. Sonal Prasad, Assistant Professor, IBST (Chairperson)",
    "Mr. Neelesh Mishra, Assistant Professor, IOT (Member)",
    "Dr. P.C. Mishra, Associate Professor, ILS (Member)",
    "Dr. Sankalp Mishra, Assistant Professor, IBST (Member)",
    "Mr. Rakesh Vishwakarma, Assistant System Administrator (Member)",
    "Mr. Abhash Gupta, Assistant Registrar, Registrar Office (Member)",
  ],

   contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Mail at registrar.office@srmu.ac.in / registrar@srmu.ac.in / vc@srmu.ac.in **OR**",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

  imagePath: digital,

  readMoreLink: "/committee/digital-learning-monitoring-cell",
},
  {
    id: 8,
    title: "Gender Sensitization Cell",
    breadcrumb: "Gender Sensitization Cell",

    routeKey: "gender-sensitization-cell",

    description:
      "Gender Sensitization involves creating awareness about gender issues and working towards creating an enabling environment of gender justice where men and women can work together ...",

    longDescription: `
Gender Sensitization involves creating awareness about gender issues and working towards creating an enabling environment of gender justice where men and women can work together with a sense of personal security and dignity.
Based upon the recommendations in the ‘Saksham’ report on Safety of Women and Gender Sensitization on Campuses and as per the directions of University Grants Commission, ‘Gender Sensitization Cell’ has been constituted in the University.
    `,

    members: [
    "Prof. (Dr.) Manju Pandey, Director, IoP – Chairperson",
    "Prof. (Dr.) Amit Kumar, Director, IoPS – Member",
    "Dr. P. C. Mishra, Associate Professor, ILS – Member",
    "Dr. Veena Singh, Associate Professor, IMCE & Power Angel, 1090 Women Help Line – Member",
    "Ms. Sarita Singh, Associate Professor, IoP – Member",
    "Ms. Anshika Pandey, Assistant Professor, IoPS – Member",
    "Ms. Shraddha Pandey, Assistant Professor, IoP – Member",
    "Ms. Itee Pandey, Assistant Professor, IoPS – Member"
  ],


    contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Mail at registrar.office@srmu.ac.in / registrar@srmu.ac.in / vc@srmu.ac.in **OR**",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

    imagePath: gender,

    readMoreLink: "/committee/gender-sensitization-cell",
  },
  {
  id: 9,
  title: "OBC Cell",
  breadcrumb: "OBC Cell",

  routeKey: "obc-cell",

  description:
    "The constitution for University OBC Category Cell will be as follows:",

  longDescription: `
The constitution for University OBC Category Cell will be as follows:
The meeting of this cell for OBC Category will be convened under the chairmanship of Registrar.

The agenda of meeting is appended below:
a) Details of OBC Candidates admitted in the academic session 2025-26.
b) Verification of their documents as per the Government Gazette Notification.
c) Publication and submission of documents.
d) Any other issues brought to the notice of cell.
  `,

  members: [
    "Amod C. Katiha (Presiding Officer)",
    "Prof. B. M. Dixit",
    "Dr. Dilip Kumar"
  ],

  contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Mail at registrar.office@srmu.ac.in / registrar@srmu.ac.in / vc@srmu.ac.in **OR**",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

  imagePath: obc,

  readMoreLink: "/committee/obc-cell",
},
  {
    id: 10,
    title: "Minority Cell",
    breadcrumb: "Minority Cell",

    routeKey: "minority-cell",

    description:
      "The Minority Cell supports and strengthens minority students in their academic, co-curricular, and extracurricular endeavors, helping them integrate into the mainstream.",

    longDescription: `
The Minority Cell at Shri Ramswaroop Memorial University aims to assist students from minority communities in their cultural, educational, and academic pursuits. 
It provides support to help these students integrate into the mainstream while addressing the specific needs of minority groups.
    `,

    members: ["Prof. B.M. Dixit", "Mr. Abhay Singh", "Dr. Dilip Kumar"],

    contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Mail at registrar.office@srmu.ac.in / registrar@srmu.ac.in / vc@srmu.ac.in **OR**",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

    imagePath: minority,

    readMoreLink: "/committee/minority-cell",
  },
  {
    id: 11,
    title: "Unnat Bharat Cell",
    breadcrumb: "Unnat Bharat Cell",

    routeKey: "unnat-bharat-cell",

    description: "The Unnat Bharat Cell enables the University to collaborate with rural communities to identify development challenges and implement sustainable solutions.",

    longDescription: `
Unnat Bharat Abhiyan is inspired by the vision of transformational change in rural development by leveraging knowledge institutions. 
The mission of the Unnat Bharat Cell is to enable universities to work with rural Indian communities, identify development concerns, and devise appropriate solutions to accelerate sustainable progress.
    `,

    members: [
      "Dr. Devendra, ILS – Coordinator",
      "Dr. Riyaz Ahmad (IAST), Member",
      "Dr. Prashant Srivastava, ILS – Member",
      "Dr. Amar Pal Singh, INSH – Member",
      "Dr. Ashish Kumar Srivastava, IER – Member",
      "Dr. Tabish Qidwai, IBST – Member",
    ],

    contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Mail at registrar.office@srmu.ac.in / registrar@srmu.ac.in / vc@srmu.ac.in **OR**",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

    imagePath: unnat,
    readMoreLink: "/committee/unnat-bharat-cell",
  },
  {
    id: 12,
    title: "Student Grievance and Redressal Committee",
    breadcrumb: "Student Grievance and Redressal Committee",

    routeKey: "student-grievance-redressal-committee",

    description: "The Student Grievance and Redressal Committee addresses student complaints and fosters accountability to maintain a peaceful learning environment.",

    longDescription: `
The Student Grievance and Redressal Committee investigates and evaluates complaints submitted by students. 
Its goal is to ensure accountability and responsiveness among all parties, preserving a safe and peaceful academic environment. 
The committee has the authority to investigate complaints of harassment and other grievances.
    `,

    members: [
      "Dr. B. M. Dixit – Chairperson",
      "Dr. Praveen Srivastava, Chief Proctor – Member",
      "Dr. R. S. Bajpai, Dean, FoEE – Member",
      "Dr. Ritu Chandra, Principal, IER – Member",
      "Mr. Abhay Singh, Dy. Registrar, Academics – Member",
      "Mr. Abhishek Kumar Singh, B.A. LL.B. (H) - Convenor",
    ],

    contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Mail at registrar.office@srmu.ac.in / registrar@srmu.ac.in / vc@srmu.ac.in **OR**",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

    imagePath: grievance,

    readMoreLink: "/committee/student-grievance-redressal-committee",
  },
];
