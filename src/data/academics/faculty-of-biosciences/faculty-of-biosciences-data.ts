import { customeOverViewType } from "../../../types/home-data-type";

import visionImg from "../../../assets/images/academics/institutes/dept-vision.webp";
import misionImg from "../../../assets/images/academics/institutes/dept-mission.webp";
import drTabishQidwai from "../../../assets/images/academics/institutes/dr.-tabish-kidwai-.webp";
import { departmentHighlightscardType, FeeTableData } from "../faculty-of-civil-engineering/faculty-of-civil-engineering-data";
import { FacultyItem } from "../../../utils/custom/CustomFacultyListCard";
import defaultSrmu from "../../../assets/images/academics/institutes/default-img.webp";
import aparna from "../../../assets/images/academics/institutes/aparna.webp";
import sapna from "../../../assets/images/academics/institutes/sapna.webp";
import neeraj from "../../../assets/images/academics/institutes/neeraj.webp";
import imran from "../../../assets/images/academics/institutes/imran.webp";
import sukanya from "../../../assets/images/academics/institutes/sukanya.webp";
import raviKumarDeshwal from "../../../assets/images/academics/institutes/raviKumarDeshwal.webp";
import diverseprogram from "../../../assets/images/academics/institutes/diverseprogram.webp";
import statelab from "../../../assets/images/academics/institutes/statelab.webp";
import experiencedfaculty from "../../../assets/images/academics/institutes/experiencedfaculty.webp";
import industrycollaboration from "../../../assets/images/academics/institutes/industrycollaboration.webp";
import researchdevelopment from "../../../assets/images/academics/institutes/researchdevelopment.webp";
import studentsupport from "../../../assets/images/academics/institutes/studentsupport.webp";
import integrationNep from "../../../assets/images/academics/departments/integration-07052412393563.webp";
import { EventItem } from "../../../utils/custom/CustomEventListCard";
import hpv from "../../../assets/images/academics/institutes/hpv.webp";
import csirCimap from "../../../assets/images/academics/institutes/csir-cimap.webp";
import foodSafety from "../../../assets/images/academics/institutes/foodsafety.webp";
import medicoLegal from "../../../assets/images/academics/institutes/medicoLegal.webp";
import ibst from "../../../assets/images/academics/institutes/ibst.webp";
import csiriitr from "../../../assets/images/academics/institutes/csir-iitr.webp";
import nukaad from "../../../assets/images/academics/institutes/nukaadNatak.pnng.webp";
import amulDairy from "../../../assets/images/academics/institutes/amulDiary.webp";
import industrialCsir from "../../../assets/images/academics/institutes/industrial-csir.webp";
import { counterDataType } from "../../about/leadership-and-governance/leadership-and-governance-data";

export const facultyofBioscienceOverviewData: customeOverViewType = {
  heading: "Faculty of Biosciences",
  content: `The Faculty of Biosciences (FoBS) at Shri Ramswaroop Memorial University (SRMU) was established in 2015 with B.Sc. (Hons), M.Sc. and M.Phil. programmes in Biotechnology. In a very short span of time FoBS achieved many prestigious milestones. It received extramural research grant, published, and continues to do so, in peer-reviewed publications in high-impact journals, placement of students in reputed organizations, organized value-added courses, conferences, seminars, workshops and guest lectures by eminent scientists and academicians, etc. The labs are equipped with state of the art instruments, and can be compared with any research lab globally.

The Department consists of highly experienced and dedicated faculty members and enthusiastic research fellows. The research expertise includes the field of molecular and cell biology, virology, parasitology, microbiology, neurobiology, plant biology, protein and stress biology, cancer biology and bioinformatics. The department represents a broad range of research interests with the special emphasis on basic and translational research. The students, staff, and faculty of the department form a very cohesive and interactive group. The department regularly invites renowned scientists from different research streams for seminars and scientific discussions. Our industrial collaborations bridges the gap between the conventional PhD and shaping professionals for industry, leading them to the opportunities for good jobs in academia, industry and health-care. Thus, the academic and research activities, manifold dimensions for interaction among students, research fellows, faculty members to shape an outstanding cooperative research and training experience as well.`,
};

export const counterDataFoFacultyOfBiosciencess: counterDataType[] = [
  { id: 1, value: "2015", suffix: "", label: "Established" },
  { id: 2, value: "20", suffix: "", label: "Faculty & Staff" },
  { id: 3, value: "820", suffix: "", label: "Students" },
];

export const counterDataForPlacedStudentsOFBioscience: counterDataType[] = [
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

export const facultyOfBiosciencesVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    img: misionImg,
    heading: "Mission",
    points: [
      "Offering broad and balanced academic programs with high quality teaching at both undergraduate and postgraduate levels.",
      "Promoting research in relevant disciplines that tackle the current global challenges.",
      "Creating awareness about the potential of biotechnology and its socio-ethical implications.",
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: visionImg,
    heading: "Vision",
    points: [
      "To foster an environment where biotechnology teaching and research can be utilized to answer fundamental biological questions, and address the issues pertaining to health care, agriculture, food safety and security, medicine and environmental sustainability",
    ],
  },
];

export const facultyOfBioscienceProfileData = [
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

export const postGraduateFeeDataOfBioscience: FeeTableData = {
  columns: ["COURSES", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "M.Sc. in Biotechnology",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 84,000/-",
      link: "program/m-sc-biotechnology",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>M.Sc. in Biotechnology</h2>
            <p>Candidate must have passed Graduation in Life Science (Zoology, Botany, Environmental Science, Biochemistry) or equivalent from any recognised University or AICTE recognised Institute/College with minimum aggregate marks of 45% or CGPA of 5.0 for GEN/OBC and 40% marks or CGPA of 4.5 for SC/ST Category.</p>
        `,
    },
  ],
};

export const underGraduateFeeDataOfBioscience: FeeTableData = {
  columns: ["COURSES", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    // {
    //   course: "B.Sc.(Hons.) in Biotechnology",
    //   duration: "3 Years",
    //   eligibility: "Click",
    //   fee: "Rs. 62,000/-",
    //   eligibilityContent: `
    //         <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Sc.(Hons.) in Biotechnology</h2>
    //         <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics/ Biology as compulsory subject alongwith Chemistry/Biotechnology/Computer Science with minimum aggregate marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category.</p>
    //     `,
    // },
    {
      course: "B.Sc.(Hons.) in Food Technology",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 62,000/-",
      link: "program/b-sc-hons-food-technology",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Sc.(Hons.) in Food Technology</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Board with Physics and Mathematics/Biology as compulsory subject along with Chemistry/Biotechnology/Computer Science with minimum aggregate marks of 45% or equivalent grade for GEN /OBC and 40% marks or equivalent grade for SC/ ST Category.</p>
        `,
    },
    {
      course: "B.Sc.(Hons.) in Microbiology",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 57,000/-",
      link: "program/b-sc-hons-microbiology",
      eligibilityContent: `
            <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Sc.(Hons.) in Microbiology</h2>
            <p>Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics/ Biology as compulsory subject alongwith Chemistry/Biotechnology/Computer Science with minimum aggregate marks of 45% or equivalent grade for GEN/OBC and 40% marks or equivalent grade for SC/ST Category.</p>
        `,
    },
    // {
    //   course: "B.Sc.(Hons.) Nutrition & Dietetics",
    //   duration: "3 Years",
    //   eligibility: "Click",
    //   fee: "Rs. 60,000/-",
    //   eligibilityContent: `
    //         <h2 class='font-bold text-lg mb-3  flex justify-center '>B.Sc. (Hons.) Nutrition & Dietetics</h2>
    //         <p>Candidate must have passed 10+2 examination/ equivalent with Biology or Life Sciences as one of the subjects with minimum aggregate marks of 50% or equivalent grade for GEN/OBC and 45% marks or equivalent grade for SC/ST Category.</p>
    //     `,
    // },
  ],
};

export const facultyDetailsOfBioScienceDepartment: FacultyItem[] = [
  {
    id: 1,
    name: "Dr. Neeraj Gupta",
    designation: "Associate Professor",
    image: defaultSrmu,
    cardBgColor: "transparent",
  },
  {
    id: 2,
    name: "Dr. Ankita Srivastava",
    designation: "Assistant Professor",
    image: defaultSrmu,
    cardBgColor: "transparent",
  },
  {
    id: 3,
    name: "Dr. Ravi Kumar Deshwal",
    designation: "Assistant Professor",
    image: raviKumarDeshwal,
    cardBgColor: "transparent",
  },
  {
    id: 4,
    name: "Mr. Naushad Ahmad",
    designation: "Assistant Professor",
    image: defaultSrmu,
    cardBgColor: "transparent",
  },
  {
    id: 5,
    name: "Dr. Bhawna Srivastava",
    designation: "Assistant Professor",
    image: defaultSrmu,
    cardBgColor: "transparent",
  },
  {
    id: 6,
    name: "Ms. Aparna",
    designation: "Assistant Professor",
    image: aparna,
    cardBgColor: "transparent",
  },
  {
    id: 7,
    name: "Dr. Sankalp Mishra",
    designation: "Assistant Professor",
    image: defaultSrmu,
    cardBgColor: "transparent",
  },
  {
    id: 8,
    name: "Dr. Sapna Sharma",
    designation: "Assistant Professor",
    image: sapna,
    cardBgColor: "transparent",
  },
  {
    id: 9,
    name: "Dr. Neeraj Tiwari",
    designation: "Assistant Professor",
    image: neeraj,
    cardBgColor: "transparent",
  },
  {
    id: 10,
    name: "Dr. Mohd Imran",
    designation: "Assistant Professor",
    image: imran,
    cardBgColor: "transparent",
  },
  {
    id: 11,
    name: "Dr. Nishu Mittal",
    designation: "Assistant Professor",
    image: defaultSrmu,
    cardBgColor: "transparent",
  },
  {
    id: 12,
    name: "Dr. Sonal Prasad",
    designation: "Assistant Professor",
    image: defaultSrmu,
    cardBgColor: "transparent",
  },
  {
    id: 13,
    name: "Dr. Garima Gupta",
    designation: "Assistant Professor",
    image: defaultSrmu,
    cardBgColor: "transparent",
  },
  {
    id: 14,
    name: "Dr. Sukanya Tripathy",
    designation: "Assistant Professor",
    image: sukanya,
    cardBgColor: "transparent",
  },
];

export const bioscienceHighlightsData: departmentHighlightscardType[] = [
  {
    image: studentsupport,
    title: "100% Faculty hold a Ph.D. degree",
    description: "The department has young, motivated and highly qualified faculty members committed towards student development.",
  },
  {
    image: integrationNep,
    title: "Modules designed as per NEP-2020",
    description: "NEP2020 was implemented in all undergraduate programs, with a multiple exit and entry system and outcome-based education that develops students' skills.",
  },
  {
    image: statelab,
    title: "Research laboratories furnished with modern equipment",
    description: "Students are motivated and assisted in developing practical skills related to managing, carrying out, evaluating, and debugging research protocols.",
  },
  {
    image: researchdevelopment,
    title: "Exemplary research towards consistent innovation",
    description:
      "To improve their technical abilities, students are encouraged to work on research projects in reputed companies and institutions locally as well as internationally.",
  },
  {
    image: industrycollaboration,
    title: "Creating synergies with industry-academia interface",
    description: "The department has joined hands with institutes of repute like CSIR-IITR, CISH & many more to promote teaching and research in the area of biosciences.",
  },
  {
    image: diverseprogram,
    title: "Creating a holistic practical learning environment",
    description:
      "Events including conferences, research talks, field trips, internships, and industrial visits are planned to offer an array of opportunities for professional and personal growth.",
  },
  {
    image: experiencedfaculty,
    title: "Mentoring of students for GATE/CSIR-UGC-NET-JRF",
    description: "The department has a well developed system of mentor-mentee through which remedial classes are offered for students preparing for government competitive exams.",
  },
];

export const bioscienceDepartmentEventsData: EventItem[] = [
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
    venue: "Amul Bahas Dairy, Chak Kajehra, Lucknow",
    date: "07th November, 2023",
    image: amulDairy,
    cardBgColor: "#ffffff",
  },
  {
    id: 9,
    title: "Industrial Visit",
    venue: "CSIR- Indian Industrial Toxicology Research, Lucknow",
    date: "21st November, 2023",
    image: industrialCsir,
    cardBgColor: "#ffffff",
  },
];
