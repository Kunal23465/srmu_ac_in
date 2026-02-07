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
    name: "category",
    placeholder: "--Select Job Category--",
    type: "select",
    options: [
      { id: 1, name: "Staff", value: "Staff" },
      { id: 2, name: "Faculty", value: "Faculty" },

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
    name: "contactNumber",
    placeholder: "Enter Contact No",
    type: "text",
  },

  {
    id: 6,
    labelname: "DOB",
    name: "dateOfBirth",
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
      { id: 1, name: "0", value: "0" },
      { id: 2, name: "1", value: "1" },
      { id: 3, name: "2", value: "2" },
      { id: 4, name: "3", value: "3" },
      { id: 5, name: "4", value: "4" },
      { id: 6, name: "5", value: "5" },
      { id: 7, name: "6", value: "6" },
      { id: 8, name: "7", value: "7" },
      { id: 9, name: "8", value: "8" },
      { id: 10, name: "9", value: "9" },
      { id: 11, name: "10", value: "10" },
      { id: 12, name: ">10", value: ">10" },
    ],
  },

  {
    id: 8,
    labelname: "Gender",
    name: "gender",
    placeholder: "--Select Gender--",
    type: "select",
    options: [
      { id: 1, name: "Male", value: "Male" },
      { id: 2, name: "Female", value: "Female" },
    ],
  },

  {
    id: 9,
    labelname: "Highest Degree",
    name: "highestDegree",
    placeholder: "--Select Highest Degree--",
    type: "select",
    options: [
      { id: 1, name: "Ph.D", value: "phd" },
      { id: 2, name: "NET", value: "net" },
      { id: 3, name: "M.Tech", value: "mtech" },
      { id: 4, name: "M.Phil", value: "mphil" },
      { id: 5, name: "M.A", value: "ma" },
      { id: 6, name: "M.Sc", value: "msc" },
      { id: 7, name: "MBA", value: "mba" },
  
    ],
  },

  {
    id: 10,
    labelname: "Specialization",
    name: "specialization",
    placeholder: "--Select Specialization--",
    type: "select",
    options: [
      { id: 1, name: "Computer Science", value: "computer_science" },
      { id: 2, name: "Computer Application", value: "computer_application" },
      { id: 3, name: "Mechanical", value: "mechanical" },
      { id: 4, name: "Civil", value: "civil" },
      { id: 5, name: "Electrical", value: "electrical" },
      { id: 6, name: "Electronics & Communication", value: "electronics_communication" },
      { id: 7, name: "Biotech", value: "biotech" },
      { id: 8, name: "Law", value: "law" },
      { id: 9, name: "Journalism & Mass Communication", value: "journalism_mass_communication" },
      { id: 10, name: "Physics", value: "physics" },
      { id: 11, name: "Chemistry", value: "chemistry" },
      { id: 12, name: "Mathematics", value: "mathematics" },
      { id: 13, name: "English", value: "english" },
      { id: 14, name: "Political Science", value: "political_science" },
      { id: 15, name: "Economics", value: "economics" },
      { id: 16, name: "Management", value: "management" },
      { id: 17, name: "Sociology", value: "sociology" },
      { id: 18, name: "Social Works", value: "social_works" },
      { id: 19, name: "Architecture", value: "architecture" },
      { id: 20, name: "Others", value: "others" },
    ],
  },
  {
    id: 11,
    labelname: "Subject",
    name: "subject",
    placeholder: "--Select Subject--",
    type: "select",
    options: [
      { id: 1, name: "Engineering", value: "engineering" },
      { id: 2, name: "Management", value: "management" },
      { id: 3, name: "Law", value: "law" },
      { id: 4, name: "Journalism", value: "journalism" },
      { id: 5, name: "Education", value: "education" },
      { id: 6, name: "Diploma", value: "diploma" },
      { id: 7, name: "Biotech", value: "biotech" },
      { id: 8, name: "Natural Science", value: "natural_science" },
      { id: 9, name: "Humanities", value: "humanities" },
      { id: 10, name: "Architecture", value: "architecture" },
      { id: 11, name: "Others", value: "others" },
    ],
  },

  {
    id: 12,
    labelname: "Current Organization",
    name: "organization",
    placeholder: "Enter Organisation Name",
    type: "text",
  },

  {
    id: 13,
    labelname: "Upload your Resume",
    name: "document",
    placeholder: "",
    type: "file",
  },

  {
    id: 14,
    labelname: "Expected CTC (Annual)",
    name: "ctc",
    placeholder: "Enter CTC",
    type: "text",
  },
];



export const initialCareerFormValues = {
  category: "",
  firstName: "",
  lastName: "",
  email: "",
  contactNumber: "",
  dateOfBirth: "",
  experience: "",
  gender: "",
  highestDegree: "",
  specialization: "",
  subject: "",
  organization: "",
  document: "",
  ctc: "",
};


export const careerFormValidationSchema = Yup.object().shape({
  category: Yup.string().required("Job Category is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  contactNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Contact No must be 10 digits")
    .required("Contact is required"),
  // dateOfBirth: Yup.string().required("DOB is required"),
  // experience: Yup.string().required("Experience is required"),
  // gender: Yup.string().required("Gender is required"),
  // highestDegree: Yup.string().required("Highest Degree is required"),
  // specialization: Yup.string().required("Specialization is required"),
  // subject: Yup.string().required("Subject is required"),
  // organization: Yup.string().required("Organization is required"),
  document: Yup.string().required("Resume is required"),
  // ctc: Yup.string().required("Expected CTC is required"),
});
