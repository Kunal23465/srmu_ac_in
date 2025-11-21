import { customeOverViewType } from "../../../types/home-data-type";
import instituteoftech from "../../../assets/images/academics/institutes/instoftech-06052402531738.jpg"
import instituteofbio from "../../../assets/images/academics/institutes/Institute-of-Bio-Sciences-Technology-17102303070795.jpg"
import instituteofmang from "../../../assets/images/academics/institutes/corporate-manag-06052401232352.jpg"
import instituteofagri from "../../../assets/images/academics/institutes/agri-06052403361755.jpg"
import instituteoflegal from "../../../assets/images/academics/institutes/legal-07052411041620.jpg"
import instituteofpharmacy from "../../../assets/images/academics/institutes/dpharma--08022401004122.jpg"
import instituteofmedia from "../../../assets/images/academics/institutes/media1-06052403225269.jpg"
import instituteofnatural from "../../../assets/images/academics/institutes/naturalscience-06052403201478.jpg"
import instituteofpharmaceutical from "../../../assets/images/academics/institutes/pharmaceutical-12022411152655.jpg"
import instituteofedu from "../../../assets/images/academics/institutes/economics--08022401082492.jpg"
import instituteofpolytech from "../../../assets/images/academics/institutes/polytechnic11-08022412560314.jpg"
import * as Yup from "yup";


export const AcademicsOverviewData: customeOverViewType = {
  heading: "Academics",
  content:
    "SRMU is committed to leveraging its wide-ranging facilities to world-class standards with a goal to provide the best academia and professional resources and to prepare students for global opportunities. This makes SRMU a repository of academic and extra-curricular excellence with its state-of-the-art infrastructure and amenities. University is a confluence of academic, cultural and intellectual resources. It seeks to achieve the highest levels of distinction in the innovation and transmission of knowledge and understanding. ",
};



export interface Institute {
  id: number;
  title: string;
  description: string;
  departments: number;
  image: string;
}


export const institutes: Institute[] = [
  {
    id: 1,
    title: "Institute of Technology",
    description:
      "The Institute of Technology is committed to provide focused learning in the fields of engineering with an aim of creating human resources with knowledge and skills to contribute successfully to a complex world.",
    departments: 5,
    image: instituteoftech
  },
  {
    id: 2,
    title: "Institute of Biosciences and Technology",
    description:
      "Biotechnology encompasses the applications of understanding of the biological systems to improve human life by addressing challenges and issues facing agricultural sciences, medical sciences, food sciences, etc.",
    departments: 3,
    image: instituteofbio
  },
  {
    id: 3,
    title: "Institute of Management, Commerce and Economics",
    description:
      "The Institute of Management, Commerce and Economics (IMCE) was started in the year 2012. IMCE seeks to be a trailblazer in management education through strong academic-industry collaboration for international alliances.",
    departments: 2,
    image: instituteofmang
  },
  {
    id: 4,
    title: "Institute of Media Studies",
    description:
      "Journalism and Mass Communication study is an encouragement to think about the forces involved in giving it shape. Mass Media industry is one of the fastest growing industries with the mission of social conscience.",
    departments: 1,
    image: instituteofmedia
  },
  {
    id:5,
    title: "Institute of Natural Sciences and Humanities",
    description:
      "The Institute boasts of being the heart and soul of the University as its various disciplines of knowledge is essentially required with all the academic programs that run across the University.",
    departments: 4,
    image: instituteofnatural
  },
  {
    id: 6,
    title: "Institute of Pharmaceutical Sciences",
    description:
      "Due to its integration of chemistry and health sciences, pharmaceutical science is both a unique field and extremely important to human survival.",
    departments: 1,
    image: instituteofpharmaceutical
  },
  {
    id: 7,
    title: "Institute of Agricultural Sciences and Technology",
    description:
      "The Indian Council of Agricultural Sciences has already recognized the B.Sc.(Hons.) Agriculture 4 Years as a professional Degree with consequential benefits to the Students.",
    departments: 1, 
    image: instituteofagri
  },
  {
    id: 8,
    title: "Institute of Legal Studies",
    description:
      "The Institute of Legal Studies is a convergence of academic, cultural and intellectual resources. It aims at achieving the highest levels of distinction in the innovation and transmission of knowledge and understanding.",
    departments: 1,
    image: instituteoflegal
  },
  {
    id: 9,
    title: "Institute of Pharmacy",
    description:
      "Pharmacy is one of the unique professions and also very vital for the sustenance of human lives as it involves the combination of chemical science with health sciences.",
    departments: 1,
    image: instituteofpharmacy
  },
  {
    id: 10,
    title: "Institute of Education and Research",
    description:
      "Institute of Education and Research, Shri Ramswoop Memorial University offers Bachelor's degree course. Institute tries its best to produce teachers embodied with traditions values.",
    departments: 1,
    image: instituteofedu
  },
  {
    id: 11,
    title: "SRMU Polytechnic",
    description:
      "The Institute was established during the academic session 2015-16 and commenced its curriculum for Diploma in Mechanical, Civil, Electrical, Electronics and Communication and Computer Science Engineering.",
    departments: 1,
    image: instituteofpolytech
  }
];





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
  consent: Yup.bool().oneOf([true], "You must accept the terms"),
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
  leadSourceId: 43,

  consent: false,
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
];
