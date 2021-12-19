import axios from "axios";

export default class Api {
  axios;
  url = "http://127.0.0.1:8000/api/v1";

  constructor() {
    const options = {
      baseURL: this.url,
    };

    const interceptor = (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.common["Authorization"] = "Bearer " + token;
      }
      return config;
    };

    const errorHandler = (e) => {
      if (e.response && e.response.status === 401) {
        window.location.pathname = "/auth";
        localStorage.removeItem("token");
        return "Unauthorized";
      } else if (e.response && e.response.status === 403) {
        window.location.pathname = "/";
        return "Not Permitted";
      } else {
        return Promise.reject(e);
      }
    };

    this.axios = axios.create(options);
    this.axios.interceptors.request.use(interceptor, Promise.reject);
    this.axios.interceptors.response.use((res) => res, errorHandler);
  }
}
