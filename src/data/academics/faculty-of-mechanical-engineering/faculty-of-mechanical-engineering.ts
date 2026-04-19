import { customeOverViewType } from "../../../types/home-data-type";
import { counterDataType } from "../../home/counterData";
import visionImg from "../../../assets/images/academics/institutes/dept-vision.webp";
import misionImg from "../../../assets/images/academics/institutes/dept-mission.webp";
import { InstituteProfile } from "../../../types/profile-data-type";
import rajeshPorwal from "../../../assets/images/academics/institutes/dr.-rajesh-porwal.webp";
import { departmentHighlightscardType, FeeTableData } from "../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../utils/custom/CustomFacultyListCard";
import neerajKumarGupta from "../../../assets/images/academics/institutes/neerajGupta.webp";
import arvindKumarVerma from "../../../assets/images/academics/institutes/mr.-arvind-kumar-verma.webp";
import rohitSingh from "../../../assets/images/academics/institutes/rohit-singh.webp";
import rakeshDwivedi from "../../../assets/images/academics/institutes/rakesh.webp";
import shashankKumarShukla from "../../../assets/images/academics/institutes/shashank.webp";
import vinodKumar from "../../../assets/images/academics/institutes/vinod.webp";
import niteshKumarPandey from "../../../assets/images/academics/institutes/nitish-pandey.webp";
import umeshVishwakarma from "../../../assets/images/academics/institutes/umesh.webp";
import vikramSingh from "../../../assets/images/academics/institutes/vikram.webp";
import amitKumarSingh from "../../../assets/images/academics/institutes/amit-kumar-singh.webp";
import rajeshKumarPorwal from "../../../assets/images/academics/institutes/dr.-rajesh-porwal.webp";
import stateoftheart from "../../../assets/images/academics/institutes/stateoftheart.webp";
import industryintegrated from "../../../assets/images/academics/institutes/industryintegrated.webp";
import menteesystem from "../../../assets/images/academics/institutes/menteesystem.webp";
import handsonlearning from "../../../assets/images/academics/institutes/handsonlearning.webp";
import guestsessions from "../../../assets/images/academics/institutes/guestsessions.webp";
import entrepreneurialmindsets from "../../../assets/images/academics/institutes/entrepreneurialmindsets.webp";
import interdisciplinaryresearch from "../../../assets/images/academics/institutes/interdisciplinaryresearch.webp";
import industrialVisit from "../../../assets/images/academics/institutes/industrial-visit.webp";
import { EventItem } from "../../../utils/custom/CustomEventListCard";

export const facultyDetailsOfMeDepartment: FacultyItem[] = [
  {
    id: 1,
    name: "Mr. Neeraj Kumar Gupta",
    designation: "Assistant Professor",
    image: neerajKumarGupta,
    cardBgColor: "transparent",
  },
  {
    id: 2,
    name: "Mr. Arvind Kumar Verma",
    designation: "Assistant Professor",
    image: arvindKumarVerma,
    cardBgColor: "transparent",
  },
  {
    id: 3,
    name: "Mr. Rohit Singh",
    designation: "Assistant Professor",
    image: rohitSingh,
    cardBgColor: "transparent",
  },
  {
    id: 4,
    name: "Mr. Rakesh Dwivedi",
    designation: "Assistant Professor",
    image: rakeshDwivedi,
    cardBgColor: "transparent",
  },
  {
    id: 5,
    name: "Mr. Shashank Kumar Shukla",
    designation: "Assistant Professor",
    image: shashankKumarShukla,
    cardBgColor: "transparent",
  },
  {
    id: 6,
    name: "Mr. Vinod Kumar",
    designation: "Assistant Professor",
    image: vinodKumar,
    cardBgColor: "transparent",
  },
  {
    id: 7,
    name: "Mr. Nitesh Kumar Pandey",
    designation: "Assistant Professor",
    image: niteshKumarPandey,
    cardBgColor: "transparent",
  },
  {
    id: 8,
    name: "Mr. Umesh Vishwakarma",
    designation: "Assistant Professor",
    image: umeshVishwakarma,
    cardBgColor: "transparent",
  },
  {
    id: 9,
    name: "Mr. Vikram Singh",
    designation: "Assistant Professor",
    image: vikramSingh,
    cardBgColor: "transparent",
  },
  {
    id: 10,
    name: "Dr. Amit Kumar Singh",
    designation: "Assistant Professor",
    image: amitKumarSingh,
    cardBgColor: "transparent",
  },
  {
    id: 11,
    name: "Prof. (Dr.) Rajesh Kumar Porwal",
    designation: "Professor",
    image: rajeshKumarPorwal,
    cardBgColor: "transparent",
  },
];

export const facultyofMEOverviewData: customeOverViewType = {
  heading: "Faculty of Mechanical Engineering",
  content: `The faculty of Mechanical Engineering started since the inception of the university. It is one of the biggest faculties of the university in terms of infrastructure. Its main objective is to prepare students for a broad range of career choices in the field of mechanical engineering and to transform bright students into technically skilled and industry oriented engineers. The faculty offers three tier programs - B.Tech., M.Tech., and Ph.D. It offers specialization in the area of thermal engineering, design engineering, production engineering and industrial engineering. The Mechanical Engineering Faculty has fully equipped labs and a semester-by-semester curriculum that is reinforced by hands-on labs covering all of the foundational theory areas. 

The syllabus is created with the needs of the industry in mind as well as practical and competitive considerations. For P.G. students, research-focused programs are provided, and online journals are accessible. The assessment procedure is transparent and constantly observed, with updates to all academic-related actions made on the ERP system. Additionally, the department actively offers industry-driven programs and collaborates on a national and international level with a variety of organizations. By implementing cutting-edge teaching and learning strategies, encouraging faculty and students to publish high-caliber research, and assisting them in developing working models and prototypes based on the technical skills they have acquired throughout the course, FoME is constantly working to improve the teaching-learning process and environment.`,
};

export const counterDataFoFacultyOfMechanicalEngineering: counterDataType[] = [
  { id: 1, value: "2012", suffix: "", label: "Established" },
  { id: 2, value: "20", suffix: "", label: "Faculty & Staff" },
  { id: 3, value: "287", suffix: "", label: "Students" },
];


export const counterDataForPlacedStudentsOFMechanicalEngineering: counterDataType[] =  [
    {
      id: 1,
      icon: "",
      value: "200",
      suffix: "",
      label: "Guest lectures",
    },
    {
      id: 2,
      icon: "",
      value: "100",
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


export const facultyOfMechanicalEngineeringVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    img: misionImg,
    heading: "Mission",
    points: [
      "To educate individuals to become creative intuitive, industrious in both national and international arenas, instilled with global knowledge and abilities, and able to be leaders and pioneers in their field.",
      "To strive constantly to improve pedagogical methods employed in delivering the academic programs.",
      "To perform research and development activities that will contribute to science and technology and to respond effectively to the changing needs of the industry and the world.",
      "To provide beneficial service to the local, state, national and international communities and cultivate the spirit of entrepreneurship.",
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: visionImg,
    heading: "Vision",
    points: ["To be a center of excellence in the field of Mechanical Engineering where the best of teaching, learning, research and innovations converge."],
  },
];

export const facultyOfMeProfileData: InstituteProfile[] = [
  {
    id: 1,
    title: "Department Head",
    name: "Prof. (Dr.) Rajesh Kumar Porwal",
    position: "Dean, FoME, SRMU, Lucknow–Deva Road",
    image: rajeshPorwal,

    summary: "",

    useBullets: false,

    details: [
      "**Qualification:** M.E., Ph.D. (Mechanical Engineering)",
      "**Experience:** 23+ years",
      "**Specialization/ Area of Research:** Manufacturing Technology, Industrial Engineering, Renewable Energy and Optimization",
      "**Email ID:** dean.me@srmu.ac.in",
      "**ORCID ID:** https://orcid.org/0000-0003-2451-2812",
      "**Contact No.: +91-9873013273**",
    ],

    modalContent: `
Prof. (Dr.) R.K. Porwal, Dean Faculty of Mechanical Engineering at Shri Ramswaroop Memorial University Lucknow having more than 23 years of teaching and Industry experience, is an eminent Academician and Researcher. He completed his Bachelor of Engineering from NIT, Surat (formerly SV Regional College of Engineering and Technology, Surat), in 1998, Master of Engineering from Birla Institute of Technology, Mesra, Ranchi in 2003 and got his Ph.D. degree from Motilal Nehru National Institute of Technology, Allahabad in 2014.

Dr. Porwal got number of awards and honors in his credit, he was awarded The Production Engineering Division Prize for the Year 2014 by the Institution of Engineers India, Kolkata. He was also awarded the 2nd Best Paper Award by Journal of Advances in Management Research for the Year 2005 by Emrald (UK).

Dr. Porwal has more than 35 Research papers of repute National and International journals (SCI and Scopus indexed), 8 review /book chapters are in his credit. He has guided 02 Ph.D. and 3 Ph.D’s are running under his supervision. 08 M.Tech. students have completed dissertation under his supervision. He has given various Talks on different platforms related to Engineering Education, Role of Engineers in society and future demand of Engineers. He emphasizes on skill development in Engineering Education and he is in favour of industry oriented and outcome based curriculum. He is an active member of various societies like Institution of Engineering, India, Indian Society of Technical Education (ISTE) and Indian Institution of Production Engineering to name a few.

Dr. Porwal has rich experience in Industry and Academia both. He started his career with one of the reputed industries, Hitachi Home and Life Solution (I) Ltd, Ahmedabad. He was associated with Indian Institute of Technology Kanpur. He worked with various Engineering colleges of utmost repute like, Krishna Group of Institutions and BBD National Institute of Technology & Management etc. He has served on various positions like Director, Dean and HOD.
`,
  },
];

export const industryHonorsFeeDataOfME: FeeTableData = {
  columns: ["COURSES", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "B.Tech. in ME (EV Engineering) with L&T",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,46,375/-",
      eligibilityContent: `
            <h2 class='font-bold text-lg  flex justify-center  mb-3'>B.Tech. in ME (EV Engineering) with L&T</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Computer Science/Technical Vocational Subject with minimum aggregate marks of 45%.</p>
        `,
    },
    {
      course: "B.Tech. in ME (EV Engineering) (Lateral Entry) with L&T",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,51,375/-",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in ME (EV Engineering) (Lateral Entry) with L&T</h2>
            <p>Candidate must have passed 3 or 4 year Diploma in technical stream from institutions recognized by AICTE or a State Board of Technical Education or B.Sc. degree in Biology/ Microbiology/ Botony/ Zoology/ Chemistry/ Physics/ Maths/ Physiology/ Biotechnology/ Biochemistry/ Agriculture with minimum aggregate marks of 45% or 5.0 CGPA for GEN/OBC and 40% marks or 4.5 CGPA for SC/ST Category.</p>
        `,
    },
  ],
};

export const integratedFeeDataOfME: FeeTableData = {
  columns: ["COURSES", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "B.Tech. in ME + M.B.A.",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,32,000/-",
      eligibilityContent: `
            <h2 class='font-bold flex justify-center  text-lg mb-3'>B.Tech. in ME + M.B.A.</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as compulsory subjectsalongwith one of the Chemistry/Computer Science/Technical Vocational Subject. Candidate must obtained minimum 45% marks or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category in the above subjects taken together.</p>
        `,
    },
    {
      course: "B.Tech. + M.Tech. in Mechanical Engineering",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,32,000/-",
      eligibilityContent: `
            <h2 class='font-bold  flex justify-center  text-lg mb-3'>B.Tech. + M.Tech. in Mechanical Engineering</h2>
            <p>Candidate must have passed 3 or 4 year Diploma in technical stream from institutions recognized by AICTE or a State Board of Technical Education or B.Sc. degree in Biology/ Microbiology/ Botony/ Zoology/ Chemistry/ Physics/ Maths/ Physiology/ Biotechnology/ Biochemistry/ Agriculture with minimum aggregate marks of 45% or 5.0 CGPA for GEN/OBC and 40% marks or 4.5 CGPA for SC/ST Category.</p>
        `,
    },
  ],
};

export const postGraduateFeeDataOfME: FeeTableData = {
  columns: ["COURSES", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "M.Tech. in Production & Industrial Engineering",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 1,07,000/-",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>M.Tech. in Production & Industrial Engineering</h2>
            <p>Candidate must have passed B. Tech from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category. Candidate will be offered admission in M. Tech. only in that stream of Engineering in which he has obtained B. Tech.</p>
        `,
    },
    {
      course: "M.Tech. in Production & Industrial Engineering (Part Time)",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 69,000/-",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>M.Tech. in Production & Industrial Engineering (Part Time)</h2>
            <p>Candidate must have passed B. Tech from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category. Candidate will be offered admission in M. Tech. only in that stream of Engineering in which he has obtained B. Tech.</p>
            <p>In addition to the above mentioned basic M. Tech (Regular) eligibility, candidates must have at least 2 years Teaching/Industrial/Research/Professional Work Experience for 3 years M. Tech (Part Time) in CE, ME, CS, EC & EE.</p>
        `,
    },
  ],
};

export const underGraduateFeeDataOfME: FeeTableData = {
  columns: ["COURSES", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "B.Tech. in Mechanical Engineering",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,32,000/-",
      eligibilityContent:
        "\n            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in Mechanical Engineering</h2>\n            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Computer Science/Technical Vocational Subject with minimum aggregate marks of 45%.</p>\n            <section>&nbsp;</section>\n        ",
    },
    {
      course: "B.Tech. in Mechanical Engineering (Lateral Entry)",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,37,000/-",
      eligibilityContent:
        "\n            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in Mechanical Engineering (Lateral Entry)</h2>\n            <p>Candidate must have passed 3 or 4 year Diploma in technical stream from institutions recognized by AICTE or a State Board of Technical Education or B.Sc. degree in Biology/ Microbiology/ Botony/ Zoology/ Chemistry/ Physics/ Maths/ Physiology/ Biotechnology/ Biochemistry/ Agriculture with minimum aggregate marks of 45% or 5.0 CGPA for GEN/OBC and 40% marks or 4.5 CGPA for SC/ST Category.</p>\n            <section>&nbsp;</section>\n        ",
    },
    {
      course: "B.Tech. in ME + M.B.A.",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,32,000/-",
      eligibilityContent:
        "\n            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in ME + M.B.A.</h2>\n            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as compulsory subjectsalongwith one of the Chemistry/Computer Science/Technical Vocational Subject. Candidate must obtained minimum 45% marks or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category in the above subjects taken together.</p>\n        ",
    },
    {
      course: "B.Tech. + M.Tech. in Mechanical Engineering",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,32,000/-",
      eligibilityContent:
        "\n            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. + M.Tech. in Mechanical Engineering</h2>\n            <p>Candidate must have passed 3 or 4 year Diploma in technical stream from institutions recognized by AICTE or a State Board of Technical Education or B.Sc. degree in Biology/ Microbiology/ Botony/ Zoology/ Chemistry/ Physics/ Maths/ Physiology/ Biotechnology/ Biochemistry/ Agriculture with minimum aggregate marks of 45% or 5.0 CGPA for GEN/OBC and 40% marks or 4.5 CGPA for SC/ST Category.</p>\n            <section>&nbsp;</section>\n        ",
    },
    {
      course: "B.Tech. in ME (EV Engineering) with L&T",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,46,375/-",
      eligibilityContent:
        "\n            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in ME (EV Engineering) with L&T</h2>\n            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Computer Science/Technical Vocational Subject with minimum aggregate marks of 45%.</p>\n            <section>&nbsp;</section>\n        ",
    },
    {
      course: "B.Tech. in ME (EV Engineering) (Lateral Entry) with L&T",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,51,375/-",
      eligibilityContent:
        "\n            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Tech. in ME (EV Engineering) (Lateral Entry) with L&T</h2>\n            <p>Candidate must have passed 3 or 4 year Diploma in technical stream from institutions recognized by AICTE or a State Board of Technical Education or B.Sc. degree in Biology/ Microbiology/ Botony/ Zoology/ Chemistry/ Physics/ Maths/ Physiology/ Biotechnology/ Biochemistry/ Agriculture with minimum aggregate marks of 45% or 5.0 CGPA for GEN/OBC and 40% marks or 4.5 CGPA for SC/ST Category.</p>\n            <section>&nbsp;</section>\n        ",
    },
  ],
};



export const mechanicalDepartmentHighlightsData: departmentHighlightscardType[] = [
  {
    image: stateoftheart,
    title: "State-of-the-art machinery and equipment",
    description:
      "The Faculty of Mechanical Engineering (FoME) is well equipped with fully functioned equipments with most modern infrastructure to accomplish the present day needs of the industries through hands-on training.",
  },
  {
    image: industryintegrated,
    title: "Offering industry integrated programs",
    description:
      "Keeping the culture of rich academia-industry interface, university is now offering specialized courses in field of mechanical engineering in association with different industry partners.",
  },
  {
    image: menteesystem,
    title: "Mentor-mentee system for personalized approach",
    description: "The faculty member as Mentor pays individual attention to guide, mentor and counsel each student Mentee who come with their personal and professional problems.",
  },
  {
    image: handsonlearning,
    title: "Emphasizing & practising hand-on learning",
    description: "FoME programs are designed to develop experiential knowledge and conceptual understanding to topics that are specifically related to futuristic technologies.",
  },
  {
    image: guestsessions,
    title: "Guest sessions by leading industry experts",
    description:
      "To give a guest lecture on the latest technological advancements, career possibilities, industry demands and trends, etc., the best academics and industry professionals are invited.",
  },
  {
    image: entrepreneurialmindsets,
    title: "Nurturing entrepreneurial mindsets",
    description:
      'The goal is to develop both the "entrepreneurial mindset" and the know-how needed to launch a business. It is emphasized that students should become "Employers of Tomorrow" in addition to professional entrepreneurs.',
  },
  {
    image: interdisciplinaryresearch,
    title: "Developing scope for interdisciplinary research",
    description:
      "The faculty members encourage students to apply their freshly acquired expertise to multidisciplinary research projects that result in the development of cutting-edge technologies through problem- and research-based learning.",
  },
];

export const mechanicalDepartmentEventsData: EventItem[] = [
  {
    id: 1,
    title: "Industrial Visit",
    topic: "Agro Farm Machinery",
    venue: "Gobind Industries, Barabanki",
    date: "05th April, 2025",
    image: "https://testweb.srmu.ac.in/storage/events/wqfqf-10062510274523.png",
    cardBgColor: "#ffffff",
  },
  {
    id: 2,
    title: "Guest Lecture",
    topic: "Hybrid Vehicles",
    speaker: "Er. Nikhil Chaudhary",
    date: "24th March, 2025",
    image: "https://testweb.srmu.ac.in/storage/events/wsfwf-10062510290948.png",
    cardBgColor: "#ffffff",
  },
  {
    id: 3,
    title: "Workshop",
    topic: "Heating, Ventilation and Air Conditioning",
    date: "05th February, 2025",
    image: "https://testweb.srmu.ac.in/storage/events/wfwf-10062510305058.png",
    cardBgColor: "#ffffff",
  },
  {
    id: 4,
    title: "Workshop",
    topic: "3D Modelling in Mechanical Engineering",
    date: "24th September, 2024",
    image: "https://testweb.srmu.ac.in/storage/events/wfwf-10062510314220.png",
    cardBgColor: "#ffffff",
  },
  {
    id: 5,
    title: "Industrial Visit",
    topic: "Central AC Plant",
    venue: "Lulu Mall, Lucknow",
    date: "23rd May, 2023",
    image: "https://testweb.srmu.ac.in/storage/events/visit2-09052411353246.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 6,
    title: "Guest Lecture",
    topic: "Indian Space Programme: Past Present and Future",
    speaker: "Er. Amit Pandey",
    date: "24th March, 2023",
    image: "https://testweb.srmu.ac.in/storage/events/guest6-09052411371380.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 7,
    title: "Guest Lecture",
    topic: "An introduction to CFD: What, Why and How?",
    speaker: "Er. Rangesh Pandey",
    date: "06th September, 2022",
    image: "https://testweb.srmu.ac.in/storage/events/guest-10022412021576.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 8,
    title: "Guest Lecture",
    topic: "Additive Manufacturing",
    speaker: "Dr. Sanjay Mishra",
    date: "29th September, 2023",
    image: "https://testweb.srmu.ac.in/storage/events/guest1-09052411370190.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 9,
    title: "Workshop",
    topic: "Ansys: Static Structural and Thermal Analysis on Mechanical Components",
    date: "21st November, 2022",
    image: "https://testweb.srmu.ac.in/storage/events/workship2-09052411355956.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 10,
    title: "Workshop",
    topic: "3D Modeling of Mechanical Component using CATIA Software",
    date: "19th October, 2023",
    image: "https://testweb.srmu.ac.in/storage/events/workshop4-09052411361051.jpg",
    cardBgColor: "#ffffff",
  },
  {
    id: 11,
    title: "Seminar",
    topic: "Opportunity to Study Abroad",
    speaker: "Ms. Akriti Chauhan",
    date: "26th September, 2022",
    image: "https://testweb.srmu.ac.in/storage/events/guest8-09052411364584.jpg",
    cardBgColor: "#ffffff",
  },
];