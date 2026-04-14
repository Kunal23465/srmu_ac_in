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
import { SITE_URL } from "../../../utils/seo";


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

    description: 'Ragging is a Criminal Offence as per "The UP Prohibition of Ragging in the Educational Institutions Act 2010"...',

    longDescription: `
Ragging is a Criminal Offence as per “The UP Prohibition of Ragging in the Educational Institutions Act 2010” passed by the Uttar Pradesh legislature and by order of the Hon’ble Supreme Court dated 08 May, 2009.

To implement the same in the session 2023–24 also, the Anti-Ragging Committee has been constituted as per ‘UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009’.
    `,

    members: [
      "Prof. D. K. Sharma, Vice Chancellor (Chairman)",
      "Prof. B. M. Dixit, Director, Students Welfare (Vice Chairman)",
      "Mr. Piyush Srivastava, Assistant Editor, The Telegraph (Media Representative)",
      "Ms. Shachi Singh, General Secretary, NGO-Ensaas (NGO Representative)",
      "Chowki Incharge, Gadiya (Police Representative)",
      "Dr. Praveen Srivastava, Chief Proctor",
      "Prof. Krishna Srivastava, Chief Hostel Warden, Proctor",
      "Dr. P.C Mishra (Asso. Prof.) (Faculty)",
      "Mr. Neeraj Kumar Verma (Assistant Professor) (Faculty)",
      "Dr. Alka Singh, Professor (Faculty)",
      "Mr. Sanjay Kumar Srivastava (Parents Representative)",
      "Ms. Shivajee Mishra, BBA LL.B. V Year (Student Representative)",
      "Ms. Sudhakar Singh, B.Tech. (CE) III Year (Student Representative)",
      "Mr. Adarsh Kumar Mishra, B.Sc. (H) Chemistry II Year (Student Representative)",
      "Mr. Abhishek Kumar Singh, B.A. LL.B. (H) III Year (Hostel Representative)",
      "Mr. Lalit Mohan Singh Negi, Admin Officer (Non-Teaching Staff)",
      "Mr. Abhay Singh, Deputy Registrar, Academics (Member Secretary)",
    ],

    contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Anti Ragging WhatsApp Number: 9554965584 **OR**",
      "Mail at registrar.office@srmuu.ac.in / registrar@srmuu.ac.in / vc@srmuu.ac.in **OR**",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

    imagePath: rag,

    readMoreLink: "/committe/anti-ragging-committee",
  },
  {
    id: 2,
    title: "Proctorial Board",
    breadcrumb: "Proctorial Board",

    routeKey: "proctorial-board",

    description:
      "To provide the serenity and ambience necessary for the pursuit of academic excellence in the campus, discipline is prerequisite. The Proctorial Board ensures the maintenance of discipline and academic environment on campus.",

    longDescription: `
The Proctorial Board has been constituted for the session 2023-24 to ensure discipline and a conducive environment for academic excellence. 
The board comprises senior faculty members, administrative officers, and other key members who collectively oversee campus conduct and address student grievances.
    `,

    members: [
      "Professor (Dr.) B. M. Dixit, Director, Students Welfare (Chairman)",
      "Dr. Praveen Srivastava, Chief Proctor",
      "Professor (Dr.) Krishna Srivastava, Chief Hostel Warden",
      "Dr. Anurag Agnihotri (Mathematical Sciences, INSH), Assistant Proctor",
      "Dr. Alka Singh (IMCE), Assistant Proctor",
      "Dr. Veena Singh (IMCE), Assistant Proctor",
      "Dr. Tabish Qidwai (IBST), Assistant Proctor",
      "Mr. Sunil Singh (IOP), Member",
      "Dr. Devendra (ILS), Assistant Proctor",
      "Dr. Riyaz Ahmad (IAST), Member",
      "Dr. Prashant Srivastava (ILS), Member",
      "Er. Abhishek Saxena (EC, IOT), Member",
      "Dr. Saurabh Shukla (CE, IOT), Member",
      "Mr. Rakesh Dwivedi (ME, IOT), Member",
      "Mr. Satish Kumar Singh (EE, IOT), Member",
      "Mr. S. K. Singh (SRMU-Polytechnic), Member",
      "Ms. Sonali Kalkar (SRMU-Polytechnic), Member",
      "Dr. Gyan Prakash Srivastava (IER), Member",
      "Mr. Lalit Mohan Singh Negi, Admin Officer, Member",
    ],

    contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Anti Ragging WhatsApp Number: 9554965584 **OR**",
      "Mail at registrar.office@srmu.ac.in / registrar@srmu.ac.in / vc@srmu.ac.in **OR**",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

    imagePath: board,
    readMoreLink: "/committe/proctorial-board",
  },
  {
    id: 3,
    title: "SC/ST Welfare Committee",
    breadcrumb: "SC/ST Welfare Committee",

    routeKey: "sc-st-welfare-committee",

    description:
      "The University is sensitive about the welfare of all students including SC and ST. It provides financial support and facilitates access to scholarships from Central and State Governments.",

    longDescription: `
The SC/ST Welfare Committee is constituted to oversee the welfare of SC and ST students. 
The University helps financially weaker students through the Student Welfare Fund and facilitates SC/ST students to avail the benefits of scholarship schemes of the Central and State Governments.
    `,

    members: ["Prof. B. M. Dixit", "Mr. Abhay Singh", "Mr. Sunny Kumar"],

    contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Mail at registrar.office@srmu.ac.in / registrar@srmu.ac.in / vc@srmu.ac.in",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

    imagePath: scst,

    readMoreLink: "/committe/sc-st-welfare-committee",
  },
  {
    id: 4,
    title: "Students Welfare Fund Committee",
    breadcrumb: "Students Welfare Fund Committee",

    routeKey: "students-welfare-fund-committee",

    description:
      "The University has established the Student Welfare Fund to support needy and deserving students, fostering their educational, social, cultural, and moral development.",

    longDescription: `
The Students Welfare Fund Committee oversees the Student Welfare Fund, established in the academic session 2014-15. 
The purpose of this fund is to provide amenities to students that support their overall development and help financially weaker students pursue their studies.
    `,

    members: [
      "Prof. D. K. Sharma, Vice Chancellor (Chairman)",
      "Mr. R. K. Jaiswal, Finance Officer (Member, Treasurer)",
      "Professor B. M. Dixit, Director, Students Welfare (Member Secretary)",
      "Dr. Vijaya Sethi, Dean, Faculty of Humanities (Member)",
      "Mr. Anuj Pratap Singh, B.A. (H) Political Science II Year, 202110204150013",
      "Mr. Abhay Singh, Deputy Registrar (Academics) (Member)",
      "Mr. Gaurav Kumar Chaturvedi, B. Tech (ME) IV Year, 202010102110704",
      "Ms. Shweta Shukla, LL.B. III Year, 202010301110017",
    ],

    contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Mail at registrar.office@srmu.ac.in / registrar@srmu.ac.in / vc@srmu.ac.in **OR**",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

    imagePath: saving,

    readMoreLink: "/committe/students-welfare-fund-committee",
  },
  {
    id: 5,
    title: "Anti-Discrimination Cell",
    breadcrumb: "Anti-Discrimination Cell",

    routeKey: "anti-discrimination-cell",

    description: "The University provides equal opportunity to all students regardless of caste, religion, language, or gender, ensuring a harmonious and just campus environment.",

    longDescription: `
The Anti-Discrimination Cell has been constituted in compliance with UGC regulations (Promotion of Equity in Higher Educational Institutions). 
It ensures that every individual on campus can exercise and acquire equal rights in education. Any act, speech, or intention that disrupts harmony is addressed immediately to restore peace.
    `,

    members: [
      "Dr. Ritu Chandra, Principal, IER (Chairperson)",
      "Dr. Anushree Singh, Dean, Faculty of Management (Member)",
      "Dr. Shweta Shukla, Asst. Professor, Faculty of Humanities & Social Sciences (Member)",
      "Dr. Om Prakash, Director, Training & Placement (Member)",
    ],

    contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Mail at registrar.office@srmu.ac.in / registrar@srmu.ac.in / vc@srmu.ac.in **OR**",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

    imagePath: discri,
    readMoreLink: "/committe/anti-discrimination-cell",
  },
  {
    id: 6,
    title: "Internal Complaints Committee",
    breadcrumb: "Internal Complaints Committee",

    routeKey: "internal-complaints-committee",

    description:
      "The Internal Complaints Committee is constituted to prevent and address sexual harassment at the workplace, ensuring dignity, gender equality, and fundamental rights for all.",

    longDescription: `
Sexual harassment is an offence under The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013. 
It is a serious form of gender-based discrimination and a violation of human rights. 
As per Section 4(1) of the Act, the Internal Complaints Committee has been constituted to address complaints and ensure a safe campus environment for women.
    `,

    members: [
      "Prof. B. M. Dixit, Director, Students Welfare (Chairperson)",
      "Ms. Shachi Singh, General Secretary, NGO- Ehsaas (NGO Representative) (Member)",
      "Dr. Praveen Srivastava, Chief Proctor (Member)",
      "Concerned Director/ Dean/ HOD",
      "Abhay Singh, Deputy Registrar, Academics (Member Secretary)",
      "Dr. Devendra, Assistant Professor, ILS (Member)",
      "Ms. Manjiri Kureel, Assistant Professor, Faculty of Humanities & Social Sciences (Member)",
    ],

    contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Mail at registrar.office@srmu.ac.in / registrar@srmu.ac.in / vc@srmu.ac.in **OR**",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

    imagePath: comp,

    readMoreLink: "/committe/internal-complaints-committee",
  },
  {
    id: 7,
    title: "Digital Learning Monitoring Cell",
    breadcrumb: "Digital Learning Monitoring Cell",

    routeKey: "digital-learning-monitoring-cell",

    description:
      "The Digital Learning Monitoring Cell promotes digital culture on campus by implementing the Digital Action Plan and formulating short, medium, and long-term strategies for a Smart University campus.",

    longDescription: `
Under the Digital Initiative by MHRD and the Government of India, the Digital Learning Monitoring Cell has been established at Shri Ramswaroop Memorial University. 
It aims to foster digital culture by following and implementing the Digital Action Plan 17-by-17, including a 3-year immediate plan, 7-year intermediate plan, and 15-year vision for a 'University Smart Campus'.
    `,

    members: [
      "Dr. Shalini Agrawal, HOD, Department of Computer Science & Engineering (Chairperson)",
      "Mr. Abhay Singh, Deputy Registrar (Academics) (Member)",
      "Mr. Rakesh Kumar Vishwakarma, Assistant System Administrator (Member)",
      "Mr. Rakesh Jaiswal, Finance Officer (Member)",
      "Dr. P.C Mishra, Associate Professor, ILS (Member)",
      "Dr. Tabish Qidwai, Associate Professor, IBST (Member)",
    ],

    contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Mail at registrar.office@srmu.ac.in / registrar@srmu.ac.in / vc@srmu.ac.in **OR**",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

    imagePath: digital,
    readMoreLink: "/committe/digital-learning-monitoring-cell",
  },
  {
    id: 8,
    title: "Gender Sensitization Cell",
    breadcrumb: "Gender Sensitization Cell",

    routeKey: "gender-sensitization-cell",

    description:
      "The Gender Sensitization Cell creates awareness about gender issues and promotes an environment of gender justice where men and women can work with dignity and security.",

    longDescription: `
Based on the recommendations in the 'Saksham' report on the Safety of Women and Gender Sensitization on Campuses, and as per UGC directions, the Gender Sensitization Cell has been constituted. 
It aims to create an enabling environment of gender justice and ensure safety and dignity for all on campus.
    `,

    members: [
      "Dr. Vijaya Sethi, Dean, Faculty of Humanities (Chairperson)",
      "Prof. (Dr.) Rohit P Shubran, Professor, ILS (Member)",
      "Mr. Abhay Singh, Dy. Registrar (Academics) (Member)",
      "Dr. Veena Singh, Asst. Professor, IMCE & Power Angel, 1090 Women Help Line (Member)",
      "Mr. Shashank Srivastava, Dy. Registrar (HR) (Member)",
      "Mr. Sandeep Dixit, Assistant Professor, FoEE, IOT (Member)",
    ],

    contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Mail at registrar.office@srmu.ac.in / registrar@srmu.ac.in / vc@srmu.ac.in **OR**",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

    imagePath: gender,

    readMoreLink: "/committe/gender-sensitization-cell",
  },
  {
    id: 9,
    title: "OBC Cell",
    breadcrumb: "OBC Cell",

    routeKey: "obc-cell",

    description: "The OBC Cell empowers OBC students by overseeing the implementation of government programs, scholarships, and benefits to promote higher education.",

    longDescription: `
The OBC Cell at Shri Ramswaroop Memorial University ensures correct execution of State Government, UGC, and Indian government programs related to stipends, scholarships, and other benefits for reserved groups. 
By granting scholarships and assistance, the Cell promotes higher education among Other Backward Classes (OBC) students.
    `,

    members: ["Prof. B.M. Dixit", "Mr. Abhay Singh", "Dr. Dilip Kumar"],

    contact: [
      "Chairman/ Chairperson, Committee members **OR**",
      "Mail at registrar.office@srmu.ac.in / registrar@srmu.ac.in / vc@srmu.ac.in **OR**",
      "Register at https://srmu.ac.in/grievance-redressal-system for Online Grievance Redressal",
    ],

    imagePath: obc,
    readMoreLink: "/committe/obc-cell",
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

    readMoreLink: "/committe/minority-cell",
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
    readMoreLink: "/committe/unnat-bharat-cell",
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

    readMoreLink: "/committe/student-grievance-redressal-committee",
  },
];
