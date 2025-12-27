import missionImg from "../../../../assets/images/academics/departments/dept-mission-icon1.png";
import vissionImg from "../../../../assets/images/academics/departments/dept-mission-icon2.png";

import depSlide1 from "../../../../assets/images/academics/departments/depSlide1.png";
import depSlide2 from "../../../../assets/images/academics/departments/depSlide2.png";
import depSlide3 from "../../../../assets/images/academics/departments/depSlide3.png";
import depSlide4 from "../../../../assets/images/academics/departments/depSlide4.png";
import depSlide5 from "../../../../assets/images/academics/departments/depSlide5.png";
import abhishek from "../../../../assets/images/academics/departments/abhishek-saxena-1.jpg"

// import professor from "../../../../assets/images/academics/departments/abhishek-saxena-1.jpg";
import { customeOverViewType } from "../../../../types/home-data-type";
import { counterDataType } from "../../../about/leadership-and-governance/leadership-and-governance-data";
import { FacultyItem } from "../../../../utils/custom/CustomFacultyListCard";
import { InstituteProfile } from "../../../../types/profile-data-type";
import { Student } from "../../../../utils/custom/CustomPlacedStudentTable";

export interface DepartmentVMType {
  id?: number;
  bgColor?: string; // hex, rgb, etc.
  img: string; // image URL or path
  heading?: string; // "Mission", "Vision", etc.
  description?: string;
  points?: string[]; // bullet points
}
export interface FeeTableRow {
  [key: string]: string | number | React.ReactNode;
  eligibilityContent?: string | React.ReactNode;
}

export interface FeeTableData {
  columns: string[];
  rows: FeeTableRow[];
  notes?: string[];
}

export interface departmentHighlightscardType {
  image: string;
  title: string;
  description: string;
}
export const civilFacultyOverviewData: customeOverViewType = {
  heading: "Faculty of Civil Engineering",
  content:
    "Academicians, scientists, researchers, consultants, and experts from a variety of civil engineering disciplines, such as environmental engineering, structural engineering, transportation engineering, geotechnical engineering, and water resource engineering, make up the Faculty of Civil Engineering. A research-driven environment and a student-centered approach are two of the principles that motivate the department to strive for innovation and continuous improvement. The regular holding of training sessions, seminars, workshops, site visits, and other value-added courses is important to the way the Faculty of Civil Engineering operates. The department provides courses in a variety of fields, including environmental engineering and structural engineering, at the undergraduate, graduate, and doctorate levels.The Faculty of Civil Engineering has well-equipped labs, well-structured semester wise curriculum supported by practical labs in all the core theory subjects. Syllabus is designed from practical and competitive point of view and to meet the demand of Industry. The achievement of students in co-curricular activities including cultural events, sports and technical events are noteworthy and acknowledgeable. The placement of students in various departments at national and international platforms with high percentage of students qualifying for GATE and other technical and non-technical exams forms a strong foundation of Faculty of Civil Engineering.",
};

export const counterDataForFacultyCivil: counterDataType[] = [
  { id: 1, value: "2012", suffix: "", label: "Established" },
  { id: 2, value: "19", suffix: "", label: "Faculty & Staff" },
  { id: 3, value: "353", suffix: "", label: "Students" },
];

export const CivildepartmentVMData = [
  {
    id: 1,
    bgColor: "#E5F3FC",
    img: missionImg,
    heading: "Mission",
    points: [
      "To provide a rigorous hands-on engineering education integrated in a student-centered environment equipped with life-long learning skills necessary for professional practice.",
      "To prepare our students to be technical, business and global leaders of tomorrow by inculcating team work and communication skills.",
      "To promote research, development and consultancy through constant interaction with industry and research organizations.",
      "To inculcate ethical values and professionalism.",
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    img: vissionImg,
    heading: "Vision",
    points: [
      "To produce highly competent Civil Engineers of international standards for catering to local, national and global needs.",
      "To provide consultancy, research and development in various fields of Civil Engineering to meet current and future challenges.",
    ],
  },
];

export const civildepartmentHighlights: departmentHighlightscardType[] = [
  {
    image: depSlide1,
    title: "Major Collaborations",
    description:
      "College of Arts and Sciences, Texas A&M University-San Antonio | National Institute of Hydrology (NIH) Roorkee | The Energy and Resources Institute (TERI), New Delhi | Ecosteps | WaterAid | CAD Desk",
  },
  {
    image: depSlide2,
    title: "Research Publication, Book Chapters, Conferences & Patents",
    description:
      "With a remarkable research record—300+ Research Publications in reputed journals, 50+ Book Chapters, 150+ Conference participations, and 14 Patented Innovations across Australia, Germany, and India.",
  },
  {
    image: depSlide3,
    title: "Consultancy Projects",
    description:
      "Under the leadership of Prof. (Dr.) Abhishek Saxena, the Faculty of Civil Engineering has completed 9+ consultancy assignments funded by the Ministry of Jal Shakti, World Bank, UNESCO, TERI, WaterAid, receiving over ₹2.25 Crores. Several more assignments are ongoing.",
  },
  {
    image: depSlide4,
    title: "Vibrant Section of Laboratories",
    description:
      "Equipped with best-in-class laboratories enabling intra- and interdisciplinary study, facilitating research experimentation, and supporting consultancy practices.",
  },
  {
    image: depSlide5,
    title: "Rich Academia–Industry Interface",
    description: "A strong ecosystem of experts from diverse core fields combining young talent and experienced professionals with both industry and academic exposure.",
  },
];

export const civilfacultyData: FacultyItem[] = [
  {
    id: 1,
    name: "Dr. Aditi Sharma",
    designation: "Professor & Head of Department",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#001219",
  },
  {
    id: 2,
    name: "Prof. Rohit Malhotra",
    designation: "Associate Professor",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#003049",
  },
  {
    id: 3,
    name: "Dr. Neha Kapoor",
    designation: "Assistant Professor",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#370617",
  },
  {
    id: 4,
    name: "Mr. Arjun Pratap",
    designation: "Senior Lecturer",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#283618",
  },
  {
    id: 5,
    name: "Dr. Suman Verma",
    designation: "Research Coordinator",
    image: "https://via.placeholder.com/200",
    // cardBgColor: "#432818",
  },
];

// industry honour table data
export const civilIndustryHonoursFeeTable: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "B.Tech. in CE (Advanced Practices in Construction) with L&T",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,46,375/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in CE (Advanced Practices in Construction) with L&T</h2>
       <p> Candidate must have passed 10+2 or equivalent system from any recognized Central/ State Board with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Computer Science/Technical Vocational Subject with minimum aggregate marks of 45%.</p>
      `,
    },
  ],
};

export const civilIndustryIntegratedFeeTable: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "B.Tech. in CE + M.B.A.",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,32,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in CE + M.B.A.</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board with 
          Physics and Mathematics as compulsory subjects along with one of the Chemistry/Computer Science/
          Technical Vocational Subject. Candidate must have obtained minimum 45% marks or equivalent grade 
          for GEN/OBC and 40% marks or equivalent grade for SC/ST Category in the above subjects taken together.
        </p>
      `,
    },

    {
      course: "B.Tech. + M.Tech. in Civil Engineering",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,32,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. + M.Tech. in Civil Engineering</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board with 
          Physics and Mathematics as compulsory subjects along with one of the Chemistry/Computer Science/
          Technical Vocational Subject. Candidate must have obtained minimum 45% marks or equivalent grade 
          for GEN/OBC and 40% marks or equivalent grade for SC/ST Category in the above subjects taken together.
        </p>
      `,
    },
  ],
};

export const civilIndustryPostgraduateFeeTable: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "M.Tech. in Environmental Engineering",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 1,07,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>M.Tech. in Environmental Engineering</h2>
        <p>
          Candidates must have passed B.Tech. (any stream) from any recognised University or AICTE recognised 
          Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA 
          for SC/ST Category OR M.Sc. (any stream) with 45% marks or 5.0 CGPA for GEN/OBC and 40% marks or 
          4.5 CGPA for SC/ST Category.
        </p>
      `,
    },

    {
      course: "M.Tech. in Structural Engineering",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 1,07,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>M.Tech. in Structural Engineering</h2>
        <p>
          Candidates must have passed B.Tech. in Civil Engineering from any recognised University or AICTE recognised 
          Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA 
          for SC/ST Category with 45% marks or 5.0 CGPA for GEN/OBC and 40% marks or 4.5 CGPA for SC/ST Category.
        </p>
      `,
    },

    {
      course: "M.Tech. in Environmental Engineering (Part Time)",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 69,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>M.Tech. in Environmental Engineering (Part Time)</h2>
        <p>
          Candidates must have passed B.Tech. (any stream) from any recognised University or AICTE recognised 
          Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA 
          for SC/ST Category OR M.Sc. (any stream) with 45% marks or 5.0 CGPA for GEN/OBC and 40% marks or 
          4.5 CGPA for SC/ST Category.
        </p>
        <p class='mt-3'>
          In addition to the above mentioned basic M.Tech (Regular) eligibility, candidates must have at least 
          2 years Teaching/Industrial/Research/Professional Work Experience for the 3-year M.Tech. (Part Time) program.
        </p>
      `,
    },

    {
      course: "M.Tech. in Structural Engineering (Part Time)",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 69,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>M.Tech. in Structural Engineering (Part Time)</h2>
        <p>
          Candidates must have passed B.Tech. in Civil Engineering from any recognised University or AICTE recognised 
          Institute/College with minimum aggregate marks of 50% or 5.5 CGPA for GEN/OBC and 45% marks or 5.0 CGPA 
          for SC/ST Category with 45% marks or 5.0 CGPA for GEN/OBC and 40% marks or 4.5 CGPA for SC/ST Category.
        </p>
        <p class='mt-3'>
          In addition to the above mentioned basic M.Tech (Regular) eligibility, candidates must have at least 
          2 years Teaching/Industrial/Research/Professional Work Experience for the 3-year M.Tech. (Part Time) program.
        </p>
      `,
    },

    {
      course: "M.Sc. (Environmental Science)",
      duration: "2 Years",
      eligibility: "Click",
      fee: "Rs. 64,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>M.Sc. (Environmental Science)</h2>
        <p>
          Candidate must have passed B.Sc. in Environmental Science / Microbiology / Botany / Zoology / Chemistry / 
          Physics / Geography / Geology / Physiology / Biotechnology / Biochemistry OR B.Sc. (Hons) in Agriculture 
          OR equivalent degree in the appropriate field of Engineering/Technology from any recognised University or 
          AICTE recognised Institute/College with minimum aggregate marks of 45% or 5.0 CGPA for GEN/OBC and 40% marks 
          or 4.5 CGPA for SC/ST Category.
        </p>
      `,
    },
  ],
};

export const civilIndustryUndergraduateFeeTable: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "B.Tech. in Civil Engineering",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,32,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in Civil Engineering</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board 
          with Physics and Mathematics as compulsory subjects along with one of the following: 
          Chemistry, Computer Science, or Technical Vocational Subject.
        </p>
        <p class='mt-3'>
          Candidate must have obtained minimum 45% marks or equivalent grade for GEN/OBC and 
          40% marks or equivalent grade for SC/ST Category in the above subjects taken together.
        </p>
      `,
    },

    {
      course: "B.Tech. in Civil Engineering (Lateral Entry)",
      duration: "3 Years",
      eligibility: "Click",
      fee: "Rs. 1,37,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in Civil Engineering (Lateral Entry)</h2>
        <p>
          Candidate must have passed a 3 or 4-year Diploma in a technical stream from an institution 
          recognized by AICTE or a State Board of Technical Education, OR must have passed 
          B.Sc. degree in Biology, Microbiology, Botany, Zoology, Chemistry, Physics, Mathematics, 
          Physiology, Biotechnology, Biochemistry, or Agriculture.
        </p>
        <p class='mt-3'>
          Candidate must have obtained minimum aggregate marks of 45% or 5.0 CGPA for GEN/OBC and 
          40% marks or 4.5 CGPA for SC/ST Category.
        </p>
      `,
    },

    {
      course: "B.Tech. in CE + M.B.A.",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,32,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in CE + M.B.A.</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board 
          with Physics and Mathematics as compulsory subjects along with one of the following: 
          Chemistry, Computer Science, or Technical Vocational Subject.
        </p>
        <p class='mt-3'>
          Candidate must have obtained minimum 45% marks or equivalent grade for GEN/OBC and 
          40% marks or equivalent grade for SC/ST Category in the above subjects taken together.
        </p>
      `,
    },

    {
      course: "B.Tech. + M.Tech. in Civil Engineering",
      duration: "5 Years",
      eligibility: "Click",
      fee: "Rs. 1,32,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. + M.Tech. in Civil Engineering</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board 
          with Physics and Mathematics as compulsory subjects along with one of the following: 
          Chemistry, Computer Science, or Technical Vocational Subject.
        </p>
        <p class='mt-3'>
          Candidate must have obtained minimum 45% marks or equivalent grade for GEN/OBC and 
          40% marks or equivalent grade for SC/ST Category in the above subjects taken together.
        </p>
      `,
    },

    {
      course: "B.Tech. in CE (Advanced Practices in Construction) with L&T",
      duration: "4 Years",
      eligibility: "Click",
      fee: "Rs. 1,46,375/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>B.Tech. in CE (Advanced Practices in Construction) with L&T</h2>
        <p>
          Candidate must have passed 10+2 or equivalent system from any recognized Central/State Board 
          with Physics and Mathematics as compulsory subjects along with one of the following: 
          Chemistry, Computer Science, or Technical Vocational Subject.
        </p>
        <p class='mt-3'>
          Candidate must have obtained minimum aggregate marks of 45%.
        </p>
      `,
    },
  ],
};

export const instituteProfilesCivil: InstituteProfile[] = [
  {
    id: 1,
    title: "Department Head",
    name: "Prof. (Dr.) Abhishek Saxena",
    position: "Offg. Director, IAP & Dean FoCE, SRMU, Lucknow–Deva Road",
    image: abhishek,

    detailsHeading: "Experience &Achievements:  ",
    useBullets: true,

    details: [
      "**Total Experience**: 23+ years (Industry: 10 years, Academics: 13+ years)",
      "**8 patents and 60 research papers/book chapters published** in renowned journals",
      "**Supervisor of 5 PhD; 7 scholars awarded**",
      "Functional Area Expert for EIA studies (Category 'A' projects – HG & Geo) since 2011",
      "Empanelled Groundwater Expert for Central Ground Water Authority & Ministry of Jal Shakti",
      "**Consultancy Projects: 9 | Total Cost: Rs. 2.0+ Cr** Funding Agencies: World Bank; WaterAid, National Institute of Hydrology (NIH, Roorkee), UNESCO, Ministry of Jal Shakti, GoI, UP Rajya Vidyut Utpadan Nigam Limited, TERI, U.P. Ground Water Department, UPCST, etc.",
      "**EIA Projects [Functional Area Expert – HG & Geo (Hydrogeology & Geology) for category “A” projects]**:(Ministry of Environment, Forest and Climate Change, Govt. of India) Total EIA Projects = 19 (5 Category “A” + 14 Category “B”)",
    ],

    modalContent: `
        <h2 class='Dr. Shobhit Sinha</h2>
        <p><strong>Assistant Professor</strong></p>
        <p>
         Dr. Shobhit Sinha is a distinguished academician and industry expert having specialization in Machine Learning , Argumentation Mining and Java Framework , holding a PhD in Artificial Intelligence, Dr. Sinha combines a wealth of experience across both the Information Technology sector and the educational domain, making him a highly regarded professional in his field. With nine years of experience in the IT industry, Dr. Sinha has contributed to innovative solutions and advancements in technology, focusing primarily on the development and implementation of cutting-edge machine learning algorithms and Java-based frameworks. His expertise has been instrumental in driving impactful projects and fostering technological growth in the organizations he has worked with.Transitioning into academia, Dr. Sinha brings almost a decade of experience to the educational sector.
        </p>
        <p class='mt-3'>
          He has a passion for nurturing talent and guiding young researchers, evident through his role as a supervisor for four PhD scholars, whom he is mentoring in their pursuit of groundbreaking research. His teaching and mentorship have inspired countless students and researchers to excel in the ever-evolving field of AI. Dr. Sinha is an accomplished researcher with numerous publications, including both research papers and book chapters in reputed indexed journals. His work has been recognized and cited by peers
        </p>
          <p class='mt-3'>
         globally, reflecting his substantial contributions to advancing knowledge in Artificial Intelligence, Machine Learning, and Java Framework. Dr. Sinha&#39;s profound knowledge and experience enable him to address complex technological challenges, propose innovative solutions, and lead transformative initiatives in both the industry and academia. modal content
        </p>
      `,
  },
];

export const civilcounterData2 = {
  counterData: [
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
      value: "150",
      suffix: "",
      label: "Field Visits",
    },
    {
      id: 3,
      icon: "",
      value: "25",
      suffix: "",
      label: "Conference & Seminars",
    },
  ],
};
export const civilPlacedStudents: Student[] = [
  { name: "Pankaj Gupta", program: "B.Tech. in Civil Engineering", company: "Shapoorji Pallonji" },
  { name: "Pawan Kumar Singh", program: "B.Tech. in Civil Engineering", company: "Shapoorji Pallonji" },
  { name: "Ujjawal Pratap Singh", program: "B.Tech. in Civil Engineering", company: "Shapoorji Pallonji" },
  { name: "Sarvagya Pandey", program: "B.Tech. in Civil Engineering", company: "Central Water Commission of India" },
  { name: "Sudheer Yadav", program: "B.Tech. in Civil Engineering", company: "Power Grid Corporation of India" },
];
