import { customeOverViewType } from "../../../types/home-data-type";
import p1 from "../../../assets/images/about/recognition-approval/collaborations-1.png"
import p2 from "../../../assets/images/about/recognition-approval/collaborations-2.png"
import p3 from "../../../assets/images/about/recognition-approval/collaborations-3.png"
import p4 from "../../../assets/images/about/recognition-approval/collaborations-4.png"
import p5 from "../../../assets/images/about/recognition-approval/collaborations-5.png"
import p6 from "../../../assets/images/about/recognition-approval/collaborations-6.png"
import p7 from "../../../assets/images/about/recognition-approval/collaborations-7.png"
import p8 from "../../../assets/images/about/recognition-approval/collaborations-8.png"
import p9 from "../../../assets/images/about/recognition-approval/collaborations-9.png"
import p10 from "../../../assets/images/about/recognition-approval/collaborations-10.png"
import p11 from "../../../assets/images/about/recognition-approval/collaborations-11.png"
import p12 from "../../../assets/images/about/recognition-approval/collaborations-12.png"
import p13 from "../../../assets/images/about/recognition-approval/collaborations-13.png"
import p14 from "../../../assets/images/about/recognition-approval/collaborations-14.png"
import p15 from "../../../assets/images/about/recognition-approval/collaborations-15.png"
import p16 from "../../../assets/images/about/recognition-approval/collaborations-16.png"
import p17 from "../../../assets/images/about/recognition-approval/collaborations-17.png"
import p18 from "../../../assets/images/about/recognition-approval/collaborations-18.png"
import p19 from "../../../assets/images/about/recognition-approval/collaborations-19.png"
import p20 from "../../../assets/images/about/recognition-approval/collaborations-20.png"
import p21 from "../../../assets/images/about/recognition-approval/collaborations-21.png"
import p22 from "../../../assets/images/about/recognition-approval/collaborations-22.png"
import p23 from "../../../assets/images/about/recognition-approval/collaborations-23.png"
import p24 from "../../../assets/images/about/recognition-approval/collaborations-24.png"
import bci from "../../../assets/images/about/recognition-approval/BCI-APPROVAL-01112301323183.jpg"
import naac from "../../../assets/images/about/recognition-approval/NAAC-CERTIFICATE-01112301353937.jpg"
import pci from "../../../assets/images/about/recognition-approval/pci-27022404114839-30082501411976.png"
import ugc from "../../../assets/images/about/recognition-approval/UGC-RECOGNITION-01112301301945.jpg"
import universityact from "../../../assets/images/about/recognition-approval/UNIVERSITY-ACT-AND-GOVT-NOTIFICATION-0111230129578.jpg"














export const approvalOverviewData: customeOverViewType = {
  heading: "Approvals & Associations",
  content:
    "SRMU’s commitment to excellence has been recognised by various leadership, industry and academic bodies. SRMU also has a wide pool of collaborators, supporters and network memberships.",
};




export const CollabrationSliderData = [
  {
    slides: [
      { img: p1 },
      { img: p2 },
      { img: p3 },
      { img: p4 },
      { img: p5 },
      { img: p6 },
      { img: p7 },
      { img: p8 },
      { img: p9 },
      { img: p10 },
      { img: p11 },
      { img: p12 },

    ],
  },
  {
    slides: [
      { img: p13 },
      { img: p14 },
      { img: p15 },
      { img: p16 },
      { img: p17 },
      { img: p18 },
      { img: p19 },
      { img: p20 },
      { img: p21 },
      { img: p22 },
      { img: p23 },
      { img: p24 },
    ],
  },

];







export interface Association {
  id: number;
  name: string;
  logo: string;
  pdfLink: string;
}

export const associationsData: Association[] = [
  {
    id: 1,
    name: "LARSEN & TOUBRO LIMITED",
    logo: "/images/associations/lt.png",
    pdfLink: "/pdfs/lt.pdf",
  },
  {
    id: 2,
    name: "TATA MOTORS",
    logo: "/images/associations/tata.png",
    pdfLink: "/pdfs/tata.pdf",
  },
  {
    id: 3,
    name: "JBM",
    logo: "/images/associations/jbm.png",
    pdfLink: "/pdfs/jbm.pdf",
  },
  {
    id: 4,
    name: "IBM",
    logo: "/images/associations/ibm.png",
    pdfLink: "/pdfs/ibm.pdf",
  },
  {
    id: 5,
    name: "UNIVERSITY FOR BUSINESS AND TECHNOLOGY (UBT), KOSOVO",
    logo: "/images/associations/ubt.png",
    pdfLink: "/pdfs/ubt.pdf",
  },
  {
    id: 6,
    name: "COLLEGE OF ARTS AND SCIENCES, TEXAS A&M UNIVERSITY-SAN ANTONIO",
    logo: "/images/associations/texasam.png",
    pdfLink: "/pdfs/texasam.pdf",
  },
];





export interface ApprovalDataType {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  logo: string;
  pdfLink: string;
}

export const approvalData: ApprovalDataType[] = [
  {
    id: 1,
    title: "NAAC ACCREDITED",
    subtitle: "[NATIONAL ASSESSMENT & ACCREDITATION COUNCIL]",
    description:
      "SRMU has been Accredited with a CGPA of 2.73 on a four point scale with “B+” Grade valid for a period of 5 years from January 24, 2023 in the first cycle.",
    logo: "/images/approvals/pci.png",
    pdfLink: "/pdfs/NAAC.pdf",
  },
  {
    id: 2,
    title: "UNIVERSITY ACT AND GOVT. NOTIFICATION",
    subtitle: "[GOVT. OF UTTAR PRADESH]",
    description:
      "Shri Ramswaroop Memorial University has been established by UP State Govt. ACT 1 of 2012",
    logo: "/images/approvals/ncte.png",
    pdfLink: "/pdfs/ncte.pdf",
  },
  {
    id: 3,
    title: "UGC RECOGNITION",
    subtitle: "[UNIVERSITY GRANTS COMMISSION]",
    description:
      "SRMU has been empowered to award degrees through its main campus by University Grants Commission under section 22 of UGC Act.",
    logo: "/images/approvals/aiu.png",
    pdfLink: "/pdfs/aiu.pdf",
  },
  {
    id: 1,
    title: "BCI APPROVAL",
    subtitle: "[BAR COUNCIL OF INDIA]",
    description:
      "Law programs offered by Shri Ramswaroop Memorial University have an approval from the Bar Council of India.",
    logo: pci,
    pdfLink: "/pdfs/pci.pdf",
  },
  {
    id: 2,
    title: "PCI APROVAL",
    subtitle: "[PHARMACY COUNCIL OF INDIA]",
    description:
      "Pharmacy programs offered by Institute of Pharmacy of SRMU have an apporval from the Pharmacy Council of India.",
    logo: "/images/approvals/ncte.png",
    pdfLink: "/pdfs/ncte.pdf",
  },
  {
    id: 3,
    title: "PCI APROVAL",
    subtitle: "[MEMBER OF ASSOCIATION OF INDIA UNIVERSITIES]",
    description:
      "Shri Ramswaroop Memorial University is a member of the Association of Indian Universities.",
    logo: "/images/approvals/aiu.png",
    pdfLink: "/pdfs/aiu.pdf",
  },
];
