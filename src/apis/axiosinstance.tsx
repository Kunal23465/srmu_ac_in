import axios from "axios";

const API = axios.create({
  // baseURL: "http://10.8.20.38:7003",
  baseURL: "http://10.8.20.71:7005",
});

export default API;
