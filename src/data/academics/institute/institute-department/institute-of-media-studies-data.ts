import { customeOverViewType } from "../../../../types/home-data-type";
import vision from "../../../../assets/images/academics/departments/dept-mission-icon2.png";
import mission from "../../../../assets/images/academics/departments/dept-mission-icon1.png";
import { InstituteProfile} from "../../../../types/profile-data-type";
import headImg from "../../../../assets/images/academics/departments/01-10062506001261.png"
import { FeeTableData } from "../../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../../utils/custom/CustomFacultyListCard";


import professor from "../../../../assets/images/academics/institutes/dr.r.s.bajpai.jpg"


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



export const InstituteofMediaStudiesvisionMissionData = {
  backgroundColor: "#F3F7FF",
  
  vision: {
    title: "Vision",
    description: [
      "To be an institution of excellence in the field of communication, journalism and research."
    ],
    buttonText: "View Mission",
    buttonBgColor: "bg-blue-500",
    imageUrl: vision
  },

  mission: {
    title: "Mission",
    description: [
      "To make mass communicator and Journalist with social consciences.",
      "To develop creative and critical thinking with human touch among our students.",
      "To enlighten and enrich the educational experience by providing pragmatic learning.",
      "To inculcate professional ethics and value system among media students."
    ],
    buttonText: "Back to Vision",
    buttonBgColor: "bg-orange-500",
    imageUrl: mission
  }
};

export const InstituteofMediaStudiesCounterData1 = {
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
      value: "8",
      suffix: "",
      label: "Faculty & Staff"
    },
    {
      id: 3,
      icon: "",
      value: "200",
      suffix: "",
      label: "Students"
    },

  ],

  // Optional classes (can be null or ignored if unused)
  classes: "",
  aboutusClass: ""
};

export const InstituteofMediaStudiesCounterData2 = {
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



export const instituteProfiles: InstituteProfile[] = [
  {
    id: 1,
    title: "Department Head",
    name: "Prof. (Dr.) Abhishek Saxena",
    position: "Offg. Director, IAP & Dean FoCE, SRMU, Lucknow–Deva Road",
    image: professor,

    summary:
      "Total experience of 23+ years in industry and academics. Functional Area Expert for EIA studies and empanelled groundwater expert for various government bodies.",

    detailsHeading: "",
    useBullets: false,

    details: [
      "**Total Experience**: 23+ years (Industry: 10 years, Academics: 13+ years)",
      "8 patents and 60 research papers/book chapters published in renowned journals",
      "Supervisor of 5 PhD; 7 scholars awarded",
      "Functional Area Expert for EIA studies (Category 'A' projects – HG & Geo) since 2011",
      "Empanelled Groundwater Expert for Central Ground Water Authority & Ministry of Jal Shakti",
      "Consultancy Projects: 9 | Total Cost: Rs. 2.0+ Cr",
      "Total EIA Projects = 19 (5 Category 'A' + 14 Category 'B')",
    ],

    modalContent: `
Prof. (Dr.) Abhishek Saxena, an environmentalist and academician, is currently working as Dean, Faculty of Civil Engineering with additional charge of Director in Institute of Architecture and Planning at Shri Ramswaroop Memorial University, Barabanki.

He is empanelled Functional Area Expert for EIA studies (Category "A" projects– HG) since 2011 (till date), empanelled by National Accreditation Board for Education and Training (NABET), Ministry of Environment, Forest and Climate Change (MoEFCC), Government of India. He is a renowned member of the National Level Expert Committee for “Auto Detection of Construction through Satellite Imageries”, Ghaziabad Development Authority since 2013. He is also Empanelled Groundwater Expert for CGWA (Central Ground Water Authority), Government of India (2021).

He received the “ITP Young Scientist Award 2006” by IWMI–TATA Water Policy Program for major findings in his Ph.D. research work, and the Guru Pranam Award 2016 by Amar Ujala for contributions in education and research. He is Principal Investigator in the project “Affordable filter for arsenic removal from drinking water using bio-adsorption techniques” funded by UPCST.

His career began with World Bank projects, later joining SMEC (Australia) where he worked on several ADB, JICA, World Bank, and GoI funded assignments. He played a major role in Water Resource Management of Uttar Pradesh (35 districts) under the World Bank UPWRSP Phase-I. UNICEF also utilized his expertise as State Water Safety Consultant for Uttar Pradesh.

He has more than 22 years of experience in water quality, EIA, groundwater and resource management. He holds the fellowship of “The Society of Earth Scientists” and “Indian Society of Remote Sensing”.

Prof. Saxena has 60+ publications in journals, conferences, books and book chapters and has been granted 8 International Patents. Under his guidance, 7 PhDs have been awarded and 5 are in progress.
`
  },


]; 







export const InstituteofMediaStudiesData1: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    { col1: "M.A. in Journalism & Mass Communication", col2: "2 Years", col3: "Click to View", col4: "	Rs. 62,000/-" },
  ],

};

export const InstituteofMediaStudiesData2: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    { col1: "B.A. in Journalism & Mass Communication", col2: "3 Years", col3: "Click to View", col4: "	Rs. 94,000/-" },
  ],

};







export const InstituteofMediaStudiesfacultyData: FacultyItem[] = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    designation: "Associate Professor",
    image: vision,
    cardBgColor: "#1e3a8a",
  },
  {
    id: 2,
    name: "Dr. Rakesh Mehta",
    designation: "Professor & Head of Department",
    image: vision,
    cardBgColor: "#6b21a8",
  },
  {
    id: 3,
    name: "Dr. Neha Patil",
    designation: "Assistant Professor",
    image: vision,
  },
  {
    id: 4,
    name: "Dr. Amit Verma",
    designation: "Research Coordinator",
    image: vision,
    cardBgColor: "#0f766e",
  },
  {
    id: 5,
    name: "Prof. Kavita Deshmukh",
    designation: "Senior Lecturer",
    image: vision,
  },
];


