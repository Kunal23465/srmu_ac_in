import { customeOverViewType } from "../../../types/home-data-type";

import visionImg from "../../../assets/images/academics/institutes/dept-vision.png";
import misionImg from "../../../assets/images/academics/institutes/dept-mission.png";
import drTabishQidwai from "../../../assets/images/academics/institutes/dr.-tabish-kidwai-.png";
import {
  departmentHighlightscardType,
  FeeTableData,
} from "../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../utils/custom/CustomFacultyListCard";
import aparna from "../../../assets/images/academics/institutes/aparna.jpeg";
import sapna from "../../../assets/images/academics/institutes/sapna.jpeg";
import neeraj from "../../../assets/images/academics/institutes/neeraj.jpeg";
import imran from "../../../assets/images/academics/institutes/imran.jpeg";
import sukanya from "../../../assets/images/academics/institutes/sukanya.jpeg";
import diverseprogram from "../../../assets/images/academics/institutes/diverseprogram.jpg";
import statelab from "../../../assets/images/academics/institutes/statelab.jpg";
import experiencedfaculty from "../../../assets/images/academics/institutes/experiencedfaculty.jpg";
import industrycollaboration from "../../../assets/images/academics/institutes/industrycollaboration.jpg";
import researchdevelopment from "../../../assets/images/academics/institutes/researchdevelopment.jpg";
import studentsupport from "../../../assets/images/academics/institutes/studentsupport.jpg";
import { EventItem } from "../../../utils/custom/CustomEventListCard";
import biomedical from "../../../assets/images/academics/institutes/biomedical.jpg";
import csir from "../../../assets/images/academics/institutes/csir.jpg";
import { counterDataType } from "../../about/leadership-and-governance/leadership-and-governance-data";


export const facultyofAHSOverviewData: customeOverViewType = {
  heading: "Faculty of Allied Health Sciences",
  content: `The Faculty of Allied Health Sciences (FoAHS) at Shri Ramswaroop Memorial University (SRMU) was established in 2023, offering undergraduate programs in various paramedical & allied health sciences disciplines. In a short span, FoAHS has achieved significant milestones, including internship opportunities and placing students in reputed healthcare organizations. The faculty has organized value-added courses, conferences, seminars, workshops, and guest lectures by eminent scientists and academicians. The laboratories are equipped with state-of-the-art instruments, comparable to global research labs.

The department comprises highly experienced faculty members and enthusiastic research fellows. Research expertise spans various paramedical fields, including clinical research, medical imaging, physiotherapy, and public health. The department emphasizes both basic and translational research. Students, staff, and faculty form a cohesive and interactive group, regularly inviting renowned scientists for seminars and scientific discussions. Industrial collaborations bridge the gap between conventional degree programs and industry needs, leading to opportunities in academia, industry, and healthcare. These academic and research activities foster a cooperative research and training experience.`,
};

export const counterDataFoFacultyOfAlliedHealthSciences: counterDataType[] = [
  { id: 1, value: "2023", suffix: "", label: "Established" },
  { id: 2, value: "20", suffix: "", label: "Faculty & Staff" },
  { id: 3, value: "300", suffix: "", label: "Students" },
];


export const counterDataForPlacedStudentsOFAlliedHealthSciences: counterDataType[] =  [
    {
      id: 1,
      icon: "",
      value: "25",
      suffix: "",
      label: "Guest lectures",
    },
    {
      id: 2,
      icon: "",
      value: "10",
      suffix: "",
      label: "Field Visits",
    },
    {
      id: 3,
      icon: "",
      value: "5",
      suffix: "",
      label: "Conference & Seminars",
    },
  ];

export const facultyOfAlliedHealthSciencesVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    img: misionImg,
    heading: "Mission",
    points: [
      "Delivering comprehensive training programs that integrate theoretical knowledge with practical skills.",
      "Engaging in interdisciplinary research initiatives aimed at advancing medical technologies.",
      "Partnering with healthcare institutions to address the application of research and education to real-world scenarios.",
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: visionImg,
    heading: "Vision",
    points: [
      "Our vision is to advance paramedical education and research, equipping students with the skills and knowledge to excel in healthcare settings, improve patient outcomes, and contribute to community well-being.",
    ],
  },
];

export const facultyOfAhsProfileData = [
  {
    id: 1,
    title: "Department Head",
    name: "Dr. Tabish Qidwai",
    position: "Offg. Director, IBST, SRMU, Lucknow–Deva Road",
    image: drTabishQidwai,
    summary: "",
    useBullets: false,
    details: [
      "**Qualification:** M.Tech. (Biotechnology), Ph.D. (Biotechnology)",
      "**Experience:** 13 years",
      "**Specialization/ Area of Research:** Functional Genomics, Immunology and Infectious Disease Research including Malaria and COVID-19.",
      "**Email ID:** director.bio@srmu.ac.in",
      "**ORCID ID:** https://orcid.org/0000-0001-8247-7248",
      "**Contact No.:** +91-9140631326",
    ],
    modalContent: `
Tabish Qidwai has done M.Tech and Ph.D. in Biotechnology Engineering. He has worked as a faculty member at B.B. Ambedkar Central University, Lucknow and Raja Balwant Singh College, Agra. He received various prestigious awards including the Rashtriya Gaurav Award for remarkable contributions to Science and Technology, Certificate of Excellence in Science and Technology, University Gold Medal, Research Excellence Award, Teaching and Learning Innovation Award and several certificate of appreciation for significant contribution to academics.

He has 13 years of teaching and research experience in genomics and immunology and infectious diseases. He has published nearly 52 book chapters, research articles, review articles in peer-reviewed international journals and authored/edited 5 books as a single author/editor. He has I 10 index 25 and h index 20 and more than 1000 citations. Currently, He is supervising 6 Ph.D. students and 1 Ph.D. is awarded under his supervision.

He is a member of many national and international scientific societies and organizations. His research interests are focused on the functional genomics, immunology, and infectious disease research including malaria and COVID-19. Currently, he is working and writing articles/book chapters in collaboration with University of South Florida, USA, Biological Research Centre, Szeged, Hungary, The Arctic University of Norway, AIIMS Hyderabad, AIIMS Bhopal, IIT-BHU, IET Lucknow and University of Delhi.
`,
  },
];

export const underGraduateFeeDataOfAHS: FeeTableData = {
  columns: ["COURSES", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "Bachelor in Medical Laboratory Science",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,00,000/-",
      eligibilityContent:
        "\n<h2 class='font-bold text-lg mb-3 flex justify-center '>Bachelor in Medical Laboratory Science</h2>\n <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics/ Biology as compulsory subject alongwith Chemistry with minimum aggregate marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category.</p>",
    },
    {
      course: "Bachelor in Operation Theatre Technology",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,00,000/-",
      eligibilityContent:
        "\n <h2 class='font-bold text-lg mb-3 flex justify-center '>Bachelor in Operation Theatre Technology</h2>\n <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics/ Biology as compulsory subject alongwith Chemistry with minimum aggregate marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category.</p>",
    },
    {
      course: "Bachelor in Medical Radiologic and Imaging Technology",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,00,000/-",
      eligibilityContent:
        "\n <h2 class='font-bold text-lg mb-3 flex justify-center '>Bachelor in Medical Radiologic and Imaging Technology</h2>\n <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics/ Biology as compulsory subject alongwith Chemistry with minimum aggregate marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category.</p>",
    },
    {
      course: "Bachelor of Optometry",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,00,000/-",
      eligibilityContent:
        "\n <h2 class='font-bold text-lg mb-3 flex justify-center '>Bachelor of Optometry</h2>\n <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics/ Biology as compulsory subject alongwith Chemistry with minimum aggregate marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category.</p>",
    },
    {
      course: "Bachelor in Physiotherapy",
      duration: "4.5 Years",
      eligibility: "Click",
      fee: "Rs. 1,00,000/-",
      eligibilityContent:
        "<h2 class='font-bold text-lg mb-3 flex justify-center '>Bachelor in Physiotherapy</h2>\n <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics/ Biology as compulsory subject alongwith Chemistry with minimum aggregate marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category.</p>",
    },
  ],
};

export const facultyDetailsOfAhsDepartment: FacultyItem[] = [
  {
    id: 1,
    name: "Ms. Aparna",
    designation: "Assistant Professor",
    image: aparna,
    cardBgColor: "transparent",
  },
  {
    id: 2,
    name: "Dr. Sapna Sharma",
    designation: "Assistant Professor",
    image: sapna,
    cardBgColor: "transparent",
  },
  {
    id: 3,
    name: "Dr. Neeraj Tiwari",
    designation: "Assistant Professor",
    image: neeraj,
    cardBgColor: "transparent",
  },
  {
    id: 4,
    name: "Dr. Mohd Imran",
    designation: "Assistant Professor",
    image: imran,
    cardBgColor: "transparent",
  },
  {
    id: 5,
    name: "Dr. Sukanya Tripathy",
    designation: "Assistant Professor",
    image: sukanya,
    cardBgColor: "transparent",
  },
];


export const alliedHealthScienceHighlightsData: departmentHighlightscardType[] =
  [
    {
      image: diverseprogram, 
      title: "Diverse Program Offerings",
      description:
        "Department provides programs in Operation Theatre Technology (OTT) and Medical Laboratory Technology (MLT) which are tailored to meet industry standards, ensuring students gain relevant skills for the healthcare sector.",
    },
    {
      image: statelab, 
      title: "State-of-the-Art Laboratories",
      description:
        "Our paramedical department boasts modern laboratories equipped with advanced medical instruments.",
    },
    {
      image: experiencedfaculty, 
      title: "Experienced Faculty",
      description:
        "The faculty comprises seasoned professionals with extensive experience in their respective fields.",
    },
    {
      image: industrycollaboration,
      title: "Industry Collaborations",
      description:
        "These collaborations provide students with opportunities for internships, workshops, and exposure to current industry practices.",
    },
    {
      image: researchdevelopment, 
      title: "Emphasis on Research & Development",
      description:
        "The university encourages a research-oriented approach, allowing students to engage in innovative projects.",
    },
    {
      image: studentsupport, 
      title: "Comprehensive Student Support",
      description:
        "Beyond academics, SRMU offers robust support services, including career counseling, soft skills training, and placement assistance.",
    },
  ];

  export const alliedHealthScienceDepartmentEventsData:EventItem[]  =[
   
    {
      id: 1,
      title: "Industrial Visit",
      topic: "Biomedical Research",
      venue: "SGPGI",
      date: "12th May, 2023",
      image: biomedical,
      cardBgColor: "#ffffff",
    },
    {
      id: 2,
      title: "Industrial Visit",
      venue: "CSIR- Indian Industrial Toxicology Research, Lucknow",
      date: "21st November, 2023",
      image: csir,
      cardBgColor: "#ffffff",
    }
  
  ];