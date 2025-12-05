import { customeOverViewType } from "../../../../types/home-data-type";
import vision from "../../../../assets/images/academics/departments/dept-mission-icon2.png";
import mission from "../../../../assets/images/academics/departments/dept-mission-icon1.png";
import { InstituteProfile} from "../../../../types/profile-data-type";
import { departmentHighlightscardType, FeeTableData } from "../../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../../utils/custom/CustomFacultyListCard";

import ManjuImg from "../../../../assets/images/academics/departments/dr.-manju-singh-11zon-2602240551361.jpg"

import DefaultImg from "../../../../assets/images/academics/departments/default-img.png";
import PramodImg from "../../../../assets/images/academics/departments/11zon-cropped-34-11zon-23022404545998.jpeg";
import ShubhamImg from "../../../../assets/images/academics/departments/11zon-cropped-33-11zon-23022404522539.jpeg";
import AbhishekKumarImg from "../../../../assets/images/academics/departments/11zon-cropped-36-11zon-23022405004966.jpeg";
import AjeetImg from "../../../../assets/images/academics/departments/11zon-cropped-37-11zon-23022405033990.jpeg";


import depSlide1 from "../../../../assets/images/academics/departments/pharma-lab-07052412313791.jpg";
import depSlide2 from "../../../../assets/images/academics/departments/bioinformatics-07022411264512.jpg";
import depSlide3 from "../../../../assets/images/academics/departments/integration-07052412393563.jpg";
import depSlide4 from "../../../../assets/images/academics/departments/corporate-manag-0605240138369.jpg";
import depSlide5 from "../../../../assets/images/academics/departments/industrystalwart-06022401542865.jpg";
import depSlide6 from "../../../../assets/images/academics/departments/skill-07052412400634.jpg";
import depSlide7 from "../../../../assets/images/academics/institutes/holistic-.jpg";
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
      label: "Guest lectures"
    },
    {
      id: 2,
      icon: "",
      value: "40",
      suffix: "",
      label: "Field Visits"
    },
    {
      id: 3,
      icon: "",
      value: "10",
      suffix: "",
      label: "Conference & Seminars"
    },

  ],

  // Optional classes (can be null or ignored if unused)
  classes: "",
  aboutusClass: ""
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
      "To promote the value of learning, self-growth, quality performance, and transition for students to productive and responsible participation in society."
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: vision,
    heading: "Vision",
    points: [
      "To provide value added educational environment for creating quality professionals in the field of pharmacy education, research, industry, hospital and other health related areas for the society well-being."
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

    summary:
      "",

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
`
  },


]; 







export const InstituteofPharmacyData1: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],
  rows: [
    {
      course: "B.Pharm. (Bachelor of Pharmacy)",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,32,000/-",
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
    name: "Ms. Nimisha Singh",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 2,
    name: "Mr. Ajeet Singh",
    designation: "Assistant Professor",
    image: AjeetImg,
  },
  {
    id: 3,
    name: "Ms. Saumya Awasthi",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 4,
    name: "Ms. Zeba Siddiqui",
    designation: "Associate Professor",
    image: DefaultImg,
  },
  {
    id: 5,
    name: "Mr. Azeem Ahmad",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 6,
    name: "Mr. Nand Gopal Jaiswal",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 7,
    name: "Mr. Shailendra Kumar Yadav",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 8,
    name: "Ms. Rida Arif Kidwai",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 9,
    name: "Mr. Yogendra Kumar",
    designation: "Associate Professor",
    image: DefaultImg,
  },
  {
    id: 10,
    name: "Ms. Sunita",
    designation: "Associate Professor",
    image: DefaultImg,
  },
  {
    id: 11,
    name: "Mohd. Nazish Ansari",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 12,
    name: "Mr. Vijay Verma",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 13,
    name: "Mr. Saurabh Kumar Tiwari",
    designation: "Lecturer",
    image: DefaultImg,
  },
  {
    id: 14,
    name: "Mr. Ranjeet Kumar Maurya",
    designation: "Lecturer",
    image: DefaultImg,
  },
  {
    id: 15,
    name: "Mr. Abhishek Kumar",
    designation: "Assistant Professor",
    image: AbhishekKumarImg,
  },
  {
    id: 16,
    name: "Ms. Palak Agrawal",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 17,
    name: "Ms. Sushma Singh",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 18,
    name: "Mr. Neeraj Kumar Verma",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 19,
    name: "Mr. Sunil Kumar Singh",
    designation: "Associate Professor",
    image: DefaultImg,
  },
  {
    id: 20,
    name: "Ms. Pragti Singh",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 21,
    name: "Ms. Sarita Singh",
    designation: "Associate Professor",
    image: DefaultImg,
  },
  {
    id: 22,
    name: "Dr. Shikha Srivastava",
    designation: "Associate Professor",
    image: DefaultImg,
  },
  {
    id: 23,
    name: "Mr. Shubham Gautam",
    designation: "Assistant Professor",
    image: ShubhamImg,
  },
  {
    id: 24,
    name: "Ms. Apurwa Singh",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 25,
    name: "Dr. Yasmin Khatoon",
    designation: "Professor",
    image: DefaultImg,
  },
  {
    id: 26,
    name: "Mr. Anupam Kumar Pal",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 27,
    name: "Mr. Pramod Chauhan",
    designation: "Assistant Professor",
    image: PramodImg,
  },
  {
    id: 28,
    name: "Mr. Zahid Hussain",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 29,
    name: "Ms. Shivangi Sharma",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 30,
    name: "Ms. Shraddha Pandey",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 31,
    name: "Ms. Geetika Mishra",
    designation: "Assistant Professor",
    image: DefaultImg,
  },
  {
    id: 32,
    name: "Prof. (Dr.) Manju Pandey",
    designation: "Professor",
    image: ManjuImg,
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
    description: "The department focuses on cutting-edge teaching methodologies drawn inline with NEP 2020 to help students develop their critical thinking abilities and improve their aptitude for learning.",
  },
  {
    image: depSlide4,
    title: "Outreach & collaboration for vibrant learning atmosphere",
    description: "We want to establish significant collaborations that stimulate creativity and provide significant results in order to address intricate problems in the pharmaceutical domains.",
  },
  {
    image: depSlide5,
    title: "Guest lectures & industrial visits to foster learning",
    description: "Imparting high quality professional education, training and research in the field of pharmaceutical science through regular interactions with industry.",
  },
  {
    image: depSlide6,
    title: "Constant improvement of faculty skills through FDPs",
    description: "Through regular FDPs, the department also prioritizes the ongoing professional development of its academic members and their exposure to cutting-edge techniques and technology.",
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

import img1 from "../../../../assets/images/academics/departments/visit2-09052412543960.jpg";
import img2 from "../../../../assets/images/academics/departments/workshop4-09052412545855.jpg";
import img3 from "../../../../assets/images/academics/departments/visit-1002241204236.jpg";
import img4 from "../../../../assets/images/academics/departments/guest7-09052412552546.jpg";
import img5 from "../../../../assets/images/academics/departments/webinar5-09052412530621.jpg";
import img6 from "../../../../assets/images/academics/departments/national2-10022412140314.jpg";
import img7 from "../../../../assets/images/academics/departments/internation1-09052412542038.jpg";
import img8 from "../../../../assets/images/academics/departments/guest6-09052412553463.jpg";
import img9 from "../../../../assets/images/academics/departments/phar2-09052412532387.jpg";
import img10 from "../../../../assets/images/academics/departments/guest1-09052412554546.jpg";
import img11 from "../../../../assets/images/academics/departments/guest5-09052412555893.jpg";
import img12 from "../../../../assets/images/academics/departments/phar3-09052412533683.jpg";
import img13 from "../../../../assets/images/academics/departments/phar4-09052412534457.jpg";
import { counterDataType } from "../../../home/counterData";


export const InstituteofPharmacyDepartmentEventsData: EventItem[] = [
  {
    id: 1,
    title: "Industrial Visit",
    venue: "Cytogene Research and Development Lucknow",
    date: "19th August, 2023",
    image: img1,
    cardBgColor: "#ffffff",
  },
  {
    id: 2,
    title: "Industrial Visit",
    venue: "Jedux Parenteral Pvt. Ltd",
    date: "04th September, 2023",
    image: img2,
    cardBgColor: "#ffffff",
  },
  {
    id: 3,
    title: "Industrial Visit",
    venue: "CDRI, Jankipuram, U.P",
    date: "26th September, 2023",
    image: img3,
    cardBgColor: "#ffffff",
  },
  {
    id: 4,
    title: "Guest Lecture",
    speaker: "Mohd. Yaqub Khan",
    topic: "Recent Progress of Microneedle Formulation in Covid Patients",
    date: "08th August, 2023",
    image: img4,
    cardBgColor: "#ffffff",
  },
  {
    id: 5,
    title: "Workshop",
    topic: "Stress to Strength & Find a Leader in You",
    date: "13th December, 2022",
    image: img5,
    cardBgColor: "#ffffff",
  },
  {
    id: 6,
    title: "Conference",
    topic: "Assessing and Implementing Pharmacy Best Practices",
    date: "27th April, 2022",
    image: img6,
    cardBgColor: "#ffffff",
  },
  {
    id: 7,
    title: "Seminar",
    topic: "Opportunity To Study Abroad",
    date: "22nd September, 2022",
    image: img7,
    cardBgColor: "#ffffff",
  },
  {
    id: 8,
    title: "Guest Lecture",
    speaker: "Ms. Shaily Chaudhary",
    topic: "Entrepreneurship: Strategy For Leaders",
    date: "14th September, 2023",
    image: img8,
    cardBgColor: "#ffffff",
  },
  {
    id: 9,
    title: "Workshop",
    topic: "Free Heart Disease Reversal Workshop",
    date: "12th November, 2022",
    image: img9,
    cardBgColor: "#ffffff",
  },
  {
    id: 10,
    title: "Guest Lecture",
    speaker: "Dr. Shimpy Srivastava",
    topic: "World Pharmacist Day",
    date: "23rd September, 2023",
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
    title: "Workshop",
    topic: "Get Success in GPAT and other Pharma Competitive Exams",
    date: "06th December, 2022",
    image: img12,
    cardBgColor: "#ffffff",
  },
  {
    id: 13,
    title: "Workshop",
    topic: "DNA Fingerprinting: A boon to Forensic Science",
    date: "07th December, 2022",
    image: img13,
    cardBgColor: "#ffffff",
  },
];