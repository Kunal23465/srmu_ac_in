import axios from "axios";

const API = axios.create({
  // For Local
  // baseURL: "http://10.8.20.38:7005",
  // For test

  baseURL: "https://webservices.srmu.ac.in:7005",
});

export default API;
