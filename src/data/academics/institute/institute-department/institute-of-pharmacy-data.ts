import { customeOverViewType } from "../../../../types/home-data-type";
import vision from "../../../../assets/images/academics/departments/dept-mission-icon2.webp";
import mission from "../../../../assets/images/academics/departments/dept-mission-icon1.webp";
import { InstituteProfile } from "../../../../types/profile-data-type";
import { departmentHighlightscardType, FeeTableData } from "../../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../../utils/custom/CustomFacultyListCard";

import ManjuImg from "../../../../assets/images/academics/departments/dr.-manju-singh-11zon-2602240551361.webp";

import ajeet from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Ajeet Singh.jpg";
import anupam from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Anupam Kumar Pal.jpg";
import apurwa from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Apurwa Singh.jpg";
import geetika from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Geetika Mishra.jpg";
import lavkush from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Lavkush Kumar Pal.jpg";
import manju from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Manju Pandey.jpg";
import neeraj from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Neeraj Kumar.jpg";
import nimisha from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Nimisha Singh.jpg";
import plak from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Palak Agarwal.jpg";
import pragti from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Pragti Singh.jpg";
import pramod from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Pramod Chauhan.jpg";
import pratibha from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Pratibha Gautam.jpg";
import ruchi from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Ruchi Singh.png";
import sarita from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Sarita Singh.jpg";
import saumya from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Saumya Awasthi.jpg";
import shikha from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Shikha Shrivastava.jpg";

import shivangi from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Shivangi Sharma.jpg";
import sharddha from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Shraddha Pandey.jpg";
import shubham from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Shubham Goutam.jpg";
import sunil from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Sunil.jpg";
import sushma from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Sushma Singh.jpg";
import yasmin from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Yasmin Khatoon.jpg";
import zahid from "../../../../assets/images/academics/departments/faculty-of-pharmacy/Zahid Husain.jpg";

import depSlide1 from "../../../../assets/images/academics/departments/pharma-lab-07052412313791.webp";
import depSlide2 from "../../../../assets/images/academics/departments/bioinformatics-07022411264512.webp";
import depSlide3 from "../../../../assets/images/academics/departments/integration-07052412393563.webp";
import depSlide4 from "../../../../assets/images/academics/departments/corporate-manag-0605240138369.webp";
import depSlide5 from "../../../../assets/images/academics/departments/industrystalwart-06022401542865.webp";
import depSlide6 from "../../../../assets/images/academics/departments/skill-07052412400634.webp";
import depSlide7 from "../../../../assets/images/academics/institutes/holistic-.webp";
import { Headers, Student } from "../../../../utils/custom/CustomPlacedStudentTable";
import { EventItem } from "../../../../utils/custom/CustomEventListCard";

export const InstituteofPharmacyOverviewData: customeOverViewType = {
  heading: "Institute of Pharmacy",
  content:
    "The Institute of Pharmacy was founded to promote teaching and research in the field of pharmaceutical sciences by offering a top-notch environment with cutting-edge and captivating teaching strategies, internationally recognized curricula, top-notch staff, and significant research collaborations. The Institute provides D.Pharma and B.Pharma degrees, both of which have well planned curricula that include NEP2020, the Choice Based Credit System, and UGC Curriculum framework standards. The Institute of Pharmacy is dedicated to using cutting-edge teaching methodologies to improve students' learning aptitude and encourage the development of critical thinking abilities. Modern laboratories equipped with sufficient tools and resources have been built by our institute.",
  counterSibling:
    "Our faculty comprises a robust group of highly qualified individuals with distinguished backgrounds in academics and research, having obtained their doctorates and post-doctoral degrees from esteemed national universities. By utilizing cutting edge research, teaching, and innovative techniques, we always aim to provide a lively and stimulating learning environment. The institute frequently hosts eminent talks by scientists from throughout the country and around the world in addition to faculty development programs, industry visits, field trips, and internships. Students are encouraged to actively participate in national conferences in the cutting edge fields of pharmaceutical sciences, as well as in co-curricular and extracurricular activities around the country.",
};

export const InstituteofPharmacyTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];

export const InstituteofPharmacyCounterData1: counterDataType[] = [
  { id: 1, value: "2020", suffix: "", label: "Established" },
  { id: 2, value: "53", suffix: "", label: "Faculty & Staff" },
  { id: 3, value: "600", suffix: "", label: "Students" },
];

export const InstituteofPharmacyCounterData2 = {
  counterData: [
    {
      id: 1,
      icon: "",
      value: "100",
      suffix: "",
      label: "Guest lectures",
    },
    {
      id: 2,
      icon: "",
      value: "40",
      suffix: "",
      label: "Field Visits",
    },
    {
      id: 3,
      icon: "",
      value: "10",
      suffix: "",
      label: "Conference & Seminars",
    },
  ],

  // Optional classes (can be null or ignored if unused)
  classes: "",
  aboutusClass: "",
};

export const InstituteofPharmacyVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    img: mission,
    heading: "Mission",
    points: [
      "To develop grooming arena for better individuals and pharmacists.",
      "To enhance the creativity, motivation, drive and inculcate professionalism to suit to the need of pharmaceutical industry.",
      "To bring synergy between academic, R&D, technology and industry through training and exposure for such environment.",
      "To promote the value of learning, self-growth, quality performance, and transition for students to productive and responsible participation in society.",
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: vision,
    heading: "Vision",
    points: [
      "To provide value added educational environment for creating quality professionals in the field of pharmacy education, research, industry, hospital and other health related areas for the society well-being.",
    ],
  },
];

export const InstituteofPharmacyinstituteProfiles: InstituteProfile[] = [
  {
    id: 1,
    title: "Department Head",
    name: "Prof. (Dr.) Manju Pandey",
    position: "Director IOP, SRMU, Lucknow-Deva Road",
    image: ManjuImg,

    summary: "",

    detailsHeading: "",
    useBullets: false,

    details: [
      "**Qualification: **M.Pharm. (Pharmaceutics), Ph.D. (Pharm)",
      "**Experience**: 18+ years",
      "**Specialization/ Area of Research: **Nanotechnology, Herbal Formulation, Nutraceuticals",
      "**Email ID: **director.pharma@srmu.ac.in",
      "**ORCID ID: **https://orchid.org/0000-0002-6849-6888",
      "**Contact No.: **+91-9628471131",
    ],

    modalContent: `Prof.(Dr.) Manju Pandey, is Professor and Director of Institute of Pharmacy. She has 16 years of experience in teaching, research and academic administration. Dr. Pandey has distinguished herself as an eminent educationist, pharmacist and a leader. She is the lifetime member of Association of Pharmaceutical Teachers of India. Before joining Shri Ramswaroop Memorial University, Dr. Manju Pandey worked as Professor and Deputy Director in Azad Institute of Pharmacy and Research, Lucknow. She has published a number of research papers in the area of Pharmaceutical Sciences in various National and International Journals. She has also published a book (Lambert Academic Publishing) and got a patent of the same and also have paper patents. She has collaborated with team of faculty to develop tutorial programs and conferences/seminars. With her highly developed research qualitative and analytical skills added with a strong capacity to conduct independent research, she has guided about 40 students of M. Pharm.

Her constant vision and proven success in Pharma lead her towards several awards such as: Appreciation Award in the “National Level Pharma Power Point Competition” by Organization for Women Empowerment & Research (2013), Appreciation Award in the National Seminar on “Digital Health Management” at Azad Institute of Pharmacy & Research, Lucknow, March, 2013, Certificate of Best Teacher award in Antarastriya Samrasta Manch In Jaipur (2017), Felicitated with e-poster evaluator in APTICON 2019 at DIT, Dehradun, got Eminent Teacher Award in national conference in Shobhit University Gangoh, Saharanpur (2020). Working more than a decade in Pharma world Dr. Pandey has a solid reputation as a competitive, responsive and honest expert in her field. With her remarkable contribution she has become a recognized name in the academic world of Pharma.
`,
  },
];

export const InstituteofPharmacyData1: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],
  rows: [
    {
      course: "B.Pharm. (Bachelor of Pharmacy)",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,45,000/-",
      link: "program/bpharm-bachelor-of-pharmacy",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Pharm. (Bachelor of Pharmacy)</h2>
            <p>Candidates must have passed Graduation in any stream from any recognised University or AICTE recognised Institute/ College with minimum aggregate marks of 45% or CGPA of 5.0 for Gen/ OBC category and 40% marks or CGPA of 4.5 for SC/ ST Category.</p>
        `,
    },
    {
      course: "D. Pharm. (Diploma in Pharmacy)",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 92,000/-",
      link: "program/d-pharm-diploma-in-pharmacy",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>D. Pharm. (Diploma in Pharmacy)</h2>
            <p>Candidates must have passed Graduation in any stream from any recognised University or AICTE recognised Institute/ College with minimum aggregate marks of 45% or CGPA of 5.0 for Gen/ OBC category and 40% marks or CGPA of 4.5 for SC/ ST Category.</p>
        `,
    },
  ],
};

export const InstituteofPharmacyfacultyData: FacultyItem[] = [
  {
    id: 1,
    name: "Prof. (Dr.) Manju Pandey",
    designation: "Director",
    image: manju,
  },
  {
    id: 2,
    name: "Prof. (Dr.) Sunil",
    designation: "Professor",
    image: sunil,
  },
  {
    id: 3,
    name: "Prof. (Dr.) Yasmin Khatoon",
    designation: "Professor",
    image: yasmin,
  },
  {
    id: 4,
    name: "Prof. (Dr.) Ruchi Singh",
    designation: "Professor",
    image: ruchi,
  },
  {
    id: 5,
    name: "Dr. Shikha Shrivastava",
    designation: "Associate Professor",
    image: shikha,
  },
  {
    id: 6,
    name: "Mr. Zahid Husain",
    designation: "Assistant Professor",
    image: zahid,
  },
  {
    id: 7,
    name: "Mr. Pramod Chauhan",
    designation: "Assistant Professor",
    image: pramod,
  },
  {
    id: 8,
    name: "Ms. Sushma Singh",
    designation: "Assistant Professor",
    image: sushma,
  },
  {
    id: 9,
    name: "Ms. Shraddha Pandey",
    designation: "Assistant Professor",
    image: sharddha,
  },
  {
    id: 10,
    name: "Mr. Lavkush Kumar Pal",
    designation: "Assistant Professor",
    image: lavkush,
  },
  {
    id: 11,
    name: "Ms. Nimisha Singh",
    designation: "Assistant Professor",
    image: nimisha,
  },
  {
    id: 12,
    name: "Ms. Shivangi Sharma",
    designation: "Assistant Professor",
    image: shivangi,
  },
  {
    id: 13,
    name: "Ms. Saumya Awasthi",
    designation: "Assistant Professor",
    image: saumya,
  },
  {
    id: 14,
    name: "Mr. Shubham Goutam",
    designation: "Assistant Professor",
    image: shubham,
  },
  {
    id: 15,
    name: "Ms. Sarita Singh",
    designation: "Associate Professor",
    image: sarita,
  },
  {
    id: 16,
    name: "Ms. Pragti Singh",
    designation: "Assistant Professor",
    image: pragti,
  },
  {
    id: 17,
    name: "Dr. Neeraj Kumar Verma",
    designation: "Assistant Professor",
    image: neeraj,
  },
  {
    id: 18,
    name: "Ms. Geetika Mishra",
    designation: "Assistant Professor",
    image: geetika,
  },
  {
    id: 19,
    name: "Mr. Anupam Kumar Pal",
    designation: "Assistant Professor",
    image: anupam,
  },
  {
    id: 20,
    name: "Mr. Ajeet Singh",
    designation: "Assistant Professor",
    image: ajeet,
  },
  {
    id: 21,
    name: "Ms. Apurwa Singh",
    designation: "Assistant Professor",
    image: apurwa,
  },
  {
    id: 22,
    name: "Ms. Palak Agarwal",
    designation: "Assistant Professor",
    image: plak,
  },
  {
    id: 23,
    name: "Ms. Pratibha Gautam",
    designation: "Assistant Professor",
    image: pratibha,
  },
];

export const InstituteofPharmacydepartmentHighlights: departmentHighlightscardType[] = [
  {
    image: depSlide1,
    title: "State-of-the-art research facilities",
    description: "With the help of industrial funding, the department maintains specialized high-end labs to offer students the best chances for experiential learning.",
  },
  {
    image: depSlide2,
    title: "Research & innovation for augmented training",
    description: "By utilizing cutting edge research, teaching, and innovative techniques, the department aims to establish a dynamic and stimulating learning environment.",
  },
  {
    image: depSlide3,
    title: "Modules as per NEP 2020 for deploying industry required skills",
    description:
      "The department focuses on cutting-edge teaching methodologies drawn inline with NEP 2020 to help students develop their critical thinking abilities and improve their aptitude for learning.",
  },
  {
    image: depSlide4,
    title: "Outreach & collaboration for vibrant learning atmosphere",
    description:
      "We want to establish significant collaborations that stimulate creativity and provide significant results in order to address intricate problems in the pharmaceutical domains.",
  },
  {
    image: depSlide5,
    title: "Guest lectures & industrial visits to foster learning",
    description: "Imparting high quality professional education, training and research in the field of pharmaceutical science through regular interactions with industry.",
  },
  {
    image: depSlide6,
    title: "Constant improvement of faculty skills through FDPs",
    description:
      "Through regular FDPs, the department also prioritizes the ongoing professional development of its academic members and their exposure to cutting-edge techniques and technology.",
  },
  {
    image: depSlide7,
    title: "Focus on students' holistic development",
    description: "Students participate in extracurricular activities such as sports, music festivals, and cultural events both on campus and at the local and national levels.",
  },
];

export const tableHeaders: Headers = {
  name: "NAME OF STUDENT",
  program: "PROGRAM",
  company: "COMPANY",
};

export const InstituteofPharmacyplacedStudents: Student[] = [
  {
    name: "Akarsh Singh",
    program: "D. Pharm. (Diploma in Pharmacy)",
    company: "Cureton",
  },
  {
    name: "Brijbhushan Singh",
    program: "D. Pharm. (Diploma in Pharmacy)",
    company: "Cureton",
  },
  {
    name: "Md. Saquib",
    program: "D. Pharm. (Diploma in Pharmacy)",
    company: "Cureton",
  },
  {
    name: "Md Amir Hasan",
    program: "B.Pharm. (Bachelor of Pharmacy)",
    company: "Cureton",
  },
  {
    name: "Pratyush Pandey",
    program: "B.Pharm. (Bachelor of Pharmacy)",
    company: "Narayana diagnostic",
  },
  {
    name: "Aniket Nigam",
    program: "B.Pharm. (Bachelor of Pharmacy)",
    company: "Narayana diagnostic",
  },
  {
    name: "Pratyush Pandey",
    program: "B.Pharm. (Bachelor of Pharmacy)",
    company: "Accosts Remedies Pvt.Ltd.",
  },
  {
    name: "Soumya Srivastava",
    program: "B.Pharm. (Bachelor of Pharmacy)",
    company: "Accosts Remedies Pvt.Ltd.",
  },
  {
    name: "Aniket Nigam",
    program: "B.Pharm. (Bachelor of Pharmacy)",
    company: "Accosts Remedies Pvt.Ltd.",
  },
  {
    name: "Harsh jaiswal",
    program: "D. Pharm. (Diploma in Pharmacy)",
    company: "Accosts Remedies Pvt.Ltd.",
  },
  {
    name: "Uplakshya Yadav",
    program: "D. Pharm. (Diploma in Pharmacy)",
    company: "Accosts Remedies Pvt.Ltd.",
  },
];

import img1 from "../../../../assets/images/academics/departments/faoc-events/ev1.jpg";
import img2 from "../../../../assets/images/academics/departments/faoc-events/ev2.png";
import img3 from "../../../../assets/images/academics/departments/faoc-events/ev3.jpg";
import img4 from "../../../../assets/images/academics/departments/faoc-events/ev4.jpg";
import img5 from "../../../../assets/images/academics/departments/faoc-events/ev5.jpg";
import img6 from "../../../../assets/images/academics/departments/faoc-events/ev6.jpg";
import img7 from "../../../../assets/images/academics/departments/faoc-events/ev7.jpg";
import img8 from "../../../../assets/images/academics/departments/faoc-events/ev8.jpg";
import img9 from "../../../../assets/images/academics/departments/faoc-events/ev9.jpg";
import img10 from "../../../../assets/images/academics/departments/faoc-events/ev10.png";
import img11 from "../../../../assets/images/academics/departments/faoc-events/ev11.jpg";
import img12 from "../../../../assets/images/academics/departments/faoc-events/ev12.jpg";
import img13 from "../../../../assets/images/academics/departments/faoc-events/ev13.jpg";
import img14 from "../../../../assets/images/academics/departments/faoc-events/ev14.jpg";
import img15 from "../../../../assets/images/academics/departments/faoc-events/ev15.jpg";
import img16 from "../../../../assets/images/academics/departments/faoc-events/ev16.jpg";
import img17 from "../../../../assets/images/academics/departments/faoc-events/ev17.png";
import img18 from "../../../../assets/images/academics/departments/faoc-events/ev18.png";
import img19 from "../../../../assets/images/academics/departments/faoc-events/ev19.jpg";
import img20 from "../../../../assets/images/academics/departments/faoc-events/ev20.jpg";
import img21 from "../../../../assets/images/academics/departments/faoc-events/ev21.jpg";
import img22 from "../../../../assets/images/academics/departments/faoc-events/ev22.jpg";
import img23 from "../../../../assets/images/academics/departments/faoc-events/ev23.jpg";
import img24 from "../../../../assets/images/academics/departments/faoc-events/ev24.jpg";
import img25 from "../../../../assets/images/academics/departments/faoc-events/ev25.jpg";
import img26 from "../../../../assets/images/academics/departments/faoc-events/ev26.jpg";
import img27 from "../../../../assets/images/academics/departments/faoc-events/ev27.jpg";
import img28 from "../../../../assets/images/academics/departments/faoc-events/ev28.jpg";
import img29 from "../../../../assets/images/academics/departments/faoc-events/ev29.jpg";
import img30 from "../../../../assets/images/academics/departments/faoc-events/ev30.jpg";
import img31 from "../../../../assets/images/academics/departments/faoc-events/ev31.jpg";

import { counterDataType } from "../../../home/counterData";

export const InstituteofPharmacyDepartmentEventsData: EventItem[] = [
  {
    id: 1,
    title: "Conference",
    topic: "Assessing And Implementing Pharmacy Best Practices",
    date: "27th April, 2022",
    image: img1,
    cardBgColor: "#ffffff",
  },
  {
    id: 2,
    title: "Seminar",
    topic: "Opportunity To Study Abroad",
    date: "22nd September, 2022",
    image: img2,
    cardBgColor: "#ffffff",
  },
  {
    id: 3,
    title: "Workshop",
    topic: "Free Heart Disease Reversal Workshop",
    date: "12th November, 2022",
    image: img3,
    cardBgColor: "#ffffff",
  },
  {
    id: 4,
    title: "Workshop",
    topic: "Get Success In GPAT and Other Pharma Competitive Exams",
    date: "6th December, 2022",
    image: img4,
    cardBgColor: "#ffffff",
  },
  {
    id: 5,
    title: "Workshop",
    topic: "DNA Fingerprinting: A Boon To Forensic Sciences",
    date: "7th December, 2022",
    image: img5,
    cardBgColor: "#ffffff",
  },
  {
    id: 6,
    title: "Workshop",
    topic: "Stress To Strength & Find A Leader In You",
    date: "13th December, 2022",
    image: img6,
    cardBgColor: "#ffffff",
  },
  {
    id: 7,
    title: "Industrial Visit",
    venue: "Experiome Biotech Pvt. Ltd., Lucknow",
    date: "10th April, 2023",
    image: img7,
    cardBgColor: "#ffffff",
  },
  {
    id: 8,
    title: "Industrial Visit",
    venue: "Jedux Parenteral Pvt. Ltd.",
    date: "4th September, 2023",
    image: img8,
    cardBgColor: "#ffffff",
  },
  {
    id: 9,
    title: "Guest Lecture",
    speaker: "Dr. Shimpy Srivastava",
    topic: "World Pharmacist Day",
    date: "23rd September, 2023",
    image: img9,
    cardBgColor: "#ffffff",
  },
  {
    id: 10,
    title: "Guest Lecture",
    speaker: "Ms. Shaily Chaudhary",
    topic: "Entrepreneurship: Strategy For Leaders",
    date: "14th September, 2023",
    image: img10,
    cardBgColor: "#ffffff",
  },
  {
    id: 11,
    title: "Guest Lecture",
    speaker: "Dr. Amit Verma",
    topic: "World Pharmacist Day",
    date: "25th September, 2023",
    image: img11,
    cardBgColor: "#ffffff",
  },
  {
    id: 12,
    title: "Old Age Home Visit",
    venue: "Matri Pitri Sadan Vriddha Ashram, Barabanki",
    date: "23rd September, 2023",
    image: img12,
    cardBgColor: "#ffffff",
  },
  {
    id: 13,
    title: "Guest Lecture",
    speaker: "Dr. Nitin Sharma",
    topic: "Radiopharmaceuticals Devices In Product Development",
    date: "23rd February, 2024",
    image: img13,
    cardBgColor: "#ffffff",
  },
  {
    id: 14,
    title: "Guest Lecture",
    speaker: "APTI Members",
    topic: "International Women’s Day",
    date: "9th March, 2024",
    image: img14,
    cardBgColor: "#ffffff",
  },
  {
    id: 15,
    title: "Industrial Visit",
    venue: "Kunal Remedies Pvt. Ltd.",
    date: "6th April, 2024",
    image: img15,
    cardBgColor: "#ffffff",
  },
  {
    id: 16,
    title: "Industrial Visit",
    venue: "Centre of BioMedical Research (CBMR), Lucknow",
    date: "11th April, 2024",
    image: img16,
    cardBgColor: "#ffffff",
  },
  {
    id: 17,
    title: "Guest Lecture",
    venue: "B1-007, SRMU",
    date: "10th February, 2025",
    image: img17,
    cardBgColor: "#ffffff",
  },
  {
    id: 18,
    title: "Guest Lecture",
    venue: "B3-407, IOP, SRMU",
    date: "01st March, 2025",
    image: img18,
    cardBgColor: "#ffffff",
  },
  {
    id: 19,
    title: "Field Visit",
    venue: "Visit to Sewage Treatment Plant, Lucknow",
    date: "28/02/25",
    image: img19,
    cardBgColor: "#ffffff",
  },
  {
    id: 20,
    title: "International Seminar",
    venue: "Mini auditorium, SRMU",
    date: "11/11/2024",
    image: img20,
    cardBgColor: "#ffffff",
  },
  {
    id: 21,
    title: "Research Lab Visit",
    venue: "CSIR-CIMAP, Lucknow",
    date: "28/02/25",
    image: img21,
    cardBgColor: "#ffffff",
  },
  {
    id: 22,
    title: "MoU with Jedux Parentrals Pvt. Ltd.",
    venue: "Jedux Parentrals Pvt. Ltd., Lucknow",
    date: "31/08/24",
    image: img22,
    cardBgColor: "#ffffff",
  },
  {
    id: 23,
    title: "International Conference",
    venue: "Mini auditorium, SRMU",
    date: "24-25 February, 2025",
    image: img23,
    cardBgColor: "#ffffff",
  },
  {
    id: 24,
    title: "Industrial Visit",
    venue: "Akums, Haridwar, Uttarakhand",
    date: "01/03/25",
    image: img24,
    cardBgColor: "#ffffff",
  },
  {
    id: 25,
    title: "MoU with SND Regenic PVT LTD Okinawa Japan",
    venue: "SRMU",
    date: "23/01/2025",
    image: img25,
    cardBgColor: "#ffffff",
  },
  {
    id: 26,
    title: "Guest Lecture on CPCSEA Guidelines",
    venue: "SRMU",
    date: "23/07/2025",
    image: img26,
    cardBgColor: "#ffffff",
  },
  {
    id: 27,
    title: "Health Camp on Pharma Anveshan",
    venue: "SRMU",
    date: "13/03/2026",
    image: img27,
    cardBgColor: "#ffffff",
  },
  {
    id: 28,
    title: "Research Lab Visit to CDRI",
    venue: "CDRI",
    date: "19/03/2026",
    image: img28,
    cardBgColor: "#ffffff",
  },
  {
    id: 29,
    title: "Industrial Visit to Baddi",
    venue: "SRMU",
    date: "15/03/2026",
    image: img29,
    cardBgColor: "#ffffff",
  },
  {
    id: 30,
    title: "GPAT Result",
    venue: "SRMU",
    date: "07/04/2026",
    image: img30,
    cardBgColor: "#ffffff",
  },
  {
    id: 31,
    title: "International Conference on Sustainable Development",
    venue: "SRMU",
    date: "09/04/2026 - 11/04/2026",
    image: img31,
    cardBgColor: "#ffffff",
  },
];
