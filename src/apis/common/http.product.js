import axios from "axios";

console.log(process.env.VUE_APP_PRODUCT_API, "product");

const http = axios.create({
  baseURL: process.env.VUE_APP_PRODUCT_API,
  timeout: 10000,
});

export default http;
