import { customeOverViewType } from "../../../../types/home-data-type";
import vision from "../../../../assets/images/academics/departments/dept-mission-icon2.png";
import mission from "../../../../assets/images/academics/departments/dept-mission-icon1.png";
import { InstituteProfile} from "../../../../types/profile-data-type";
import { departmentHighlightscardType, FeeTableData } from "../../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../../utils/custom/CustomFacultyListCard";

import RituImg from "../../../../assets/images/academics/departments/dr.-ritu-chandra-11zon-26022405522894.jpg"

import AparajitaImg from "../../../../assets/images/academics/departments/ewweg-03062512432898.png";
import GyanPrakashImg from "../../../../assets/images/academics/departments/dr.-gyan-prakash-srivastava-foier-11zon-1--24022410500544.jpg";
import SandeepaImg from "../../../../assets/images/academics/departments/dr.-sandeepa-kaur-bhatiani-23022405194899.jpg";
import AshishImg from "../../../../assets/images/academics/departments/dr.-ashish-kumar-awasthi-foier-11zon-24022410455116.jpg";
import RashmiImg from "../../../../assets/images/academics/departments/dr.-rashmi-chaturvedi-23022405293973.jpg";


import depSlide1 from "../../../../assets/images/academics/departments/education-06022405372723.jpg";
import depSlide2 from "../../../../assets/images/academics/departments/corporate-manag-0605240138369.jpg";
import depSlide3 from "../../../../assets/images/academics/departments/bba21-06022405443777.jpg";
import depSlide4 from "../../../../assets/images/academics/institutes/menteesystem.jpg";
import depSlide5 from "../../../../assets/images/academics/departments/psychology-07022411114264.jpg";
import depSlide6 from "../../../../assets/images/academics/departments/skill-07022411112023.jpg";
import depSlide7 from "../../../../assets/images/academics/departments/nurturing-06052403541786.jpg";
import { Headers, Student } from "../../../../utils/custom/CustomPlacedStudentTable";
import { EventItem } from "../../../../utils/custom/CustomEventListCard";

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
      value: "75",
      suffix: "",
      label: "Guest lectures"
    },
    {
      id: 2,
      icon: "",
      value: "160",
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
    img: mission,
    heading: "Mission",
    points: [
      "To promote skillful learning through effective Undergraduate & Postgraduate programs, teaching and research specific to changing needs of the industry and society with interdisciplinary approach.",
      "To impart experiential learning with innovative teaching-learning methods for developing active and creative minds.",
      "To develop innate abilities of each student and nurture their potentialities with respect to individual differences and changing environment.",
      "To inculcate moral and ethical values among students."
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: vision,
    heading: "Vision",
    points: [
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
    { col1: "M.A. in Education", col2: "2 Years", col3: "Click to View", col4: "	Rs. 37,000/-" },
  ],

};
export const InstituteofEducationandResearchData2: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],

  rows: [
    { col1: "B.Ed. (Bachelor of Education)", col2: "2 Years", col3: "Click to View", col4: "	Rs. 62,000/-" },
  ],

};



export const InstituteofEducationandResearchfacultyData: FacultyItem[] = [
  {
    id: 1,
    name: "Dr. Aparajita Jaiswal",
    designation: "Assistant Professor",
    image: AparajitaImg,
  },
  {
    id: 2,
    name: "Dr. Gyan Prakash Srivastava",
    designation: "Assistant Professor",
    image: GyanPrakashImg,
  },
  {
    id: 3,
    name: "Dr. Sandeepa Kaur Bhatiani",
    designation: "Assistant Professor",
    image: SandeepaImg,
  },
  {
    id: 4,
    name: "Dr. Ashish Kumar Awasthi",
    designation: "Assistant Professor",
    image: AshishImg,
  },
  {
    id: 5,
    name: "Dr. Rashmi Chaturvedi",
    designation: "Assistant Professor",
    image: RashmiImg,
  },
  {
    id: 6,
    name: "Prof. (Dr.) Ritu Chandra",
    designation: "Professor",
    image: RituImg,
  },
];

export const InstituteofEducationandResearchdepartmentHighlights: departmentHighlightscardType[] = [
  {
    image: depSlide1,
    title: "Programs designed in line with NEP-2020",
    description: "As mandated by the National Education Policy (NEP)-2020, the department offers its programs in partnership with other university departments and institutions.",
  },
  {
    image: depSlide2,
    title: "Exposure to the latest ICT technologies",
    description: "The department focus on imparting experiential learning with innovative teaching-learning methods for developing active and creative minds.",
  },
  {
    image: depSlide3,
    title: "Internships to enhance teaching skills",
    description: "Curricula is based on regular internships in fourth semster twith focus on skilling in online teaching, digital lessons, and content development.",
  },
  {
    image: depSlide4,
    title: "Special classes for preparation of government examinations",
    description: "There is a provison of providing special classes to all the students for assisting and preparing them for examinations like TET, CTET, TGT & PGT.",
  },
  {
    image: depSlide5,
    title: "Field visits to educational institutions",
    description: "Department emphasizes on enhancing the experiential learning at educational institutions through outreach and extension initiatives.",
  },
  {
    image: depSlide6,
    title: "Value added courses for skill enhancement",
    description: "These extracurricular educational opportunities give students information and abilities that go beyond what is taught in the classroom.",
  },
  {
    image: depSlide7,
    title: "Nurturing entrepreneurship & innovation",
    description: "Department has developed an acadmeic model in assistance with industry to promote creativity, innovation and entrepreneurship among students.",
  },
];


export const tableHeaders: Headers = {
    name: "NAME OF STUDENT",
    program: "PROGRAM",
    company: "COMPANY",
  };

  export const placedStudents: Student[] = [
  {
    name: "Avni Verma",
    program: "B.Ed. (Bachelor of Education)",
    company: "City Montessari School",
  },
];

import img1 from "../../../../assets/images/academics/departments/guest7-09052401584927.jpg";
import img2 from "../../../../assets/images/academics/departments/guest6-09052401590034.jpg";
import img3 from "../../../../assets/images/academics/departments/guest4-09052401590829.jpg";
import img4 from "../../../../assets/images/academics/departments/guest8-0905240159163.jpg";
import img5 from "../../../../assets/images/academics/departments/nation6-09052402004527.jpg";
import img6 from "../../../../assets/images/academics/departments/workship2-09052401593658.jpg";
import img7 from "../../../../assets/images/academics/departments/webinar5-0905240159455.jpg";
import img8 from "../../../../assets/images/academics/departments/workshop4-0905240159526.jpg";
import img9 from "../../../../assets/images/academics/departments/webinar4-0905240200138.jpg";
import img10 from "../../../../assets/images/academics/departments/nation4-09052402005583.jpg";
import img11 from "../../../../assets/images/academics/departments/webinar1-09052402013920.jpg";


export const InstituteofEducationandResearchDepartmentEventsData: EventItem[] = [
  {
    id: 1,
    title: "Guest Lecture",
    speaker: "Dr. Rashmi Saxena",
    topic: "Skills of Counselling",
    date: "23rd March, 2023",
    image: img1,
    cardBgColor: "#ffffff",
  },
  {
    id: 2,
    title: "Guest Lecture",
    speaker: "Dr. Richa Dubey",
    topic: "Relevance of Innovative Pedagogy Techniques in Present Scenario",
    date: "03rd April, 2023",
    image: img2,
    cardBgColor: "#ffffff",
  },
  {
    id: 3,
    title: "Guest Lecture",
    speaker: "Dr. Arti Bajpai",
    topic: "Role of B.Ed. in Teaching Profession and Ethics of Teaching",
    date: "08th September, 2022",
    image: img3,
    cardBgColor: "#ffffff",
  },
  {
    id: 4,
    title: "Guest Lecture",
    speaker: "Dr. Priyanka Shukla",
    topic: "The Six Virtues for Good Life",
    date: "15th October, 2023",
    image: img4,
    cardBgColor: "#ffffff",
  },
  {
    id: 5,
    title: "Seminar",
    topic: "New Education Policy and Quality Education for Sustainable Future",
    date: "08th April, 2023",
    image: img5,
    cardBgColor: "#ffffff",
  },
  {
    id: 6,
    title: "Workshop",
    topic: "Intergenerational Solidarity: Creating a World for All Ages",
    date: "10th August, 2022",
    image: img6,
    cardBgColor: "#ffffff",
  },
  {
    id: 7,
    title: "Workshop",
    topic: "Linguistic Competency: A Life Skill",
    date: "26th September, 2022",
    image: img7,
    cardBgColor: "#ffffff",
  },
  {
    id: 8,
    title: "Workshop",
    topic: "Well Being, Positive Thinking, Career and Relationship",
    date: "17th December, 2022",
    image: img8,
    cardBgColor: "#ffffff",
  },
  {
    id: 9,
    title: "Webinar",
    speaker: "Dr. Geetika Nidhi",
    topic: "Relevance of Health, Hygiene and Yoga in Pandemic Times",
    date: "23rd October, 2020",
    image: img9,
    cardBgColor: "#ffffff",
  },
  {
    id: 10,
    title: "Seminar",
    speaker: "Dr. Ritu Chandra",
    topic: "Role of Education in Gender Sensitization",
    date: "30th October, 2017",
    image: img10,
    cardBgColor: "#ffffff",
  },
  {
    id: 11,
    title: "National Webinar",
    speaker: "Ms. Pratibha Garg",
    topic: "Online Teaching Learning Strategies",
    date: "02nd June, 2020",
    image: img11,
    cardBgColor: "#ffffff",
  },
];