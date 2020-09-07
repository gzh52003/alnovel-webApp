import axios from "axios";

// const baseUrl = process.NODE_ENV === 'development' ? 'http://localhost:2003' : ''

const request = axios.create({
  // baseURL: baseUrl + "/api",
  baseURL: 'http://localhost:2003/api',
  withCredentials: true
})

export default request;