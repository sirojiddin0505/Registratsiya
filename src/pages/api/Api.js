import axios from "axios";

export const API = axios.create({
    baseURL: 'https://testpsyedu.limsa.uz'
})

API.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = ` Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  API.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    }
  );