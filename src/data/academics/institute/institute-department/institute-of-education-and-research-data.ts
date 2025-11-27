import { customeOverViewType } from "../../../../types/home-data-type";
import vision from "../../../../assets/images/academics/departments/dept-mission-icon2.png";
import mission from "../../../../assets/images/academics/departments/dept-mission-icon1.png";
import { InstituteProfile} from "../../../../types/profile-data-type";
import { departmentHighlightscardType, FeeTableData } from "../../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../../utils/custom/CustomFacultyListCard";

import RituImg from "../../../../assets/images/academics/departments/dr.-ritu-chandra-11zon-26022405522894.jpg"

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

export const InstituteofEducationandResearchOverviewData: customeOverViewType = {
  heading: "Institute of Education and Research",
  content:
    "The Institute of Education and Research has been fulfilling the cherished dream of the University’s founder, who placed great emphasis on the importance of teacher education. Upholding this vision, the Institute offers both the Bachelor of Education (B.Ed.) and Master of Arts in Education (M.A. Education) programs, designed to develop reflective, innovative, and research-oriented educators. The Institute focuses on building expertise in educational research, aiming to equip pupil-teachers with a creative and analytical understanding of teaching and learning processes. It is committed to providing a conducive academic environment that nurtures a deep reverence for education and lifelong learning. With a diverse academic curriculum and a wide array of co-curricular and extracurricular activities, the Institute strives to enhance the intellectual and professional capacities of its students. The B.Ed. program is conducted in accordance with the guidelines and framework established by the National Council for Teacher Education (NCTE), ensuring both academic rigor and practical relevance.",
  counterSibling:
    "The Institute of Education & Research is equipped with a state-of-the-art library, multiple resource centers, seminar halls, and contemporary classrooms. It follows a mentor-mentee model, where faculty members personally guide and support students to meet their unique learning needs. B.Ed. student-teachers receive comprehensive training through pre-practice teaching sessions, demonstration lessons, school internships, and practice teaching modules, all designed to sharpen their pedagogical skills and classroom readiness. The M.A. in Education program further deepens theoretical insight and research capabilities, preparing students for advanced roles in teaching, administration, and educational policy. It is our constant endeavor to establish a value-driven, quality-conscious institution that emphasizes excellence, ethics, and professional integrity. With a future-focused approach, the Institute aims to prepare skilled and enlightened educators capable of clearing competitive examinations for teaching roles at the primary, upper primary, secondary, senior secondary, and higher education levels.",
};

export const InstituteofEducationandResearchTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];



export const InstituteofEducationandResearchCounterData1 = {
  counterData: [
    {
      id: 1,
      icon: "",
      value: "2014",
      suffix: "",
      label: "Established"
    },
    {
      id: 2,
      icon: "",
      value: "6",
      suffix: "",
      label: "Faculty & Staff"
    },
    {
      id: 3,
      icon: "",
      value: "150",
      suffix: "",
      label: "Students"
    },

  ],

  // Optional classes (can be null or ignored if unused)
  classes: "",
  aboutusClass: ""
};

export const InstituteofEducationandResearchCounterData2 = {
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


export const InstituteofEducationandResearchVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    imageUrl: mission,
    title: "Mission",
    description: [
      "To promote skillful learning through effective Undergraduate & Postgraduate programs, teaching and research specific to changing needs of the industry and society with interdisciplinary approach.",
      "To impart experiential learning with innovative teaching-learning methods for developing active and creative minds.",
      "To develop innate abilities of each student and nurture their potentialities with respect to individual differences and changing environment.",
      "To inculcate moral and ethical values among students."
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    imageUrl: vision,
    title: "Vision",
    description: [
      "To achieve excellence in the fields of Education and Research through socially enriching and ethical responsible pursuits."
    ],
  },
];



export const InstituteofEducationandResearchinstituteProfiles: InstituteProfile[] = [
  {
    id: 1,
    title: "Department Head",
    name: "Prof. (Dr.) Ritu Chandra",
    position: "Director, IQAC & Principal, IER, SRMU, Lucknow-Deva Road",
    image: RituImg,

    summary:
      "",

    detailsHeading: "",
    useBullets: false,

    details: [
      "**Qualification: **Ph.D., UGC-NET(Education)",
      "**Experience**: 14 years",
      "**Specialization/ Area of Research: **Education Psychology",
      "**Email ID: **principal.edu@srmu.ac.in",
      "**ORCID ID: ** https://orcid.org/0000-0002-6993-2418",
      "**Contact No.: **+91-9451404099",
    ],

    modalContent: `
Prof.(Dr.) Ritu Chandra, is an Educationist and Academician with vast experience of teaching and training in the field of Education.

Her major area of interest is Educational Psychology. She has been working on enhancing academic achievement, learning skills, the individual differences in behaviour, personality and intellect of students of various socio economic backgrounds. Apart from Education, her interest areas are English Literature and Theology. She is also empanelled as an expert in UNESCO Inclusive Policy Lab for knowledge creation in the field of Attainment of learning Outcomes and Youth Health and wellbeing. Her major thrust is on imparting Outcome based Education and attainment of learning objectives.

She has published a number of research articles in the area of Educational Psychology and Value Education in various national & international journals. She has been striving for holistic development of students by honing the professional and life skills to make them true professionals.
`
  },


]; 







export const InstituteofEducationandResearchData1: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],

  rows: [
    { col1: "B.Pharm. (Bachelor of Pharmacy)", col2: "4 Years", col3: "Click to View", col4: "	Rs. 1,32,000/-" },
    { col1: "D. Pharm. (Diploma in Pharmacy)", col2: "2 Years", col3: "Click to View", col4: "	Rs. 92,000/-" },
  ],

};
export const InstituteofEducationandResearchData2: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],

  rows: [
    { col1: "B.Pharm. (Bachelor of Pharmacy)", col2: "4 Years", col3: "Click to View", col4: "	Rs. 1,32,000/-" },
    { col1: "D. Pharm. (Diploma in Pharmacy)", col2: "2 Years", col3: "Click to View", col4: "	Rs. 92,000/-" },
  ],

};



export const InstituteofEducationandResearchfacultyData: FacultyItem[] = [
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

];


export const InstituteofEducationandResearchdepartmentHighlights: departmentHighlightscardType[] = [
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

  export const placedStudents: Student[] = [
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