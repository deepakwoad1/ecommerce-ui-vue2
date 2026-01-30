import axios from "axios";

export default axios.create({
  baseURL: process.env.VUE_APP_AUTH_API, // your backend
  timeout: 10000,
});
