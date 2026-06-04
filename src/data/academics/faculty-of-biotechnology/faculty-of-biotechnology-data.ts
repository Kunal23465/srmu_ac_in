import { customeOverViewType } from "../../../types/home-data-type";
import { EventItem } from "../../../utils/custom/CustomEventListCard";
import hpv from "../../../assets/images/academics/institutes/hpv.webp";
import ibst from "../../../assets/images/academics/institutes/ibst.webp";
import { FacultyItem } from "../../../utils/custom/CustomFacultyListCard";
import statelab from "../../../assets/images/academics/institutes/statelab.webp";
import csiriitr from "../../../assets/images/academics/institutes/csir-iitr.webp";
import technoCup from "../../../assets/images/academics/institutes/technoCup.webp";
import csirCimap from "../../../assets/images/academics/institutes/csir-cimap.webp";
import foodSafety from "../../../assets/images/academics/institutes/foodsafety.webp";
import biomedical from "../../../assets/images/academics/institutes/biomedical.webp";
import visionImg from "../../../assets/images/academics/institutes/dept-vision.webp";
import misionImg from "../../../assets/images/academics/institutes/dept-mission.webp";
import medicoLegal from "../../../assets/images/academics/institutes/medicoLegal.webp";
import nukaad from "../../../assets/images/academics/institutes/nukaadNatak.pnng.webp";
import defaultSrmu from "../../../assets/images/academics/institutes/default-img.webp";
import mediaclplant from "../../../assets/images/academics/institutes/mediaclplant.webp";
import studentsupport from "../../../assets/images/academics/institutes/studentsupport.webp";
import anchilicVigyan from "../../../assets/images/academics/institutes/anchilicVigyan.webp";
import antiinfectives from "../../../assets/images/academics/institutes/antiinfectives.webp";
import nanotechnology from "../../../assets/images/academics/institutes/nanotechnology.webp";
import drTabishQidwai from "../../../assets/images/academics/institutes/biotechnolgy/Tabish-Qidwai.webp";
import experiencedfaculty from "../../../assets/images/academics/institutes/experiencedfaculty.webp";
import drugDiscovery from "../../../assets/images/academics/institutes/workshop-drug-discovery.webp";
import researchdevelopment from "../../../assets/images/academics/institutes/researchdevelopment.webp";
import integrationNep from "../../../assets/images/academics/departments/integration-07052412393563.webp";
import industrycollaboration from "../../../assets/images/academics/institutes/industrycollaboration.webp";
import Ayushi from "../../../assets/images/academics/institutes/biotechnolgy/Ayushi-Verma.webp";
import Devendra from "../../../assets/images/academics/institutes/biotechnolgy/Devendra-Singh.webp";
import Diksha from "../../../assets/images/academics/institutes/biotechnolgy/Diksha-Singh.webp";
import Divya from "../../../assets/images/academics/institutes/biotechnolgy/Divya-Srivastava.webp";
import Himanshu from "../../../assets/images/academics/institutes/biotechnolgy/Himanshu-Yadav.webp";
import Kunal from "../../../assets/images/academics/institutes/biotechnolgy/Kunal-Singh.webp";
import Nabeel from "../../../assets/images/academics/institutes/biotechnolgy/Nabeel-Ahmad.webp";
import Rahul from "../../../assets/images/academics/institutes/biotechnolgy/Rahul-Yadav.webp";
import Ritika from "../../../assets/images/academics/institutes/biotechnolgy/Ritika-Saxena.webp";
import Shalini from "../../../assets/images/academics/institutes/biotechnolgy/Shalini-Maurya.webp";
import Sunil from "../../../assets/images/academics/institutes/biotechnolgy/Sunil-Kumar-Verma.webp";
import Tabish from "../../../assets/images/academics/institutes/biotechnolgy/Tabish-Qidwai.webp";

import { departmentHighlightscardType, FeeTableData } from "../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { counterDataType } from "../../about/leadership-and-governance/leadership-and-governance-data";

export const facultyofBiotechnologyeOverviewData: customeOverViewType = {
  heading: "Faculty of Biotechnology",
  content: `Initiated in the year 2012, the Institute of Biosciences and Technology started off with the vision to impart remarkable knowledge of biotechnology, and its applications to create a vast pool of scientific personnel with expertise in the field of biotechnology. Since its inception, the Faculty of Biotechnology (FoBT) has endeavoured to educate and train its students in the field of biological engineering. The department is successfully running the undergraduate (B.Tech.), post graduate (M.Tech.) and doctoral programmes. Endless conscious efforts have been made to cope up and amend the syllabus of all the programs to integrate relevant laboratory programs and significant research projects of variable duration.

The Choice Based Credit System and UGC Curriculum framework recommendations are carefully implemented into the UG and PG curricula. The Faculty of Biotechnology is dedicated to using cutting-edge teaching methods to help students develop their critical thinking abilities and improve their aptitude for learning. The department has set up luxurious laboratories with enough equipment and space for resources. It has a robust team of very skilled faculty members with a stellar background in both academia and research, having received their Ph.D. and post-doctoral degrees from esteemed national universities. By utilizing the greatest teaching, research, and innovation approaches, FoBT always work to provide a dynamic and stimulating learning environment.`,
};

export const counterDataFoFacultyOfBiotechnology: counterDataType[] = [
  { id: 1, value: "2012", suffix: "", label: "Established" },
  { id: 2, value: "11", suffix: "", label: "Faculty & Staff" },
  { id: 3, value: "700", suffix: "", label: "Students" },
];

export const counterDataForPlacedStudentsOFBiotechnology: counterDataType[] = [
  {
    id: 1,
    icon: "",
    value: "125",
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
    value: "15",
    suffix: "",
    label: "Conference & Seminars",
  },
];

export const facultyOfBiostechnologyVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    img: misionImg,
    heading: "Mission",
    points: [
      "To raise the students with academic and professional success through efficacious technology, creativity, cultural awareness in a coherent environment.",
      "To be able to resolve emerging human problems related to healthcare and energy conservation by recent technological advancements to serve mankind.",
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: visionImg,
    heading: "Vision",
    points: [
      " The Department of Biotechnology aims to provide an ambience with cutting-edge teaching methodologies based on research led learning, which enables the students to emerge as technocrats for contributing in building remarkable community standards.  ",
    ],
  },
];

export const facultyOfBiostechnologyProfileData = [
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

export const biotechnologyIndustryIntegratedFeeTable: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "B.Tech. in Biotechnology + M.B.A.",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,37,000/-",
      link: "program/b-tech-biotechnology-mba",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in Biotechnology + M.B.A.</h2>
        <p>
      Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics/Biology as compulsory subject alongwith Chemistry/ Biotechnology/ Computer Science/Technical Vocational Subject. Candidate must obtained minimum marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category in the above subjects taken together.
        </p>
      `,
    },
    {
      course: "B.Tech. + M.Tech. in Biotechnology",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,37,000/-",
      link: "program/b-tech-m-tech-biotechnology",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. + M.Tech. in Biotechnology</h2>
        <p>
Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics/Biology as compulsory subject alongwith Chemistry/ Biotechnology/ Computer Science/Technical Vocational Subject. Candidate must obtained minimum marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category in the above subjects taken together.
        </p>
      `,
    },

    // {
    //   course: "B.Tech. + M.Tech. in Biotechnology",
    //   duration: "5 Years",
    //   eligibility: "Click",
    //   fee: "Rs. 1,32,000/-",
    //   eligibilityContent: `
    //     <h2 class='font-bold text-lg mb-3'>B.Tech. + M.Tech. in Biotechnology</h2>
    //     <p>
    //   Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics/Biology as compulsory subject alongwith Chemistry/ Biotechnology/ Computer Science/Technical Vocational Subject. Candidate must obtained minimum marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category in the above subjects taken together.
    //     </p>
    //   `,
    // },
  ],
};

export const biotechnologyIndustryPostgraduateFeeTable: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "M.Tech. in Biotechnology",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 1,07,000/-",
      link: "program/m-tech-biotechnology",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>M.Tech. in Biotechnology</h2>
        <p>
         Candidate must have passed B. Tech. in Biotechnology/ Bioinformatics/ Medical Biotechnology or equivalent from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category.
        </p>
        <p class="text-center my-1">OR</p>
        <p>Candidate must have passed M.Sc. in Biotech/ Plant Biotechnology/ Animal Biotechnology/ Physical Science/ Chemical Science/ Life Science or equivalent from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category.
        </p>
        <p class="text-center my-1">OR</p>
        <p>Candidate must have passed B. Pharma. or equivalent from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA for SC/ST Category.</p>


      `,
    },
  ],
};

export const biotechnologyIndustryUndergraduateFeeTable: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "B.Tech. in Biotechnology",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,37,000/-",
      link: "program/b-tech-biotechnology",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in Biotechnology</h2>
        <p>
        Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics/Biology as compulsory subject alongwith Chemistry/ Biotechnology/ Computer Science/Technical Vocational Subject. Candidate must obtained minimum marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category in the above subjects taken together.
        </p>
      `,
    },

    {
      course: "B.Tech. in Biotechnology (Lateral Entry)",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,37,000/-",
      link: "program/b-tech-biotechnology-lateral-entry",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in Biotechnology (Lateral Entry)</h2>
        <p>
         Candidate must have passed 3 or 4 year Diploma in technical stream from institutions recognized by AICTE or a State Board of Technical Education or B.Sc. degree in Biology/ Microbiology/ Botony/ Zoology/ Chemistry/ Physics/ Maths/ Physiology/ Biotechnology/ Biochemistry/ Agriculture with minimum aggregate marks of 45% or 5.0 CGPA for GEN/OBC and 40% marks or 4.5 CGPA for SC/ST Category.
        </p>
      `,
    },

    {
      course: "B.Tech. in Biotechnology + M.B.A.",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,37,000/-",
      link: "program/b-tech-biotechnology-mba",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in Biotechnology + M.B.A.</h2>
        <p>
         Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics/Biology as compulsory subject alongwith Chemistry/ Biotechnology/ Computer Science/Technical Vocational Subject. Candidate must obtained minimum marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category in the above subjects taken together.
        </p>
      `,
    },
    {
      course: "B.Tech. + M.Tech. in Biotechnology",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,37,000/-",
      link: "program/b-tech-m-tech-biotechnology",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. + M.Tech. in Biotechnology</h2>
        <p>
Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics/Biology as compulsory subject alongwith Chemistry/ Biotechnology/ Computer Science/Technical Vocational Subject. Candidate must obtained minimum marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category in the above subjects taken together.
        </p>
      `,
    },

    // {
    //   course: "B.Tech. + M.Tech. in Biotechnology",
    //   duration: "5 Years",
    //   eligibility: "Click",
    //   fee: "Rs. 1,32,000/-",
    //   eligibilityContent: `
    //     <h2 class='font-bold text-lg mb-3'>B.Tech. + M.Tech. in Biotechnology</h2>
    //     <p>
    //       Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics/Biology as compulsory subject alongwith Chemistry/ Biotechnology/ Computer Science/Technical Vocational Subject. Candidate must obtained minimum marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category in the above subjects taken together.
    //     </p>
    //   `,
    // },
  ],
};

export const facultyDetailsOfBiotechnologyDepartment: FacultyItem[] = [
  {
    id: 3,
    name: "Dr. Pratibha Gupta",
    designation: "Assistant Professor",
    image: defaultSrmu,
    cardBgColor: "transparent",
  },

  {
    id: 6,
    name: "Dr. Renu Khare",
    designation: "Assistant Professor",
    image: defaultSrmu,
    cardBgColor: "transparent",
  },

  {
    id: 30,
    name: "Dr. Tabish Qidwai",
    designation: "Professor & Officiating Director (IBST)",
    image: drTabishQidwai,
    cardBgColor: "transparent",
  },
  {
    id: 31,
    name: "Dr. Devendra Singh",
    designation: "Assistant Professor",
    image: Devendra,
    cardBgColor: "transparent",
  },
  {
    id: 32,
    name: "Er. Sunil Kumar Verma",
    designation: "Assistant Professor",
    image: Sunil,
    cardBgColor: "transparent",
  },
  {
    id: 33,
    name: "Er. Ayushi Verma",
    designation: "Assistant Professor",
    image: Ayushi,
    cardBgColor: "transparent",
  },
  {
    id: 34,
    name: "Dr. Kunal Singh",
    designation: "Assistant Professor",
    image: Kunal,
    cardBgColor: "transparent",
  },
  {
    id: 35,
    name: "Er. Diksha Singh",
    designation: "Assistant Professor",
    image: Diksha,
    cardBgColor: "transparent",
  },
  {
    id: 36,
    name: "Dr. Divya Srivastava",
    designation: "Assistant Professor",
    image: Divya,
    cardBgColor: "transparent",
  },
  {
    id: 37,
    name: "Dr. Ritika Saxena",
    designation: "Assistant Professor",
    image: Ritika,
    cardBgColor: "transparent",
  },
  {
    id: 38,
    name: "Dr. Shalini Maurya",
    designation: "Assistant Professor",
    image: Shalini,
    cardBgColor: "transparent",
  },
  {
    id: 39,
    name: "Er. Himanshu Yadav",
    designation: "Assistant Professor",
    image: Himanshu,
    cardBgColor: "transparent",
  },
  {
    id: 40,
    name: "Dr Rahul Yadav",
    designation: "Assistant Professor",
    image: Rahul,
    cardBgColor: "transparent",
  },
  {
    id: 41,
    name: "Prof. (Dr.) Nabeel Ahmad",
    designation: "Professor",
    image: Nabeel,
    cardBgColor: "transparent",
  },
];

export const biotechnologyHighlightsData: departmentHighlightscardType[] = [
  {
    image: studentsupport,
    title: "All faculty members have a doctrate",
    description: "The department employs highly skilled, driven, and youthful faculty members who are dedicated to the growth of their students.",
  },
  {
    image: statelab,
    title: "State-of-the-art labs with modern equipment",
    description:
      "To provide students with the finest experiential learning opportunities, the department has specialized high-end labs, many of which are financed by the government and industry.",
  },
  {
    image: researchdevelopment,
    title: "Model research for continuous innovation",
    description:
      "Students are encouraged to engage on research projects at recognized local and international organizations and institutes in order to enhance their technical expertise.",
  },
  {
    image: integrationNep,
    title: "Implementing NEP2020 for increasing employability skillset",
    description: "With an outcome-based education that builds students' capabilities and a multiple exit and entrance system, NEP2020 was adopted in all undergraduate programs.",
  },

  {
    image: experiencedfaculty,
    title: "Student mentoring for the GATE/CSIR-UGC-NET-JRF",
    description: "Students preparing for government competitive examinations can take remedial sessions through the department's well-established mentor-mentee system.",
  },
  {
    image: technoCup,
    title: "Experiential acquaintance to enhance learning",
    description: "Actively planning and taking part in a wide range of academic, co-curricular, and extracurricular events, the faculty and students make up a vibrant community.",
  },
  {
    image: industrycollaboration,
    title: "Collaborations with Institutions of repute",
    description:
      "The department is working collaboratively with the top organizations to help students develop their critical thinking abilities and improve their aptitude for learning.",
  },
];

export const biotechnologyDepartmentEventsData: EventItem[] = [
  {
    id: 1,
    title: "International HPV Awareness Day",
    topic: "Laboratory Diagnosis of Cancer Casuing Microorganism and Their Prevention",
    speaker: "Dr. Suruchi Shukla, Associate Professor, KGMU",
    date: "04th March, 2025",
    image: hpv,
    cardBgColor: "#ffffff",
  },
  {
    id: 2,
    title: "Industrial Visit",
    venue: "CSIR-CIMAP",
    date: "26th March, 2025",
    image: csirCimap,
    cardBgColor: "#ffffff",
  },
  {
    id: 3,
    title: "Workshop",
    topic: "General Awareness on Food Safety of Daily Life Commodities",
    date: "14th November, 2024",
    image: foodSafety,
    cardBgColor: "#ffffff",
  },
  {
    id: 4,
    title: "Guest Lecture",
    speaker: "Dr. Ghyasuddin Khan, Additional Director, State Medicolegal Cell, Lucknow",
    date: "16th April, 2025",
    image: medicoLegal,
    cardBgColor: "#ffffff",
  },
  {
    id: 5,
    title: "National Science day",
    topic: "National Science Day was celebrated vibrantly with IBST and INSH collaboration",
    date: "28th Feb, 2024",
    image: ibst,
    cardBgColor: "#ffffff",
  },
  {
    id: 6,
    title: "Guest Lecture",
    speaker: "Dr. Vikas Srivastava, Principal Scientist, CSIR-IITR Lucknow",
    date: "02nd August, 2024",
    image: csiriitr,
    cardBgColor: "#ffffff",
  },
  {
    id: 7,
    title: "Nukkad Natak",
    event: "Participation of IBST students at Nukkad Natak, Barabanki (U.P. Govt.)",
    image: nukaad,
    cardBgColor: "#ffffff",
  },

  {
    id: 8,
    title: "Industrial Visit",
    topic: "Biomedical Research",
    venue: "SGPGI",
    date: "12th May, 2023",
    image: biomedical,
    cardBgColor: "#ffffff",
  },
  {
    id: 9,
    title: "Industrial Visit",
    venue: "Anchilic Vigyan Nagri, Lucknow",
    date: "25th August, 2023",
    image: anchilicVigyan,
    cardBgColor: "#ffffff",
  },
  {
    id: 10,
    title: "Guest Lecture",
    speaker: "Dr. Shri Krishna Tewari",
    topic: "Medicinal Plant based Agricultural Enterprise",
    date: "06th October, 2023",
    image: mediaclplant,
    cardBgColor: "#ffffff",
  },
  {
    id: 11,
    title: "Guest Lecture",
    speaker: "Dr. Yusuf Akhtar",
    topic: "Antiinfectives using High throughout Drug Discovery Pipelines",
    date: "12th October, 2023",
    image: antiinfectives,
    cardBgColor: "#ffffff",
  },
  {
    id: 12,
    title: "Workshop",
    topic: "Nanotechnology in Drug Discovery",
    date: "19th April, 2023",
    image: nanotechnology,
    cardBgColor: "#ffffff",
  },
  {
    id: 13,
    title: "Workshop",
    topic: "Antiinfectives using High throughout Drug Discovery Pipelines",
    date: "12th October, 2023",
    image: drugDiscovery,
    cardBgColor: "#ffffff",
  },
];
