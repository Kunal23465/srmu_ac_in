import axios from "axios";
import axiosRetry from "axios-retry";

// Create an Axios instance
const coreServicesApi = axios.create({
  //prod
  baseURL: "https://crmservices.srmu.ac.in:7074",
  // baseURL: "http://10.8.20.38:7074",
  timeout: 10000,
});

axiosRetry(coreServicesApi, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

export default coreServicesApi;
