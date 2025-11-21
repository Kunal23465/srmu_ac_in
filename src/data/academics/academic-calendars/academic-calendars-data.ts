import { customeOverViewType } from "../../../types/home-data-type";
import { TableRowData } from "../../../types/table-data-types";
import first from "../../../assets/pdf/academics/academic-calendar/1.pdf"
import second from "../../../assets/pdf/academics/academic-calendar/2.pdf"
import third from "../../../assets/pdf/academics/academic-calendar/3.pdf"
import fourth from "../../../assets/pdf/academics/academic-calendar/4.pdf"

export const AcademicCalendasOverviewData: customeOverViewType = {
  heading: "Academic Calendars",
  content:
    "University follows an academic calendar for the purpose of defining the academic operations and keeping them streamlined for students, faculty and staff. A list of holidays is also prepared well in advance for the ease and convenience of all stakeholders so that they can plan on both professional and personal fronts.",
};

export const academicCalendarFirstCycle: TableRowData[] = [
  {
    id: 1,
    title: 'For First Year',
    download: { type: 'pdf', url:first },
  },
  {
    id: 2,
    title: 'For Second Year Onwards',
    download: { type: 'pdf', url: second },
  },
];


export const academicCalendarSecondCycle: TableRowData[] = [
  {
    id: 1,
    title: 'Holidays For Year 2023',
    download: { type: 'pdf', url: third },
  },
  {
    id: 2,
    title: 'Holidays For Year 2024',
    download: { type: 'pdf', url: fourth },
  },
];