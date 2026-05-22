import { customeOverViewType } from "../../../../types/home-data-type";
import vision from "../../../../assets/images/academics/departments/dept-mission-icon2.webp";
import mission from "../../../../assets/images/academics/departments/dept-mission-icon1.webp";
import { InstituteProfile} from "../../../../types/profile-data-type";
import { departmentHighlightscardType, FeeTableData } from "../../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../../utils/custom/CustomFacultyListCard";

import RazaurRahmanImg from "../../../../assets/images/academics/departments/01-10062506001261.webp"
import RahulImg from "../../../../assets/images/academics/departments/mr.-rahul-chaturvedi-23022404242613.webp";
import DhwaniImg from "../../../../assets/images/academics/departments/dr.-dhwani-singh-fomedia-n-2402241123395.webp";
import SandeepImg from "../../../../assets/images/academics/departments/default-img.webp";
import AmitImg from "../../../../assets/images/academics/departments/mr.-amit-kumar-singh-23022404392067.webp";
import PradeepImg from "../../../../assets/images/academics/departments/default-img.webp";
import MiliImg from "../../../../assets/images/academics/departments/dr.-mili-singh-1-11zon-26022405574118.webp";

import depSlide1 from "../../../../assets/images/academics/institutes/holistic-.webp";
import depSlide2 from "../../../../assets/images/academics/departments/media-07052412412440.webp";
import depSlide3 from "../../../../assets/images/academics/departments/industrystalwart-06022403005880.webp";
import depSlide4 from "../../../../assets/images/academics/departments/media-visit-07052412425199.webp";
import depSlide5 from "../../../../assets/images/academics/departments/manage--06052401112298.webp";
import depSlide6 from "../../../../assets/images/academics/departments/entrepreneurialecosystem-0602240302151.webp";
import depSlide7 from "../../../../assets/images/academics/departments/mentor-07052412432565.webp";
import { Headers, Student } from "../../../../utils/custom/CustomPlacedStudentTable";
import { EventItem } from "../../../../utils/custom/CustomEventListCard";

export const InstituteofMediaStudiesOverviewData: customeOverViewType = {
  heading: "Institute of Media Studies",
  content:
    "Journalism and Mass Communication study is an encouragement to think about the forces involved in giving it shape. Mass Media industry is one of the fastest growing industries with the mission of social conscience. After the entry of Social Media the rapid change as been registered in other mainstream Media. Simultaneously the scope for the budding Journalist and Mass Communicator are also increasing especially in social media, event management, development communication, crisis management & communication, theatre, cinema, public speaking, journalism, media research, cinema, media academics, advertising and public relations. Institute of Media Studies is offering three years BA(JMC), two years MA(JMC) and PhD. All programs are approved by University Grants Commission.",
  counterSibling:
    "The strength of the Institute are state -of-the art media labs, well equipped newsroom, software updated computer lab, vibrant media and communication research cell, International exposure to media students, standard media industry visits, interaction with media stalwart and film celebrities, regular cultural and academic activities, Internationally recognized and dedicated faculty, central library with standard books, International and National journals. After successful completion of this professional course anybody can build their career as print, radio, TV, web journalist, video editor, copy editor, editor, anchor, voice over artist, producer, author, script writer, communication specialist in NGO’s, documentary and film director, public relation officer, advertising, research analyst, social media activist, web graphic designer, columnist, corporate manager, radio jockey, media manager, theatre, event manager and many more.",
};

export const InstituteofMediaStudiesTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];

export const InstituteofMediaStudiesCounterData1: counterDataType[] = [
  { id: 1, value: "2012", suffix: "", label: "Established" },
  { id: 2, value: "9", suffix: "", label: "Faculty & Staff" },
  { id: 3, value: "200", suffix: "", label: "Students" },
];

export const InstituteofMediaStudiesCounterData2: counterDataType[] = 
 [
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

  ];


export const InstituteofMediaStudiesVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    img: mission,
    heading: "Mission",
    points: [
      "To make mass communicator and Journalist with social consciences.",
      "To develop creative and critical thinking with human touch among our students.",
      "To enlighten and enrich the educational experience by providing pragmatic learning.",
      "To inculcate professional ethics and value system among media students.",
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: vision,
    heading: "Vision",
    points: [
      "To be an institution of excellence in the field of communication, journalism and research.",
    ],
  },
];



export const InstituteofMediaStudiesProfiles: InstituteProfile[] = [
  {
    id: 1,
    title: "Department Head",
    name: "Prof. (Dr.) Razaur Rahman",
    position: "Director IMS, SRMU, Lucknow-Deva Road",
    image: RazaurRahmanImg,

    summary:
      "",

    detailsHeading: "",
    useBullets: false,

    details: [
      "**Qualification: **B.Sc.(Hons.), MBA, Ph.D(Marketing)",
      "**Experience**: 35+ years",
      "**Specialization/ Area of Research: **Marketing & Advertising, Visual Communication",
      "**Email ID: **director.ims@srmu.ac.in",
      "**ORCID ID: **https://orcid.org/0009-0009-5500-5590",
      "**Contact No.: **+91-9415095499",
    ],

    modalContent: `He has more than 35+ years of experience in Management & Media Education and the Industry.He has worked across the different domains including  Advertising, Media  and Management education. He has received laurels as a Director of the Year in 2023 and granted Patent on “Employability “in the managemnt stream in the same year. He began his career with a Publishing Company in New Delhi,India and moved to Academics in the year 1995.In his career span has been associated with leading media institutions such as Film Institute of eMITS,Lucknow and JIT Media Institute ,Barabanki.

He has been guiding and counselling the students across various academic domains. He is capable to motivate young minds and developing synergy between the students and the teachers for their growth.His Research Interest  area is Advertising and Visual Communication.
`
  },


]; 







export const InstituteofMediaStudiesData1: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],
  rows: [
    {
      course: "M.A. in Journalism & Mass Communication",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 62,000/-",
      link:"program/m-a-journalism-mass-communication",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>M.A. in Journalism & Mass Communication</h2>
            <p>Candidates must have passed Graduation in any stream from any recognised University or AICTE recognised Institute/ College with minimum aggregate marks of 45% or CGPA of 5.0 for Gen/ OBC category and 40% marks or CGPA of 4.5 for SC/ ST Category.</p>
        `,
    },
  ],

};

export const InstituteofMediaStudiesData2: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],
  rows: [
    {
      course: "B.A. in Journalism & Mass Communication",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 94,000/-",
      link:"program/b-a-journalism-mass-communication",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.A. in Journalism & Mass Communication</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board in any stream with minimum aggregate marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category.</p>
        `,
    },
  ],
};







export const InstituteofMediaStudiesfacultyData: FacultyItem[] = [
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




export const InstituteofMediaStudiesdepartmentHighlights: departmentHighlightscardType[] = [
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
 
export const InstituteofMediaStudiesplacedStudents: Student[] = [
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


import img1 from "../../../../assets/images/academics/departments/med1-09052401031259.webp"
import img2 from "../../../../assets/images/academics/departments/med2-09052401030372.webp"
import img3 from "../../../../assets/images/academics/departments/med3-0905240102507.webp"
import img4 from "../../../../assets/images/academics/departments/guest6-09052401032821.webp"
import img5 from "../../../../assets/images/academics/departments/guest7-09052401033814.webp"
import img6 from "../../../../assets/images/academics/departments/guest2-0905240103534.webp"
import img7 from "../../../../assets/images/academics/departments/webinar5-09052401003870.webp"
import img8 from "../../../../assets/images/academics/departments/workshop4-09052401004722.webp"
import img9 from "../../../../assets/images/academics/departments/workshop3-09052401005812.webp"
import { counterDataType } from "../../../about/leadership-and-governance/leadership-and-governance-data";

export const InstituteofMediaStudiesDepartmentEventsData: EventItem[] = [
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
 