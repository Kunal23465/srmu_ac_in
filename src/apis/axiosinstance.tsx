import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://webservices.srmu.ac.in:7005";
const CRM_BASE_URL =
  import.meta.env.VITE_CRM_BASE_URL || "https://crmservices.srmu.ac.in:7074/";
const ENQUIRY_BASE_URL =
  import.meta.env.VITE_ENQUIRY_BASE_URL || "https://crmservices.srmu.ac.in:4040/";

export const API = axios.create({
  // For Local ........
  // baseURL: "http://10.8.20.38:7005",
  // For test
  // https://srmuwebservice.srmu.ac.in:7005
     baseURL: API_BASE_URL,
  // for prod
  // baseURL: "https://webservices.srmu.ac.in:7005",
});

// export default API;
export const studentEnquiryAPI = axios.create({
  // For Local
  // baseURL: "http://10.8.20.38:7005",
  // For test
  // baseURL: "https://unifcrmpre.srmu.ac.in:7074/",
  // for prod
  baseURL: CRM_BASE_URL,
});
export const submitEnquiryAPI = axios.create({
  // For Local
  // baseURL: "http://10.8.20.38:7005",
  // For test
  // baseURL: "https://unifcrmpre.srmu.ac.in:4040/",
  // for prod
  baseURL: ENQUIRY_BASE_URL,
});


