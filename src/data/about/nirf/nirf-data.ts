import { customeOverViewType } from "../../../types/home-data-type";
import { TableRowData } from "../../../types/table-data-types";
import overall from "../../../assets/pdf/about/nirf/shri-ramswaroop-memorial-university20250215.pdf"
import enginee from "../../../assets/pdf/about/nirf/shri-ramswaroop-memorial-university20250215-engine-150225053354.pdf"
import law from "../../../assets/pdf/about/nirf/shri-ramswaroop-memorial-university20250110---2.pdf"

export const NIRFOverviewData: customeOverViewType = {
  heading: "NIRF",
  content:
    "The National Institutional Ranking Framework (NIRF) is an initiative by the Indian government to assess and rank higher education institutions in the country. NIRF evaluates institutions based on parameters such as teaching and learning resources, research and professional practices, graduation outcomes, and outreach activities. The rankings play a crucial role in guiding prospective students and fostering healthy competition among educational institutions, encouraging continuous improvement in various aspects of academic performance.",
};


export const thirdCycleData: TableRowData[] = [
  {
    id: 1,
    title: 'Report',
    download: { type: 'pdf', url: overall },
  },
];

export const fourthCycleData: TableRowData[] = [
  {
    id: 1,
    title: 'Report',
    download: { type: 'pdf', url: enginee },
  },
];


export const fifthCycleData: TableRowData[] = [
  {
    id: 1,
    title: 'Report',
    download: { type: 'pdf', url: law },
  },
];