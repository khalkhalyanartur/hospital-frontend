import axios from "axios";
import { url } from "../constants";
import {
  refreshService
} from "../services/authservice"

const api = axios.create({
  baseURL: url,
  withCredentials: true
})


let flag = false;


api.interceptors.response.use((config) => {

  return config;
}, async (error) => {
  const originalRequest = error.config;

  if (originalRequest.url === "/users/refresh") {
    return error;
  }

  console.log("originalRequest._isRetry=",originalRequest._isRetry);

  if (error.response.status === 401 && originalRequest && !originalRequest._isRetry ) {
    originalRequest._isRetry = true;
    console.log(error.config);
    try {
      const response = await refreshService();
      localStorage.setItem("token", response.data.accessToken);
      return api.request(originalRequest);
    } catch (error) {
      console.log("1", error)
      return
    }
  }
  console.log("2", error)
  throw error;

})


export default api; 
