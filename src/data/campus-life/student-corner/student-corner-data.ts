import { customeOverViewType } from "../../../types/home-data-type";
import { TableRowData } from "../../../types/table-data-types";
import first from "../../../assets/pdf/campus-life/student-corner/1.pdf"
import second from "../../../assets/pdf/campus-life/student-corner/2.pdf"
import third from "../../../assets/pdf/campus-life/student-corner/3.pdf"
import fourth from "../../../assets/pdf/campus-life/student-corner/4.pdf"
import fifth from "../../../assets/pdf/campus-life/student-corner/5.pdf"
import sixth from "../../../assets/pdf/campus-life/student-corner/6.pdf"
import seventh from "../../../assets/pdf/campus-life/student-corner/7.pdf"
import eighth from "../../../assets/pdf/campus-life/student-corner/8.pdf"
import nine from "../../../assets/pdf/campus-life/student-corner/9.pdf"

const videoUrl = `https://drive.google.com/file/d/1DUTw-bks6QpNoHFrJAVxRETysfGvM6f9/view`;

export const StudentCornerOverviewData: customeOverViewType = {
    heading: "Student Corner",
    content: `For information and policies for learning, student welfare, discipline, code of conduct, and grievance redressal, students will find this area to be of great use. This section's primary objective is to assist students in obtaining all pertinent information on their academic lives.
`,
};


export const studentCornerSecondCycle: TableRowData[] = [
  {
    id: 1,
    title: 'Student Support Manual',
    download: { type: 'pdf', url: first },
  },
  {
    id: 2,
    title: 'University Student Senate',
    download: { type: 'pdf', url: second },
  },
   {
    id: 3,
    title: 'Student Welfare Fund Policy',
    download: { type: 'pdf', url: third },
  },
  {
    id: 4,
    title: 'Grievance Redressal Mechanism For Students',
    download: { type: 'pdf', url: fourth },
  },
  {
    id: 5,
    title: 'Disciplinary Policy',
    download: { type: 'pdf', url: fifth },
  },
  {
    id: 6,
    title: 'Code of Ethics & Code of Conduct For Students',
    download: { type: 'pdf', url: sixth },
  },
  {
    id: 7,
    title: 'Slow Learner Policy',
    download: { type: 'pdf', url: seventh },
  },
  {
    id: 8,
    title: 'Advance Learner Policy',
    download: { type: 'pdf', url: eighth },
  },
];


export const studentCornerFirstCycle: TableRowData[] = [
  {
    id: 1,
    title: 'Quick Fee Payment(Online Payment): User Manual',
    download: { type: 'pdf', url: nine },
  },
  {
    id: 2,
    title: 'Online Fee Payment for 2nd Year & Above(Tutorial)',
    download: { type: 'video', url: videoUrl },
  },
  
];