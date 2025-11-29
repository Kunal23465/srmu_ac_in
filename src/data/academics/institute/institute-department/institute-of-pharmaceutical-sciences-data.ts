import { customeOverViewType } from "../../../../types/home-data-type";
import vision from "../../../../assets/images/academics/departments/dept-mission-icon2.png";
import mission from "../../../../assets/images/academics/departments/dept-mission-icon1.png";
import { InstituteProfile} from "../../../../types/profile-data-type";
import { FeeTableData } from "../../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../../utils/custom/CustomFacultyListCard";

import AmitKumarImg from "../../../../assets/images/academics/departments/whatsapp-image-2024-09-24-at-15.45.03-24092404003842.jpeg"

import LokeshImg from "../../../../assets/images/academics/departments/whatsapp-image-2025-01-08-at-12.46.07-20012510384135.jpeg";
import SantoshImg from "../../../../assets/images/academics/departments/default-img.png";
import HariOmImg from "../../../../assets/images/academics/departments/default-img.png";
import RadheyshyamImg from "../../../../assets/images/academics/departments/default-img.png";
import RitulImg from "../../../../assets/images/academics/departments/default-img.png";
import AmitImg from "../../../../assets/images/academics/departments/default-img.png";
import SafaImg from "../../../../assets/images/academics/departments/default-img.png";
import RaghvendraImg from "../../../../assets/images/academics/departments/default-img.png";
import IteeImg from "../../../../assets/images/academics/departments/default-img.png";
import AnshikaImg from "../../../../assets/images/academics/departments/default-img.png";
import { EventItem } from "../../../../utils/custom/CustomEventListCard";



export const InstituteofPharmaceuticalSciencesOverviewData: customeOverViewType = {
  heading: "Institute of Pharmaceutical Sciences",
  content:
    "The Institute of Pharmacy was established with the goal of advancing pharmaceutical sciences education and research by providing an excellent environment with innovative and engaging teaching methods, globally renowned curricula, excellent faculty, and noteworthy research partnerships. The Institute offers D.Pharma and B.Pharma degrees, with carefully designed curriculum that incorporate requirements from the UGC Curriculum framework, the Choice Based Credit System, and NEP2020. The Institute of Pharmacy is committed to enhancing students' learning aptitude and fostering the growth of critical thinking skills via the use of cutting edge teaching approaches. Our institute constructed state-of-the-art laboratories with ample instruments and resources.",
  counterSibling:
    "With a diverse range of academic and research backgrounds, our faculty is made up of highly qualified professionals who hold doctorates and post-doctoral degrees from prestigious national institutions. Our constant goal is to create a dynamic and engaging learning environment via the use of leading edge research, teaching, and creative strategies. The institution often arranges field excursions, industrial visits, faculty development programs, internships, and distinguished lectures by scientists from throughout the nation and the world. Students are encouraged to actively participate in co-curricular and extracurricular activities around the nation, as well as national conferences in the cutting edge disciplines of pharmaceutical sciences.",
};

export const InstituteofPharmaceuticalSciencesTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];


export const InstituteofPharmaceuticalSciencesCounterData1 = {
  counterData: [
    {
      id: 1,
      icon: "",
      value: "2023",
      suffix: "",
      label: "Established"
    },
    {
      id: 2,
      icon: "",
      value: "9",
      suffix: "",
      label: "Faculty & Staff"
    },
    {
      id: 3,
      icon: "",
      value: "60",
      suffix: "",
      label: "Students"
    },

  ],

  // Optional classes (can be null or ignored if unused)
  classes: "",
  aboutusClass: ""
};

export const InstituteofPharmaceuticalSciencesCounterData2 = {
  counterData: [
    {
      id: 1,
      icon: "",
      value: "10",
      suffix: "",
      label: "Guest lectures"
    },
    {
      id: 2,
      icon: "",
      value: "5",
      suffix: "",
      label: "Field Visits"
    },
    {
      id: 3,
      icon: "",
      value: "0",
      suffix: "",
      label: "Conference & Seminars"
    },

  ],

  // Optional classes (can be null or ignored if unused)
  classes: "",
  aboutusClass: ""
};


export const InstituteofPharmaceuticalSciencesVMData = [
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



export const InstituteofPharmaceuticalSciencesinstituteProfiles: InstituteProfile[] = [
  {
    id: 1,
    title: "Department Head",
    name: "Prof. (Dr.) Amit Kumar",
    position: "Director IOPS, SRMU, Lucknow-Deva Road",
    image: AmitKumarImg,

    summary:
      "",

    detailsHeading: "",
    useBullets: false,

    details: [
      "**Qualification: **M.Pharm., Ph.D. (Pharmaceutical Sciences)",
      "**Experience**: 20+ years",
      "**Specialization/ Area of Research: **Herbal Formulation",
      "**Email ID: **directoriops@srmu.ac.in",
      "**Contact No.: **+91-8318752206",
    ],

    modalContent: `Prof. Amit Kumar eamed his B.Pharm from Rohilkhand University, Bareilly, and M. Pharm from Vinayaka Mission University, Salem, Tamil Nadu. He later completed his Ph.D. in Pharmaceutical Sciences. With over 20 years of experience in pharmacy education and research, he has published numerous research papers in reputed national and international journals. Prof. Kumar has also participated in several prestigious conferences, workshops, and seminars.

He actively guides Ph.D. scholars, contributing to their research and academic growth. Currently, he serves as the Director of the Institute of Pharmaceutical Sciences at Shri Ramswaroop Memorial University, Barabanki, Uttar Pradesh.
`
  },


]; 







export const InstituteofPharmaceuticalSciencesData1: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],

  rows: [
    { col1: "B.Pharma. (Bachelor of Pharmacy)", col2: "4 Years", col3: "Click to View", col4: "Rs. 1,32,000/-" },
    { col1: "D. Pharma. (Diploma in Pharmacy)", col2: "2 Years", col3: "Click to View", col4: "Rs. 92,000/-" },
  ],

};

export const InstituteofPharmaceuticalSciencesData2: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    { col1: "B.A. in Journalism & Mass Communication", col2: "3 Years", col3: "Click to View", col4: "	Rs. 94,000/-" },
  ],

};




export const InstituteofPharmaceuticalSciencesfacultyData: FacultyItem[] = [
  {
    id: 1,
    name: "Dr. Lokesh Agrawal",
    designation: "Associate Professor",
    image: LokeshImg,
  },
  {
    id: 2,
    name: "Mr. Santosh Kumar",
    designation: "Lecturer",
    image: SantoshImg,
  },
  {
    id: 3,
    name: "Mr. Hari Om Singh",
    designation: "Lecturer",
    image: HariOmImg,
  },
  {
    id: 4,
    name: "Mr. Radheyshyam Sharma",
    designation: "Associate Professor",
    image: RadheyshyamImg,
  },
  {
    id: 5,
    name: "Ms. Ritul Rawat",
    designation: "Assistant Professor",
    image: RitulImg,
  },
  {
    id: 6,
    name: "Prof. (Dr.) Amit Kumar",
    designation: "Professor",
    image: AmitImg,
  },
  {
    id: 7,
    name: "Ms. Safa Marwa",
    designation: "Assistant Professor",
    image: SafaImg,
  },
  {
    id: 8,
    name: "Mr. Raghvendra Kumar Yadav",
    designation: "Assistant Professor",
    image: RaghvendraImg,
  },
  {
    id: 9,
    name: "Ms. Itee Pandey",
    designation: "Assistant Professor",
    image: IteeImg,
  },
  {
    id: 10,
    name: "Ms. Anshika Pandey",
    designation: "Assistant Professor",
    image: AnshikaImg,
  },
];




export const InstituteofPharmaceuticalSciencesDepartmentEventsData: EventItem[] = [
]


