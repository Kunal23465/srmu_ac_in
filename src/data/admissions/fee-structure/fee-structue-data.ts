import { customeOverViewType } from "../../../types/home-data-type";

import undergraduateFee from "../../../assets/pdf/admissons/fee-structure/UG Fee Structure_2026-27.pdf";
import postgraduateFee from "../../../assets/pdf/admissons/fee-structure/Revised Fee Structure_PG_2026-27.pdf";
import integratedFee from "../../../assets/pdf/admissons/fee-structure/IG Fee Structure_2026-27.pdf";
import diplomaFee from "../../../assets/pdf/admissons/fee-structure/Diploma Fee Structure_2026-27.pdf";
import hostelFee from "../../../assets/pdf/admissons/fee-structure/Hostel Fee Structure_2026-27.pdf";
import phdFee from "../../../assets/pdf/admissons/fee-structure/Ph.D. Fee Structure_2026-27.pdf";

export const feeStructureOverviewData: customeOverViewType = {
  heading: "Fee Structure",
  content: `The university's fee structure has been designed to ensure that all students have equal chances, including meeting the unique educational requirements of those with limitations. It guarantees all students equal chances regardless of gender, caste, creed, region, race, culture, or religion.`,
};

import { TableRowData } from "../../../types/table-data-types";

export const ProgramFeeData: TableRowData[] = [
  {
    id: 1,
    title: "Undergraduate Programs",
    download: { type: "pdf", url: undergraduateFee },
  },
  {
    id: 2,
    title: "Postgraduate Programs",
    download: { type: "pdf", url: postgraduateFee },
  },
  {
    id: 3,
    title: "Integrated Programs",
    download: { type: "pdf", url: integratedFee },
  },
  {
    id: 4,
    title: "Diploma Programs",
    download: { type: "pdf", url: diplomaFee },
  },
  {
    id: 5,
    title: "Ph.D Programs",
    download: { type: "pdf", url: phdFee },
  },
  {
    id: 6,
    title: "Hostel Fee",
    download: { type: "pdf", url: hostelFee },
  },
];

export const feeStructureCustomTopFooter = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];
