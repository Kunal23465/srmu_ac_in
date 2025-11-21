import { customeOverViewType } from "../../../types/home-data-type";
import { counterDataType } from "../../home/counterData";

import missionImg from "../../../assets/images/academics/departments/dept-mission-icon1.png";
import vissionImg from "../../../assets/images/academics/departments/dept-mission-icon2.png";


export interface DepartmentVMType {
    id: number;
    bgColor: string; // hex, rgb, or any css color
    img: string; // image URL or path
    heading: string; // "Mission" | "Vision" | etc.
    points: string[]; // list of bullet points
}

export interface FeeTableRow {
  [key: string]: string | number; // dynamic cells
}

export interface FeeTableData {
  columns: string[];
  rows: FeeTableRow[];
  notes: string[];
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


