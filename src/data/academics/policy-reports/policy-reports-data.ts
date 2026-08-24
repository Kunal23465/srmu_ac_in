import { customeOverViewType } from "../../../types/home-data-type";
import { TableRowData } from "../../../types/table-data-types";
import examinationpolicy from "../../../assets/pdf/academics/policyandreports/examinations/university-examination-policy-w.e.f.-session-2022--100924114517.pdf";
import examinationpolicy26 from "../../../assets/pdf/academics/policyandreports/examinations/University Examination Policy_Session 2025-26 onwards.pdf";
import annualreport2024 from "../../../assets/pdf/ANNUAL_REPORT_Session_2024-25.pdf";
import annualreport2023 from "../../../assets/pdf/ANNUAL_REPORT_Session_2023-24.pdf";
import annualreport2022 from "../../../assets/pdf/academics/policyandreports/examinations/annual-report-session-2022-23-final-100924113722.pdf";
import annualreport2021 from "../../../assets/pdf/academics/policyandreports/examinations/annual-report-session-2021-22-100924113608.pdf";
import annualreport2020 from "../../../assets/pdf/academics/policyandreports/examinations/Annual-Report_Examination-Cell-Session-2020-21-181223115040.pdf";
import annualreport2019 from "../../../assets/pdf/academics/policyandreports/examinations/annual-report-of-the-examination-cell-session-2019-181223012440.pdf";
import placementpolicy from "../../../assets/pdf/academics/policyandreports/placement/placement-policy-191223122840.pdf";
import earlyjoiningpolicy from "../../../assets/pdf/academics/policyandreports/placement/early-joining-policy-191223122925.pdf";
import industrialvisit from "../../../assets/pdf/academics/policyandreports/placement/industrial-visit-policy-191223123100.pdf";
import sanctionedintake from "../../../assets/pdf/academics/policyandreports/admissions/sanctioned-intake-2024-25-240224054451.pdf";
import eligibilitycriteria from "../../../assets/pdf/academics/policyandreports/admissions/eligibility.pdf";
import feerefund from "../../../assets/pdf/academics/policyandreports/admissions/fee-refund-policy-session-2020-21--240224054542.pdf";
import admissioncumenrollment from "../../../assets/pdf/academics/policyandreports/admissions/admissioncumenrollmentrules2019-20-191223122553-240224054616.pdf";
import ug from "../../../assets/pdf/academics/policyandreports/programfees/fee-structure-ug-2024-25-120324112617.pdf";
import pg from "../../../assets/pdf/academics/policyandreports/programfees/fee-structure-pg-2024-25-120324112648.pdf";
import ig from "../../../assets/pdf/academics/policyandreports/programfees/fee-structure-ig-2024-25-120324112704.pdf";
import diploma from "../../../assets/pdf/academics/policyandreports/programfees/fee-structure-diploma-2024-25-120324112721.pdf";

export const PolicyReportOverviewData: customeOverViewType = {
  heading: "Policies & Reports",
  content:
    "The primary objective of Shri Ramswaroop Memorial University is to foster an atmosphere that values diversity and is open, transparent, and accepting of all individuals. A variety of rules and guidelines are in place at the university to support and encourage this culture. These policies, which ensure high standards of quality in various departments and institutes through enabling and facilitating procedures, aid in the planned and coordinated growth of higher education within the institution.",
};

export const policyfistCycle: TableRowData[] = [
  {
    id: 1,
    title: "Examination Policy (w.e.f. Session: 2025-26)",
    download: { type: "pdf", url: examinationpolicy26 },
  },
  {
    id: 6,
    title: "Examination Policy (w.e.f. Session: 2022-23)",
    download: { type: "pdf", url: examinationpolicy },
  },
  {
    id: 7,
    title: "Annual Report (Session: 2024-25)",
    download: { type: "pdf", url: annualreport2024 },
  },
  {
    id: 8,
    title: "Annual Report (Session: 2023-24)",
    download: { type: "pdf", url: annualreport2023 },
  },
  {
    id: 2,
    title: "Annual Report (Session: 2022-23)",
    download: { type: "pdf", url: annualreport2022 },
  },
  {
    id: 3,
    title: "Annual Report (Session: 2021-22)",
    download: { type: "pdf", url: annualreport2021 },
  },
  {
    id: 4,
    title: "Annual Report (Session: 2020-21)",
    download: { type: "pdf", url: annualreport2020 },
  },
  {
    id: 5,
    title: "Annual Report (Session: 2019-20)",
    download: { type: "pdf", url: annualreport2019 },
  },
];

export const policysecondCycle: TableRowData[] = [
  {
    id: 1,
    title: "Sanctioned Intake (Session: 2024-25)",
    download: { type: "pdf", url: sanctionedintake },
  },
  {
    id: 2,
    title: "Eligibility Criterion (Session: 2024-25)",
    download: { type: "pdf", url: eligibilitycriteria },
  },
  {
    id: 3,
    title: "Fee Refund Policy",
    download: { type: "pdf", url: feerefund },
  },
  {
    id: 4,
    title: "Admission cum Enrollment Rules",
    download: { type: "pdf", url: admissioncumenrollment },
  },
];

export const policythirdCycle: TableRowData[] = [
  {
    id: 1,
    title: "Placement Policy",
    download: { type: "pdf", url: placementpolicy },
  },
  {
    id: 2,
    title: "Early Joining Policy",
    download: { type: "pdf", url: earlyjoiningpolicy },
  },
  {
    id: 3,
    title: "Industrial Visit Policy",
    download: { type: "pdf", url: industrialvisit },
  },
];

export const policyfourthCycle: TableRowData[] = [
  {
    id: 1,
    title: "Undergraduate Programs",
    download: { type: "pdf", url: ug },
  },
  {
    id: 2,
    title: "Postgraduate Programs",
    download: { type: "pdf", url: pg },
  },
  {
    id: 3,
    title: "Integrated Programs",
    download: { type: "pdf", url: ig },
  },
  {
    id: 4,
    title: "Diploma Programs",
    download: { type: "pdf", url: diploma },
  },
];
