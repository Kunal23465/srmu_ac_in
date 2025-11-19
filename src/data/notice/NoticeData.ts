import { customeOverViewType } from "../../types/home-data-type";
import Notice1 from "../../assets/pdf/notice/notice-13-examination-schedule-regarding-end-semes-141125054300.pdf";
import Notice2 from "../../assets/pdf/notice/notice-12-procedure-for-make-up-examination-sessio-131125052620.pdf";
import Notice3 from "../../assets/pdf/notice/notice-10-instructions-examination-schedule-of-dip-110925031010.pdf";
import Notice4 from "../../assets/pdf/notice/notice-09-waiting-list-for-admission-in-ph.d.-prog-290825050200.pdf";
import Notice5 from "../../assets/pdf/notice/notice-08-final-result-for-admission-in-ph.d.-prog-290825050053.pdf";
import Notice6 from "../../assets/pdf/notice/notice-06-compiled-list-of-detained-students-after-120825032451.pdf";
import Notice7 from "../../assets/pdf/notice/notice-05-online-interview-schedule-for-ph.d.-aspi-120825093255.pdf";
import Notice8 from "../../assets/pdf/notice/notice-03-result-of-online-research-aptitude-test--070825054029.pdf";
import Notice9 from "../../assets/pdf/notice/notice-04-new-policy-of-evaluation-w.e.f-session-2-070825054732.pdf";
import Notice10 from "../../assets/pdf/notice/notice-02-result-of-special-summer-examination-ses-050825120157.pdf";
import Notice11 from "../../assets/pdf/notice/notice-01-result-of-improvement-examination-sessio-040825110157.pdf";
import Notice12 from "../../assets/pdf/notice/notice-55-research-aptitude-test-for-the-ph.d.-asp-280725060255.pdf";
import Notice13 from "../../assets/pdf/notice/notice-02-result-of-special-summer-examination-ses-040825110253.pdf";
import Notice14 from "../../assets/pdf/notice/notice-01-result-of-improvement-examination-sessio-050825120048.pdf";
import Notice15 from "../../assets/pdf/notice/notice-54-schedule-for-the-pre-ph.d.-course-work-e-280725054529.pdf";
import Notice16 from "../../assets/pdf/notice/notice-52-list-of-detained-students-prior-to-speci-220725094838.pdf";
import Notice17 from "../../assets/pdf/notice/notice-51-result-of-scrutiny-session-2024-25-even--100725010215.pdf";
import Notice18 from "../../assets/pdf/notice/notice-43-result-of-pre-ph.d.-course-work-session--290425025435.pdf";
import Notice19 from "../../assets/pdf/notice/result-of-pre-ph.d.-course-work-session-2024-25-te-030525010218.pdf";
import Notice20 from "../../assets/pdf/notice/notice-45-updated-schedule-of-carryover-and-end-se-050525044151.pdf";
import Notice21 from "../../assets/pdf/notice/notice-48-accessibility-of-annual-and-end-semester-210625042820.pdf";
import Notice22 from "../../assets/pdf/notice/notice-50-instructions-for-students-along-with-sch-020725100038.pdf";
import Notice23 from "../../assets/pdf/notice/notice-28-instructions-examination-schedule-of-dip-020324110335.pdf";
import Notice24 from "../../assets/pdf/notice/notice-26-change-in-continuous-internal-evaluation-020324110521.pdf";
import Notice25 from "../../assets/pdf/notice/notice-24-result-of-carryover-examination-session--020324110850.pdf";
import Notice26 from "../../assets/pdf/notice/notice-19-interview-schedule-for-ph.d.-aspirants-020324111306.pdf";
//  Notice27 - No data Available
import Notice28 from "../../assets/pdf/notice/notice-34-revised-schedule-of-end-semester-examina-220424051901.pdf";
import Notice29 from "../../assets/pdf/notice/notice-36-instructions-for-students-regarding-annu-010524042551.pdf";
import Notice30 from "../../assets/pdf/notice/notice-38-procedure-of-filling-online-form-for-spe-150624033621.pdf";
import Notice31 from "../../assets/pdf/notice/notice-40-accessibility-of-annual-and-end-semester-150624033830.pdf";
import Notice32 from "../../assets/pdf/notice/notice-43-instructions-for-students-along-with-sch-010724122131.pdf";
import Notice33 from "../../assets/pdf/notice/notice-45-result-of-pre-ph.d.-course-work-session--300724024343.pdf";
import Notice34 from "../../assets/pdf/notice/notice-46-result-of-special-summer-examination-ses-020824034458.pdf";
import Notice35 from "../../assets/pdf/notice/notice-03-result-of-scrutiny-session-2023-24-even--130824121320.pdf";
import Notice36 from "../../assets/pdf/notice/notice-04-result-of-revaluation-session-2023-24-ev-310824101754.pdf";
import Notice37 from "../../assets/pdf/notice/congratulation-abhinav-bajpai--090924055857.pdf";
import Notice38 from "../../assets/pdf/notice/notice-07-online-registration-for-carryover-examin-270924035905.pdf";
import Notice39 from "../../assets/pdf/notice/notice-09-creation-of-apaar-ids-through-academic-b-221024035621.pdf";
import Notice40 from "../../assets/pdf/notice/notice-11-interview-schedule-for-ph.d.-aspirants-231024050544.pdf";
import Notice41 from "../../assets/pdf/notice/notice-14-instructions-schedule-regarding-end-seme-211124115455.pdf";
import Notice42 from "../../assets/pdf/notice/notice-18-clashing-schedule-and-list-of-approved-s-291124123542.pdf";
import Notice43 from "../../assets/pdf/notice/notice-19-instructions-schedule-regarding-end-seme-291124123645.pdf";
import Notice44 from "../../assets/pdf/notice/notice-21-instructions-for-students-appearing-in-t-041224033930.pdf";
import Notice45 from "../../assets/pdf/notice/notice-23-new-policy-of-continuous-internal-evalua-200125103424.pdf";
import Notice46 from "../../assets/pdf/notice/notice-25-scrutiny-and-revaluation-session-2024-25-200125103508.pdf";
import Notice47 from "../../assets/pdf/notice/notice-31-result-of-online-research-aptitude-test--190225053240.pdf";
import Notice48 from "../../assets/pdf/notice/notice-33-offline-registration-for-improvement-and-250225111706.pdf";
import Notice49 from "../../assets/pdf/notice/notice-35-multiple-entry-and-exit-under-nep-for-th-060325044655.pdf";
import Notice50 from "../../assets/pdf/notice/notice-37-instructions-schedule-regarding-annual-e-170425124802.pdf";
import Notice51 from "../../assets/pdf/notice/notice-40-addtional-schedule-for-end-semester-carr-220425015116.pdf";
import Notice52 from "../../assets/pdf/notice/instructions-for-students-appearing-in-the-examina-030525010340.pdf";
import Notice53 from "../../assets/pdf/notice/notice-47-procedure-of-filling-online-form-for-spe-110625055151.pdf";
import Notice54 from "../../assets/pdf/notice/notice-49-procedure-of-scrutiny-and-revaluation-se-210625042654.pdf";
import Notice55 from "../../assets/pdf/notice/notice-29-online-registration-for-carryover-examin-020324110008.pdf";
import Notice56 from "../../assets/pdf/notice/notice-30-offline-registration-for-improvement-and-020324110245.pdf";
import Notice57 from "../../assets/pdf/notice/notice-27-result-of-pre-ph.d.-course-work-session--020324110430.pdf";
import Notice58 from "../../assets/pdf/notice/notice-25-result-of-scrutiny-session-2023-24-odd-s-020324110755.pdf";
import Notice59 from "../../assets/pdf/notice/notice-23-final-result-for-admission-in-ph.d.-prog-020324110951.pdf";
import Notice60 from "../../assets/pdf/notice/notice-09-filling-of-online-form-for-end-semester--020324111401.pdf";
import Notice61 from "../../assets/pdf/notice/notice-33-special-window-for-online-registration-r-180424014753.pdf";
import Notice62 from "../../assets/pdf/notice/notice-35-clashing-schedule-and-list-of-approved-s-240424123917.pdf";
import Notice63 from "../../assets/pdf/notice/notice-37-result-of-carryover-examination-session--070624053733.pdf";
import Notice64 from "../../assets/pdf/notice/notice-39-issuance-of-degree-diploma-and-statement-150624033657.pdf";
import Notice65 from "../../assets/pdf/notice/notice-41-timelines-and-procedure-for-scrutiny-re--150624033739.pdf";
import Notice66 from "../../assets/pdf/notice/notice-44-conduction-of-pre-ph.d-course-work-exami-030724012927.pdf";
import Notice67 from "../../assets/pdf/notice/notice-01-re-admission-of-detained-b.pharm-and-d.p-020824034320.pdf";
import Notice68 from "../../assets/pdf/notice/notice-05-instructions-examination-schedule-of-dip-310824101627.pdf";
import Notice69 from "../../assets/pdf/notice/congratulations-to-ncc-cadet-student-1--090924055815.pdf";
import Notice70 from "../../assets/pdf/notice/notice-06-clearance-window-for-distribution-of-deg-110924053452.pdf";
import Notice71 from "../../assets/pdf/notice/notice-08-research-aptitude-test-for-the-ph.d.-asp-071024034319.pdf";
import Notice72 from "../../assets/pdf/notice/notice-10-result-of-online-research-aptitude-test--221024035700.pdf";
import Notice73 from "../../assets/pdf/notice/notice-12-final-result-for-admission-in-ph.d.-prog-041124055730.pdf";
import Notice74 from "../../assets/pdf/notice/notice-13-filling-of-online-form-for-end-semester--071124103553.pdf";
import Notice75 from "../../assets/pdf/notice/notice-17-procedure-to-receive-degree-and-diploma--291124123451.pdf";
import Notice76 from "../../assets/pdf/notice/notice-22-list-of-beneficiaries-under-performance--301224035728.pdf";
import Notice77 from "../../assets/pdf/notice/notice-24-accessibility-of-result-of-end-semester--200125103329.pdf";
import Notice78 from "../../assets/pdf/notice/notice-27-result-of-carryover-examination-session--030225060214.pdf";
import Notice79 from "../../assets/pdf/notice/notice-28-instructions-examination-schedule-of-dip-110225054233.pdf";
import Notice80 from "../../assets/pdf/notice/notice-29-research-aptitude-test-for-the-ph.d.-asp-110225054408.pdf";
import Notice81 from "../../assets/pdf/notice/notice-34-final-result-for-admission-in-ph.d.-prog-270225053747.pdf";
import Notice82 from "../../assets/pdf/notice/notice-38-procedure-for-make-up-examination-sessio-170425060415.pdf";
import Notice83 from "../../assets/pdf/notice/notice-39-process-of-admit-card-downloading-for-an-220425101508.pdf";
import Notice84 from "../../assets/pdf/notice/notice-41-extra-clashing-schedule-and-list-of-appr-250425034731.pdf";
import Notice85 from "../../assets/pdf/notice/notice-42-revised-schedule-of-end-semester-examina-280425024418.pdf";
import Notice86 from "../../assets/pdf/notice/notice-46-result-of-carryover-examination-session--100625060338.pdf";


export const NoticeOverviewData: customeOverViewType = {
  heading: "Notice",
  content:
    "University notices play a pivotal role in disseminating critical information and updates to the student body, faculty, and staff. Whether conveying announcements about academic schedules, examination dates, campus events, or administrative changes, notices serve as a primary communication channel within the university community. These timely and informative messages help maintain transparency, ensuring that everyone is well-informed about essential matters that impact their academic or professional life. Whether distributed physically on bulletin boards or digitally through university portals and emails, notices serve as a vital means of fostering a well-connected and informed campus environment.",
};
export const NoticeTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];

interface NoticePdfDataProp {
  id: string | number;
  title: string;
  date: String;
  doownload: string;
}

export const NoticePdfData: NoticePdfDataProp[] = [
  {
    id: 1,
    title: "Examination Schedule regarding End Semester, Carryover, Equivalence &amp; Improvement Examination (Session: 2025-26 Odd Semester)",
    date: "November 14, 2025",
    doownload: Notice1,
  },
  {
    id: 2,
    title: "Procedure for Make Up Examination (Session: 2025-26 Odd Semester)",
    date: "November 13, 2025",
    doownload: Notice2,
  },
  {
    id: 3,
    title: "Instructions &amp; Examination Schedule of Diploma (ME) for Tata Motors (Session: 2025-26 Odd Sem)",
    date: "September 11, 2025",
    doownload: Notice3,
  },
  {
    id: 4,
    title: "Waiting list for Admission in Ph.D. Program (Session: 2025-26 Summer Term)",
    date: "August 29, 2025",
    doownload: Notice4,
  },
  {
    id: 5,
    title: "Final Result for Admission in Ph.D. Program (Session: 2024-25 Winter Term) along with Checklist",
    date: "August 29, 2025",
    doownload: Notice5,
  },
  {
    id: 6,
    title: "Compiled list of Detained Students after Special Summer Examination Other than Final Year of Session 2024-25",
    date: "August 12, 2025",
    doownload: Notice6,
  },
  {
    id: 7,
    title: "Online Interview Schedule for Ph.D. Aspirants (Session: 2025-26 Summer Term)",
    date: "August 11, 2025",
    doownload: Notice7,
  },
  {
    id: 8,
    title: "Result of Online Research Aptitude Test (Session: 2025-26 Summer Term)",
    date: "August 07, 2025",
    doownload: Notice8,
  },
  {
    id: 9,
    title: "New Policy of Evaluation (w.e.f Session: 2025-26)",
    date: "August 07, 2025",
    doownload: Notice9,
  },
  {
    id: 10,
    title: "Result of Special Summer Examination (Session: 2024-25)",
    date: "August 04, 2025",
    doownload: Notice10,
  },
  {
    id: 11,
    title: "Result of Improvement Examination (Session 2024-25)",
    date: "August 04, 2025",
    doownload: Notice11,
  },
  {
    id: 12,
    title: "Research Aptitude Test for the Ph.D. Aspirants (Session: 2025-26 Summer Term)",
    date: "July 28, 2025",
    doownload: Notice12,
  },
  {
    id: 13,
    title: "Result of Special Summer Examination_Session 2024-25",
    date: "August 04, 2025",
    doownload: Notice13,
  },
  {
    id: 14,
    title: "Result of Improvement Examination (Session: 2024-25)",
    date: "August 04, 2025",
    doownload: Notice14,
  },
  {
    id: 15,
    title: "Schedule for the Pre Ph.D. Course Work Examination (Session: 2024-25 Winter Term)",
    date: "July 28, 20255",
    doownload: Notice15,
  },
  {
    id: 16,
    title: "List of Detained Students (Prior To Special Summer Examination of Session: 2024-25) For Re-admission",
    date: "July 21, 2025",
    doownload: Notice16,
  },
  {
    id: 17,
    title: "Result of Scrutiny (Session: 2024-25 Even Semester)",
    date: "July 08, 2025",
    doownload: Notice17,
  },
  {
    id: 18,
    title: "Result of Pre Ph.D. Course Work (Session: 2024-25 Term 2451)",
    date: "April 29, 2025",
    doownload: Notice18,
  },
  {
    id: 19,
    title: "Result of Pre Ph.D. Course Work Session 2024-25 (Term 2451)",
    date: "May 03, 2025",
    doownload: Notice19,
  },
  {
    id: 20,
    title: "Updated Schedule of Carryover and End Semester Examination (Session: 2024-25 Even Semester)",
    date: "May 03, 2025",
    doownload: Notice20,
  },
  {
    id: 21,
    title: "Accessibility of Annual and End Semester Examination Results (Session: 2024-25 Even Semester)",
    date: "June 16, 2025",
    doownload: Notice21,
  },
  {
    id: 22,
    title: "Instructions for Students along with Schedule for Special Summer and Improvement Examination (Session: 2024-25)",
    date: "July 02, 2025",
    doownload: Notice22,
  },
  {
    id: 23,
    title: "Instructions Examination Schedule of Diploma (ME)-Production (Tata Motors) VI Semester and B.Pharm I Semester (Session: 2023-24)",
    date: "February 07, 2024",
    doownload: Notice23,
  },
  {
    id: 24,
    title: "Change in Continuous Internal Evaluation Policy (Session: 2023-24 Even Semester)",
    date: "January 31, 2024",
    doownload: Notice24,
  },
  {
    id: 25,
    title: "Result of Carryover Examination (Session: 2023-24 Odd Semester)",
    date: "January 20, 2024",
    doownload: Notice25,
  },
  {
    id: 26,
    title: "Interview Schedule for Ph.D. Aspirants",
    date: "January 05, 2024",
    doownload: Notice26,
  },
  {
    id: 27,
    title: "Instructions & Schedule regarding Annual, End Semester, Carryover, Equivalence &amp; Improvement Examination (Session: 2023-24 Even Semester)",
    date: "April 15, 2024",
    doownload: "", //No Data Available 
  },
  {
    id: 28,
    title: "Revised Schedule of End Semester Examination (Session: 2024-25)",
    date: "April 22, 2024",
    doownload: Notice28,
  },
  {
    id: 29,
    title: "Instructions for Students regarding Annual Examination, End Semester, Carryover and Improvement Examination",
    date: "May 01, 2024",
    doownload: Notice29,
  },
  {
    id: 30,
    title: "Procedure of filling Online Form for Special Summer and Improvement Examination (Session: 2023-24)",
    date: "June 15, 2024",
    doownload: Notice30,
  },
  {
    id: 31,
    title: "Accessibility of Annual and End Semester Examination Results (Session: 2023-24 Even Semester)",
    date: "June 15, 2024",
    doownload: Notice31,
  },
  {
    id: 32,
    title: "Instructions for Students along with Schedule for Special Summer and Improvement Examination (Session: 2023-24 Even Semester)",
    date: "July 01, 2024",
    doownload: Notice32,
  },
  {
    id: 33,
    title: "Result of Pre Ph.D. Course Work (Session: 2023-24 Term 2361)",
    date: "July 30, 2024",
    doownload: Notice33,
  },
  {
    id: 34,
    title: "Result of Special Summer Examination (Session: 2023-24)",
    date: "August 02, 2024",
    doownload: Notice34,
  },
  {
    id: 35,
    title: "Result of Scrutiny (Session: 2023-24 Even Semester)",
    date: "August 12, 2024",
    doownload: Notice35,
  },
  {
    id: 36,
    title: "Result of Revaluation (Session: 2023-24 Even Semester)",
    date: "August 17, 2024",
    doownload: Notice36,
  },
  {
    id: 37,
    title: "Congratulation to Abhinav Bajpai",
    date: "September 09, 2024",
    doownload: Notice37,
  },
  {
    id: 38,
    title: "Online Registration for Carryover Examination (Session: 2024-25 Odd Semester)",
    date: "September 23, 2024",
    doownload: Notice38,
  },
  {
    id: 39,
    title: "Creation of APAAR IDs through Academic Bank of Credits (ABC) along with User Manual",
    date: "October 22, 2024",
    doownload: Notice39,
  },
  {
    id: 40,
    title: "Interview Schedule for Ph.D. Aspirants",
    date: "October 23, 2024",
    doownload: Notice40,
  },
  {
    id: 41,
    title: "Instructions &amp; Schedule regarding End Semester, Carryover and Improvement Examination (Session: 2024-25 Odd Semester)",
    date: "November 20, 2024",
    doownload: Notice41,
  },
  {
    id: 42,
    title: "Clashing Schedule and List of Approved Students regarding Carryover Examination (Session: 2024-25 Odd Semester)",
    date: "November 26, 2024",
    doownload: Notice42,
  },
  {
    id: 43,
    title: "Instructions &amp; Schedule regarding End Semester Examination for Industry Integrated Programmes (Session: 2024-25 Odd Semester)",
    date: "November 29, 2024",
    doownload: Notice43,
  },
  {
    id: 44,
    title: "Instructions for Students appearing in the Examination (Session: 2024-25 Odd Semester) along with Scribe Affidavit",
    date: "December 04, 2024",
    doownload: Notice44,
  },
  {
    id: 45,
    title: "New Policy of Continuous Internal Evaluation (Session: 2024-25 Even Semester Onwards)",
    date: "January 13, 2025",
    doownload: Notice45,
  },
  {
    id: 46,
    title: "Scrutiny and Revaluation (Session: 2024-25 Odd Semester)",
    date: "January 16, 2025",
    doownload: Notice46,
  },
  {
    id: 47,
    title: "Result of Online Research Aptitude Test (Session: 2024-25 Winter Term)",
    date: "February 19, 2025",
    doownload: Notice47,
  },
  {
    id: 48,
    title: "Offline Registration for Improvement and Equivalence Examination (Session: 2024-25 Even Semester)",
    date: "February 25, 2025",
    doownload: Notice48,
  },
  {
    id: 49,
    title: "Multiple Entry and Exit under NEP (for the students enrolled in NEP programmes)",
    date: "March 06, 2025",
    doownload: Notice49,
  },
  {
    id: 50,
    title: "Instructions & Schedule regarding Annual Examination, End Semester, Carryover, Equivalence and Improvement Examination (Session: 2024-25 Even Semester)",
    date: "April 17, 2025",
    doownload: Notice50,
  },
  {
    id: 51,
    title: "Additional Schedule for End Semester, Carryover Examination (Session: 2024-25_Even Semester)",
    date: "April 21, 2025",
    doownload: Notice51,
  },
  {
    id: 52,
    title: "Instructions for Students appearing in the Examination (Session 2024-25 Even Semester)",
    date: "May 03, 2025",
    doownload: Notice52,
  },
  {
    id: 53,
    title: "Procedure of filling Online Form for Special Summer Examination and Improvement Examination (Session: 2024-25)",
    date: "June 11, 2025",
    doownload: Notice53,
  },
  {
    id: 54,
    title: "Procedure of Scrutiny and Revaluation (Session: 2024-25 Even Semester)",
    date: "June 17, 2025",
    doownload: Notice54,
  },
  {
    id: 55,
    title: "Online Registration for Carryover Examination (Session: 2023-24 Even Semester)",
    date: "February 21, 2024",
    doownload: Notice55,
  },
  {
    id: 56,
    title: "Offline Registration for Improvement and Equivalence Examination (Session: 2023-24 Even Semester)",
    date: "February 21, 2024",
    doownload: Notice56,
  },
  {
    id: 57,
    title: "Result of Pre Ph.D. Course Work (Session: 2023-24 Term 2351)",
    date: "February 03, 2024",
    doownload: Notice57,
  },
  {
    id: 58,
    title: "Result of Scrutiny (Session: 2023-24 Odd Semester)",
    date: "January 30, 2024",
    doownload: Notice58,
  },
  {
    id: 59,
    title: "Final Result for Admission in Ph.D. Program along with Checklist (Session: 2023-24 Winter Term)",
    date: "January 13, 2024",
    doownload: Notice59,
  },
  {
    id: 60,
    title: "Filling of Online Form for End Semester Examination (Session: 2023-24 Odd Semester)",
    date: "November 10, 2023",
    doownload: Notice60,
  },
  {
    id: 61,
    title: "Special Window for Online Registration regarding Annual &amp; End Semester Examination (Session: 2023-24 Even Semester)",
    date: "April 18, 2024",
    doownload: Notice61,
  },
  {
    id: 62,
    title: "Clashing Schedule &amp; List of Approved Students regarding Carryover Examination (Session: 2023-24 Even Semester)",
    date: "April 23, 2024",
    doownload: Notice62,
  },
  {
    id: 63,
    title: "Result of Carryover Examination (Session: 2023-24 Even Semester)",
    date: "June 07, 2024",
    doownload: Notice63,
  },
  {
    id: 64,
    title: "Issuance of Degree, Diploma and Statement of Grades",
    date: "June 15, 2024",
    doownload: Notice64,
  },
  {
    id: 65,
    title: "Timelines and Procedure for Scrutiny &amp; Re-evaluation (Session: 2023-24 Even Semester)",
    date: "June 15, 2024",
    doownload: Notice65,
  },
  {
    id: 66,
    title: "Conduction of Pre Ph.D Course Work Examination (Session: 2023-24 Winter Term)",
    date: "July 03, 2024",
    doownload: Notice66,
  },
  {
    id: 67,
    title: "Re-admission of Detained B.Pharm and D.Pharm Students of Session (2023-24)",
    date: "August 02, 2024",
    doownload: Notice67,
  },
  {
    id: 68,
    title: "Instructions &amp; Examination Schedule of Diploma (ME)-Production III Semester for Tata Motors (Session: 2023-24)",
    date: "August 24, 2024",
    doownload: Notice68,
  },
  {
    id: 69,
    title: "Congratulations to NCC Cadet Students",
    date: "September 05, 2024",
    doownload: Notice69,
  },
  {
    id: 70,
    title: "Clearance window for distribution of Degree, Diploma and Statement of Grades",
    date: "September 11, 2024",
    doownload: Notice70,
  },
  {
    id: 71,
    title: "Research Aptitude Test for the Ph.D. Aspirants (Session: 2024-25 Summer Term)",
    date: "October 07, 2024",
    doownload: Notice71,
  },
  {
    id: 72,
    title: "Result of Online Research Aptitude Test (Session: 2024-25 Summer Term)",
    date: "October 22, 20245",
    doownload: Notice72,
  },
  {
    id: 73,
    title: "Final Result for Admission in Ph.D. Program (Session: 2024-25 Summer Term)",
    date: "October 29, 2024",
    doownload: Notice73,
  },
  {
    id: 74,
    title: "Filling of Online Form for End Semester Examination (Session: 2024-25 Odd Semester)",
    date: "November 06, 2024",
    doownload: Notice74,
  },
  {
    id: 75,
    title: "Procedure to receive Degree and Diploma in the Second Convocation Ceremony",
    date: "November 26, 2024",
    doownload: Notice75,
  },
  {
    id: 76,
    title: "List of Beneficiaries under Performance Based Scholarship Policy for the Session 2023-24",
    date: "December 16, 2024",
    doownload: Notice76,
  },
  {
    id: 77,
    title: "Accessibility of Result of End Semester Examination (Session: 2024-25 Odd Semester)",
    date: "January 16, 2025",
    doownload: Notice77,
  },
  {
    id: 78,
    title: "Result of Carryover Examination (Session: 2024-25 Odd Semester)",
    date: "February 03, 2025",
    doownload: Notice78,
  },
  {
    id: 79,
    title: "Instructions & Examination Schedule of Diploma (ME) IV Semester for Tata Motors",
    date: "February 11, 2025",
    doownload: Notice79,
  },
  {
    id: 80,
    title: "Research Aptitude Test for the Ph.D. Aspirants (Session: 2024-25 Winter Term)",
    date: "February 11, 2025",
    doownload: Notice80,
  },
  {
    id: 81,
    title: "Final Result for Admission in Ph.D. Programme (Session: 2024-25 Winter Term)",
    date: "February 27, 2025",
    doownload: Notice81,
  },
    {
    id: 82,
    title: "Procedure for Make Up Examination (Session: 2024-25 Even Semester)",
    date: "April 17, 2025",
    doownload: Notice82,
  },
  {
    id: 83,
    title: "Process of Admit Card Downloading for Annual and End Semester Examination (Session: 2024-25 Even Semester)",
    date: "April 21, 2025",
    doownload: Notice83,
  },
  {
    id: 84,
    title: "Extra Clashing Schedule and list of Approved Students regarding Carryover Examination (Session: 2024-25 Even Sem)",
    date: "April 25, 2025",
    doownload: Notice84,
  },
  {
    id: 85,
    title: "Revised Schedule of End Semester Examination (Session: 2024-25 Even Semester)",
    date: "April 28, 2025",
    doownload: Notice85,
  },
  {
    id: 86,
    title: "Result of Carryover Examination (Session: 2024-25 Even Semester)",
    date: "June 10, 2025",
    doownload: Notice86,
  },

];
