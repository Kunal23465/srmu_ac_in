import { customeOverViewType } from "../../../types/home-data-type";
import { TableRowData } from "../../../types/table-data-types";
import naacssr from "../../../assets/pdf/about/naac/naac-ssr.pdf"
import metricsdeviation from "../../../assets/pdf/about/naac/metrics-deviation.pdf"
import extended from "../../../assets/pdf/about/naac/extended-profile-deviation.pdf"


export const NAACOverviewData: customeOverViewType = {
  heading: "NAAC",
  content:
    "NAAC accreditation is a prestigious acknowledgment that evaluates and assesses the quality and performance of higher education institutions in India. The accreditation process involves a comprehensive review, considering factors such as infrastructure, teaching-learning processes, research output, and overall institutional performance. Institutions achieving NAAC accreditation demonstrate a commitment to academic excellence, quality assurance, and continuous improvement, enhancing their credibility and standing in the realm of higher education.",
};



export const firstCycleData: TableRowData[] = [
  {
    id: 1,
    title: 'SSR',
    download: { type: 'pdf', url: naacssr },
  },
  {
    id: 2,
    title: 'Extended Profile Deviation',
    download: { type: 'pdf', url: extended },
  },
  {
    id: 3,
    title: 'Metric Deviation',
    download: { type: 'pdf', url: metricsdeviation },
  },
  {
    id: 4,
    title: 'PTV Video',
    download: { type: 'video', url: 'https://drive.google.com/file/d/1X96LVTl1DXdY5eOdf7-SfIEOlh_ka3Gy/view' },
  },
];


export const secondCycleData: TableRowData[] = [
  {
    id: 1,
    title: 'AQAR (Session: 2022-23)',
    download: { type: 'pdf', url: '#' },
  },
];