import { customeOverViewType } from "../../../types/home-data-type";
import { TableRowData } from "../../../types/table-data-types";


import checklistDiplomaStudents from "../../../assets/pdf/admissons/document-checklist/checklist-for-diploma-students-010725050559.pdf"
import checklistUGIntegratedStudents from "../../../assets/pdf/admissons/document-checklist/checklist-for-under-graduate-integrated-students-010725050609.pdf";
import checklistPGStudents from "../../../assets/pdf/admissons/document-checklist/checklist-for-post-graduate-students-010725050619.pdf";
import onlineAntiRaggingProcess from "../../../assets/pdf/admissons/document-checklist/online-anti-ragging-affidavit-submission-process-010725043218.pdf";
import gapAffidavit from "../../../assets/pdf/admissons/document-checklist/gap-certificate-affidavit-010725042947.pdf";
import medicalFitnessCertificate from "../../../assets/pdf/admissons/document-checklist/medical-fitness-certificate-010725043019.pdf";
import onlinePaymentDetailsNewAdmits from "../../../assets/pdf/admissons/document-checklist/online-payment-details-090424114859.pdf";





export const documentChecklistOverviewData: customeOverViewType = {
  heading: "Document Checklist",
  content: `Getting admitted in the desired program is a multistage process comprising of application, registration and verification. The last stage is of prime importance as the provisional admission granted to a candidate gets confirmed post successful completion of this stage. There are certain mandatory documents and affidavits which the candidate needs to submit at this stage. The same are listed here for easy reference and download.`,
};




export const SupportiveDocumentsData: TableRowData[] = [
  {
    id: 1,
    title: "Checklist For Diploma Students",
    download: { type: "pdf", url: checklistDiplomaStudents },
  },
  {
    id: 2,
    title: "Checklist For Under Graduate & Integrated Students",
    download: { type: "pdf", url: checklistUGIntegratedStudents },
  },
  {
    id: 3,
    title: "Checklist For Post Graduate Students",
    download: { type: "pdf", url: checklistPGStudents },
  },
  {
    id: 4,
    title: "Online Anti-Ragging Affidavit Submission Process",
    download: { type: "pdf", url: onlineAntiRaggingProcess },
  },
  {
    id: 5,
    title: "GAP Affidavit",
    download: { type: "pdf", url: gapAffidavit },
  },
  {
    id: 6,
    title: "Medical Fitness Certificate",
    download: { type: "pdf", url: medicalFitnessCertificate },
  },
  {
    id: 7,
    title: "Online Payment Details (Only For New Admits)",
    download: { type: "pdf", url: onlinePaymentDetailsNewAdmits },
  },
];