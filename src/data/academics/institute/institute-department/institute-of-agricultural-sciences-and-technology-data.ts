import { customeOverViewType } from "../../../../types/home-data-type";
import vision from "../../../../assets/images/academics/departments/dept-mission-icon2.webp";
import mission from "../../../../assets/images/academics/departments/dept-mission-icon1.webp";
import { InstituteProfile } from "../../../../types/profile-data-type";
import { departmentHighlightscardType, FeeTableData } from "../../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../../utils/custom/CustomFacultyListCard";

import MahendraImg from "../../../../assets/images/academics/departments/1600x1066--14082511001785.webp";

import VijayImg from "../../../../assets/images/academics/departments/11zon-cropped-25-11zon-23022403574197.webp";
import BalvirImg from "../../../../assets/images/academics/departments/11zon-cropped-26-11zon-23022404011657.webp";
import RiyazImg from "../../../../assets/images/academics/departments/11zon-cropped-27-11zon-23022404042362.webp";
import PranavImg from "../../../../assets/images/academics/departments/11zon-cropped-28-11zon-23022404083922.webp";
import SandeepImg from "../../../../assets/images/academics/departments/11zon-cropped-29-11zon-23022404143165.webp";
import PankajImg from "../../../../assets/images/academics/departments/11zon-cropped-30-11zon-23022404255451.webp";
import AnamImg from "../../../../assets/images/academics/departments/11zon-cropped-31-11zon-23022404294847.webp";
import PrachiImg from "../../../../assets/images/academics/departments/dr-prachi-bhargav-11zon-26022405531290.webp";

import depSlide1 from "../../../../assets/images/academics/departments/biotech1-07052412253675.webp";
import depSlide2 from "../../../../assets/images/academics/departments/curriculum-07052412202574.webp";
import depSlide3 from "../../../../assets/images/academics/departments/foodtech-0705241225555.webp";
import depSlide4 from "../../../../assets/images/academics/departments/with-ibm-07052412210228.webp";
import depSlide5 from "../../../../assets/images/academics/departments/industrystalwart-06022401542865.webp";
import depSlide6 from "../../../../assets/images/academics/departments/biotech-lab-07052412272588.webp";
import depSlide7 from "../../../../assets/images/academics/departments/manage--06052401373517.webp";

import { Headers, Student } from "../../../../utils/custom/CustomPlacedStudentTable";
import { EventItem } from "../../../../utils/custom/CustomEventListCard";

export const InstituteofAgriculturalSciencesandTechnologyOverviewData: customeOverViewType = {
  heading: "Institute of Agricultural Sciences and Technology",
  content:
    "The Indian Council of Agricultural Research has already recognized the B.Sc.(Hons.) Agriculture of four years duration as a professional degree with consequential benefits to the students. SRMU is making concerted efforts to nurture skilled manpower in the field of agriculture since the establishment of Institute of Agricultural Sciences and Technology in year 2019 at its campus on Deva Road, Barabanki. It has already started a four year programme of B.Sc.(Hons.) Agriculture. The degree incorporates all the Fifth Dean’s Committee of the ICAR on Agriculture Education recommendations on course curricula and syllabus.",
  counterSibling:
    "IAST also plans to follow Student Ready (Rural Entrepreneurship Development Yojana) approach comprising Experimental Learning/ Hands down Training, Skill Development Training, Rural Agriculture Work Experience (RAWE) incorporating field Training/ Industrial Attachment, etc. With its cutting-edge facilities and infrastructure, we offer an ideal teaching and learning environment that has drawn students from all over the world. Students' worldviews and perspectives are greatly enhanced when they actively participate in extracurricular and cocurricular activities as well as community service. Our teaching-learning approaches are characterized by a regular curriculum renewal process that incorporates best practices and ongoing evaluation of student learning results. By offering an educational setting that encourages innovation and best practices, we prepare our students for success in a highly competitive global marketplace.",
};

export const InstituteofAgriculturalSciencesandTechnologyTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];


export const InstituteofAgriculturalSciencesandTechnologyCounterData1 = {
  counterData: [
    {
      id: 1,
      icon: "",
      value: "2019",
      suffix: "",
      label: "Established",
    },
    {
      id: 2,
      icon: "",
      value: "16",
      suffix: "",
      label: "Faculty & Staff",
    },
    {
      id: 3,
      icon: "",
      value: "500",
      suffix: "",
      label: "Students",
    },
  ],

  // Optional classes (can be null or ignored if unused)
  classes: "",
  aboutusClass: "",
};

export const InstituteofAgriculturalSciencesandTechnologyCounterData2 = {
  counterData: [
    {
      id: 1,
      icon: "",
      value: "100",
      suffix: "",
      label: "Guest lectures",
    },
    {
      id: 2,
      icon: "",
      value: "150",
      suffix: "",
      label: "Field Visits",
    },
    {
      id: 3,
      icon: "",
      value: "15",
      suffix: "",
      label: "Conference & Seminars",
    },
  ],

  // Optional classes (can be null or ignored if unused)
  classes: "",
  aboutusClass: "",
};

export const InstituteofAgriculturalSciencesandTechnologyVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    img: mission,
    heading: "Mission",
    points: [
      "To Create a proficient agricultural education system at SRMU for meeting the enhanced demand for agricultural graduates and post graduates to take up challenging tasks in the field of education and interdisciplinary research for harnessing full potential of agriculture in the country.",
      "To act as proficient extension agency for transferring new production technologies, and efficient marketing of farm produce with the objective of increasing the farm, thereby rural incomes and employment.",
      "To provide consultancy for establishing agricultural projects.",
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: vision,
    heading: "Vision",
    points: ["To create efficient agricultural institution, which caters to increased demand for professionals and works as a Centre of excellence for education, research, development, extension and consultancy in agriculture and allied sectors resulting into increased contribution of this sector in National GDP through enhanced production, employment and incomes in rural and associated regions."],
  },
];

export const InstituteofAgriculturalSciencesandTechnologyinstituteProfiles: InstituteProfile[] = [
  {
    id: 1,
    title: "Department Head",
    name: "Prof. (Dr.) Mahendra Singh Pal",
    position: "Director, IAST, SRMU, Lucknow–Deva Road",
    image: MahendraImg,

    summary: "",

    detailsHeading: "",
    useBullets: false,

    details: [
      "**Qualification: **Ph. D. in Agronomy & Post Doctorate (P.R.China)",
      "**Experience**: 37+ years",
      "**Specialization/ Area of Research: **Agronomy",
      "**Email ID: **director.ag@srmu.ac.in",
      "**Contact No.: **+91-9474407465",
    ],

    modalContent: `**Dr. Mahendra Singh Pal** enrolled in the B.Sc. Ag & A.H. program in 1978 at G.B. Pant University of Agriculture and Technology (GBPUA&T), Pantnagar, Uttarakhand. He subsequently completed his M.Sc. and Ph.D. in Agronomy from the same university in 1984 and 1988, respectively. Dr. Pal began his professional career as Subject Matter Specialist (Agronomy) in 1988, and later served as Assistant Professor (Agronomy) in 1993, Associate Professor in 1998, and Professor in 2005. He held the position of Head, Department of Agronomy from October 2022 to January 2025, and also rendered valuable services as Joint Director, Extension at GBPUA&T, Pantnagar.

He has served in various capacities, including as Programme Coordinator of the AICRP on Forage Crops & Utilization. He has guided more than 30 M.Sc. and Ph.D. students, published five books, over 50 book chapters, more than 150 research papers, and 120 popular articles. He has successfully handled 10 research projects funded by UPCAR, ICAR, DST, CIMMYT, and other private agencies. In addition to participating in numerous national and international conferences, Dr. Pal has presented research papers in international conferences held in China, Pakistan, Thailand, Sri Lanka, France, Germany, Switzerland, the USA, and Australia.

Dr. Pal is a life member of eight (08) professional societies, including the Indian Society of Agronomy, Indian Society of Oilseeds Research, Pantnagar Journal of Research, Indian Society of Soil Conservation, Indian Society of Agricultural Research, and the Indian Science Congress. He has also served as Councillor and Joint Secretary of the Indian Society of Agronomy. Furthermore, he is an executive member of the International Grassland Congress, representing South Asia, up to 2031. He is the recipient of numerous prestigious awards, including the Chinese Fellowship (1998), Fellow of Manavadhikar Samajik Manch (FMASM, 2004), INSA Visiting Fellowship (2005–2006), Dr. B. Gupta Gold Medal (2013), Best Teacher Award (2014), ISA Fellow (2016), and Faculty Excellence Awards for 2023, 2024, and 2025.
`,
  },
];

export const InstituteofAgriculturalSciencesandTechnologyData1: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],
  rows: [
    {
      course: "M.Sc. (Horticulture) in Vegetable Science",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 50,000/-",
      link:"program/msc-horticulture-veg-sc",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>M.Sc. (Horticulture) in Vegetable Science</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board in B.Sc.(Agriculture)/B.Sc.(Agriculture) (Hons.) or B.Sc.(Horticulture) with minimum aggregate marks of 50% or equivalent grade for GEN/OBC and 45% marks or equivalent grade for SC/ST Category.</p>
        `,
    },
    {
      course: "M.Sc. (Horticulture) in Fruit Science",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 50,000/-",
      link:"program/msc-horticulture-fruit-science",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>M.Sc. (Horticulture) in Fruit Science</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board in B.Sc.(Agriculture)/B.Sc.(Agriculture) (Hons.) or B.Sc.(Horticulture) with minimum aggregate marks of 50% or equivalent grade for GEN/OBC and 45% marks or equivalent grade for SC/ST Category.</p>
        `,
    },
    {
      course: "M.B.A. in Agribusiness Management",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 50,000/-",
      link: "program/mba-agribusiness-management",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>M.B.A. in Agribusiness Management</h2>
            <p>Candidate must have passed B.Tech.(Agri. Engg./Biotechnology/Food Tech)/B.Sc.Forestry/B.Sc.(Ag.)/B.Sc.(Horti.)Food Tech or Dairy Tech./B.Sc. Vet. Sci.&Animal Husbandry /B. Sc.Home Sci. from any recognized University or AICTE recognized Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category.</p>
        `,
    },
    {
      course: "M.Sc. in Agronomy",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 50,000/-",
      link: "program/msc-agronomy",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>M.Sc. in Agronomy</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board in B.Sc.(Agriculture)/B.Sc.(Agriculture) (Hons.) or B.Sc.(Horticulture) with minimum aggregate marks of 50% or equivalent grade for GEN/OBC and 45% marks or equivalent grade for SC/ST Category.</p>
        `,
    },
    {
      course: "M.Sc. in Soil Science & Agricultural Chemistry",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 50,000/-",
      link: "program/msc-soil-science-agricultural-chemistry",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>M.Sc. in Soil Science & Agricultural Chemistry</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board in B.Sc.(Agriculture)/B.Sc.(Agriculture) (Hons.) or B.Sc.(Horticulture) with minimum aggregate marks of 50% or equivalent grade for GEN/OBC and 45% marks or equivalent grade for SC/ST Category.</p>
        `,
    },
  ],
};

export const InstituteofAgriculturalSciencesandTechnologyData2: FeeTableData = {
  columns: ["COURSES", "DURATION", "ELIGIBILITY CRITERIA", "COURSE FEES (PA)"],
  rows: [
    {
      course: "B.Sc.(Hons.) in Agriculture",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 62,000/-",
      link:"program/b-sc-hons-agriculture",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Sc.(Hons.) in Agriculture</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board in B.Sc.(Agriculture)/B.Sc.(Agriculture) (Hons.) or B.Sc.(Horticulture) with minimum aggregate marks of 50% or equivalent grade for GEN/OBC and 45% marks or equivalent grade for SC/ST Category.</p>
        `,
    },
  ]
};



export const InstituteofAgriculturalSciencesandTechnologyfacultyData: FacultyItem[] = [
  {
    id: 1,
    name: "Dr. Vijay Prakash",
    designation: "Assistant Professor",
    image: VijayImg,
  },
  {
    id: 2,
    name: "Dr. Balvir Singh",
    designation: "Deputy Director",
    image: BalvirImg,
  },
  {
    id: 3,
    name: "Dr. Riyaz Ahmad",
    designation: "Assistant Professor",
    image: RiyazImg,
  },
  {
    id: 4,
    name: "Dr. Pranav Kumar Mishra",
    designation: "Assistant Professor",
    image: PranavImg,
  },
  {
    id: 5,
    name: "Dr. Sandeep Yadav",
    designation: "Assistant Professor",
    image: SandeepImg,
  },
  {
    id: 6,
    name: "Dr. Pankaj Kumar",
    designation: "Assistant Professor",
    image: PankajImg,
  },
  {
    id: 7,
    name: "Ms. Anam Khan",
    designation: "Assistant Professor",
    image: AnamImg,
  },
  {
    id: 8,
    name: "Prof. (Dr.) Prachi Bhargava",
    designation: "Professor",
    image: PrachiImg,
  },
];



export const InstituteofAgriculturalSciencesandTechnologydepartmentHighlights: departmentHighlightscardType[] = [
  {
    image: depSlide1,
    title: "Innovative teaching & learning practices",
    description:
      "With innovations like RAWE, Lab 2 Land, Practical Crop Production & many more such initiatives introduced, students are deployed with the necessary skills effectively.",
  },
  {
    image: depSlide2,
    title: "Curriculum as per ICAR 5th dean committee",
    description:
      "All efforts have been made to ensure that the students are exposed to a curricula which is inline with the best practices of the industry and meet all regulatory compliances.",
  },
  {
    image: depSlide3,
    title: "Connectivity with reputed ICAR/CSIR institutes",
    description:
      "Regular exposure to reputable ICAR institutes, businesses, and actual farming environments is provided to students to enhance experiential learning.",
  },
  {
    image: depSlide4,
    title: "Building a research oriented learning model",
    description:
      "The goal is to develop low-cost technologies via research and development so that natural resources may be used more effectively.",
  },
  {
    image: depSlide5,
    title: "Mentoring students to develop entrepreneurial setups",
    description:
      "The department has established a well defined process comprising of mentoring, partnering with organizations, incubation centers for entrepreneurship development and training of students and youth.",
  },
  {
    image: depSlide6,
    title: "Availability of state-of-the-art equipment",
    description:
      "Modern machinery has been set up in various laboratories to carry out tests and therefore demonstrate the validity of theoretical ideas in real life.",
  },
  {
    image: depSlide7,
    title: "Career advancement options providing best ROI",
    description:
      "Students receive training for advancement to top universities in India and outside, as well as on-campus employment in prestigious enterprises.",
  },
];


export const tableHeaders: Headers = {
  name: "NAME OF STUDENT",
  program: "PROGRAM",
  company: "COMPANY",
};

export const InstituteofAgriculturalSciencesandTechnologyplacedStudents: Student[] = [
  { name: "Syed Mohammad Areeb", program: "B.Sc.(Hons.) in Agriculture", company: "Pulsus Healthtech" },
  { name: "Tushar Pandey", program: "B.Sc.(Hons.) in Agriculture", company: "Pulsus Healthtech" },
  { name: "Vishvendra Pratap Singh", program: "B.Sc.(Hons.) in Agriculture", company: "Pulsus Healthtech" },
  { name: "Kesharwani Mohit Dayashankar", program: "B.Sc.(Hons.) in Agriculture", company: "Pulsus Healthtech" },
  { name: "Prakrati Saraswat", program: "B.Sc.(Hons.) in Agriculture", company: "Pulsus Healthtech" },
  { name: "Gloria Babu", program: "B.Sc.(Hons.) in Agriculture", company: "Pulsus Healthtech" },
  { name: "Ankit Yadav", program: "B.Sc.(Hons.) in Agriculture", company: "Pulsus Healthtech" },

  { name: "Tushar Suryavanshi", program: "B.Sc.(Hons.) in Agriculture", company: "eTeam" },
  { name: "Tushar Suryavanshi", program: "B.Sc.(Hons.) in Agriculture", company: "Corizo" },

  { name: "Vishvendra Pratap Singh", program: "B.Sc.(Hons.) in Agriculture", company: "HDFC Life" },
  { name: "Kesharwani Mohit Dayashankar", program: "B.Sc.(Hons.) in Agriculture", company: "HDFC Life" },
  { name: "Prakrati Saraswat", program: "B.Sc.(Hons.) in Agriculture", company: "HDFC Life" },
  { name: "Shambhavi Chauhan", program: "B.Sc.(Hons.) in Agriculture", company: "HDFC Life" },

  { name: "Sonal", program: "B.Sc.(Hons.) in Agriculture", company: "eTeam" },

  { name: "Prakrati Saraswat", program: "B.Sc.(Hons.) in Agriculture", company: "My Captain" },
  { name: "Prakrati Saraswat", program: "B.Sc.(Hons.) in Agriculture", company: "Integrated resources" },

  { name: "Akarsh Verma", program: "B.Sc.(Hons.) in Agriculture", company: "Integrated resources" },
  { name: "Sambhav Singh", program: "B.Sc.(Hons.) in Agriculture", company: "Adani Airports" },
  { name: "Priya Singh", program: "B.Sc.(Hons.) in Agriculture", company: "Integrated resources" },
  { name: "Satyam Katiyar", program: "B.Sc.(Hons.) in Agriculture", company: "Integrated resources" },
  { name: "Ronak Sinha", program: "B.Sc.(Hons.) in Agriculture", company: "Integrated resources" },

  { name: "Gloria Babu", program: "B.Sc.(Hons.) in Agriculture", company: "Eduyoga" },
  { name: "Garima Bhargava", program: "B.Sc.(Hons.) in Agriculture", company: "Eduyoga" },
  { name: "Satyam Katiyar", program: "B.Sc.(Hons.) in Agriculture", company: "Eduyoga" },
  { name: "Vaibhav Jaiswal", program: "B.Sc.(Hons.) in Agriculture", company: "Byjus" },
  { name: "Kesharwani Mohit Dayashankar", program: "B.Sc.(Hons.) in Agriculture", company: "Eduyoga" },

  { name: "Prashant Mani Tripathi", program: "B.Sc.(Hons.) in Agriculture", company: "register karo" },

  { name: "Krishna Sharma", program: "B.Sc.(Hons.) in Agriculture", company: "Securium Solutions" },
  { name: "Garima Bhargava", program: "B.Sc.(Hons.) in Agriculture", company: "Securium Solutions" },
  { name: "Garima Bhargava", program: "B.Sc.(Hons.) in Agriculture", company: "Yokohama" },

  { name: "Vishvendra Pratap Singh", program: "B.Sc.(Hons.) in Agriculture", company: "Legal Brains" },
  { name: "Vivek Singh", program: "B.Sc.(Hons.) in Agriculture", company: "Legal Brains" },

  { name: "Ankit Yadav", program: "B.Sc.(Hons.) in Agriculture", company: "Skill Vertex" },

  { name: "Kesharwani Mohit Dayashankar", program: "B.Sc.(Hons.) in Agriculture", company: "Piramal" },
];


import img1 from "../../../../assets/images/academics/departments/agri1-09052412363771.webp";
import img2 from "../../../../assets/images/academics/departments/agri3-09052412364666.webp";
import img3 from "../../../../assets/images/academics/departments/agri2-09052412365475.webp";
import img4 from "../../../../assets/images/academics/departments/agri4-09052412370363.webp";
import img5 from "../../../../assets/images/academics/departments/agri5-09052412371288.webp";
import img6 from "../../../../assets/images/academics/departments/guest1-10022412515173.webp";
import img7 from "../../../../assets/images/academics/departments/internationalseminar-10022412520735.webp";
import img8 from "../../../../assets/images/academics/departments/guest1-10022412515173.webp";
import img9 from "../../../../assets/images/academics/departments/seminar1-10022412522592.webp";
import img10 from "../../../../assets/images/academics/departments/international2-10022412523788.webp";
import img11 from "../../../../assets/images/academics/departments/experttalk2-10022412524646.webp";
import img12 from "../../../../assets/images/academics/departments/guest3-10022412530337.webp";
import img13 from "../../../../assets/images/academics/departments/experttalk-10022412531278.webp";
import img14 from "../../../../assets/images/academics/departments/internation1-09052412375633.webp";
import img15 from "../../../../assets/images/academics/departments/webinar5-09052412382659.webp";
import img16 from "../../../../assets/images/academics/departments/webinar1-09052412380675.webp";

export const InstituteofAgriculturalSciencesandTechnologyDepartmentEventsData: EventItem[] = [
  {
    id: 1,
    title: "Industrial Visit",
    topic: "International Day for Rural Women",
    venue: "Era University, Lucknow",
    date: "15th October, 2022",
    image: img1,
    cardBgColor: "#ffffff",
  },
  {
    id: 2,
    title: "Industrial Visit",
    topic: "Threshing of Paddy by new type of Thresher",
    venue: "M/s Govind Agro Industries, Barabanki",
    date: "16th November, 2022",
    image: img2,
    cardBgColor: "#ffffff",
  },
  {
    id: 3,
    title: "Industrial Visit",
    topic: "Kisan Gosthi",
    venue: "Barabanki",
    date: "01st May, 2023",
    image: img3,
    cardBgColor: "#ffffff",
  },
  {
    id: 4,
    title: "Industrial Visit",
    venue: "Rako Agrochem Pvt. Ltd.",
    date: "06th October, 2023",
    image: img4,
    cardBgColor: "#ffffff",
  },
  {
    id: 5,
    title: "Industrial Visit",
    topic: "Kisan Gosthi",
    venue: "Barabanki",
    date: "07th October, 2023",
    image: img5,
    cardBgColor: "#ffffff",
  },
  {
    id: 6,
    title: "Guest Lecture",
    speaker: "Dr. Atul Yadav",
    topic: "Challenges and Opportunity in Post Harvest Management",
    date: "29th August, 2022",
    image: img6,
    cardBgColor: "#ffffff",
  },
  {
    id: 7,
    title: "Guest Lecture",
    speaker: "Dr. Prakash Singh",
    topic: "Importance of Extension Activities",
    date: "09th September, 2022",
    image: img7,
    cardBgColor: "#ffffff",
  },
  {
    id: 8,
    title: "Guest Lecture",
    speaker: "Dr. Anupam Singh",
    topic: "Career Opportunities in Agriculture: Scope & Future",
    date: "07th October, 2022",
    image: img8,
    cardBgColor: "#ffffff",
  },
  {
    id: 9,
    title: "Guest Lecture",
    speaker: "Dr. Anand Singh Jeena",
    topic: "Development of Gene Concept",
    date: "19th October, 2022",
    image: img9,
    cardBgColor: "#ffffff",
  },
  {
    id: 10,
    title: "Guest Lecture",
    speaker: "Ms. Vandana Singh",
    topic: "Self Help Group",
    date: "28th November, 2022",
    image: img10,
    cardBgColor: "#ffffff",
  },
  {
    id: 11,
    title: "Guest Lecture",
    speaker: "Dr. Kailash Chandra Khulbe",
    topic: "Intellectual Property Rights",
    date: "20th February, 2023",
    image: img11,
    cardBgColor: "#ffffff",
  },
  {
    id: 12,
    title: "Guest Lecture",
    speaker: "Mr. Raj Kishor Dwivedi",
    topic: "Mushroom Farming - Start Up for Urban Area",
    date: "22nd September, 2023",
    image: img12,
    cardBgColor: "#ffffff",
  },
  {
    id: 13,
    title: "Guest Lecture",
    speaker: "Mr. Jagdeep Singh Salaria",
    topic: "Start Up in Agriculture Sector - Urban & Rural",
    date: "18th October, 2023",
    image: img13,
    cardBgColor: "#ffffff",
  },
  {
    id: 14,
    title: "Seminar",
    speaker: "Dr. Shaleen",
    topic: "New Agri Business Opportunity in Organic farming and Millets: Future of Indian Agriculture",
    date: "21st April, 2023",
    image: img14,
    cardBgColor: "#ffffff",
  },
  {
    id: 15,
    title: "Webinar",
    speaker: "Dr. P.K. Joshi",
    designation:"Retd. Senior Advisor, International Food Policy Research Institute, Washington DC",
    topic: "Agricultural Transformation in India: Challenges and Opportunities",
    date: "15th January, 2021",
    image: img15,
    cardBgColor: "#ffffff",
  },
  {
    id: 16,
    title: "Webinar",
    speaker: "Dr. Neeru Dubey",
    designation: "Assoc. Prof. & Dy. Director Amity University",
    topic: "Sustainable Agriculture: Future of India",
    date: "27th May, 2020",
    image: img16,
    cardBgColor: "#ffffff",
  },
];
