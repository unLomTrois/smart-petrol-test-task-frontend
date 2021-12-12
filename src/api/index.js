import axios from "axios";

export default class Api {
  axios;
  url = "http://127.0.0.1:8000/api/v1";

  constructor() {
    const options = {
      baseURL: this.url,
    };

    // const interceptor = (config) => {
    //   const token = localStorage.getItem("token");
    //   if (token) {
    //     config.headers.common["Authorization"] = token;
    //   }
    //   return config;
    // };

    this.axios = axios.create(options);
    // this.axios.interceptors.request.use(interceptor, Promise.reject);
  }
}
