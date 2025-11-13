import { customeOverViewType } from "../../../types/home-data-type";

import undergraduateFee from "../../../assets/pdf/admissons/fee-structure/fee-structure-undergraduate-programs-2025-26--060625104715.pdf";
import postgraduateFee from "../../../assets/pdf/admissons/fee-structure/fee-structure-postgraduate-programs-2025-26--060625104732.pdf";
import integratedFee from "../../../assets/pdf/admissons/fee-structure/fee-structure-integrated-programs-2025-26--060625045751.pdf";
import diplomaFee from "../../../assets/pdf/admissons/fee-structure/fee-structure-diploma-programs-2025-26--240325034611.pdf";





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
];



export const feeStructureCustomTopFooter = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];