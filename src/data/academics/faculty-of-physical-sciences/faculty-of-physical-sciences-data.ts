import { counterDataType } from "../../home/counterData";
import { customeOverViewType } from "../../../types/home-data-type";
import visionImg from "../../../assets/images/academics/institutes/dept-vision.webp";
import misionImg from "../../../assets/images/academics/institutes/dept-mission.webp";
import { departmentHighlightscardType, FeeTableData } from "../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../utils/custom/CustomFacultyListCard";
import ramGopalSingh from "../../../assets/images/academics/institutes/ram-gopal-singh.webp";
import mukeshMishra from "../../../assets/images/academics/institutes/mukesh-mishra.webp";
import nitishKumarSingh from "../../../assets/images/academics/institutes/nitish-kumar-singh.webp";
import nirmalKumar from "../../../assets/images/academics/institutes/nirmal-kumar-verma.webp";
import bmDixit from "../../../assets/images/academics/institutes/prof.-b-m-dixit.webp";
import studentsupport from "../../../assets/images/academics/institutes/studentsupport.webp";
import researchCollaboration from "../../../assets/images/academics/institutes/researchCollaboration.webp";
import remedialClasses from "../../../assets/images/academics/institutes/remedialClasses.webp";
import highlyQualifiedFaculty from "../../../assets/images/academics/institutes/highlyQualifiedFaculty.webp";
import modernLabs from "../../../assets/images/academics/institutes/modernLabs.webp";
import nepCurricula from "../../../assets/images/academics/institutes/nepCurricula.webp";
import nationalCollaboration from "../../../assets/images/academics/institutes/nationalCollaboration.webp";
import { EventItem } from "../../../utils/custom/CustomEventListCard";


export const facultyofPhysicalScienceOverviewData: customeOverViewType = {
  heading: "Faculty of Physical Sciences",
  content: `Physics deals with the physical world (from the largest galaxies to the smallest subatomic particles) that is around us, inside us and beyond us. Physics is the most basic and fundamental science that not only challenges our imaginations but also captivates us since ages because of its great storytelling characteristics. One such is the idea of motion later explored and developed into classical mechanics which was revisited to propose relativistic mechanics and so far the final proposal is quantum mechanics. Similarly the unification scheme of four fundamental interactions (gravitational, electromagnetic, weak and strong) is another success story of physics. Physics leads to great inventions which have revolutionized the world such as electric bulb, telephone, batteries, transistor, television, computers, laser, diagnostic tools - CT scan or MRI, mobile, electron microscopes etc.

Physicists aren’t limited to the ‘basic sciences’ only, rather increasingly entering in the life sciences including molecular biology, genetics and neurobiology; in earth, atmospheric and ocean science; in finance and economics; and even in medicine as medical physicists. So, physics is not only interesting and challenging but relevant also, as it can prepare students for great jobs by bridging the gap between technology and society in as wide variety of places along with many higher studies prospects.`,
};

export const counterDataFoFacultyOfPhysicalScience: counterDataType[] = [
  { id: 1, value: "2012", suffix: "", label: "Established" },
  { id: 2, value: "12", suffix: "", label: "Faculty & Staff" },
  { id: 3, value: "355", suffix: "", label: "Students" },
];


export const counterDataForPlacedStudentsOFPhysicalScience: counterDataType[] =  [
    {
      id: 1,
      icon: "",
      value: "150",
      suffix: "",
      label: "Guest lectures",
    },
    {
      id: 2,
      icon: "",
      value: "50",
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

export const facultyOfPhysicalScienceVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    img: misionImg,
    heading: "Mission",
    points: [
      "Within the scope of academic excellence, innovation and leadership in physics, the Faculty of Physical Sciences considers its two fold mission which are as follows",
      "Develop and create knowledge of physics and share it with the scientific community.",
      "Be proficient in quality teaching and basic interdisciplinary research by adopting Innovative methods to keep pace with contemporary research.",
      "Inculcate lifelong learning through skill enhancement and programs of societal relevance.",
      " Provide appropriate subject knowledge to Undergraduate and Postgraduate students for effectively contributing towards scientific activities."
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: visionImg,
    heading: "Vision",
    points: [
      " To teach and learn physics in collaborative and performance - based method while encouraging observation and analysis of the natural world and provide tools and skills to the students to become future leader in physics.  ",
    ],
  },
];

export const facultyOfPhysicalScienceProfileData = [
  {
    id: 1, 
    title: "Department Head",
    name: "Dr. Ram Gopal Singh",
    position: "Dean, FoPS, SRMU, Lucknow-Deva Road",
    image: ramGopalSingh, 
    summary: "",
    useBullets: false,
    details: [
      "**Qualification:** M.Sc. (Physics), Ph.D. (Physics)",
      "**Experience:** 18+ years",
      "**Specialization/ Area of Research:** Plasma Physics, Renewable Energy",
      "**Email ID:** dean.phy@srmu.ac.in",
      "**ORCID ID:** http://orcid.org/0000-0003-3794-2088",
      "**Contact No.:** +91-6394650525",
    ],
    modalContent: `
Dr. Ram Gopal Singh obtained his master's degree in Physics and his doctoral degree in Laser Plasma Interaction Physics from the University of Lucknow. He worked as a research scholar in the prestigious Plasma Electrodynamics Research Group, headed by Prof. Pallavi Jha, who also served as his research supervisor. In 2012, he joined the Faculty of Physical Sciences at the Institute of Natural Sciences and Humanities, Shri Ramswaroop Memorial University (SRMU), as an Assistant Professor.

Before joining SRMU, he was a Senior Lecturer at B.B.D. Group of Institutions for a few years and also served as a guest faculty member at the University of Lucknow for a year. Dr. Singh has over 16 years of research and teaching experience. He is currently an Associate Professor in the Faculty of Physical Sciences at SRMU and serves as the Dean. His research focuses on laser plasma interaction and physical processes in both quantum and classical plasmas. Recently, he has also developed expertise in solar energy, renewable energy resources, and physics education research. He has published numerous research papers in various reputable international journals and has attended several national and international conferences and workshops.
    `,
  },
];


export const physicalSciencePostgraduateFeeTable: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "M.Sc. in Physics",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 47,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>M.Sc. in Physics</h2>
        <p>
        Candidate must have passed B.Sc. with Physics as major subject from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 45% or CGPA of 5.0 for Gen/OBC and 40% marks or CGPA of 4.5 for SC/ST Category.
        </p>
      `,
    },
  ],
};

export const physicalScienceUndergraduateFeeTable: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "B.Sc.(Hons.) in Physics",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 42,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Sc.(Hons.) in Physics</h2>
        <p>
       Candidate must have passed 10 + 2 or equivalent system from any recognized Central/State Board with Physics with minimum aggregate marks of 45% or equivalent grade for Gen/OBC and 40% marks or equivalent grade for SC/ST Category.
        </p>
      `,
    },
  ],
};


export const facultyDetailsOfPhysicalScienceDepartment: FacultyItem[] = [
  {
    id: 1,
    name: "Dr. Mukesh Mishra",
    designation: "Associate Professor",
    image: mukeshMishra, 
    cardBgColor: "transparent",
  },
  {
    id: 2,
    name: "Dr. Nitish Kumar Singh",
    designation: "Associate Professor",
    image: nitishKumarSingh, 
    cardBgColor: "transparent",
  },
  {
    id: 3,
    name: "Dr. Nirmal Kumar Verma",
    designation: "Assistant Professor",
    image: nirmalKumar, 
    cardBgColor: "transparent",
  },
  {
    id: 4,
    name: "Prof. (Dr.) B.M. Dixit",
    designation: "Professor",
    image: bmDixit, 
    cardBgColor: "transparent",
  },
  {
    id: 5,
    name: "Dr. Ram Gopal Singh",
    designation: "Assistant Professor",
    image: ramGopalSingh, 
    cardBgColor: "transparent",
  },
];


export const physicalScienceHighlightsData: departmentHighlightscardType[] = [
  {
    image: researchCollaboration, 
    title: "Quality teaching and interdisciplinary research",
    description:
      "In order to solve issues and challenges found in the real world, the department promotes multidisciplinary research and collaborations with other departments and organizations.",
  },
  {
    image: remedialClasses,
    title: "Special remedial classes for competitive examinations",
    description:
      "Students preparing for major competitive examinations like as IIT-JAM, Central universities, JEST, etc. can benefit from the department's excellent educational framework in a variety of scientific subjects.",
  },
  {
    image: highlyQualifiedFaculty, 
    title: "Highly qualified faculty with diversified portfolio",
    description:
      "There are highly competent faculty members with master's and doctoral degrees from reputable universities who have experience working on national/ international research initiatives.",
  },
  {
    image: modernLabs, 
    title: "High-end labs with modern equipment",
    description:
      "Modern labs and facilities enable students to receive practical instruction, providing an immersive learning environment that equips them for successful careers in academia, research, and business.",
  },
  {
    image: nepCurricula, 
    title: "Academic structure & curricula as per NEP-2020",
    description:
      "The department is dedicated to offering a dynamic academic environment and provides a wide range of programs that are structured and executed in accordance with NEP 2020, offering several alternatives for entry and exit.",
  },
  {
    image: nationalCollaboration  , 
    title: "Collaboration with institutions of national repute",
    description:
      "",
  },
  {
    image: studentsupport, 
    title: "Rich alumni base performing in different avenues of life",
    description:
      "Alumni from the department are employed by reputable national and international governmental and non-governmental organizations as academicians, analysts, entrepreneurs and research associates.",
  },
];

// export const physicalScienceEventsData: EventItem[] = [
//   {
//     id: 1,
//     title: "International HPV Awareness Day",
//     topic:
//       "Laboratory Diagnosis of Cancer Casuing Microorganism and Their Prevention",
//     speaker: "Dr. Suruchi Shukla, Associate Professor, KGMU",
//     date: "04th March, 2025",
//     image: "hpv",
//     cardBgColor: "#ffffff",
//   },
//   {
//     id: 2,
//     title: "Industrial Visit",
//     venue: "CSIR-CIMAP",
//     date: "26th March, 2025",
//     image: "csirCimap",
//     cardBgColor: "#ffffff",
//   },
//   {
//     id: 3,
//     title: "Workshop",
//     topic: "General Awareness on Food Safety of Daily Life Commodities",
//     date: "14th November, 2024",
//     image: "foodSafety",
//     cardBgColor: "#ffffff",
//   },

// ];

export const physicalScienceEventsData: EventItem[] = [
  {
    id: 1,
    title: "Guest Lecture",
    topic: "India’s Mission to Moon: Chandrayaan-3",
    speaker: "Prof. Kaushlendra Chaturvedi",
    date: "01st September, 2023",
    image: "chandrayaan3Lecture",
    cardBgColor: "#ffffff",
  },
  {
    id: 2,
    title: "Guest Lecture",
    topic: "Fabrication of Glass and Glass Ceramics for Bio-medical Applications",
    speaker: "Dr. C.R. Gautam",
    date: "10th December, 2022",
    image: "biomedicalCeramics", 
    cardBgColor: "#ffffff",
  },
  {
    id: 3,
    title: "Guest Lecture",
    topic: "Revealing Secrets of High-energy Sky",
    speaker: "Dr. Sunil Chandra",
    date: "06th August, 2022",
    image: "highenergySky", 
    cardBgColor: "#ffffff",
  },
  {
    id: 4,
    title: "Guest Lecture",
    topic: "New Era of Atomistic TNL TCAD Tools",
    speaker: "Dr. Praveen Saxena",
    date: "20th May, 2022",
    image: "tcadTools",
    cardBgColor: "#ffffff",
  },
  {
    id: 5,
    title: "Guest Lecture",
    topic: "Biomaterials in Therapy and Tissue Engineering",
    speaker: "Dr. Kapil Dev Patel",
    date: "25th April, 2022",
    image: "biomaterialsLecture", 
    cardBgColor: "#ffffff",
  },
  {
    id: 6,
    title: "Industrial Visit",
    venue: "Uttar Pradesh New and Renewable Energy Development Agency (UPNEDA) Training Centre",
    date: "18th May, 2023",
    image: "upnedaVisit", 
    cardBgColor: "#ffffff",
  },
  {
    id: 7,
    title: "National Conference",
    topic: "SOLARIS 2020",
    date: "07th-09th February, 2020",
    image: "solaris2020",
    cardBgColor: "#ffffff",
  },
  {
    id: 8,
    title: "Seminar",
    topic: "RAMAN SPECTROSCOPY: Fundamentals, Instrumentations and Applications",
    speaker: "Prof. (Dr.) Sunil Kumar Srivastava",
    date: "20th November, 2023",
    image: "ramanSpectroscopy", 
    cardBgColor: "#ffffff",
  },
  {
    id: 9,
    topic: "International Conference",
    title: "International Conference on Advancement in Natural Sciences: Vedic to Modern Era (ICANSVME-24)",
    date: "22-24 February, 2024",
    image: "icansvme24", 
    cardBgColor: "#ffffff",
  },
  {
    id: 10,
    title: "National Science day",
    event: "National Science Day was celebrated vibrantly with INSH and IBST collaboration",
    date: "28th Feb, 2024",
    image: "nationalScienceDay", 
    cardBgColor: "#ffffff",
  },
  {
    id: 11,
    title: "Synopsis Presentation of Research Scholar",
    event: "Synopsis Presentation of Research Scholar of the Department",
    date: "02nd March, 2024",
    image: "synopsisPresentation", 
    cardBgColor: "#ffffff",
  },
];
