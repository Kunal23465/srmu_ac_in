import { customeOverViewType } from "../../types/home-data-type";


import { ReactNode } from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiHeadphones } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";

export interface AdmissionEnquiryItem {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
}


export interface EnquiryField {
  id: number;
  labelname: string;
  name: string;
  placeholder?: string;
  type: "text" | "email" | "select" | "checkbox";
  options?: {
    id: number;
    name: string;
    value: string;
  }[];
}



export const admissionEnquiryOverviewData: customeOverViewType = {
  heading: "Enquiry Now",
  content: `Have questions, feedback, or need assistance? This is the place to reach out to us.
We're here to help!`,
};






export const admissionEnquiryData: AdmissionEnquiryItem[] = [
  {
    id: 1,
    icon: <CiLocationOn size={25} className="text-white" />
    ,
    title: "Location",
    description: "Shri Ramswaroop Memorial University Lucknow\nDeva Road, Barabanki",
  },
  {
    id: 2,
    icon: <PiHeadphones size={25} className="text-white" />
    ,
    title: "Admission Helpline",
    description: "+91-9838904666",
  },
  {
    id: 3,
    icon: <HiOutlineMail size={25} className="text-white" />
    ,
    title: "Admission Email",
    description: "admissions@srmu.ac.in",
  },
];






export const enquiryFormData: EnquiryField[] = [
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
    type: "text",
  },
  {
    id: 5,
    labelname: "Career",
    name: "career",
    placeholder: "Select Career",
    type: "select",
    options: [
      { id: 1, name: "Student", value: "student" },
      { id: 2, name: "Working Professional", value: "working_professional" },
      { id: 3, name: "Parent", value: "parent" },
      { id: 4, name: "Other", value: "other" },
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
      { id: 4, name: "Pharmacy", value: "pharmacy" },
      { id: 5, name: "Law", value: "law" },
      { id: 6, name: "Other", value: "other" },
    ],
  },
  {
    id: 7,
    labelname: "State",
    name: "state",
    placeholder: "Select State",
    type: "select",
    options: [
      { id: 1, name: "Uttar Pradesh", value: "uttar_pradesh" },
      { id: 2, name: "Delhi", value: "delhi" },
      { id: 3, name: "Bihar", value: "bihar" },
      { id: 4, name: "Madhya Pradesh", value: "madhya_pradesh" },
    ],
  },
  {
    id: 8,
    labelname: "City",
    name: "city",
    placeholder: "Select your City",
    type: "select",
    options: [
      { id: 1, name: "Lucknow", value: "lucknow" },
      { id: 2, name: "Barabanki", value: "barabanki" },
      { id: 3, name: "Kanpur", value: "kanpur" },
      { id: 4, name: "Varanasi", value: "varanasi" },
    ],
  },
  {
    id: 9,
    labelname:
      "I authorise SRMU and its representatives to Call, SMS, Email or WhatsApp me about its programmes and offers. This consent overrides any registration for DNC / NDNC.",
    name: "consent",
    type: "checkbox",
  },
];


export const initialValuesForEnquiryForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  career: "",
  program: "",
  state: "",
  city: "",
  consent: false,
};

// Yup Validation Schema
import * as Yup from "yup";

export const validationSchemaForEnquiryForm = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  phone: Yup.string()
    .required("Phone Number is required")
    .matches(/^[0-9]{10}$/, "Phone Number must be 10 digits"),
  career: Yup.string().required("Career is required"),
  program: Yup.string().required("Program is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  consent: Yup.boolean().oneOf([true], "Consent is required"),
});
