import { customeOverViewType } from "../../types/home-data-type";
import { TableRowData } from "../../types/table-data-types";
import new1 from "../../assets/pdf/first-newsletter.pdf"
import new2 from "../../assets/pdf/second-newsletter.pdf";


export const NewsletterOverviewData: customeOverViewType = {
  heading: "Newsletter",
  content:
    "The SRMU Newsletter is a comprehensive source of information that highlights the latest developments, achievements, and events at Shri Ramswaroop Memorial University. It showcases faculty research, student accomplishments, and various campus activities, keeping the SRMU community engaged and informed. Through this platform, readers gain insights into academic innovations, industry collaborations, and upcoming opportunities, fostering a sense of connection among students, faculty, alumni, and partners. The newsletter reflects the dynamic spirit of SRMU and its commitment to excellence in education and holistic growth.",
};




export const newsletterpdfData: TableRowData[] = [
  {
    id: 1,
    title: "First Edition",
    download: { type: "pdf", url: new1 },
  },
  {
    id: 2,
    title: "Second Edition",
    download: { type: "pdf", url: new2 },
  },
];