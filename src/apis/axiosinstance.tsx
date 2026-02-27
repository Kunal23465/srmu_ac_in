import axios from "axios";

export const API = axios.create({
  // For Local
  // baseURL: "http://10.8.20.38:7005",
  // For test
  // baseURL: "https://srmuwebservice.srmu.ac.in:7005",
  ///for prod
  baseURL: "https://webservices.srmu.ac.in:7005",
});

// export default API;
export const studentEnquiryAPI = axios.create({
  // For Local
  // baseURL: "http://10.8.20.38:7005",
  // For test
  // baseURL: "https://unifcrmpre.srmu.ac.in:7074/",
  // for prod
  baseURL: "https://crmservices.srmu.ac.in:7074/",
});
export const submitEnquiryAPI = axios.create({
  // For Local
  // baseURL: "http://10.8.20.38:7005",
  // For test
  // baseURL: "https://unifcrmpre.srmu.ac.in:4040/",

  // for prod
  baseURL: "https://crmservices.srmu.ac.in:4040/",
});



