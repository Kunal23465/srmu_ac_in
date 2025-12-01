import { customeOverViewType } from "../../types/home-data-type";
import { EnquiryField } from "../admission-enquiry/admission-enquiry-data";

export const aluminiFeedbackOverviewData: customeOverViewType = {
  heading: "Alumni Feedback",
  content: `The contribution of a University towards Nation building can be judged a-priori with the success stories of its Alumni. The Alumni are the backbone of any academic organization wherein they support in University’s image building and creating positive perception. Their participation in developmental activities is instrumental for any institution. At SRMU Alumni association exists as Shri Ramswaroop Memorial University Alumni Association “SRMUAA” which is a registered and fully functional entity.`,
};

export const initialValuesForAluminiFeedbackForm = {
  alumniName: "",
  dateOfBirth: "",
  yearOfPassing: "",
  department: "",
  mobileNo: "",
  email: "",
  permanentAddress: "",
  presentOrganization: "",
  designation: "",
  presentLocation: "",
  efficiencyCriteria: "",
  feelProud: "",
  developmentActivities: "",
  willingToContribute: "",
  grievancesAsStudent: "",
  grievancesAsAlumni: "",
  laboratoryRating: "",
  libraryRating: "",
  computerFacilityRating: "",
  sufficientTechnicalKnowledge: "",
  educationRelevant: "",
  hodFacultyCooperative: "",
  onCampusOpportunities: "",
  offCampusOpportunities: "",
  careerCounselling: "",
  guestLectureInterest: "",
  joinAlumniAssociation: "",
  participatedAlumniMeet: "",
  receiveRegularUpdates: "",
  appreciatedByCompany: "",
  appreciatedByFaculty: "",
  appreciatedByPeers: "",
  achievementAsStudent: "",
  achievementAsEmployer: "",
  memorableMoment: "",
  suggestionsForDevelopment: "",
};

export const aluminiFeedbackFormData: EnquiryField[] = [
  {
    id: 1,
    labelname: "Alumni Name*",
    name: "alumniName",
    placeholder: "Enter Alumni Name",
    type: "text",
  },
  {
    id: 2,
    labelname: "Date of Birth",
    name: "dateOfBirth",
    placeholder: "Enter Date of Birth",
    type: "text",
  },
  {
    id: 3,
    labelname: "Year of Passing*",
    name: "yearOfPassing",
    placeholder: "Enter Year of Passing",
    type: "text",
  },
  {
    id: 4,
    labelname: "Department*",
    name: "department",
    placeholder: "Enter Your Department",
    type: "text",
  },
  {
    id: 5,
    labelname: "Mobile No.*",
    name: "mobileNo",
    placeholder: "Enter Mobile No.",
    type: "text",
  },
  {
    id: 6,
    labelname: "Email*",
    name: "email",
    placeholder: "Enter Email Id",
    type: "text",
  },
  {
    id: 7,
    labelname: "Permanent Address",
    name: "permanentAddress",
    placeholder: "Enter Permanent Address",
    type: "text",
  },
  {
    id: 8,
    labelname: "Present Organization",
    name: "presentOrganization",
    placeholder: "Enter Present Organization",
    type: "text",
  },
  {
    id: 9,
    labelname: "Designation",
    name: "designation",
    placeholder: "Enter Present Designation",
    type: "text",
  },
  {
    id: 10,
    labelname: "Present Location",
    name: "presentLocation",
    placeholder: "Enter Present Location",
    type: "text",
  },

  {
    id: 11,
    labelname:
      "Kindly select the appropriate option as per the following criteria.",
    name: "efficiencyCriteria",
    type: "radio_group",
    options: [
      { id: 1, value: "A", name: "A - Highly Efficient" },
      { id: 2, value: "B", name: "B - Efficient" },
      { id: 3, value: "C", name: "C - Satisfactory" },
      { id: 4, value: "D", name: "D - Below Satisfaction" },
    ],
  },

  {
    id: 12,
    labelname: "1. Do you feel proud to be associated with S.R.M.U as Alumni?",
    name: "feelProud",
    type: "radio_group",
    options: [
      { id: 1, value: "Yes", name: "Yes" },
      { id: 2, value: "No", name: "No" },
    ],
  },

  {
    id: 13,
    labelname:
      "2. How do you rate development activities organized by the College for your overall development?",
    name: "developmentActivities",
    type: "radio_group",
    options: [
      { id: 1, value: "A", name: "A" },
      { id: 2, value: "B", name: "B" },
      { id: 3, value: "C", name: "C" },
      { id: 4, value: "D", name: "D" },
    ],
  },

  {
    id: 14,
    labelname:
      "3. Are you willing to contribute to the development of the college?",
    name: "willingToContribute",
    type: "radio_group",
    options: [
      { id: 1, value: "Yes", name: "Yes" },
      { id: 2, value: "No", name: "No" },
    ],
  },

  {
    id: 15,
    labelname:
      "4a. Were/Are your grievances properly handled at the college (As a student)?",
    name: "grievancesAsStudent",
    type: "radio_group",
    options: [
      { id: 1, value: "Yes", name: "Yes" },
      { id: 2, value: "No", name: "No" },
    ],
  },

  {
    id: 16,
    labelname:
      "4b. Were/Are your grievances properly handled at the college (As Alumni)?",
    name: "grievancesAsAlumni",
    type: "radio_group",
    options: [
      { id: 1, value: "Yes", name: "Yes" },
      { id: 2, value: "No", name: "No" },
    ],
  },

  {
    id: 17,
    labelname: "Laboratories & Equipments:", // Corresponds to Q5a in the screenshot
    name: "laboratoryRating",
    type: "radio_group",
    options: [
      { id: 1, value: "A", name: "A" },
      { id: 2, value: "B", name: "B" },
      { id: 3, value: "C", name: "C" },
      { id: 4, value: "D", name: "D" },
    ],
  },

  {
    id: 18,
    labelname: "Library:", // Corresponds to Q5b in the screenshot
    name: "libraryRating",
    type: "radio_group",
    options: [
      { id: 1, value: "A", name: "A" },
      { id: 2, value: "B", name: "B" },
      { id: 3, value: "C", name: "C" },
      { id: 4, value: "D", name: "D" },
    ],
  },

  {
    id: 19,
    labelname: "Computer Facility:", // Corresponds to Q5c in the screenshot
    name: "computerFacilityRating",
    type: "radio_group",
    options: [
      { id: 1, value: "A", name: "A" },
      { id: 2, value: "B", name: "B" },
      { id: 3, value: "C", name: "C" },
      { id: 4, value: "D", name: "D" },
    ],
  },

  {
    id: 20,
    labelname:
      "6. Have you obtained sufficient technical knowledge (both in theory and practice) at S.R.M.U?",
    name: "sufficientTechnicalKnowledge",
    type: "radio_group",
    options: [
      { id: 1, value: "Yes", name: "Yes" },
      { id: 2, value: "No", name: "No" },
    ],
  },
  {
    id: 21,
    labelname:
      "7. Is the education imparted at S.R.M.U useful and relevant in your present job?",
    name: "educationRelevant",
    type: "radio_group",
    options: [
      { id: 1, value: "Yes", name: "Yes" },
      { id: 2, value: "No", name: "No" },
    ],
  },
  {
    id: 22,
    labelname: "8. Were the HOD's & Faculties cooperative?",
    name: "hodFacultyCooperative",
    type: "radio_group",
    options: [
      { id: 1, value: "Yes", name: "Yes" },
      { id: 2, value: "No", name: "No" },
    ],
  },


  {
    id: 23,
    labelname:
      "9. Has the Placement Training Cell provided ample On campus placement opportunities?",
    name: "onCampusOpportunities",
    type: "radio_group",
    options: [
      { id: 1, value: "Yes", name: "Yes" },
      { id: 2, value: "No", name: "No" },
    ],
  },
  {
    id: 24,
    labelname:
      "10. Has the Placement Training Cell provided ample Off campus placement opportunities?",
    name: "offCampusOpportunities",
    type: "radio_group",
    options: [
      { id: 1, value: "Yes", name: "Yes" },
      { id: 2, value: "No", name: "No" },
    ],
  },
  {
    id: 25,
    labelname:
      "11. Have you availed Career counselling and guidance for higher studies from Placement Training Cell?",
    name: "careerCounselling",
    type: "radio_group",
    options: [
      { id: 1, value: "Yes", name: "Yes" },
      { id: 2, value: "No", name: "No" },
    ],
  },
  {
    id: 26,
    labelname:
      "12. If you are invited to deliver a Guest Lecture/ Special Talk / Motivational Session for your juniors, will you be interested?",
    name: "guestLectureInterest",
    type: "radio_group",
    options: [
      { id: 1, value: "Yes", name: "Yes" },
      { id: 2, value: "No", name: "No" },
    ],
  },
  {
    id: 27,
    labelname: "13. Do you like to join the college Alumni Association?",
    name: "joinAlumniAssociation",
    type: "radio_group",
    options: [
      { id: 1, value: "Yes", name: "Yes" },
      { id: 2, value: "No", name: "No" },
    ],
  },
  {
    id: 28,
    labelname: "14. Have you participated in any Alumni meet as of now?",
    name: "participatedAlumniMeet",
    type: "radio_group",
    options: [
      { id: 1, value: "Yes", name: "Yes" },
      { id: 2, value: "No", name: "No" },
    ],
  },
  {
    id: 29,
    labelname:
      "15. Do you receive regular updates from the college through Mail/ Calls / SMS?",
    name: "receiveRegularUpdates",
    type: "radio_group",
    options: [
      { id: 1, value: "Yes", name: "Yes" },
      { id: 2, value: "No", name: "No" },
    ],
  },
  {
    id: 30,
    labelname: "16. Have you ever been appreciated by your",
    name: "appreciatedByCompany",
    placeholder: "If Yes, Please Share Details",
    type: "textarea", // Custom type for 3-column group
  },
  {
    id: 31,
    labelname: "Faculty",
    name: "appreciatedByFaculty",
    placeholder: "If Yes, Please Share Details",
    type: "textarea", // Custom type for 3-column group
  },
  {
    id: 32,
    labelname: "Peers",
    name: "appreciatedByPeers",
    placeholder: "If Yes, Please Share Details",
    type: "textarea", // Custom type for 3-column group
  },

  {
    id: 33,
    labelname: "17. Have you made any significant achievement as:",
    name: "achievementAsStudent",
    placeholder: "If Yes, Please Share Details",
    type: "textarea", // Custom type for 2-column group (student)
  },
  {
    id: 34,
    labelname: "As an Employer of the Organization",
    name: "achievementAsEmployer",
    placeholder: "If Yes, Please Share Details",
    type: "textarea", // Custom type for 2-column group (employer)
  },

  {
    id: 35,
    labelname: "18. Most Memorable Moment in the University.",
    name: "memorableMoment",
    placeholder: "",
    type: "textarea",
  },

  {
    id: 36,
    labelname: "19. Suggestions for Development",
    name: "suggestionsForDevelopment",
    placeholder: "",
    type: "textarea",
  },
];

// Yup Validation Schema

import * as Yup from "yup";

export const validationSchemaForAlumniFeedbackForm = Yup.object().shape({
  alumniName: Yup.string()
    .required("Alumni Name is required"),
  dateOfBirth: Yup.string()
    .optional(), 
  yearOfPassing: Yup.string()
    .required("Year of Passing is required"),
  department: Yup.string()
    .required("Department is required"),
  mobileNo: Yup.string()
    .required("Mobile No. is required")
    .matches(/^[0-9]+$/, "Mobile No. must be digits only")
    .min(10, "Mobile No. must be at least 10 digits")
    .max(15, "Mobile No. must be less than 15 digits"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  permanentAddress: Yup.string()
    .optional(), 
  presentOrganization: Yup.string()
    .optional(), 
  designation: Yup.string()
    .optional(), 
  presentLocation: Yup.string()
    .optional(), 
  efficiencyCriteria: Yup.string()
    .required("Efficiency Criteria selection is required"),
  feelProud: Yup.string()
    .required("Response to question 1 is required"),
  developmentActivities: Yup.string()
    .required("Rating for question 2 is required"),
  willingToContribute: Yup.string()
    .required("Response to question 3 is required"),
  grievancesAsStudent: Yup.string()
    .required("Response to question 4a is required"),
  grievancesAsAlumni: Yup.string()
    .required("Response to question 4b is required"),
  laboratoryRating: Yup.string()
    .required("Laboratory rating is required"),
  libraryRating: Yup.string()
    .required("Library rating is required"),
  computerFacilityRating: Yup.string()
    .required("Computer Facility rating is required"),
  sufficientTechnicalKnowledge: Yup.string()
    .required("Response to question 6 is required"),
  educationRelevant: Yup.string()
    .required("Response to question 7 is required"),
  hodFacultyCooperative: Yup.string()
    .required("Response to question 8 is required"),
  onCampusOpportunities: Yup.string()
    .required("Response to question 9 is required"),
  offCampusOpportunities: Yup.string()
    .required("Response to question 10 is required"),
  careerCounselling: Yup.string()
    .required("Response to question 11 is required"),
  guestLectureInterest: Yup.string()
    .required("Response to question 12 is required"),
  joinAlumniAssociation: Yup.string()
    .required("Response to question 13 is required"),
  participatedAlumniMeet: Yup.string()
    .required("Response to question 14 is required"),
  receiveRegularUpdates: Yup.string()
    .required("Response to question 15 is required"),
  appreciatedByCompany: Yup.string()
    .optional(), 
  appreciatedByFaculty: Yup.string()
    .optional(),
  appreciatedByPeers: Yup.string()
    .optional(),
  achievementAsStudent: Yup.string()
    .optional(),
  achievementAsEmployer: Yup.string()
    .optional(),
  memorableMoment: Yup.string()
    .optional(),
  suggestionsForDevelopment: Yup.string()
    .optional(),
});