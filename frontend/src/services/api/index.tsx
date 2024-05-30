export * from "./AuthService";

import axios, { AxiosInstance } from "axios";
const baseURL: string = import.meta.env.VITE_API_BACKEND_URL as string;

export const api: AxiosInstance = axios.create({
  baseURL: baseURL,
});
