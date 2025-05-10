import axios from "axios";
import { getToken } from "../auth/auth.helper";

const baseURL = process.env.EXPO_PUBLIC_SERVER_URL;
console.log(baseURL);

export const API = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

API.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
