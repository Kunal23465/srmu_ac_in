import axios from "axios";

const API = axios.create({
    baseURL: "http://10.8.20.38:7003",
});

export default API;
