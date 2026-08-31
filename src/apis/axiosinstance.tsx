import axios from "axios";

const getEnvVar = (key: string, fallback: string) => {
  const g = globalThis as Record<string, any>;
  if (g.process && g.process.env && g.process.env[key]) {
    return g.process.env[key];
  }
  try {
    if (typeof import.meta !== "undefined" && (import.meta as any).env && (import.meta as any).env[key]) {
      return (import.meta as any).env[key];
    }
  } catch {
    // ignore
  }
  return fallback;
};

const API_BASE_URL = getEnvVar("VITE_API_BASE_URL", "https://webservices.srmu.ac.in:7005");
const CRM_BASE_URL = getEnvVar("VITE_CRM_BASE_URL", "https://crmservices.srmu.ac.in:7074/");
const ENQUIRY_BASE_URL = getEnvVar("VITE_ENQUIRY_BASE_URL", "https://crmservices.srmu.ac.in:4040/");

export const API = axios.create({
  baseURL: API_BASE_URL,
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


