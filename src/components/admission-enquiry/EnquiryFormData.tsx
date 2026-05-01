import * as Yup from "yup";

export const validationSchemaForEnquiry = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string()
    .required("Contact Number is required")
    .matches(/^[0-9]{10}$/, "Contact Number must be exactly 10 digits"),

  academicCareerId: Yup.string().required("Course selection is required"),
  academicProgramId: Yup.string().required("Program selection is required"),
  coreStateId: Yup.string().required("State is required"),
  coreCityId: Yup.string().required("City is required"),
  consent: Yup.boolean().required("You must accept the Terms of Service to proceed").oneOf([true], "You must accept the Terms of Service to proceed"),
});

export const initialValuesForEnquiry = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  coreStateId: "",
  coreCityId: "",
  academicCareerId: "",
  academicProgramId: "",
  coreSessionId: 4,
  consent: true,
  leadSourceId: 19,
  // leadStageId: 1,
  // leadStages: [
  //   {
  //     leadStageId: 1,
  //   },
  // ],
};

export const EnquiryFormData = [
  {
    id: 1,
    labelname: "First Name",
    name: "firstName",
    placeholder: "Enter your First Name",
    type: "text",
  },
  {
    id: 2,
    labelname: "Last Name",
    name: "lastName",
    placeholder: "Enter your Last Name",
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
    labelname: "Phone Number",
    name: "phone",
    placeholder: "Enter Contact Number",
    type: "tel",
  },
  {
    id: 5,
    labelname: "Career",
    name: "academicCareerId",
    placeholder: "Select Career",
    type: "select",
  },
  {
    id: 6,
    labelname: "Program",
    name: "academicProgramId",
    placeholder: "Select Program ",
    type: "select", // Change to select
    options: [
      { value: "", label: "Select Program" },
      { value: "program1", label: "Program 1" },
      { value: "program2", label: "Program 2" },
    ],
  },
  {
    id: 7,
    labelname: "State",
    name: "coreStateId",
    placeholder: "Select State",
    type: "select", // Change to select
    options: [
      { value: "", label: "Select State" },
      { value: "state1", label: "State 1" },
      { value: "state2", label: "State 2" },
    ],
  },
  {
    id: 8,
    labelname: "City",
    name: "coreCityId",
    placeholder: "Select your City",
    type: "select", // Change to select
    options: [
      { value: "", label: "Select City" },
      { value: "city1", label: "City 1" },
      { value: "city2", label: "City 2" },
    ],
  },
  {
    id: 9,
    name: "consent",
    type: "checkbox", 
  },
];
