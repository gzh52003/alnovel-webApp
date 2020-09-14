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

function jsonp(url) {

  return new Promise((resolve) => {

    // 这里的 "jsonCallBack" ，和调用的 jsonp 的 url 中的 callback 值相对应（见粗体字）

    window.jsonCallBack = (result) => {

      resolve(result)

    }

    const JSONP = document.createElement('script');

    JSONP.type = 'text/javascript';
   
    JSONP.src = url;

    document.getElementsByTagName('head')[0].appendChild(JSONP);

    setTimeout(() => {

      document.getElementsByTagName('head')[0].removeChild(JSONP)

    }, 500)

  })

}
request.jsonp = jsonp;

export default request;