import axios from "axios";

// const baseUrl = process.NODE_ENV === 'development' ? 'http://localhost:2003' : ''

// const request = axios.create({
  // baseURL: baseUrl + "/api",
// const baseURL = process.NODE_ENV === 'development' ? 'http://localhost:2003' : ''

const request = axios.create({
  // baseURL: baseURL + "/api",
  baseURL: 'http://localhost:2003/api',
  withCredentials: true
})

export default request;