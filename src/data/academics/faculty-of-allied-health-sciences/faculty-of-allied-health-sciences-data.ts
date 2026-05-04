import { customeOverViewType } from "../../../types/home-data-type";

import visionImg from "../../../assets/images/academics/institutes/dept-vision.webp";
import misionImg from "../../../assets/images/academics/institutes/dept-mission.webp";
import drNabeel from "../../../assets/images/academics/institutes/Dr.-Nabeel-Ahmad.webp";
import {
  departmentHighlightscardType,
  FeeTableData,
} from "../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../utils/custom/CustomFacultyListCard";
import diverseprogram from "../../../assets/images/academics/institutes/diverseprogram.webp";
import statelab from "../../../assets/images/academics/institutes/statelab.webp";
import experiencedfaculty from "../../../assets/images/academics/institutes/experiencedfaculty.webp";
import industrycollaboration from "../../../assets/images/academics/institutes/industrycollaboration.webp";
import researchdevelopment from "../../../assets/images/academics/institutes/researchdevelopment.webp";
import studentsupport from "../../../assets/images/academics/institutes/studentsupport.webp";
import { EventItem } from "../../../utils/custom/CustomEventListCard";
import biomedical from "../../../assets/images/academics/institutes/biomedical.webp";
import csir from "../../../assets/images/academics/institutes/csir.webp";
import himanshu from "../../../assets/images/academics/institutes/Dr-Himanshu-Gautam.webp";
import sawanKumar from "../../../assets/images/academics/institutes/Dr-Sawan-Kumar.webp";
import amarSharma from "../../../assets/images/academics/institutes/Mr-Amar-Sharma.webp";
import indadev from "../../../assets/images/academics/institutes/Mr-Indradev-Kumar.webp";
import syedAlim from "../../../assets/images/academics/institutes/Mr-Syed-Alim-Raza.webp";
import deepika from "../../../assets/images/academics/institutes/Ms-Deepika.webp";
import preeti from "../../../assets/images/academics/institutes/Ms-Preeti-.webp";
import rifwana from "../../../assets/images/academics/institutes/Ms-Rifwana-Gulzar.webp";
import { counterDataType } from "../../about/leadership-and-governance/leadership-and-governance-data";


export const facultyofAHSOverviewData: customeOverViewType = {
  heading: "Institute of Allied Health Sciences",
  content: `The Institute of Allied Health Sciences (IoAHS) at Shri Ramswaroop Memorial University (SRMU) was established in 2023, offering undergraduate programs in various paramedical & allied health sciences disciplines. In a short span, IoAHS has achieved significant milestones, including internship opportunities and placing students in reputed healthcare organizations. The institute has organized value-added courses, conferences, seminars, workshops, and guest lectures by eminent scientists and academicians. The laboratories are equipped with state-of-the-art instruments, comparable to global research labs.

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
    name: "Dr. Nabeel Ahmad",
    position: "Offg. Director, Institute of Allied & Health Sciences, SRM University, Barabanki",
    image: drNabeel,
    summary: "",
    useBullets: false,
    details: [
      "**Experience:** 16+ years",
      "**Specialization/ Area of Research:** Nanobiotechnology, Flexible Electronics with Nanosensors, Bioprocess Engineering",
      "**Publications:** 50+ research papers in reputed national and international journals",
      "**Patents:** 20+ patents in Nanobiotechnology",
      "**Fellowships:** TARE Fellowship (SERB, DST, Govt. of India)",
      "**Professional Memberships:** FRSC (Royal Society of Chemistry), FRSB (Royal Society of Biology), FLS (Linnean Society, London)",
      "**Editorial Roles:** Editorial Board Member - Scientific Reports; Guest Editor - Plant Nano Biology Journal & Environmental Science and Pollution Research",
    ],
    modalContent: `
Dr. Nabeel Ahmad is a distinguished academician, researcher, and administrator with over 16+ years of experience in teaching, research, and academic leadership. He is currently serving as the Officiating Director, Institute of Allied & Health Sciences at SRM University, Barabanki.

His research areas are mainly focused on nanobiotechnology, flexible electronics with nanosensors, and bioprocess engineering, contributing significantly to interdisciplinary scientific advancements. Dr. Ahmad has published more than 50 research papers in reputed national and international peer-reviewed journals.

He has also served as an Editor for internationally acclaimed books published by Elsevier, including:

- 3D Printing Technology in Nanomedicine  
- Intelligent Nanomaterials for Drug Delivery Applications  
- Emerging Nanotechnologies for Medical Applications  

In addition to his research contributions, Dr. Ahmad holds over 20 patents in the domain of nanobiotechnology, reflecting his strong focus on innovation and translational research.

Dr. Ahmad is an Editorial Board Member of Scientific Reports and has served as Executive Guest Editor for Plant Nano Biology Journal and Guest Editor for Environmental Science and Pollution Research Journal, demonstrating his significant role in international scholarly publishing and editorial leadership.

He has been invited as an expert speaker at various national and international platforms, including universities abroad such as the University of Malaysia, and conferences organized by professional bodies including the Association of Microbiologists of India (AMI) and other scientific organizations.

Dr. Ahmad is a recipient of the prestigious Teachers Associateship for Research Excellence (TARE) Fellowship under the Science and Engineering Research Board (SERB), Department of Science & Technology (DST), Government of India.

He is also a Fellow of the Royal Society of Chemistry (FRSC), Fellow of the Royal Society of Biology (FRSB), and a Fellow of the Linnean Society (FLS), London.

Furthermore, Dr. Ahmad has successfully attracted research funding from agencies such as USERC Uttarakhand, UCOST Uttarakhand, DST-SERB New Delhi, DBT New Delhi, ANRF, DRDO, and CSIR. He has also spearheaded multiple hands-on workshops in bioinformatics and scientific writing, thereby strengthening research capacity and advancing skill development.
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
    name: "Ms Preeti",
    designation: "Assistant Professor",
    image: preeti,
    cardBgColor: "transparent",
  },
  {
    id: 2,
    name: "Dr Sawan Kumar",
    designation: "Assistant Professor",
    image: sawanKumar,
    cardBgColor: "transparent",
  },
  {
    id: 3,
    name: "Mr Amar Sharma",
    designation: "Assistant Professor",
    image: amarSharma,
    cardBgColor: "transparent",
  },
  {
    id: 4,
    name: "Ms Deepika",
    designation: "Assistant Professor",
    image: deepika,
    cardBgColor: "transparent",
  },
  {
    id: 5,
    name: "Mr Indradev Kumar",
    designation: "Assistant Professor",
    image: indadev,
    cardBgColor: "transparent",
  },
  {
    id: 6,
    name: "Dr Himanshu Gautam",
    designation: "Assistant Professor",
    image: himanshu,
    cardBgColor: "transparent",
  },
  {
    id: 7,
    name: "Mr Syed Alim Raza",
    designation: "Assistant Professor",
    image: syedAlim,
    cardBgColor: "transparent",
  },
  {
    id: 8,
    name: "Ms Rifwana Gulzar",
    designation: "Assistant Professor",
    image: rifwana,
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
