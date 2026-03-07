import { customeOverViewType } from "../../../types/home-data-type";
import { TableRowData } from "../../../types/table-data-types";
import sanctionedIntake2024_25 from "../../../assets/pdf/admissons/admission-policy/sanctioned-intake-2024-25-230224031406.pdf";
import eligibilityCriterion2026_27 from "../../../assets/pdf/admissons/admission-policy/Eligibility Criteria for Admissions 2026-27.pdf";
import feeRefundPolicy from "../../../assets/pdf/admissons/admission-policy/Fee Refund Policy Session 2026-27.pdf";
import admissionEnrollmentRules from "../../../assets/pdf/admissons/admission-policy/admissioncumenrollmentrules2019-20-191223122553-260224123143.pdf";
import adb from "../../../assets/pdf/admissons/admission-policy/booklet-2024-ok-compressed-1--290224051456.pdf";

export const admissionPoliciesOverviewData: customeOverViewType = {
  heading: "Admission Policies",
  content: `The university's admission policies outline the guidelines and practices for student applications and admittance into its various programs via an open and responsible admissions process. The institution uses the academic freedom granted to it by the institution Grants Commission to properly, clearly, concisely, and consistently accept students to different programs.`,
};

export const admissionBrochureData: TableRowData[] = [
  {
    id: 1,
    title: "Admission Brochure",
    download: { type: "pdf", url: adb },
  },
];

export const PoliciesAndDownloadsData: TableRowData[] = [
  {
    id: 1,
    title: "Sanctioned Intake (Session: 2024-25)",
    download: { type: "pdf", url: sanctionedIntake2024_25 },
  },
  {
    id: 2,
    title: "Eligibility Criterion (Session: 2026-27)",
    download: { type: "pdf", url: eligibilityCriterion2026_27 },
  },
  {
    id: 3,
    title: "Fee Refund Policy",
    download: { type: "pdf", url: feeRefundPolicy },
  },
  {
    id: 4,
    title: "Admission cum Enrollment Rules",
    download: { type: "pdf", url: admissionEnrollmentRules },
  },
];
