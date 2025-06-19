import axios from "axios";
import type { LoginAdmin } from "types/auth";

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (data: LoginAdmin) => {
  return await axios.post(`${API_URL}/auth/login`, data); 
};
