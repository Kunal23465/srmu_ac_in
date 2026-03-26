import { customeOverViewType } from "../../../types/home-data-type";
import { counterDataType } from "../../home/counterData";

import missionImg from "../../../assets/images/academics/departments/dept-mission-icon1.webp";
import vissionImg from "../../../assets/images/academics/departments/dept-mission-icon2.webp";

import depSlide1 from "../../../assets/images/academics/departments/depSlide1.webp";
import depSlide2 from "../../../assets/images/academics/departments/depSlide2.webp";
import depSlide3 from "../../../assets/images/academics/departments/depSlide3.webp";
import depSlide4 from "../../../assets/images/academics/departments/depSlide4.webp";
import depSlide5 from "../../../assets/images/academics/departments/depSlide5.webp";
import { FacultyItem } from "../../../utils/custom/CustomFacultyListCard";

export interface DepartmentVMType {
  id: number;
  bgColor: string; // hex, rgb, etc.
  img: string; // image URL or path
  heading: string; // "Mission", "Vision", etc.
  description?: string;
  points: string[]; // bullet points
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
    imageUrl: missionImg,
    title: "Mission",
    description: [
      "To provide a rigorous hands-on engineering education integrated in a student-centered environment equipped with life-long learning skills necessary for professional practice.",
      "To prepare our students to be technical, business and global leaders of tomorrow by inculcating team work and communication skills.",
      "To promote research, development and consultancy through constant interaction with industry and research organizations.",
      "To inculcate ethical values and professionalism.",
    ],
  },
  {
    id: 2,
    bgColor: "#FFF2D2",
    imageUrl: vissionImg,
    title: "Vision",
    description: [
      "To produce highly competent Civil Engineers of international standards for catering to local, national and global needs.",
      "To provide consultancy, research and development in various fields of Civil Engineering to meet current and future challenges.",
    ],
  },
];

export const civilFeeData: FeeTableData = {
  columns: ["Fee Type", "1 Year", "2 Year", "3 Year"],

  rows: [
    { col1: "Tuition Fee", col2: 45000, col3: 45000, col4: 45000 },
    { col1: "Examination Fee", col2: 5000, col3: 5000, col4: 5000 },
    { col1: "Other Fees", col2: 7000, col3: 7000, col4: 7000 },
    { col1: "Development Fund", col2: 5000, col3: 5000, col4: 5000 },
    { col1: "Caution Money", col2: 5000, col3: "NA", col4: "NA" },
    { col1: "Total Fee", col2: 67000, col3: 62000, col4: 62000 },
    { col1: "Hostel Fees (1st Yr)", col2: 85000, col3: 80000, col4: 80000 },
    { col1: "Transportation", col2: 33000, col3: 33000, col4: 33000 },
  ],

  notes: ["Alumni Fee: 500", "Degree Fee: 1000", "Both these fees are payable in the final year of the program"],
};

export const civilFeeData1: FeeTableData = {
  columns: ["Fee Type", "1 Year", "2 Year", "3 Year"],

  rows: [
    { col1: "Tuition Fee", col2: 45000, col3: 45000, col4: 45000 },
    { col1: "Examination Fee", col2: 5000, col3: 5000, col4: 5000 },
    { col1: "Other Fees", col2: 7000, col3: 7000, col4: 7000 },
    { col1: "Development Fund", col2: 5000, col3: 5000, col4: 5000 },
    { col1: "Caution Money", col2: 5000, col3: "NA", col4: "NA" },

  ],

  // notes: ["Alumni Fee: 500", "Degree Fee: 1000", "Both these fees are payable in the final year of the program"],
};
export const departmentHighlights: departmentHighlightscardType[] = [
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






export const facultyData: FacultyItem[] = [
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








export const civilIndshonoursEngineeringFeeTable: FeeTableData = {
  columns: ["Courses", "Duration", "Eligibility Criteria", "Course Fees (PA)"],

  rows: [
    {
      course: "M.Tech. in Electric Vehicle Technology",
      duration: "2 Years",
      eligibility: "Click to View",
      fee: "₹1,07,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>Eligibility – M.Tech. in Electric Vehicle Technology</h2>
        <ul class='list-disc pl-5 space-y-2'>
            <li>B.E./B.Tech. in relevant discipline</li>
            <li>Minimum required % as per university norms</li>
            <li>As per SRMU PG admission guidelines</li>
        </ul>
      `,
    },

    {
      course: "M.Tech. in Electric Vehicle Technology (Part Time)",
      duration: "3 Years",
      eligibility: "Click to View",
      fee: "₹69,000/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>Eligibility – M.Tech. EV (Part Time)</h2>
        <ul class='list-disc pl-5 space-y-2'>
            <li>Working professionals with B.E./B.Tech.</li>
            <li>Experience as required by university norms</li>
        </ul>
      `,
    },

    {
      course: "B.Tech. in EE (EV Engineering) with L&T",
      duration: "4 Years",
      eligibility: "Click to View",
      fee: "₹1,46,375/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>Eligibility – B.Tech. EE (EV) with L&T</h2>
        <ul class='list-disc pl-5 space-y-2'>
            <li>10+2 with PCM</li>
            <li>Minimum marks as per SRMU norms</li>
        </ul>
      `,
    },

    {
      course: "B.Tech. in EE (EV Engineering) (Lateral Entry) with L&T",
      duration: "3 Years",
      eligibility: "Click to View",
      fee: "₹1,51,375/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>Eligibility – B.Tech. EE (EV) Lateral</h2>
        <ul class='list-disc pl-5 space-y-2'>
            <li>Diploma in relevant engineering stream</li>
            <li>Or B.Sc. with required subjects</li>
        </ul>
      `,
    },

    {
      course: "B.Tech. in ECE (EV Engineering) with L&T",
      duration: "4 Years",
      eligibility: "Click to View",
      fee: "₹1,46,375/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>Eligibility – B.Tech. ECE (EV) with L&T</h2>
        <ul class='list-disc pl-5 space-y-2'>
            <li>10+2 with PCM</li>
        </ul>
      `,
    },

    {
      course: "B.Tech. in ECE (EV Engineering) (Lateral Entry) with L&T",
      duration: "3 Years",
      eligibility: "Click to View",
      fee: "₹1,51,375/-",
      eligibilityContent: `
        <h2 class='font-bold text-lg mb-3'>Eligibility – B.Tech. ECE (EV) Lateral</h2>
        <ul class='list-disc pl-5 space-y-2'>
            <li>Diploma in relevant engineering stream</li>
            <li>Or B.Sc. with required subjects</li>
        </ul>
      `,
    },
  ],

  notes: ["Course fees are payable annually", "Eligibility depends on SRMU criteria for UG & PG admissions"],
};
