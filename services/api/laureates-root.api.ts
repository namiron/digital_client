import axios from "axios";

export const baseURL: string = process.env.EXPO_PUBLIC_URL;

export const API = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});
