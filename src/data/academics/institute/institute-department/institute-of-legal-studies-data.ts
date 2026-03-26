import { customeOverViewType } from "../../../../types/home-data-type";
import vision from "../../../../assets/images/academics/departments/dept-mission-icon2.webp";
import mission from "../../../../assets/images/academics/departments/dept-mission-icon1.webp";
import { departmentHighlightscardType, FeeTableData } from "../../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../../utils/custom/CustomFacultyListCard";

import AryenduImg from "../../../../assets/images/academics/departments/prof-aryendu-dwivedi-law-2009250517023.webp";
import PCMishraImg from "../../../../assets/images/academics/departments/dr.-p.c.-mishra-11zon-27022411543322.webp";
import DefaultImg from "../../../../assets/images/academics/departments/default-img.webp";


import img1 from "../../../../assets/images/academics/departments/whatsapp-image-2022-05-23-at-11.30.28-am-1--23022412570798.webp";
import img2 from "../../../../assets/images/academics/departments/workshop4-09052412404740.webp";
import img3 from "../../../../assets/images/academics/departments/guest5-09052412400851.webp";
import img4 from "../../../../assets/images/academics/departments/guest7-09052412401831.webp";
import img5 from "../../../../assets/images/academics/departments/guest6-09052412402642.webp";
import img6 from "../../../../assets/images/academics/departments/workship2-09052412410615.webp";
import img7 from "../../../../assets/images/academics/departments/mootcourt-06022404053661.webp";
import img8 from "../../../../assets/images/academics/departments/514x520-23022412510691.webp";
import img9 from "../../../../assets/images/academics/departments/seminarhall-23022412514392.webp";


import { Headers, Student } from "../../../../utils/custom/CustomPlacedStudentTable";

export const InstituteofLegalStudiesOverviewData: customeOverViewType = {
  heading: "Institute of Legal Studies",
  content:
    "The Institute of Legal Studies is a convergence of academic, cultural and intellectual resources. It aims at achieving the highest levels of distinction in the innovation and transmission of knowledge and understanding. The Institute offers a wide spectrum of choice for the students to choose Under Graduate, Post Graduate and Doctoral programs in Law. Institute of Legal Studies takes pride in its excellent faculty, which is premier institutions like NLUs. Institute of Legal Studies approved by the Bar Council of India, is one of the premier institution for pursuing a legal career. ",
  counterSibling:
    "A wide variety of degree programs that focus on Criminal & Security Law, Corporate & Commercial Law, Constitutional & Administrative Law, and International & Comparative Law cater to the demands of the state, people, and the business at large. At ILS, a 360 degree approach towards learning is adopted which covers concept building through classroom instruction, and practical experience through legal camps, internships, moot courts, and court visits. The Institute is in regular interface with academic stalwarts and members from judicial body. It is focused to produce litigation specialists, corporate lawyers, mediation & arbitration experts, and professionals to draft legal instrument, policy makers, researchers and academicians, diplomats, comparative law experts for burgeoning LPO Industry and others. ILS's focus on industry-relevant curriculum, outreach initiatives, high-quality research, skill-oriented education, and placement assistance has allowed it to generate a distinguished pool of legal professionals who have established themselves both nationally and globally.",
};

export const InstituteofLegalStudiesTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];
export const InstituteofLegalStudiesCounterData1: counterDataType[] = [
  { id: 1, value: "2012", suffix: "", label: "Established" },
  { id: 2, value: "39", suffix: "", label: "Faculty & Staff" },
  { id: 3, value: "1100", suffix: "", label: "Students" },
];



export const InstituteofLegalStudiesCounterData2 = {
  counterData: [
    {
      id: 1,
      icon: "",
      value: "200",
      suffix: "",
      label: "Guest lectures",
    },
    {
      id: 2,
      icon: "",
      value: "150",
      suffix: "",
      label: "Field Visits",
    },
    {
      id: 3,
      icon: "",
      value: "20",
      suffix: "",
      label: "Conference & Seminars",
    },
  ],

  // Optional classes (can be null or ignored if unused)
  classes: "",
  aboutusClass: "",
};

export const InstituteofLegalStudiesVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    img: mission,
    heading: "Mission",
    points: [
      "To advance, disseminate learning with knowledge of law and legal process and their role in national development.",
      "To update students in the right culture of Legal Education so that students become highly technical with advancements in field of law and to make them competent lawyers, judges, legal experts and academicians.",
      "To organize seminars, symposiums, conferences, and moot courts to promote legal knowledge and legal process.",
      "To make students competent to face any challenge in their professional and behavioral aspects of life, which become our motif and forte.",
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: vision,
    heading: "Vision",
    points: ["To provide excellent law data base, teaching and learning of law to develop in the students, research scholars a sense of responsibility to serve the society by developing skills in advocacy, judicial services and other legal services."],
  },
];


export const InstituteofLegalStudiesData1: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],
  rows: [
    {
      course: "MB.A. + LL.B. (Hons.)",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 90,000/-",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>MB.A. + LL.B. (Hons.)</h2>
            <p>Candidates must have passed Graduation in any stream from any recognised University or AICTE recognised Institute/ College with minimum aggregate marks of 45% or CGPA of 5.0 for Gen/ OBC category and 40% marks or CGPA of 4.5 for SC/ ST Category.</p>
        `,
    },
    {
      course: "B.B.A. + LL.B. (Hons.)",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 80,000/-",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.B.A. + LL.B. (Hons.)</h2>
            <p>Candidates must have passed Graduation in any stream from any recognised University or AICTE recognised Institute/ College with minimum aggregate marks of 45% or CGPA of 5.0 for Gen/ OBC category and 40% marks or CGPA of 4.5 for SC/ ST Category.</p>
        `,
    },
  ],
};

export const InstituteofLegalStudiesData2: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],

  rows: [
    {
      course: "LL.M. in Criminal & Security Law",
      duration: "1 Years",
      eligibility: "Click",
      fee: "Rs. 80,000/-",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>LL.M. in Criminal & Security Law</h2>
            <p>Candidate must have passed 3 Years LL.B./5 Year integrated LL.B./ equivalent degree from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or CGPA of 5.5 for Gen/OBC and 45% marks or CGPA of 5.0 for SC/ST category. Qualifying written test is mandatory.</p>
        `,
    },
    {
      course: "LL.M. in Corporate & Commercial Law",
      duration: "1 Years",
      eligibility: "Click",
      fee: "Rs. 80,000/-",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>LL.M. in Corporate & Commercial Law</h2>
            <p>Candidate must have passed 3 Years LL.B./5 Year integrated LL.B./ equivalent degree from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or CGPA of 5.5 for Gen/OBC and 45% marks or CGPA of 5.0 for SC/ST category. Qualifying written test is mandatory.</p>
        `,
    },
    {
      course: "LL.M. in Constitutional & Administrative Law",
      duration: "1 Years",
      eligibility: "Click",
      fee: "Rs. 80,000/-",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>LL.M. in Constitutional & Administrative Law</h2>
            <p>Candidate must have passed 3 Years LL.B./5 Year integrated LL.B./ equivalent degree from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or CGPA of 5.5 for Gen/OBC and 45% marks or CGPA of 5.0 for SC/ST category. Qualifying written test is mandatory.</p>
        `,
    },
    {
      course: "LL.M. in International & Comparative Law",
      duration: "1 Years",
      eligibility: "Click",
      fee: "Rs. 80,000/-",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>LL.M. in International & Comparative Law</h2>
            <p>Candidate must have passed 3 Years LL.B./5 Year integrated LL.B./ equivalent degree from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or CGPA of 5.5 for Gen/OBC and 45% marks or CGPA of 5.0 for SC/ST category. Qualifying written test is mandatory.</p>
        `,
    },
  ],
};

export const InstituteofLegalStudiesData3: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],

  rows: [
    {
      course: "LL.B. (Bachelor of Law)",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 57,000/-",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>LL.B. (Bachelor of Law)</h2>
            <p>Candidate must have passed Graduation from any recognised University or AICTE recognised Institute/College in any stream with minimum aggregate marks of 45% or equivalent grade for GEN, 42% for OBC and 40% marks or equivalent grade for SC/ST Category.</p>
        `,
    },
    {
      course: "B.A. + LL.B. (Hons.)",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 90,000/-",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.A. + LL.B. (Hons.)</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board in any stream with minimum aggregate marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category.</p>
        `,
    },
    {
      course: "B.B.A. + LL.B. (Hons.)",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 80,000/-",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.B.A. + LL.B. (Hons.)</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board in any stream with minimum aggregate marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category.</p>
        `,
    },
  ]
};




export const InstituteofLegalStudiesfacultyData: FacultyItem[] = [
  {
    id: 1,
    name: "Prof. (Dr.) Aryendu Dwivedi",
    designation: "Professor",
    image: AryenduImg,
  },
  {
    id: 2,
    name: "Dr. Uma Krishna Awasthi",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 3,
    name: "Dr. Vibha Srivastva",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 4,
    name: "Mr. Anand Kumar Sharma",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 5,
    name: "Mr. Abhishek Vishwakarma",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 6,
    name: "Dr. Raj Kumar",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 7,
    name: "Mr. Veer Pal",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 8,
    name: "Ms. Ayushi Tiwari",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 9,
    name: "Ms. Zainab Iftikhar Khan",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 10,
    name: "Dr. Sarika Singh",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 11,
    name: "Ms. Kiran",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 12,
    name: "Dr. P.C. Mishra",
    designation: "Associate Professor",
    image: PCMishraImg,
  },
  {
    id: 13,
    name: "Dr. Jay Prakash Srivastava",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 14,
    name: "Ms. Pratibha Patel",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 15,
    name: "Dr. Akhilesh Kumar",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 16,
    name: "Mr. Pankaj Rumar Rao",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 17,
    name: "Ms. Kausar Jahan",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 18,
    name: "Mr. Sanjeev Kumar Nimish",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 19,
    name: "Ms. Anusueya Devi",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 20,
    name: "Ms. Priya Mishra",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 21,
    name: "Ms. Annapurna Trivedi",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 22,
    name: "Mr. Ambuj Mishra",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 23,
    name: "Dr. Mahendra Kumar",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 24,
    name: "Mr. Rajat Saxena",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 25,
    name: "Dr. Upendra Nath Tiwari",
    designation: "Associate Professor",
    image: DefaultImg,
  },
  {
    id: 26,
    name: "Dr. Prashant Kumar",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 27,
    name: "Dr. Kaushlendra Singh",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 28,
    name: "Dr. Shashank Shekhar",
    designation: "Associate Professor",
    image: DefaultImg,
  },
  {
    id: 29,
    name: "Ms. Samiksha Pandey",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 30,
    name: "Mr. Manish Pratap Singh",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 31,
    name: "Ms. Astha Mishra",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 32,
    name: "Ms. Akanksha Tiwari",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 33,
    name: "Dr. Shruti Sharma",
    designation: "Associate Professor",
    image: DefaultImg,
  },
  {
    id: 34,
    name: "Mr. Abhinav Mishra",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 35,
    name: "Mr. Ajay Pratap Singh",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 36,
    name: "Mr. Dravyesh Narayan Pathak",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 37,
    name: "Mr. Kaushlendra",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
];

import depSlide1 from "../../../../assets/images/academics/departments/curriculum-07052412202574.webp";
import depSlide2 from "../../../../assets/images/academics/departments/corporate-manag-0605240138369.webp";
import depSlide3 from "../../../../assets/images/academics/departments/mootcourt-06022404053661.webp";
import depSlide4 from "../../../../assets/images/academics/departments/legalsupp-06022404091718.webp";
import depSlide5 from "../../../../assets/images/academics/departments/industrystalwart-06022401542865.webp";
import depSlide6 from "../../../../assets/images/academics/departments/legalstudies-06022404143177.webp";
import depSlide7 from "../../../../assets/images/academics/departments/virtual-06022404142039.webp";
import { EventItem } from "../../../../utils/custom/CustomEventListCard";
import { counterDataType } from "../../../home/counterData";

export const InstituteofLegalStudiesdepartmentHighlights: departmentHighlightscardType[] = [
  {
    image: depSlide1,
    title: "Regular classes for competitive examinations",
    description: "The department routinely organizes sessions by subject matter specialists for students preparing for competitive examinations such as UPPCS-J/APO.",
  },
  {
    image: depSlide2,
    title: "Qualified & experienced faculty from prestigious institutions",
    description: "More than 70% of the Faculty members are Ph.D. and majority of faculty members have 10 to 15 years of teaching experience.",
  },
  {
    image: depSlide3,
    title: "Proper well-equipped moot court",
    description: "Institute of Legal Studies has a well-furnished and well equipped moot court room which is utilized by students to polish their communication skills.",
  },
  {
    image: depSlide4,
    title: "Free legal aid cell & consultancy work",
    description: "The faculty and students in association with the district officials organize legal literacy camps largely in rural and socio economically backward areas.",
  },
  {
    image: depSlide5,
    title: "Guest lectures by renowned legal experts",
    description: "To make students aware about the legal framework, guest lectures are delivered by legal luminaries from various national law universities, judges and advocates.",
  },
  {
    image: depSlide6,
    title: "Enhancing exposure to experiential learning",
    description: "Team of faculty and students organize seminars, symposiums, conferences, and moot courts to promote legal knowledge and legal process.",
  },
  {
    image: depSlide7,
    title: "Virtual national moot court competition",
    description: "Graced by the presence of eminent judges and practitioners, this competition provided students with opportunities to learn about different areas of law, court procedure, and legal argumentation.",
  },
];


export const tableHeaders: Headers = {
  name: "NAME OF STUDENT",
  program: "PROGRAM",
  company: "COMPANY",
};

export const InstituteofLegalStudiesplacedStudents: Student[] = [
  { name: "Surabhi Pandey", program: "B.A. + LL.B. (Hons.)", company: "Legal brains" },
  { name: "Anshika Mani Tripathi", program: "B.A. + LL.B. (Hons.)", company: "Legal brains" },
];



export const InstituteofLegalStudiesDepartmentEventsData: EventItem[] = [
  {
    id: 1,
    title: "Industrial Visit",
    topic: "High Court Lucknow Bench",
    venue: "Lucknow",
    date: "31st October, 2023",
    image: img1,
    cardBgColor: "#ffffff",
  },
  {
    id: 2,
    title: "Industrial Visit",
    topic: "National Lok Adalat",
    venue: "Barabanki",
    date: "09th September, 2023",
    image: img2,
    cardBgColor: "#ffffff",
  },
  {
    id: 3,
    title: "Guest Lecture",
    speaker: "Prof. (Dr.) Lily Srivastava",
    topic: "Tort Introduction, Tortious Liability and General Defenses",
    date: "05th February, 2024",
    image: img3,
    cardBgColor: "#ffffff",
  },
  {
    id: 4,
    title: "Guest Lecture",
    speaker: "Dr. Ankit Awasthi",
    topic: "Evolution of Legal Education: Navigating the Past, Embracing the Present and Charting a Course for the Future in Pursuit of Quality",
    date: "24th January, 2024",
    image: img4,
    cardBgColor: "#ffffff",
  },
  {
    id: 5,
    title: "Guest Lecture",
    speaker: "Dr. Surendra Kumar",
    topic: "Changing Dimensions of Strict Liability and Absolute Liability in Indian Legal System",
    date: "02nd November, 2023",
    image: img5,
    cardBgColor: "#ffffff",
  },
  {
    id: 6,
    title: "Workshop",
    topic: "National Moot Court Competition at SRMU",
    date: "24th-26th April, 2023",
    image: img6,
    cardBgColor: "#ffffff",
  },
  {
    id: 7,
    title: "Workshop",
    topic: "Basic of Publication, Presentation, Journal & Writing with JUS CORPUS",
    date: "29th January, 2024",
    image: img7,
    cardBgColor: "#ffffff",
  },
  {
    id: 8,
    title: "Workshop",
    topic: "Changing Dimensions of Human Rights & its Relevancy in the 21st Century",
    date: "09th December, 2023",
    image: img8,
    cardBgColor: "#ffffff",
  },
  {
    id: 9,
    title: "Workshop",
    topic: "Workshop on Constitutional Day",
    date: "25th November, 2023",
    image: img9,
    cardBgColor: "#ffffff",
  },
];
