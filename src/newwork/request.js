import axios from "axios";

<<<<<<< HEAD
// const baseUrl = process.NODE_ENV === 'development' ? 'http://localhost:2003' : ''

const request = axios.create({
  // baseURL: baseUrl + "/api",
=======
// const baseURL = process.NODE_ENV === 'development' ? 'http://localhost:2003' : ''

const request = axios.create({
  // baseURL: baseURL + "/api",
>>>>>>> 5e706c1e30532776a56a967c98bb8e76a431ad90
  baseURL: 'http://localhost:2003/api',
  withCredentials: true
})

export default request;