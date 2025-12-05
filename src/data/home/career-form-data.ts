import { customeOverViewType } from "../../types/home-data-type";
import { EnquiryField } from "../admission-enquiry/admission-enquiry-data";
import * as Yup from "yup";





export const careerFormOverviewData: customeOverViewType = {
  heading: "Career Form",
  content:
    "Employment opportunities at Shri Ramswaroop Memorial University (SRMU) encompass a diverse range of roles spanning academic, administrative, and support functions. SRMU offers positions for faculty, staff, and professionals seeking to contribute to the university's dynamic learning environment. With a commitment to fostering growth and innovation, SRMU provides avenues for career advancement and professional development, making it an enriching place to work and thrive.",
};

export const careerApplyFormData: EnquiryField[] = [
  {
    id: 1,
    labelname: "Job Category",
    name: "jobCategory",
    placeholder: "--Select Job Category--",
    type: "select",
    options: [
      { id: 1, name: "Teaching", value: "teaching" },
      { id: 2, name: "Non-Teaching", value: "non_teaching" },
      { id: 3, name: "Administration", value: "administration" },
      { id: 4, name: "Technical", value: "technical" },
    ],
  },

  {
    id: 2,
    labelname: "First Name",
    name: "firstName",
    placeholder: "Enter your full name",
    type: "text",
  },

  {
    id: 3,
    labelname: "Last Name",
    name: "lastName",
    placeholder: "Enter Last Name",
    type: "text",
  },

  {
    id: 4,
    labelname: "Email",
    name: "email",
    placeholder: "Enter Email Id",
    type: "email",
  },

  {
    id: 5,
    labelname: "Contact",
    name: "contact",
    placeholder: "Enter Contact No",
    type: "text",
  },

  {
    id: 6,
    labelname: "DOB",
    name: "dob",
    placeholder: "Enter DOB",
    type: "date",
  },

  {
    id: 7,
    labelname: "Experience (In Years)",
    name: "experience",
    placeholder: "--Select Experience--",
    type: "select",
    options: [
      { id: 1, name: "0-1 Years", value: "0-1" },
      { id: 2, name: "1-3 Years", value: "1-3" },
      { id: 3, name: "3-5 Years", value: "3-5" },
      { id: 4, name: "5+ Years", value: "5plus" },
    ],
  },

  {
    id: 8,
    labelname: "Gender",
    name: "gender",
    placeholder: "--Select Gender--",
    type: "select",
    options: [
      { id: 1, name: "Male", value: "male" },
      { id: 2, name: "Female", value: "female" },
      { id: 3, name: "Other", value: "other" },
    ],
  },

  {
    id: 9,
    labelname: "Highest Degree",
    name: "highestDegree",
    placeholder: "--Select Highest Degree--",
    type: "select",
    options: [
      { id: 1, name: "Bachelors", value: "bachelors" },
      { id: 2, name: "Masters", value: "masters" },
      { id: 3, name: "PhD", value: "phd" },
      { id: 4, name: "Other", value: "other" },
    ],
  },

  {
    id: 10,
    labelname: "Specialization",
    name: "specialization",
    placeholder: "--Select Specialization--",
    type: "select",
    options: [
      { id: 1, name: "Computer Science", value: "cse" },
      { id: 2, name: "Mechanical Engineering", value: "me" },
      { id: 3, name: "Civil Engineering", value: "ce" },
      { id: 4, name: "Management", value: "management" },
      { id: 5, name: "Other", value: "other" },
    ],
  },

  {
    id: 11,
    labelname: "Subject",
    name: "subject",
    placeholder: "--Select Subject--",
    type: "select",
    options: [
      { id: 1, name: "Maths", value: "maths" },
      { id: 2, name: "Physics", value: "physics" },
      { id: 3, name: "Chemistry", value: "chemistry" },
      { id: 4, name: "Computer Science", value: "cs" },
      { id: 5, name: "Management", value: "management" },
      { id: 6, name: "Other", value: "other" },
    ],
  },

  {
    id: 12,
    labelname: "Current Organization",
    name: "currentOrganization",
    placeholder: "Enter Organisation Name",
    type: "text",
  },

  {
    id: 13,
    labelname: "Upload your Resume",
    name: "resume",
    placeholder: "",
    type: "file",
  },

  {
    id: 14,
    labelname: "Expected CTC (Annual)",
    name: "expectedCtc",
    placeholder: "Enter CTC",
    type: "text",
  },
];



export const initialCareerFormValues = {
  jobCategory: "",
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  dob: "",
  experience: "",
  gender: "",
  highestDegree: "",
  specialization: "",
  subject: "",
  currentOrganization: "",
  resume: "",
  expectedCtc: "",
};


export const careerFormValidationSchema = Yup.object().shape({
  jobCategory: Yup.string().required("Job Category is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  contact: Yup.string()
    .matches(/^[0-9]{10}$/, "Contact No must be 10 digits")
    .required("Contact is required"),
  dob: Yup.string().required("DOB is required"),
  experience: Yup.string().required("Experience is required"),
  gender: Yup.string().required("Gender is required"),
  highestDegree: Yup.string().required("Highest Degree is required"),
  specialization: Yup.string().required("Specialization is required"),
  subject: Yup.string().required("Subject is required"),
  currentOrganization: Yup.string().required("Organization is required"),
  resume: Yup.string().required("Resume is required"),
  expectedCtc: Yup.string().required("Expected CTC is required"),
});
