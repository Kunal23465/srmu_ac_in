import { customeOverViewType } from "../../types/home-data-type";

export interface TermsType {
  title?: string;
  listItems?: string[];
  description?: string;
  subDesc?: string;
}


export const TandCOverviewData: customeOverViewType = {
  heading: "Terms & Conditions",
  content:
    "Shri Ramswaroop Memorial University, shall in no event be liable for inability/default under any applicable law(s), including those relating to Contract, Torts, Consumer Protection or any Civil or Criminal Laws, if it fails to provide the Services made available through www.srmu.ac.in university due to any government restrictions or regulations or any unforeseen circumstances not within the reasonable control of Shri Ramswaroop Memorial University including strikes, war, natural calamities, acts of God or other events of force majeure.",
};


export const termsData: TermsType[] = [
  {
    listItems: [
      "You are required to accept the terms and conditions contained in this Disclaimer Policy to avail of any Service through www.srmu.ac.in university. All terms and conditions of the Agreement are incorporated by reference in this Disclaimer Policy and shall be deemed to be a part of this Disclaimer Policy.",
      "Shri Ramswaroop Memorial University reserves every right to update or modify this Terms and Conditions from time to time.",
      "No representation or warranty, direct or implied, is made as to the accuracy, correctness or completeness of any information contained in this Disclaimer Policy or on www.srmu.ac.in university and the same is subject to errors and omissions. All such information must be independently verified by you and you shall defend, indemnify and hold harmless Shri Ramswaroop Memorial University against all claims in this regard.",
      "Unauthorized duplication, copying, visit or otherwise modification of any information on www.srmu.ac.in university may result in civil and criminal prosecution.",
      "You have agreed not to hold Shri Ramswaroop Memorial University liable to any direct or indirect or consequential damage resulting from using www.srmu.ac.in university.",
      "Links to any other sites on www.srmu.ac.in university are not in any manner whatsoever endorsements by Shri Ramswaroop Memorial University of any such sites or otherwise of their respective content.",
      "In no event shall Shri Ramswaroop Memorial University, its affiliates, licensors, employees or agents be liable to You for any damages or losses, including without limitation indirect, consequential, special, incidental or punitive damages resulting from use of or caused by www.srmu.ac.in university, its public posting bulletin boards, its content or any errors or omissions in its content.",
      "You acknowledge that you have read this Policy and agree to all its terms and conditions.",
    ],
  },

  {
    title: "Online Registration Fee Payment System",
    listItems: [
      "The information provided by you is true and correct to the best of your knowledge.",
      "You understand that Shri Ramswaroop Memorial University reserves the right to change/modify the rules and regulations relating to admission to the courses conducted by it from time to time and you agree to abide by the same.",
      "The decision of Shri Ramswaroop Memorial University in regards to granting or rejecting admission to any course conducted by it is final and binding on you.",
      "You authorize Shri Ramswaroop Memorial University to charge your Credit Card / bank account towards the fee as per the authorization given by you in the Online Application Form.",
      "You understand and accept that the jurisdiction for any disputes relating to Shri Ramswaroop Memorial University is Barabanki Court, Barabanki, Uttar Pradesh, India.",
      "Shri Ramswaroop Memorial University will not be responsible for any damage suffered by you from use of the services on this site.",
    ],
  },

  {
    title: "Refund/Cancellation Policy",
    description:
      "Multiple Payments: In case an applicant deposits the Registration Fee multiple times through same or different modes, the refund of the additional amount, less payment gateway charges, to the candidate shall be at the sole discretion of the University.",
    subDesc:
      "Normally, such cases of Refund will be taken up after the end of the Admissions process and shall be retuned through RTGS / NEFT / Cheque. In cases of refund of multiple payments, the applicant will be asked, through email by the University, for the bank details.",
  },

  {
    title: "Non-Refundable Situations",
    listItems: [
      "Absence on the allotted date and time for any of the processes of admission. The allotted date and time shall not be altered under any circumstance.",
      "Non-selection of a candidate for admission. Registration Fee is non-refundable, whether or not you/your ward is selected for admission.",
      "Rejection of a candidate due to submission of false or incorrect information.",
    ],
    description: "All issues should be emailed to admissions@srmu.ac.in or registrar@srmu.ac.in",
  },
];