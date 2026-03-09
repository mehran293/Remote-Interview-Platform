import axios from "axios";

const isProd = window.location.hostname !== "localhost";

const axiosInstance = axios.create({
  baseURL: isProd 
    ? "https://remote-interview-platform-3f6i.onrender.com/api"
    : "http://localhost:3000/api",
  withCredentials: true,
});

export default axiosInstance;