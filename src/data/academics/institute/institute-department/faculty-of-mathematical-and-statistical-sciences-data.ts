import { customeOverViewType } from "../../../../types/home-data-type";
import vision from "../../../../assets/images/academics/departments/dept-mission-icon2.webp";
import mission from "../../../../assets/images/academics/departments/dept-mission-icon1.webp";
import { InstituteProfile } from "../../../../types/profile-data-type";
import { departmentHighlightscardType, FeeTableData } from "../../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../../utils/custom/CustomFacultyListCard";

import VNPathakImg from "../../../../assets/images/academics/departments/prof.-dr-v.n.-pathak-2702240134036.webp";

import AnkitImg from "../../../../assets/images/academics/departments/wsfq-02062505091245.webp";
import ArunImg from "../../../../assets/images/academics/departments/wsfq-02062505080511.webp";
import PunitImg from "../../../../assets/images/academics/departments/wsfq-02062505070943.webp";
import PoojaImg from "../../../../assets/images/academics/departments/wsfq-02062505062189.webp";
import SurajImg from "../../../../assets/images/academics/departments/wsfq-02062505051724.webp";
import AnuragImg from "../../../../assets/images/academics/departments/dr.anuragagnihotri-1007241201398.webp";
import DilipImg from "../../../../assets/images/academics/departments/dr.dilip-kumar-jaiswal-10072411575532.webp";
import VinayImg from "../../../../assets/images/academics/departments/11zon-cropped-49-11zon-24022411463862.webp";
import MukeshImg from "../../../../assets/images/academics/departments/11zon-cropped-50-11zon-24022411503254.webp";
import KulbhushanImg from "../../../../assets/images/academics/departments/02-10062505474470.webp";
import PrachiImg from "../../../../assets/images/academics/departments/dr.prachi-srivastava-10072412024848.webp";
import AnilImg from "../../../../assets/images/academics/departments/11zon-cropped-48-11zon-2402241142114.webp";
import VimleshImg from "../../../../assets/images/academics/departments/vimlesh-10072412155832.webp";
import OmendraImg from "../../../../assets/images/academics/departments/omendra-mishra-10072412112493.webp";
import DhaneshImg from "../../../../assets/images/academics/departments/dhanesh-kumar-10072412142265.webp";
import AnujImg from "../../../../assets/images/academics/departments/anuj-kumar-agarwal-10072412092488.webp";
import AwanishImg from "../../../../assets/images/academics/departments/awanish-kumar-10072412073674.webp";
import PramodImg from "../../../../assets/images/academics/departments/11zon-cropped-45-11zon-24022411063791.webp";

import { Headers, Student } from "../../../../utils/custom/CustomPlacedStudentTable";
import { EventItem } from "../../../../utils/custom/CustomEventListCard";

export const FacultyOfMathematicalAndStatisticalSciencesOverviewData: customeOverViewType = {
  heading: "Faculty of Mathematical and Statistical Sciences",
  content: `Mathematics is the key of Science, "A Science is exact only if employs Mathematics". Mathematics has played a very important role in building up modern civilization by perfecting all Sciences. Mathematics has a beauty all of its own. In an increasingly complex world it is also the essential infrastructure which is supporting science, engineering, business and commerce. So, Mathematics is not only interesting and challenging but relevant also, as it can prepare students for great jobs by bridging the gap between technology and society in a wide variety of places along with higher studies prospects.`,
  counterSibling:
    "The Faculty of Mathematical and Statistical Sciences is unique in nature for its interdisciplinary, UG and PG programs. The soul of all departments came into existence in the academic year 2012. It started flourishing and owned the glory of great success in the field of teaching and research under the able guidance of teachers in the subsequent years. The Faculty's academic programs led to B.Sc. (Honors), M.Sc. (Mathematics) and Ph.D. degrees in a wide range of areas. The Faculty of Mathematical and Statistical Sciences is one of the most important faculties of the Institute. In addition to a rigorous curriculum, the Faculty offers a vibrant environment for students. As per the need of the hour the Faculty gives exposure of many software’s like MATLAB, LATEX, MATHEMATICA, SCILAB etc. In addition to teaching and research, faculty members have been keenly engaged in organizing guest lectures, National and International conferences, Webinars, Quizzes and so many extra-curricular activities. Faculty also plays a substantial and innovative role in bringing mathematical science to the community.",
};

export const FacultyOfMathematicalAndStatisticalSciencesTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];

export const FacultyOfMathematicalAndStatisticalSciencesCounterData1: counterDataType[] = [
  { id: 1, value: "2012", suffix: "", label: "Established" },
  { id: 2, value: "19", suffix: "", label: "Faculty & Staff" },
  { id: 3, value: "455", suffix: "", label: "Students" },
];
export const FacultyOfMathematicalAndStatisticalSciencesCounterData2: counterDataType[] = [
  {
    id: 1,
    icon: "",
    value: "175",
    suffix: "",
    label: "Guest lectures",
  },
  {
    id: 2,
    icon: "",
    value: "25",
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
];

export const FacultyOfMathematicalAndStatisticalSciencesVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    img: mission,
    heading: "Mission",
    description: "To encourage our students to pursue Mathematics with a purpose of acquiring knowledge for future applications and for that we:",
    points: [
      "Encourage students to understand the role of mathematical sciences and its application in solving real life problems.",
      "Make students competent to apply mathematical knowledge augmented with computational skills to deal with complex interdisciplinary fields of knowledge.",
      "Enhance the abilities in mathematics used for societal development while maintaining high standards of professional ethics.",
      "Create an environment to encourage participative learning",
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: vision,
    heading: "Vision",
    points: [
      "To be recognized for excellence in research and teaching by preparing confident undergraduate and postgraduate students who can take up future challenges in higher studies and research in Mathematics and allied fields for pursuing career in diverse fields.",
    ],
  },
];

export const FacultyOfMathematicalAndStatisticalSciencesinstituteProfiles: InstituteProfile[] = [
  {
    id: 1,
    title: "Department Head",
    name: "Prof. (Dr.) V.N. Pathak",
    position: "Dean, FoMS, SRMU, Lucknow-Deva Road",
    image: VNPathakImg,

    summary: "",

    detailsHeading: "",
    useBullets: false,

    details: [
      "**Qualification: **M.Sc. (Maths), Ph.D. (Maths)",
      "**Experience**: 22+ years",
      "**Specialization/ Area of Research: **Differential Geometry",
      "**Email ID: **dean.maths@srmu.ac.in",
      "**ORCID ID: **https://orchid.org/0000-0002-3786-2339",
      "**Contact No.: **+91-9415063248, +91-9140422883",
    ],

    modalContent: `Prof. (Dr.) V. N. Pathak is a senior academician in the field of Mathematics . He has vast teaching and research experience of more than twenty years. He obtained his Post Graduate Degree in 1997 from Dr. Ram Manohar Lohia Avadh University, Faizabad and Doctoral degree in the area of Differential Geometry from the University of Lucknow in 2004. Dr. Pathak joined Shri Ramswaroop Memorial University as a Professor and Controller of Examination in 2015. Before joining the University he was Professor and Head, Department of Mathematics, Shri Ramswaroop Group of Professional Colleges for more than 13 years. Dr. Pathak served as a visiting faculty in various Institutions like Institute of Engineering and Technology, Lucknow, University of Lucknow, CMS Degree College, Lucknow. 

Dr. Pathak has published more than twenty research papers in reputed research journals. He attended and chaired the sessions in several National and International Conferences. Dr. Pathak has received Best Faculty Award thrice in SRMGPC in the years 2003, 2007 and 2014 respectively. Currently he is guiding three research scholars in the field of Differential Geometry and Operation Research. Dr. Pathak is life-time member of International Academy of Physical Sciences, Tensor Society of India, National Academy of Mathematics and Vibha Vigyan Bharti. Presently he is working as a Professor and Dean in Faculty of Mathematical and Statistical Sciences.
`,
  },
];

export const FacultyOfMathematicalAndStatisticalSciencesData1: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],

  rows: [
    {
      course: "M.Sc. in Mathematics",
      duration: "2 Years",
      eligibility: "Click to View",
      fee: "Rs. 47,000/-",
      link: "program/m-sc-mathematics",
    },
    {
      course: "M.Sc. in Statistics",
      duration: "2 Years",
      eligibility: "Click to View",
      fee: "Rs. 47,000/-",
      link: "program/m-sc-statistics",
    },
  ],
};

export const FacultyOfMathematicalAndStatisticalSciencesData2: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],

  rows: [
    {
      course: "B.Sc. (Hons.) in Mathematics",
      duration: "3 Years",
      eligibility: "Click to View",
      fee: "Rs. 42,000/-",
      link: "program/b-sc-hons-mathematics",
    },
    {
      course: "B.Sc. Mathematics  with  Data Science",
      duration: "3 Years",
      eligibility: "Click to View",
      fee: "Rs. 42,000/-",
      link: "program/bsc-mathematics-with-data-science",
    },
  ],
};

export const FacultyOfMathematicalAndStatisticalSciencesfacultyData: FacultyItem[] = [
  { id: 1, name: "Mr. Ankit Goyal", designation: "Assistant Professor", image: AnkitImg },
  { id: 2, name: "Dr. Arun Kumar Bhardwaj", designation: "Assistant Professor", image: ArunImg },
  { id: 3, name: "Dr. Punit Kumar Gupt", designation: "Assistant Professor", image: PunitImg },
  { id: 4, name: "Dr. Pooja Gautam", designation: "Assistant Professor", image: PoojaImg },
  { id: 5, name: "Dr. Suraj Bhan", designation: "Assistant Professor", image: SurajImg },
  { id: 6, name: "Prof. (Dr.) Anurag Agnihotri", designation: "Associate Professor", image: AnuragImg },
  { id: 7, name: "Prof. (Dr.) Dilip Kumar Jaiswal", designation: "Professor", image: DilipImg },
  { id: 8, name: "Dr. Vinay Verma", designation: "Assistant Professor", image: VinayImg },
  { id: 9, name: "Dr. Mukesh Awasthi", designation: "Associate Professor", image: MukeshImg },
  { id: 10, name: "Prof. (Dr.) V.N. Pathak", designation: "Professor", image: VNPathakImg },
  { id: 11, name: "Prof. (Dr.) Kulbhushan Singh", designation: "Professor", image: KulbhushanImg },
  { id: 12, name: "Prof. (Dr.) Prachi Srivastava", designation: "Professor", image: PrachiImg },
  { id: 13, name: "Mr. Anil Kumar", designation: "Assistant Professor", image: AnilImg },
  { id: 14, name: "Dr. Vimlesh", designation: "Assistant Professor", image: VimleshImg },
  { id: 15, name: "Dr. Omendra Mishra", designation: "Assistant Professor", image: OmendraImg },
  { id: 16, name: "Dr. Dhanesh Kumar", designation: "Assistant Professor", image: DhaneshImg },
  { id: 17, name: "Dr. Anuj Kumar Agarwal", designation: "Assistant Professor", image: AnujImg },
  { id: 18, name: "Dr. Awanish Kumar", designation: "Assistant Professor", image: AwanishImg },
  { id: 19, name: "Dr. Pramod Kumar", designation: "Associate Professor", image: PramodImg },
];

import depSlide1 from "../../../../assets/images/academics/departments/maths1-07022412033456.webp";
import depSlide2 from "../../../../assets/images/academics/departments/curriculum-07052412202574.webp";
import depSlide3 from "../../../../assets/images/academics/departments/industrystalwart-06022403005880.webp";
import depSlide4 from "../../../../assets/images/academics/departments/workshop2-0705240116534.webp";
import depSlide5 from "../../../../assets/images/academics/departments/curriculum-07052412202574.webp";
import depSlide6 from "../../../../assets/images/academics/departments/manage--06052401112298.webp";
import depSlide7 from "../../../../assets/images/academics/departments/phd-07022412442258.webp";

export const FacultyOfMathematicalAndStatisticalSciencesdepartmentHighlights: departmentHighlightscardType[] = [
  {
    title: "Excellent instruction and integrated research",
    description:
      "The department fosters interdisciplinary research and partnerships with various organizations and departments in order to address practical issues and constraints.",
    image: depSlide1,
  },
  {
    title: "Specific remediation courses for competitive exams",
    description:
      "Students who are getting ready for highly competitive exams like IIT-JAM, Central Universities, JEST, etc. can benefit from the department's robust educational foundation in a variety of scientific subjects.",
    image: depSlide2,
  },
  {
    title: "Highly skilled educators with a diversified portfolio",
    description:
      "Department have faculty members who possess advanced degrees from institutes of national repute and have experience working on both domestic and foreign research initiatives.",
    image: depSlide3,
  },
  {
    title: "State-of-the-art laboratories and facilities",
    description:
      "Modern labs and facilities within the department enable students to benefit from immersive learning opportunities and hands-on training, preparing them for successful careers in academia, research, and industry.",
    image: depSlide4,
  },
  {
    title: "Academic framework and courses in accordance with NEP-2020",
    description:
      "The department offers a variety of programs that are designed and implemented in compliance with NEP 2020, providing several options for admission and graduation. It is committed to providing a vibrant academic environment.",
    image: depSlide5,
  },
  {
    title: "Promoting research environment though industrial collaborations",
    description:
      "To succeed in academic and industrial research, the department has successfully partnered with a number of prestigious and well-known research institutions as well as the companies.",
    image: depSlide6,
  },
  {
    title: "Alumni trailblazers leading at multiple fronts",
    description:
      "Former students of the department now hold positions in reputable national and international government and non-governmental organizations as academics, analysts, researchers and entrepreneurs.",
    image: depSlide7,
  },
];

export const tableHeaders: Headers = {
  name: "NAME OF STUDENT",
  program: "PROGRAM",
  company: "COMPANY",
};

export const MathematicalAndStatisticalSciencesplacedStudents: Student[] = [
  {
    name: "Ajay Srivastava",
    program: "B.Sc. (Hons.) in Mathematics",
    company: "Wipro WILP",
  },
  {
    name: "Saurabh",
    program: "M.Sc. in Mathematics",
    company: "SRMU",
  },
];

import img1 from "../../../../assets/images/academics/departments/wfw2w-02062504460550.webp";
import img2 from "../../../../assets/images/academics/departments/wee-0206250448025.webp";
import img3 from "../../../../assets/images/academics/departments/guest7-09052401033814.webp";
import img4 from "../../../../assets/images/academics/departments/guest6-09052401032821.webp";
import img5 from "../../../../assets/images/academics/departments/guest7-09052401033814.webp";
import img6 from "../../../../assets/images/academics/departments/international2-10022412523788.webp";
import img7 from "../../../../assets/images/academics/departments/workshop3-09052401005812.webp";
import img8 from "../../../../assets/images/academics/departments/nation6-09052402004527.webp";
import img9 from "../../../../assets/images/academics/departments/guest1-09052412554546.webp";
import img10 from "../../../../assets/images/academics/departments/internation1-09052401044878.webp";
import { counterDataType } from "../../../home/counterData";

export const FacultyOfMathematicalAndStatisticalSciencesDepartmentEventsData: EventItem[] = [
  {
    id: 1,
    title: "International Conference",
    topic: "Sustainable Innovation Bridging Research And Industry For A Resilient Future",
    date: "07th–09th April, 2025",
    image: img1,
    cardBgColor: "#ffffff",
  },
  {
    id: 2,
    title: "Guest Lecture",
    speaker: "Dr. Preeti Bajpai, Professor of Mathematics, BITS Pilani, Dubai Campus",
    topic: "Numbers and their Relevance in our Daily Life",
    date: "08th November, 2024",
    image: img2,
    cardBgColor: "#ffffff",
  },
  {
    id: 3,
    title: "Guest Lecture",
    speaker: "Prof. (Dr.) Arvind Bhatt",
    topic: "An Overview of Central Limit Theorem",
    date: "21st February, 2025",
    image: img3,
    cardBgColor: "#ffffff",
  },
  {
    id: 4,
    title: "Guest Lecture",
    speaker: "Prof. (Dr.) Dinesh Kesari",
    topic: "Basics of Linear Algebra",
    date: "24th–25th March, 2023",
    image: img4,
    cardBgColor: "#ffffff",
  },
  {
    id: 5,
    title: "Guest Lecture",
    speaker: "Dr. B.S. Bhadauria",
    topic: "Advanced Theoretical and Numerical Techniques",
    date: "12th September, 2018",
    image: img5,
    cardBgColor: "#ffffff",
  },
  {
    id: 6,
    title: "Guest Lecture",
    speaker: "Dr. Vinay Singh",
    topic: "Convex Optimization and Its Application",
    date: "13th March, 2019",
    image: img6,
    cardBgColor: "#ffffff",
  },
  {
    id: 7,
    title: "Workshop",
    topic: "Introduction to Vedic Ganit & Innovations",
    date: "21st–26th February, 2022",
    image: img7,
    cardBgColor: "#ffffff",
  },
  {
    id: 8,
    title: "Conference",
    topic: "Conference on Analysis & Applications – An International Meet",
    date: "17th–18th November, 2021",
    image: img8,
    cardBgColor: "#ffffff",
  },
  {
    id: 9,
    title: "Conference",
    topic: "Recent Trends in Mathematics with Applications",
    date: "30th–31st January, 2020",
    image: img9,
    cardBgColor: "#ffffff",
  },
  {
    id: 10,
    title: "Seminar",
    speaker: "Dr. Pankaj Mathur",
    topic: "Emerging Trends in Mathematics and Its Application",
    date: "26th September, 2022",
    image: img10,
    cardBgColor: "#ffffff",
  },
];
