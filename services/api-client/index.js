/* eslint-disable no-undef */
import axios from "axios";

const apiClient = axios.create({
  //baseURL: process.env.NEXT_PUBLIC_API_BASE_MOCK_URL,
  baseURL: "https://6valley.sixamtech.com/react/api",

  timeout: 20000,
});

apiClient.interceptors.request.use(
  function (config) {
    /*
     TODO: set access token
     config.headers.Authorization = `Bearer ${getAccessToken()}`
     */
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  function (response) {
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  },
  function (error) {
    /*
      TODO: clear token if status code is unauthorize
    */
    return Promise.reject(error);
  }
);

export default apiClient;
