import * as Yup from "yup";


import { customeOverViewType } from "../../types/home-data-type";
import { AlumniRegistrationField } from "../../types/placement-type";

export const studentTestimonialOverviewData: customeOverViewType = {
  heading: "All Testimonial",
  content:
    "Student testimonials serve as invaluable reflections of the educational experience within an institution, offering insights into the impact of academic programs, faculty engagement, and the overall campus environment. These testimonials, often shared voluntarily by students, provide a firsthand account of their journey, highlighting the strengths of the educational institution, personal growth, and the effectiveness of learning methodologies. Student testimonials not only offer prospective students a glimpse into the vibrant and supportive community but also act as a testament to the institution's commitment to delivering a transformative and enriching academic experience.",
};
export const StudentTestimonialTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];

export const alumniRegistrationTopFooterData = [
  {
    content: `Want to learn more about SRMU?`,
    btnText: "Request Registration",
  },
];

export const alumniRegistrationOverviewData: customeOverViewType = {
  heading: "Alumni Registration",
  content:
    "",
};


export const alumniRegistrationFormData: AlumniRegistrationField[] = [
  {
    id: 1,
    labelname: "Name",
    name: "name",
    placeholder: "Enter your full name",
    type: "text",
  },
  {
    id: 2,
    labelname: "Contact No.",
    name: "contactNo",
    placeholder: "Enter Contact No",
    type: "text",
  },
  {
    id: 3,
    labelname: "Email",
    name: "email",
    placeholder: "Enter Email Id",
    type: "email",
  },
  {
    id: 4,
    labelname: "Passing Year",
    name: "passingYear",
    placeholder: "Enter your Passing Year",
    type: "text",
  },
  {
    id: 5,
    labelname: "Course Level",
    name: "courseLevel",
    placeholder: "Select Course Level",
    type: "select",
    options: [
      { id: 1, name: "Undergraduate", value: "undergraduate" },
      { id: 2, name: "Postgraduate", value: "postgraduate" },
      { id: 3, name: "Diploma", value: "diploma" },
      { id: 4, name: "Certificate", value: "certificate" },
    ],
  },
  {
    id: 6,
    labelname: "Program",
    name: "program",
    placeholder: "Select Program",
    type: "select",
    options: [
      { id: 1, name: "B.Tech", value: "btech" },
      { id: 2, name: "MBA", value: "mba" },
      { id: 3, name: "MCA", value: "mca" },
      { id: 4, name: "PhD", value: "phd" },
      { id: 5, name: "Other", value: "other" },
    ],
  },
  {
    id: 7,
    labelname: "Current Employer",
    name: "currentEmployer",
    placeholder: "Enter your Current Employer",
    type: "text",
  },
];

// Initial Values
export const initialValuesForAlumniRegistration = {
  name: "",
  contactNo: "",
  email: "",
  passingYear: "",
  courseLevel: "",
  program: "",
  currentEmployer: "",
  consent: false,
};

// Yup Validation Schema
export const validationSchemaForAlumniRegistration = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  contactNo: Yup.string()
    .required("Contact No. is required")
    .matches(/^[0-9]{10}$/, "Contact No. must be 10 digits"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  passingYear: Yup.string()
    .required("Passing Year is required")
    .matches(/^[0-9]{4}$/, "Enter a valid 4-digit year"),
  courseLevel: Yup.string().required("Course Level is required"),
  program: Yup.string().required("Program is required"),
  currentEmployer: Yup.string().required("Current Employer is required"),
  consent: Yup.boolean().oneOf([true], "Consent is required"),
});
