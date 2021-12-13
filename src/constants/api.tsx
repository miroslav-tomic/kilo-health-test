// @ts-ignore
import axios from "axios";

import { API_SERVER, USE_FAKE_API } from "./index";
import FAKE_API from "./fakeApi";

import setApiAuthHeader from "../utils/setApiAuthenticationHeader";

// Configure axios instances
axios.defaults.baseURL = API_SERVER;
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

// Create instance
const axiosInstance = axios.create();

// Axios wrapper to handle error
const axiosWrapper = (apiCall: any) => apiCall.then((res: any) => res.data).catch((err: any) => Promise.reject(err));

// axios interceptors to handle token expiration
axiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (
      error.config
      && error.response
      && error.response.status === 401
    ) {
      localStorage.clear();
      setApiAuthHeader("");
    }

    return Promise.reject(error);
  }
);

// Define API calls
let api: any = {
  isFakeApi: false,

  // Authentication APIs
  auth: {
    login: (credentials: any) => axiosWrapper(axios.post("/auth/login", credentials)),
  },
  question: {
    getList: () => axiosWrapper(axios.get("/questions")),
    post: (data: any) => axiosWrapper(axios.post("/questions", data)),
  },
};

if (!USE_FAKE_API) {
  api = FAKE_API;
}

export { api, axiosInstance };

// eslint-disable-next-line import/no-default-export
export default api;
