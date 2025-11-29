import { customeOverViewType } from "../../../../types/home-data-type";
import vision from "../../../../assets/images/academics/departments/dept-mission-icon2.png";
import mission from "../../../../assets/images/academics/departments/dept-mission-icon1.png";
import { InstituteProfile} from "../../../../types/profile-data-type";
import { departmentHighlightscardType, FeeTableData } from "../../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../../utils/custom/CustomFacultyListCard";

import VNPathakImg from "../../../../assets/images/academics/departments/prof.-dr-v.n.-pathak-2702240134036.png"
import RahulImg from "../../../../assets/images/academics/departments/mr.-rahul-chaturvedi-23022404242613.jpg";
import DhwaniImg from "../../../../assets/images/academics/departments/dr.-dhwani-singh-fomedia-n-2402241123395.jpg";
import SandeepImg from "../../../../assets/images/academics/departments/default-img.png";
import AmitImg from "../../../../assets/images/academics/departments/mr.-amit-kumar-singh-23022404392067.jpg";
import PradeepImg from "../../../../assets/images/academics/departments/default-img.png";
import MiliImg from "../../../../assets/images/academics/departments/dr.-mili-singh-1-11zon-26022405574118.jpg";

import depSlide1 from "../../../../assets/images/academics/institutes/holistic-.jpg";
import depSlide2 from "../../../../assets/images/academics/departments/media-07052412412440.jpg";
import depSlide3 from "../../../../assets/images/academics/departments/industrystalwart-06022403005880.jpg";
import depSlide4 from "../../../../assets/images/academics/departments/media-visit-07052412425199.jpg";
import depSlide5 from "../../../../assets/images/academics/departments/manage--06052401112298.jpg";
import depSlide6 from "../../../../assets/images/academics/departments/entrepreneurialecosystem-0602240302151.jpg";
import depSlide7 from "../../../../assets/images/academics/departments/mentor-07052412432565.jpg";
import { Headers, Student } from "../../../../utils/custom/CustomPlacedStudentTable";
import { EventItem } from "../../../../utils/custom/CustomEventListCard";

export const FacultyOfMathematicalAndStatisticalSciencesOverviewData: customeOverViewType = {
  heading: "Faculty of Mathematical and Statistical Sciences",
  content:
    `Mathematics is the key of Science, "A Science is exact only if employs Mathematics". Mathematics has played a very important role in building up modern civilization by perfecting all Sciences. Mathematics has a beauty all of its own. In an increasingly complex world it is also the essential infrastructure which is supporting science, engineering, business and commerce. So, Mathematics is not only interesting and challenging but relevant also, as it can prepare students for great jobs by bridging the gap between technology and society in a wide variety of places along with higher studies prospects.`,
  counterSibling:
    "The Faculty of Mathematical and Statistical Sciences is unique in nature for its interdisciplinary, UG and PG programs. The soul of all departments came into existence in the academic year 2012. It started flourishing and owned the glory of great success in the field of teaching and research under the able guidance of teachers in the subsequent years. The Faculty's academic programs led to B.Sc. (Honors), M.Sc. (Mathematics) and Ph.D. degrees in a wide range of areas. The Faculty of Mathematical and Statistical Sciences is one of the most important faculties of the Institute. In addition to a rigorous curriculum, the Faculty offers a vibrant environment for students. As per the need of the hour the Faculty gives exposure of many software’s like MATLAB, LATEX, MATHEMATICA, SCILAB etc. In addition to teaching and research, faculty members have been keenly engaged in organizing guest lectures, National and International conferences, Webinars, Quizzes and so many extra-curricular activities. Faculty also plays a substantial and innovative role in bringing mathematical science to the community.",
};

export const FacultyOfMathematicalAndStatisticalSciencesTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];


export const FacultyOfMathematicalAndStatisticalSciencesCounterData1 = {
  counterData: [
    {
      id: 1,
      icon: "",
      value: "2012",
      suffix: "",
      label: "Established"
    },
    {
      id: 2,
      icon: "",
      value: "19",
      suffix: "",
      label: "Faculty & Staff"
    },
    {
      id: 3,
      icon: "",
      value: "455",
      suffix: "",
      label: "Students"
    },

  ],

  // Optional classes (can be null or ignored if unused)
  classes: "",
  aboutusClass: ""
};

export const FacultyOfMathematicalAndStatisticalSciencesCounterData2 = {
  counterData: [
    {
      id: 1,
      icon: "",
      value: "200",
      suffix: "",
      label: "Guest lectures"
    },
    {
      id: 2,
      icon: "",
      value: "150",
      suffix: "",
      label: "Field Visits"
    },
    {
      id: 3,
      icon: "",
      value: "15",
      suffix: "",
      label: "Conference & Seminars"
    },

  ],

  // Optional classes (can be null or ignored if unused)
  classes: "",
  aboutusClass: ""
};


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

    summary:
      "",

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
`
  },


]; 







export const FacultyOfMathematicalAndStatisticalSciencesData1: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],

  rows: [
    { col1: "M.A. in Journalism & Mass Communication", col2: "2 Years", col3: "Click to View", col4: "	Rs. 62,000/-" },
  ],

};

export const FacultyOfMathematicalAndStatisticalSciencesData2: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],

  rows: [
    { col1: "B.A. in Journalism & Mass Communication", col2: "3 Years", col3: "Click to View", col4: "	Rs. 94,000/-" },
  ],

};







export const FacultyOfMathematicalAndStatisticalSciencesfacultyData: FacultyItem[] = [
  {
    id: 1,
    name: "Mr. Rahul Chaturvedi",
    designation: "Assistant Professor",
    image: RahulImg,
  },
  {
    id: 2,
    name: "Dr. Dhwani Singh",
    designation: "Assistant Professor",
    image: DhwaniImg,
  },
  {
    id: 3,
    name: "Mr. Sandeep Singh",
    designation: "Assistant Professor",
    image: SandeepImg,
  },
  {
    id: 4,
    name: "Dr. Amit Kumar Singh",
    designation: "Assistant Professor",
    image: AmitImg,
  },
  {
    id: 5,
    name: "Dr. Pradeep Kumar",
    designation: "Assistant Professor",
    image: PradeepImg,
  },
  {
    id: 6,
    name: "Dr. Mili Singh",
    designation: "Assistant Professor",
    image: MiliImg,
  },
];




export const FacultyOfMathematicalAndStatisticalSciencesdepartmentHighlights: departmentHighlightscardType[] = [
  {
    image: depSlide1,
    title: "Activity based learning for holistic development",
    description:
      "The department offers hands-on training in media skills development to help students get a worldwide perspective on the most recent learning standards.",
  },
  {
    image: depSlide2,
    title: "State -of the-art media laboratories",
    description:
      "Modern facilities in terms of advanced labs with modern equipment and latest softwares are provided by the department so that students may contribute to high-quality media production.",
  },
  {
    image: depSlide3,
    title: "Regular workshops & sessions by industry stalwarts",
    description:
      "Distinguished scholars, filmmakers, journalists, and advertising experts frequently visit the department to share their knowledge with our students.",
  },
  {
    image: depSlide4,
    title: "Regular visits to events, programs & festivals",
    description:
      "The students are sufficiently exposed through field trips, seminars, workshops, special lectures, and projects to let them know the real work culture of media industry.",
  },
  {
    image: depSlide5,
    title: "Association & membership of professional bodies",
    description: "Opportunities for internships are incorporated into the curriculum to assist students in gaining real-world experience and bridging the gap between academics and industry.",
  },
  {
    image: depSlide6,
    title: "Industry collaboration & consultancy for enhanced learning",
    description: "The department's distinctive quality is its engagement in consulting practises, which are complemented by consistent academic work.",
  },
  {
    image: depSlide7,
    title: "Remedial classes for slow learners",
    description: "Department regularly organizes special remedial classes for slow learners so that they can match their peer group and enhance their performance.",
  },
];





export const tableHeaders: Headers = {
    name: "NAME OF STUDENT",
    program: "PROGRAM",
    company: "COMPANY",
  };
 
 export const placedStudents: Student[] = [
    {
      name: "Sakshi Shukla",
      program: "M.A. in Journalism & Mass Communication",
      company: "Policy Bazaar",
    },
    {
      name: "Amarnath Krishna Kashyap",
      program: "B.A. in Journalism & Mass Communication",
      company: "TTN24",
    },
    {
      name: "Anurag Tewari",
      program: "B.A. in Journalism & Mass Communication",
      company: "Live UP Patrika",
    },
    {
      name: "Arshita Singh",
      program: "B.A. in Journalism & Mass Communication",
      company: "Live UP Patrika",
    },
    {
      name: "Surbhi Kumari",
      program: "B.A. in Journalism & Mass Communication",
      company: "Live UP Patrika",
    },
    {
      name: "Anjali Shukla",
      program: "B.A. in Journalism & Mass Communication",
      company: "TTN24",
    },
    {
      name: "Abhishreshtha Mishra",
      program: "M.A. in Journalism & Mass Communication",
      company: "Live UP Patrika",
    },
    {
      name: "Shivam Mishra",
      program: "B.A. in Journalism & Mass Communication",
      company: "National Khabar",
    },
    {
      name: "Disha Pandey",
      program: "B.A. in Journalism & Mass Communication",
      company: "National Khabar",
    },
    {
      name: "Yash Yadav",
      program: "B.A. in Journalism & Mass Communication",
      company: "National Khabar",
    },
    {
      name: "Aditya Jaiswal",
      program: "B.A. in Journalism & Mass Communication",
      company: "National Khabar",
    },
    {
      name: "Shaheen Parveen Shahjahan",
      program: "M.A. in Journalism & Mass Communication",
      company: "IBN Bharat",
    },
    {
      name: "Shivangi Singh",
      program: "M.A. in Journalism & Mass Communication",
      company: "IBN Bharat",
    },
    {
      name: "Saumya Awasthi",
      program: "M.A. in Journalism & Mass Communication",
      company: "National Khabar",
    },
    {
      name: "Atul Pandey",
      program: "M.A. in Journalism & Mass Communication",
      company: "National Khabar",
    },
    {
      name: "Anamika Annu",
      program: "M.A. in Journalism & Mass Communication",
      company: "Doordarshan",
    },
    {
      name: "Sonali Dubey",
      program: "M.A. in Journalism & Mass Communication",
      company: "Dainik jagran",
    },
    {
      name: "Ritu Sharma",
      program: "B.A. in Journalism & Mass Communication",
      company: "HCL TSS Pvt Ltd",
    },
    {
      name: "Mohd Zaid",
      program: "B.A. in Journalism & Mass Communication",
      company: "DC lnfotech",
    },
    {
      name: "Mohammad Saad",
      program: "B.A. in Journalism & Mass Communication",
      company: "Next9News",
    },
    {
      name: "Tanya Khandelwal",
      program: "B.A. in Journalism & Mass Communication",
      company: "Next9News",
    },
    {
      name: "Gurpreet Kaur",
      program: "B.A. in Journalism & Mass Communication",
      company: "Next9News",
    },
    {
      name: "Aanchal Singh",
      program: "M.A. in Journalism & Mass Communication",
      company: "Prabhat media creations",
    },
    {
      name: "Rajeshwari Shukla",
      program: "M.A. in Journalism & Mass Communication",
      company: "Prabhat media creations",
    },
    {
      name: "Avantika Awasthi",
      program: "B.A. in Journalism & Mass Communication",
      company: "K News",
    },
    {
      name: "Rahul Singh",
      program: "B.A. in Journalism & Mass Communication",
      company: "ABHI TAK SUPERFAST NEWS",
    },
    {
      name: "Praqya Srivastava",
      program: "M.A. in Journalism & Mass Communication",
      company: "Hars Tech",
    },
    {
      name: "Danish Siddiqui",
      program: "M.A. in Journalism & Mass Communication",
      company: "Samgra chetna",
    },
    {
      name: "Yashfi Hasan",
      program: "B.A. in Journalism & Mass Communication",
      company: "Samgra chetna",
    },
    {
      name: "Manyata Verma",
      program: "M.A. in Journalism & Mass Communication",
      company: "Viral fission",
    },
    {
      name: "Yash Tiwari",
      program: "B.A. in Journalism & Mass Communication",
      company: "PVR Cinemas",
    },
    {
      name: "Jessica",
      program: "B.A. in Journalism & Mass Communication",
      company: "Red Bull India Pvt. Ltd.",
    },
    {
      name: "Rohit Singh",
      program: "B.A. in Journalism & Mass Communication",
      company: "QConnect",
    },
    {
      name: "Aastha Pal",
      program: "B.A. in Journalism & Mass Communication",
      company: "Cnews bharat",
    },
    {
      name: "Danish Siddiqui",
      program: "M.A. in Journalism & Mass Communication",
      company: "Samgra chetna",
    },
    {
      name: "Atul Kumar Pandey",
      program: "M.A. in Journalism & Mass Communication",
      company: "razy news",
    },
    {
      name: "Yashfi Hasan",
      program: "B.A. in Journalism & Mass Communication",
      company: "Samgra chetna",
    },
    {
      name: "Sanjay Awasthi",
      program: "M.A. in Journalism & Mass Communication",
      company: "Samgra chetna",
    },
  ];


import img1 from "../../../../assets/images/academics/departments/med1-09052401031259.jpg"
import img2 from "../../../../assets/images/academics/departments/med2-09052401030372.jpg"
import img3 from "../../../../assets/images/academics/departments/med3-0905240102507.jpg"
import img4 from "../../../../assets/images/academics/departments/guest6-09052401032821.jpg"
import img5 from "../../../../assets/images/academics/departments/guest7-09052401033814.jpg"
import img6 from "../../../../assets/images/academics/departments/guest2-0905240103534.jpg"
import img7 from "../../../../assets/images/academics/departments/webinar5-09052401003870.jpg"
import img8 from "../../../../assets/images/academics/departments/workshop4-09052401004722.jpg"
import img9 from "../../../../assets/images/academics/departments/workshop3-09052401005812.jpg"

export const FacultyOfMathematicalAndStatisticalSciencesDepartmentEventsData: EventItem[] = [
  {
    id: 1,
    title: "Industrial Visit",
    topic: "U.P. Photo Fair Trust",
    venue: "Lucknow Management Association",
    date: "07th-09th November, 2023",
    image: img1,
    cardBgColor: "#ffffff",
  },
  {
    id: 2,
    title: "Industrial Visit",
    venue: "Bharat Samachar Lucknow",
    date: "24th July, 2023",
    image: img2,
    cardBgColor: "#ffffff",
  },
    {
    id: 3,
    title: "Guest Lecture",
    speaker: "Mr. Adarsh Prakash Srivastava",
    topic: "Empowering Society through informed news",
    date: "25th July, 2023",
    image: img6,
    cardBgColor: "#ffffff",
  },
  {
    id: 4,
    title: "Industrial Visit",
    topic: "Twin Sisters with Cameras",
    venue: "Jadunath Bhawan, Lucknow",
    date: "07th July, 2023",
    image: img3,
    cardBgColor: "#ffffff",
  },
  {
    id: 5,
    title: "Guest Lecture",
    speaker: "Mr. Tushar Srivastava",
    topic: "Challenges for Indian Media in Current Scenario",
    date: "23rd March, 2023",
    image: img4,
    cardBgColor: "#ffffff",
  },
  {
    id: 6,
    title: "Guest Lecture",
    speaker: "Dr. Santosh Kumar",
    topic: "The Generalistic Legacy of Dr. Ambedkar some reflections",
    date: "13th April, 2023",
    image: img5,
    cardBgColor: "#ffffff",
  },

  {
    id: 7,
    title: "Workshop",
    topic: "The Art of Anchoring",
    date: "08th September, 2023",
    image: img7,
    cardBgColor: "#ffffff",
  },
  {
    id: 8,
    title: "Workshop",
    topic: "Report of the Canon sponsored Photography",
    date: "02nd September, 2023",
    image: img8,
    cardBgColor: "#ffffff",
  },
  {
    id: 9,
    title: "Workshop",
    topic: "Reporting for Television & Web: Career Opportunities & Challenges",
    date: "29th January, 2024",
    image: img9,
    cardBgColor: "#ffffff",
  },
];
 