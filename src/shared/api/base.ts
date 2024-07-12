import axios from "axios";
import { rejectInterceptors, responseInterceptors } from "./interceptors";

export const API = axios.create();

API.interceptors.request.use((config) => config);
API.interceptors.response.use(responseInterceptors, rejectInterceptors);
