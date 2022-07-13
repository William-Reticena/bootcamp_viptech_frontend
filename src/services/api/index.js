import axios from "axios";

console.log(process.env.REACT_APP_API);

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 10000, //10 segundos
});

export default api;
