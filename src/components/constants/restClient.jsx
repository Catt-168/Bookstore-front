import axios from "axios";

export const SERVER = "http://localhost:8080";

const restClient = axios.create({
  baseURL: SERVER,
});

restClient.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token")) || "";
    console.log("LOCAL STORAGE TOKEN", token); // Adjust key based on your storage strategy
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default restClient;
